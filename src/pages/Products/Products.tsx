import { useState, useMemo } from "react";
import useProducts from "../../hooks/useProducts";
import CardComponent from "../../Shared/CardComponent";
import { Product } from "../../types/Types";
import BestProduct from "../Home/BestSelling/BestProduct";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";

const Products = () => {
  const { products, isLoading } = useProducts();
  const [searchTerm, setSearchTerm] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("");
  const [priceRange, setPriceRange] = useState([0, 1000]);
  const [sortOrder, setSortOrder] = useState<"asc" | "desc">("asc");
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const navigate = useNavigate();

  const filteredProducts = useMemo(() => {
    let filtered = products;

    if (searchTerm) {
      filtered = filtered.filter(
        (product: Product) =>
          product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          product.description.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    if (categoryFilter) {
      filtered = filtered.filter(
        (product: Product) => product.category === categoryFilter
      );
    }

    filtered = filtered?.filter(
      (product: Product) =>
        product.price >= priceRange[0] && product.price <= priceRange[1]
    );

    if (sortOrder === "asc") {
      filtered = filtered?.sort((a: Product, b: Product) => a.price - b.price);
    } else {
      filtered = filtered?.sort((a: Product, b: Product) => b.price - a.price);
    }

    return filtered;
  }, [products, searchTerm, categoryFilter, priceRange, sortOrder]);

  const handleClearFilters = () => {
    setSearchTerm("");
    setCategoryFilter("");
    setPriceRange([0, 1000]);
    setSortOrder("asc");
  };

  return (
    <div className="container mx-auto">
      <Helmet title="Products | CampQuest Spplies" />
      <div className="flex flex-col md:flex-row gap-2 justify-between items-center py-4 text-slate-500">
        <input
          type="text"
          placeholder="Search products..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="border p-2 rounded input-sm input-bordered bg-slate-100"
        />
        <select
          value={categoryFilter}
          onChange={(e) => setCategoryFilter(e.target.value)}
          className="border p-2 rounded bg-slate-100"
        >
          <option value="">All Categories</option>
          <option value="category1">Category 1</option>
          <option value="category2">Category 2</option>
          <option value="category3">Category 3</option>
        </select>
        <div className="flex flex-col md:flex-row items-center text-slate-500 gap-2">
          <label className="mr-2">Price Range:</label>
          <input
            type="number"
            value={priceRange[0]}
            onChange={(e) =>
              setPriceRange([Number(e.target.value), priceRange[1]])
            }
            className="border p-2 rounded input-sm input-bordered bg-slate-100"
          />
          <input
            type="number"
            value={priceRange[1]}
            onChange={(e) =>
              setPriceRange([priceRange[0], Number(e.target.value)])
            }
            className="border p-2 rounded input-sm input-bordered bg-slate-100"
          />
        </div>
        <select
          value={sortOrder}
          onChange={(e) => setSortOrder(e.target.value as "asc" | "desc")}
          className="border p-2 rounded bg-slate-100"
        >
          <option value="asc">Price: Low to High</option>
          <option value="desc">Price: High to Low</option>
        </select>
        <select
          value={viewMode}
          onChange={(e) => setViewMode(e.target.value as "grid" | "list")}
          className="border p-2 rounded bg-slate-100"
        >
          <option value="grid">Grid</option>
          <option value="list">List</option>
        </select>
        <button onClick={handleClearFilters} className="border p-2 rounded">
          Clear
        </button>
      </div>

      {isLoading ? (
        <div className="grid grid-cols-3 my-5 justify-items-center mx-auto">
          <div className="flex w-52 flex-col gap-4">
            <div className="skeleton h-32 w-full"></div>
            <div className="skeleton h-4 w-28"></div>
            <div className="skeleton h-4 w-full"></div>
            <div className="skeleton h-4 w-full"></div>
          </div>
          <div className="flex w-52 flex-col gap-4">
            <div className="skeleton h-32 w-full"></div>
            <div className="skeleton h-4 w-28"></div>
            <div className="skeleton h-4 w-full"></div>
            <div className="skeleton h-4 w-full"></div>
          </div>
          <div className="flex w-52 flex-col gap-4">
            <div className="skeleton h-32 w-full"></div>
            <div className="skeleton h-4 w-28"></div>
            <div className="skeleton h-4 w-full"></div>
            <div className="skeleton h-4 w-full"></div>
          </div>
          <div className="flex w-52 flex-col gap-4">
            <div className="skeleton h-32 w-full"></div>
            <div className="skeleton h-4 w-28"></div>
            <div className="skeleton h-4 w-full"></div>
            <div className="skeleton h-4 w-full"></div>
          </div>
          <div className="flex w-52 flex-col gap-4">
            <div className="skeleton h-32 w-full"></div>
            <div className="skeleton h-4 w-28"></div>
            <div className="skeleton h-4 w-full"></div>
            <div className="skeleton h-4 w-full"></div>
          </div>
          <div className="flex w-52 flex-col gap-4">
            <div className="skeleton h-32 w-full"></div>
            <div className="skeleton h-4 w-28"></div>
            <div className="skeleton h-4 w-full"></div>
            <div className="skeleton h-4 w-full"></div>
          </div>
        </div>
      ) : viewMode === "grid" ? (
        <div className="grid grid-cols-3 justify-items-center gap-2 md:gap-4">
          {filteredProducts?.map((item: Product) => (
            <div key={item._id} className=" -my-20 md:my-0">
              <CardComponent item={item} />
            </div>
          ))}
        </div>
      ) : (
        <div className="flex flex-col gap-4">
          {filteredProducts?.map((item: Product) => (
            <div
              onClick={() => navigate(`/product/${item._id}`)}
              key={item._id}
              className="border items-center p-2 rounded flex gap-2 justify-between"
            >
              <BestProduct item={item} />
              <button className="btn btn-warning">View Details</button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Products;
