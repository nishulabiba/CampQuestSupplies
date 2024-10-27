import { Helmet } from "react-helmet-async";
import Title from "../../utils/Title";
import { Controller, useForm, SubmitHandler } from "react-hook-form";
import { Product } from "../../types/Types";
import axios from "axios";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

const AddProduct = () => {
  const navigate = useNavigate();
  const {
    reset,
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<Product>({
    defaultValues: { inventory: { quantity: 1, inStock: true } },
  }); 
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
  const onSubmit: SubmitHandler<Product> = async (data) => {
    const product: Product = {
      _id: "",
      name: data?.name,
      image: data?.image,
      description: data?.description,
      price: Number(data?.price),
      category: data?.category,
      inventory: {
        quantity: Number(data?.inventory.quantity),
        inStock: data?.inventory.inStock,
      },
    };
    console.log(product);
    await axios
      .post("https://campershop.vercel.app/api/products/create-product", product)
      .then((response) => {
        console.log("Data posted successfully:", response?.data);
        if (response?.data.success) {
          Swal.fire({
            icon: "success",
            titleText: "You have added an item successfully!",
            timer: 600,
            showConfirmButton: false,
          });
          reset();
          navigate("/");
        }
      })
      .catch((error) => {
        console.error("Error posting data:", error);
      });
  };

  return (
    <>
      <Helmet title="Add Product | CampQuest Supplies" />
      <div className="w-full text-slate-400">
        <Title heading={"Add an Item"} subHeading={"What's New?"}></Title>
        <div className="bg-white card w-4/5 mx-auto">
          <form onSubmit={handleSubmit(onSubmit)} className="card-body p-10">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Product Name</span>
              </label>
              <input
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
                  defaultValue={categories[0].value} 
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
                {...register("inventory.quantity", { required: true, min: 1 })}
                className="input input-bordered bg-slate-200"
              />
              {errors.inventory?.quantity && (
                <small className="text-red-500">
                  Quantity must be at least 1
                </small>
              )}
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
                    defaultValue={true}
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
                value="Add Product"
                className="btn btn-primary"
              />
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default AddProduct;
