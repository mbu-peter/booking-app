import { useFormContext } from "react-hook-form";
import { hotelTypes } from "../../config/hotel-options-config";
import { HotelFormData } from "./ManageHotelForm";

const TypeSection = () => {
  const {
    register,
    watch,
    formState: { errors },
  } = useFormContext<HotelFormData>();
  const typewatch = watch("type");
  return (
    <div>
      <h2 className="text-2xl font bold mb-3">Category</h2>
      <div className="grid grid-cols-5 gap-2 items-center ">
        {hotelTypes.map((type) => (
          <label
            className={
              typewatch === type
                ? "cursor-pointer bg-green-400 text-sm rounded-full px-2 py-1 font-semibold"
                : "cursor-pointer bg-gray-200 text-sm rounded-full px-2 py-1 font-semibold"
            }
          >
            <input
              type="radio"
              value={type}
              {...register("type", {
                required: "This field is required",
              })}
              className="hidden"
            />
            <span>{type}</span>
          </label>
        ))}
      </div>
      {errors.type && (
        <span className="text-red-600 text-sm">{errors.type.message}</span>
      )}
    </div>
  );
};
export default TypeSection;
