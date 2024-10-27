import { useState } from "react";
import { Product } from "../../types/Types";
import { Link, useNavigate } from "react-router-dom";
import {
  PencilSquareIcon,
  TrashIcon,
  PlusCircleIcon,
} from "@heroicons/react/16/solid";
import { Helmet } from "react-helmet-async";
import { EyeIcon, ListBulletIcon } from "@heroicons/react/24/outline";
import axios from "axios";
import Swal from "sweetalert2";
import { useGetProductsQuery } from "../../redux/api/api";

const Management = () => {
  const [filterCategory, setFilterCategory] = useState("");
  const { data: products, isLoading } = useGetProductsQuery();
  const navigate = useNavigate();
  const filteredItems = products?.data?.filter(
    (item: Product) => item.category === filterCategory
  );
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const handleDropdownToggle = (productId: string) => {
    setActiveDropdown(activeDropdown === productId ? null : productId);
  };
  const handleDelete = async (i: string) => {
    Swal.fire({
      title: `Are yo sure?`,
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#ff0000",
      cancelButtonColor: "#D1A054",
      confirmButtonText: "Delete",
    }).then(async (result) => {
      if (result.isConfirmed) {
        const res = await axios.delete(
          `https://campershop.vercel.app/api/products/${i}`
        );
        console.log(res?.data);

        if (res?.data.success) {
          navigate("/");
          Swal.fire({
            icon: "success",
            titleText: "You have Deleted an item successfully!",
            timer: 800,
            showConfirmButton: false,
          });
        }
      }
    });
  };

  return (
    <div className="">
      <Helmet title="Management | CampQuest Supplies" />
      <div className="card bg-white p-20 text-center text-slate-500">
        <div className="flex justify-between uppercase">
          {filterCategory ? (
            <h1 className="text-2xl font-bold">
              Total {filterCategory} Items: {filteredItems?.length}{" "}
            </h1>
          ) : (
            <h1 className="text-2xl font-bold">
              Total Products: {products?.data?.length}{" "}
            </h1>
          )}
          <br />
          <select
            className="bg-slate-200 text-center px-3 py-2 rounded-xl mb-5"
            value={filterCategory}
            onChange={(e) => setFilterCategory(e.target.value)}
          >
            <option className="font-serif" value="">
              All
            </option>
            <option value="Camping Gear">Camping Gear</option>
            <option value="Camping Furniture">Camping Furniture</option>
            <option value="Coolers">Coolers</option>
            <option value="Cooking Equipment">Cooking Equipment</option>
            <option value="Electronics">Electronics</option>
            <option value="Sleeping Gear">Sleeping Gear</option>
            <option value="Safety">Safety</option>
            <option value="Backpacks">Backpacks</option>
          </select>
        </div>
        <div className="divider w-[800px]"></div>
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead>
              <tr className="bg-slate-300 text-slate-700 rounded-xl">
                <th className="text-center">#</th>
                <th className="text-start">Product</th>
                <th className="text-start">Name</th>
                <th className="text-start">Category</th>
                <th className="text-center">Actions</th>
                <th className=" inline-flex gap-2" onClick={() => navigate(`/add`)}>Add
                  <PlusCircleIcon className="w-6 text-slate-500"/> 
                  </th>
              </tr>
            </thead>
            {isLoading ? (
              <tbody className="loading loading-spinner loading-md text-red-500 flex justify-center md:mx-[600px] mt-10"></tbody>
            ) : (
              <tbody>
                {filterCategory
                  ? filteredItems?.map((item: Product, index: number) => (
                      <tr key={item._id}>
                        <td className="text-center">{index + 1}</td>
                        <td className="text-center" onClick={() => navigate(`/product/${item._id}`)}>
                          <img
                            style={{ borderRadius: "0 200px 200px 300px" }}
                            className="w-[100px]"
                            src={item.image}
                            alt=""
                          />
                        </td>
                        <td className="text-start" onClick={() => navigate(`/product/${item._id}`)}>
                          <p>{item.name}</p>
                        </td>
                        <td className="text-start" onClick={() => navigate(`/product/${item._id}`)}>
                          <p>{item.category}</p>
                        </td>
                        <td className="text-center relative">
                          <button
                            onClick={() => handleDropdownToggle(item._id)}
                          >
                            <ListBulletIcon className=" text-slate-400 w-7" />
                          </button>
                          {activeDropdown === item._id && (
                            <div className="absolute top-0 right-0 mt-6 w-32 bg-white border rounded shadow-md">
                              <Link
                                to={`/add/${item._id}`}
                                className="flex items-center px-4 py-2 hover:bg-gray-200"
                              >
                                <PlusCircleIcon className="w-5 mr-2" /> Add
                              </Link>
                              <Link
                                to={`/update/${item._id}`}
                                className="flex items-center px-4 py-2 hover:bg-gray-200"
                              >
                                <PencilSquareIcon className="w-5 mr-2" /> Update
                              </Link>
                              <button
                                className="flex items-center px-4 py-2 w-full text-left hover:bg-gray-200"
                                onClick={() => handleDelete(item._id)}
                              >
                                <TrashIcon className="w-5 mr-2" /> Delete
                              </button>
                            </div>
                          )}
                        </td>
                      </tr>
                    ))
                  : products?.data?.map((item: Product, index: number) => (
                      <tr key={item._id}>
                        <td className="text-center">{index + 1}</td>
                        <td className="text-center" onClick={() => navigate(`/product/${item._id}`)}>
                          <img
                            style={{ borderRadius: "0 200px 200px 300px" }}
                            className="w-[100px]"
                            src={item.image}
                            alt=""
                          />
                        </td>
                        <td className="text-start" onClick={() => navigate(`/product/${item._id}`)}>
                          <p>{item.name}</p>
                        </td>
                        <td className="text-start" onClick={() => navigate(`/product/${item._id}`)}>
                          <p>{item.category}</p>
                        </td>
                        <td className="text-center relative">
                          <button
                            onClick={() => handleDropdownToggle(item._id)}
                          >
                            <ListBulletIcon className=" text-slate-400 w-7" />
                          </button>
                          {activeDropdown === item._id && (
                            <div className="absolute top-0 right-0 mt-6 w-32 bg-white border rounded shadow-md">
                              <div
                                onClick={() => navigate(`/product/${item._id}`)}
                                className="flex items-center px-4 py-2 hover:bg-gray-200"
                              >
                                <EyeIcon className="w-5 mr-2" /> View
                              </div>
                              <Link
                                to={`/update/${item._id}`}
                                className="flex items-center px-4 py-2 hover:bg-gray-200"
                              >
                                <PencilSquareIcon className="w-5 mr-2" /> Update
                              </Link>
                              <button
                                className="flex items-center px-4 py-2 w-full text-left hover:bg-gray-200"
                                onClick={() => handleDelete(item?._id)}
                              >
                                <TrashIcon className="w-5 mr-2" /> Delete
                              </button>
                            </div>
                          )}
                        </td>
                      </tr>
                    ))}
              </tbody>
            )}
          </table>
        </div>
      </div>
    </div>
  );
};

export default Management;
