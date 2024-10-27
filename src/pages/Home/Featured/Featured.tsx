import Title from "../../../utils/Title";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Navigation, Pagination } from "swiper/modules";
import { useRef } from "react";
import { Product } from "../../../types/Types";
import CardComponent from "../../../Shared/CardComponent";
import { ArrowRightIcon } from "@heroicons/react/24/outline";
import { ArrowLeftIcon } from "@heroicons/react/24/outline";
import { useGetProductsQuery } from "../../../redux/api/api";
import Gallery from "./Gallery";

const Featured = () => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const { data: products, isLoading } = useGetProductsQuery();

  return (
    <>
      <Title heading="Featured Products" subHeading="Must have a look at our" />
      <Gallery/>
      <div className="bg-white mt-5 mb-5">
        <div className="flex w-[145vh] gap-20 pt-20 mx-auto items-center">
          <h1 className="text-6xl font-bold italic text-slate-700">
          Our Products
          </h1>
          <div>
            <p className="text-sm mt-10 text-slate-500">
              CampQuest Supplies is the most trusted and <br />
              professional service provider in this area.
            </p>
            <div className="flex gap-32 mt-5 text-sm">
              <p className="q flex gap-2">
                See Our Pricing
                <img
                  className="-mt-2 w-2"
                  src="./Quality/upper-top.svg"
                  alt=""
                />
              </p>
              <p className="q flex gap-2">
                Call Us (619) 201-9480
                <img
                  className="-mt-2 w-2"
                  src="./Quality/upper-top.svg"
                  alt=""
                />
              </p>
            </div>
          </div>
        </div>
        <div className="mx-auto flex  items-baseline w-11/12 p-5 bg-[#002932] rounded-lg m-5 pt-8">
          <div className="md:w-[200px] md:flex-row  flex flex-col gap-3 items-center justify-center">
            <ArrowLeftIcon
              className="btn bg-white border border-t-0 border-x-0 border-b-slate-400 border-b-4 w-[50px]"
              ref={prevRef}
            />
            <ArrowRightIcon
              ref={nextRef}
              className="btn bg-white border border-t-0 border-x-0 border-b-slate-400 border-b-4 w-[50px]"
            />
          </div>

          <Swiper
            slidesPerView={4}
            centeredSlides={true}
            spaceBetween={100}
            autoplay= {true}
            navigation={{
              nextEl: nextRef.current,
              prevEl: prevRef.current,
            }}
            modules={[Pagination, Navigation]}
            className="mySwiper"
          >
            {isLoading ? (
              <div className="grid grid-cols-3 justify-items-center mx-auto">
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
                <div className="flex w-52 flex-col gap-4">
                  <div className="skeleton h-32 w-full"></div>
                  <div className="skeleton h-4 w-28"></div>
                  <div className="skeleton h-4 w-full"></div>
                  <div className="skeleton h-4 w-full"></div>
                </div>
              </div>
            ) : (
              <div>
                {products?.data?.map((item: Product) => (
                  <SwiperSlide key={item._id}>
                    <CardComponent item={item} />
                  </SwiperSlide>
                ))}
              </div>
            )}

            <SwiperSlide>
              <div className="w-[200px]  sCale  h-[258px]">
                <img src="./Quality/1.jpg" alt="" />
                <p className="font-bold mt-2">Camping Store !</p>
                <p className="text-sm mt-2">
                  Say Goodbye To Stress & Order Now !
                </p>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </>
  );
};

export default Featured;
