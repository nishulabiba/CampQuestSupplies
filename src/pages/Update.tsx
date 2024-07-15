import { Helmet } from "react-helmet-async";
import { Controller, useForm, SubmitHandler } from "react-hook-form";
import axios from "axios";
import Swal from "sweetalert2";
import { Product } from "../types/Types";
import Title from "../utils/Title";
import { useNavigate, useParams } from "react-router-dom";
import useAproduct from "../hooks/useAproduct";
import { useEffect } from "react";

const Update = () => {
  const { id } = useParams();
  const { product } = useAproduct(id!);
  
  const {
   
    reset,
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<Product>({
    defaultValues: { inventory: { quantity: 1, inStock: true } },
  }); 
  const navigate = useNavigate();
  useEffect(() => {
    if (product) {
      reset(product);
    }
  }, [product, reset]);

  const categories = [
    { value: "Camping Gear", label: "Camping Gear" },
    { value: "Camping Furniture", label: "Camping Furniture" },
    { value: "Coolers", label: "Coolers" },
    { value: "Cooking Equipment", label: "Cooking Equipment" },
    { value: "Electronics", label: "Electronics" },
    { value: "Sleeping Gear", label: "Sleeping Gear" },
    { value: "Safety", label: "Safety" },
    { value: "Backpacks", label: "Backpacks" },
  ];

  const onSubmit: SubmitHandler<Product> = (product) => {
    console.log(product);
    axios.put(`https://campershop.vercel.app/api/products/update/${id}`, product)
      .then((response) => {
        console.log("Data updated successfully:", response?.data);
        if (response?.data.success) {
            reset();
          Swal.fire({
            icon: "success",
            titleText: "You have updated an item successfully!",
            timer: 800,
            showConfirmButton: false,
          });
          navigate("/manage")
        }
      })
      .catch((error) => {
        console.error("Error posting data:", error);
      });
  };

  return (
    <>
      <Helmet title="Add Product | CampQuest Supplies" />
      <div className="w-full text-slate-500">
        <Title heading={"Update an Item"} subHeading={"What's New?"}></Title>
        <div className="bg-white card w-4/5 mx-auto">
          <form onSubmit={handleSubmit(onSubmit)} className="card-body p-10">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Product Name</span>
              </label>
              <input
                defaultValue={product?.name}
                type="text"
                placeholder="Name"
                {...register("name", { required: true })}
                className="input input-bordered bg-slate-200"
              />
              {errors.name && (
                <small className="text-red-500">This field is required</small>
              )}
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Image</span>
              </label>
              <input
                type="text"
                defaultValue={product?.image}
                {...register("image", { required: true })}
                className="input input-bordered rounded-xl mt-4 bg-slate-200"
              />
              {errors.image && (
                <small className="text-red-500">An image is required</small>
              )}
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Description</span>
              </label>
              <input
                type="text"
                placeholder="Description"
                defaultValue={product?.description}
                {...register("description", { required: true })}
                className="input input-bordered input-lg pt-5 pb-20 bg-slate-200"
              />
              {errors.description && (
                <small className="text-red-500">This field is required</small>
              )}
            </div>
            <div className="flex justify-between items-center">
              <div className="form-control w-[350px]">
                <label className="label">
                  <span className="label-text">Category</span>
                </label>
                <Controller
                  name="category"
                  control={control}
                  defaultValue={product?.category} 
                  render={({ field }) => (
                    <select
                      className="rounded-lg input bg-slate-200"
                      {...field}
                    >
                      {categories.map((option) => (
                        <option key={option.value} value={option.value}>
                          {option.label}
                        </option>
                      ))}
                    </select>
                  )}
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Price</span>
                </label>
                <input
                  type="number"
                  defaultValue={product?.price}
                  step={0.01}
                  placeholder="Price"
                  {...register("price", { required: true, min: 0 })}
                  className="input input-bordered w-[350px] bg-slate-200"
                />
                {errors.price && (
                  <small className="text-red-500">
                    The price must be a number
                  </small>
                )}
              </div>
            </div>
            <div className="form-control mt-4">
              <label className="label">
                <span className="label-text">Quantity</span>
              </label>
              <input
                type="number"
                placeholder="Quantity"
                defaultValue={product?.inventory.quantity}
                {...register("inventory.quantity", { required: true, min: 1 })}
                className="input input-bordered bg-slate-200"
              />
            </div>
            <div className="form-control mt-4">
              <label className="label">
                <span className="label-text">In Stock</span>
              </label>
              <div className="flex items-center">
                <label className="mr-4">
                  <Controller
                    name="inventory.inStock"
                    control={control}
                    defaultValue={product?.inventory.inStock}
                    render={({ field }) => (
                      <>
                        <label>
                          <input
                            type="radio"
                            value="true"
                            checked={field.value === true}
                            onChange={() => field.onChange(true)}
                            className="radio radio-primary"
                          />
                          <span className="ml-2">Yes</span>
                        </label>
                        <label>
                          <input
                            type="radio"
                            value="false"
                            checked={field.value === false}
                            onChange={() => field.onChange(false)}
                            className="radio radio-primary"
                          />
                          <span className="ml-2">No</span>
                        </label>
                      </>
                    )}
                  />
                </label>
              </div>
            </div>

            <div className="form-control mt-6 w-44 mx-auto">
              <input
                type="submit"
                value="Update Product"
                className="btn btn-primary"
              />
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Update;
