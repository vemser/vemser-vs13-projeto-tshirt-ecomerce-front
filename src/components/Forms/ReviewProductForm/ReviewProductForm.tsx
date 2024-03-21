import { yupResolver } from "@hookform/resolvers/yup";
import { Rating } from "@mui/material";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { reviewSchema } from "../../../schemas/ReviewSchema";
import { IReviewProduct } from "../../../types/Review";

function ReviewProductForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    control,
  } = useForm<IReviewProduct>({
    resolver: yupResolver(reviewSchema),
    defaultValues: {
      name: "",
      email: "",
      review: "",
      rating: 0,
    },
  });

  const handleSubmitReview: SubmitHandler<IReviewProduct> = (
    data: IReviewProduct
  ) => {
    console.log(data);
    reset();
  };

  return (
    <form className="w-full py-5" onSubmit={handleSubmit(handleSubmitReview)}>
      <Controller
        name="rating"
        control={control}
        render={({ field }) => (
          <div className="flex flex-col">
            <label htmlFor="rating" className="text-primary">
              Sua avaliação
            </label>
            <Rating
              id="rating"
              {...field}
              sx={{
                ".MuiRating-iconFilled": {
                  color: "#121212",
                },
                "&.MuiRating-iconHover": {
                  color: "#000",
                },
              }}
            />
            <small>{errors.rating?.message}</small>
          </div>
        )}
      />

      <div className="my-4">
        <label htmlFor="name" className="text-primary">
          Nome
        </label>
        <input
          type="text"
          id="name"
          className="w-full border border-primary p-3 rounded-lg"
          {...register("name")}
        />
        <small className="text-red-500">{errors.name?.message}</small>
      </div>
      <div className="my-4">
        <label htmlFor="name" className="text-primary">
          Email
        </label>
        <input
          type="text"
          id="name"
          className="w-full border border-primary p-3 rounded-lg"
          {...register("email")}
        />
        <small className="text-red-500">{errors.email?.message}</small>
      </div>
      <div className="my-4">
        <label htmlFor="name" className="text-primary">
          Sua avaliação
        </label>
        <textarea
          id="name"
          className="w-full border border-primary p-3 rounded-lg"
          {...register("review")}
        />
        <small className="text-red-500">{errors.review?.message}</small>
      </div>
      <div className="max-w-60">
        <button className="w-full px-3 py-4 bg-primary text-white rounded-lg">
          Enviar
        </button>
      </div>
    </form>
  );
}

export default ReviewProductForm;
