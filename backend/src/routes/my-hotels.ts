import express, { Request, Response } from "express";
const router = express.Router();
import multer from "multer";
import cloudinary from "cloudinary";
import { HotelType } from "../shared/types";
import verifyToken from "../middleware/auth";
import { body } from "express-validator";
import Hotel from "../models/hotel";

const storage = multer.memoryStorage();
const upload = multer({
  storage: storage,
  limits: {
    fileSize: 5 * 1024 * 1024, //5mb
  },
});
//api/hotels

router.post(
  "/",
  verifyToken,
  [
    body("name").notEmpty().withMessage("Name required"),
    body("city").notEmpty().withMessage("city name required"),
    body("country").notEmpty().withMessage("This field is required"),
    body("description").notEmpty().withMessage("This field is required"),
    body("type").notEmpty().withMessage("Hotel type required"),
    body("pricePerNight")
      .notEmpty()
      .isNumeric()
      .withMessage("Price field is required"),
    body("facilities")
      .notEmpty()
      .isArray()
      .withMessage("Please Add facilities"),
  ],
  upload.array("imageFiles", 6),
  async (req: Request, res: Response) => {
    try {
      const imageFiles = req.files as Express.Multer.File[];
      const newHotel: HotelType = req.body;

      // upload images to cloudinary
      const uploadPromises = imageFiles.map(async (image) => {
        const b64 = Buffer.from(image.buffer).toString("base64");
        let dataURI = "data:" + image.mimetype + ";base64," + b64;
        const res = await cloudinary.v2.uploader.upload(dataURI);
        return res.url;
      });

      // if upload successful add the urls to the new hotel
      const imageURLS = await Promise.all(uploadPromises);
      newHotel.imageUrls = imageURLS;
      newHotel.lastUpdated = new Date();
      newHotel.userId = req.userId;
      //save new hotel to database
      const hotel = new Hotel(newHotel);
      await hotel.save();
      //return status (201)
      res.status(201).send(hotel);
    } catch (error) {
      console.log("error creating hotel", error);
      res.status(500).json({ message: "Something went wrong" });
    }
  }
);

router.get("/", verifyToken, async (req: Request, res: Response) => {
  try {
    const hotels = Hotel.find({ userId: req.userId });
    res.json(hotels);
  } catch (error) {
    res.status(500).json({ message: "error while fetching hotels" });
  }
});
export default router;
