import { useFormContext } from "react-hook-form";
import { HotelFormData } from "./ManageHotelForm";

const ImageeSection = () => {
  const {
    register,
    formState: { errors },
  } = useFormContext<HotelFormData>();
  return (
    <div>
      <h1 className="text-3xl font-bold">Images</h1>
      <div className="border rounded p-4 flex flex-col gap-4">
        <input
          type="file"
          multiple
          accept="image/*"
          className="w-full font text-gray-600 font-normal"
          {...register("imageFiles", {
            validate: (imageFiles) => {
              const totalLenth = imageFiles.length;
              if (totalLenth === 0) {
                return "atleast one image required";
              }
              if (totalLenth > 6) {
                return "Too many Imgages. Must not exceed 6";
              }
              return true;
            },
          })}
        />
        upload
      </div>
      {errors.imageFiles && (
        <span className="text-red-500 text-sm">
          {errors.imageFiles.message}
        </span>
      )}
    </div>
  );
};
export default ImageeSection;
