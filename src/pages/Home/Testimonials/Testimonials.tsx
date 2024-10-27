import { ArrowDownRightIcon } from "@heroicons/react/16/solid";
import { ArrowLeftIcon, ArrowRightIcon } from "@heroicons/react/24/outline";
import { useRef } from "react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Title from "../../../utils/Title";

const Testimonials = () => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  return (
   <>
   <Title heading="Client's FeedBack" subHeading="Here are the reviews"/>
    <div className="bg-[#153339] rounded-t-3xl md:h-[737px] md:mt-5 ">
      <div className="flex flex-col md:w-[145vh] gap-10 md:pt-20 mx-auto items-center ">
        <h1 className="text-4xl font-bold text-[#E2EFF2]">------- Checkout our client's thought ------</h1>
        <div>
          <p className="text-sm">
            We have{" "}
            <span className="font-bold text-[#E2EFF2]">1200+ reviews</span> from
            Yelp and Google with a combined result of 4.9 <br /> star rating,
            welcome to read our clients{`'`} feedback.
          </p>
          <div className="flex items-baseline text-[#00CCF8] gap-32 mt-5">
            <p className=" flex gap-2">
              See All Google Reviews <ArrowDownRightIcon className="w-[20px]"/>
            </p>
          </div>
        </div>
      </div>
      <div className="mx-auto flex flex-col-reverse justify-center items-baseline w-[1224px] rounded-lg mt-5 pt-8">
        <div className="p-4 w-[1150px] mx-auto flex justify-center">
          <Swiper
            slidesPerView={4}
            centeredSlides={true}
            spaceBetween={100}
            autoplay={{
              delay: 2000,
              disableOnInteraction: false,
            }}
            navigation={{
              nextEl: nextRef.current,
              prevEl: prevRef.current,
            }}
            modules={[Autoplay, Pagination, Navigation]}
            className="mySwiper"
          >
            <SwiperSlide>
              <div className="w-[250px] rounded-lg bg-white p-4  sCale  h-[158px]">
                <p className=" text-sm">
                  I had a great experience with this company. Now my sofa and
                  armchair look like new. Very pleased with the results.
                </p>
                <div className="flex justify-between mt-3 pe-5">
                  <p className=" italic text-xs">Jared B.</p>
                  <div className="rating rating-xs">
                    <input
                      type="radio"
                      name="rating-5"
                      className="mask mask-star-2 bg-orange-400"
                    />
                    <input
                      type="radio"
                      name="rating-5"
                      className="mask mask-star-2 bg-orange-400"
                      defaultChecked
                    />
                    <input
                      type="radio"
                      name="rating-5"
                      className="mask mask-star-2 bg-orange-400"
                    />
                    <input
                      type="radio"
                      name="rating-5"
                      className="mask mask-star-2 bg-orange-400"
                    />
                    <input
                      type="radio"
                      name="rating-5"
                      className="mask mask-star-2 bg-orange-400"
                    />
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="w-[250px] rounded-lg bg-white p-4  sCale  h-[158px]">
                <p className=" text-sm">
                  David was an amazing tech when I moved into my new place!{" "}
                  {`Can't`} wait to schedule my next appointment.
                </p>
                <div className="flex justify-between mt-3 pe-5">
                  <p className=" italic text-xs">Lesly Q. </p>
                  <div className="rating rating-xs">
                    <input
                      type="radio"
                      name="rating-5"
                      className="mask mask-star-2 bg-orange-400"
                    />
                    <input
                      type="radio"
                      name="rating-5"
                      className="mask mask-star-2 bg-orange-400"
                      defaultChecked
                    />
                    <input
                      type="radio"
                      name="rating-5"
                      className="mask mask-star-2 bg-orange-400"
                    />
                    <input
                      type="radio"
                      name="rating-5"
                      className="mask mask-star-2 bg-orange-400"
                    />
                    <input
                      type="radio"
                      name="rating-5"
                      className="mask mask-star-2 bg-orange-400"
                    />
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="w-[250px] rounded-lg bg-white p-4  sCale  h-[158px]">
                <p className=" text-sm">
                  The carpet is not only clean, but the stains are gone. They
                  did a wonderful job. I recommend them to everyone..
                </p>
                <div className="flex justify-between mt-3 pe-5">
                  <p className=" italic text-xs">Tom K.</p>
                  <div className="rating rating-xs">
                    <input
                      type="radio"
                      name="rating-5"
                      className="mask mask-star-2 bg-orange-400"
                    />
                    <input
                      type="radio"
                      name="rating-5"
                      className="mask mask-star-2 bg-orange-400"
                      defaultChecked
                    />
                    <input
                      type="radio"
                      name="rating-5"
                      className="mask mask-star-2 bg-orange-400"
                    />
                    <input
                      type="radio"
                      name="rating-5"
                      className="mask mask-star-2 bg-orange-400"
                    />
                    <input
                      type="radio"
                      name="rating-5"
                      className="mask mask-star-2 bg-orange-400"
                    />
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="w-[250px] rounded-lg bg-white p-4  sCale  h-[158px]">
                <p className=" text-sm">
                  I had a great experience with this company. Now my sofa and
                  armchair look like new. Very pleased with the results.
                </p>
                <div className="flex justify-between mt-3 pe-5">
                  <p className=" italic text-xs">Jared B.</p>
                  <div className="rating rating-xs">
                    <input
                      type="radio"
                      name="rating-5"
                      className="mask mask-star-2 bg-orange-400"
                    />
                    <input
                      type="radio"
                      name="rating-5"
                      className="mask mask-star-2 bg-orange-400"
                      defaultChecked
                    />
                    <input
                      type="radio"
                      name="rating-5"
                      className="mask mask-star-2 bg-orange-400"
                    />
                    <input
                      type="radio"
                      name="rating-5"
                      className="mask mask-star-2 bg-orange-400"
                    />
                    <input
                      type="radio"
                      name="rating-5"
                      className="mask mask-star-2 bg-orange-400"
                    />
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="w-[250px] rounded-lg bg-white p-4  sCale  h-[158px]">
                <p className=" text-sm">
                  I had a great experience with this company. Now my sofa and
                  armchair look like new. Very pleased with the results.
                </p>
                <div className="flex justify-between mt-3 pe-5">
                  <p className=" italic text-xs">Jared B.</p>
                  <div className="rating rating-xs">
                    <input
                      type="radio"
                      name="rating-5"
                      className="mask mask-star-2 bg-orange-400"
                    />
                    <input
                      type="radio"
                      name="rating-5"
                      className="mask mask-star-2 bg-orange-400"
                      defaultChecked
                    />
                    <input
                      type="radio"
                      name="rating-5"
                      className="mask mask-star-2 bg-orange-400"
                    />
                    <input
                      type="radio"
                      name="rating-5"
                      className="mask mask-star-2 bg-orange-400"
                    />
                    <input
                      type="radio"
                      name="rating-5"
                      className="mask mask-star-2 bg-orange-400"
                    />
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="w-[250px] rounded-lg bg-white p-4  sCale  h-[158px]">
                <p className=" text-sm">
                  I had a great experience with this company. Now my sofa and
                  armchair look like new. Very pleased with the results.
                </p>
                <div className="flex justify-between mt-3 pe-5">
                  <p className=" italic text-xs">Jared B.</p>
                  <div className="rating rating-xs">
                    <input
                      type="radio"
                      name="rating-5"
                      className="mask mask-star-2 bg-orange-400"
                    />
                    <input
                      type="radio"
                      name="rating-5"
                      className="mask mask-star-2 bg-orange-400"
                      defaultChecked
                    />
                    <input
                      type="radio"
                      name="rating-5"
                      className="mask mask-star-2 bg-orange-400"
                    />
                    <input
                      type="radio"
                      name="rating-5"
                      className="mask mask-star-2 bg-orange-400"
                    />
                    <input
                      type="radio"
                      name="rating-5"
                      className="mask mask-star-2 bg-orange-400"
                    />
                  </div>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
          <div className="md:w-[200px] md:flex-row ms-5  flex flex-col gap-3 items-center justify-center">
            <ArrowLeftIcon className="btn w-[50px]" ref={prevRef} />
            <ArrowRightIcon ref={nextRef} className="w-[50px] btn" />
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default Testimonials;
