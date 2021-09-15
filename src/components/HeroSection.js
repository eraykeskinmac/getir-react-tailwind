import React, { useState } from "react";
import ReactFlagsSelect from "react-flags-select";
import { FaFacebook } from "react-icons/fa";
import Slider from "react-slick";

export default function HeroSection() {
  const [selected, setSelected] = useState("TR");

  const phones = {
    US: "+1",
    DE: "+50",
    TR: "+90",
    IT: "+7",
    IN: "+15",
  };

  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 3500,
    cssEase: "linear",
  };
  return (
    <div className=" relative h-[500px] before:bg-gradient-to-r before:from-primary-brand-color before:to-transparent before:absolute before:inset-0 before:w-full before:h-full before:z-10">
      <Slider {...settings}>
        <div>
          <img
            className="w-full h-[500px] object-cover"
            src="https://getir.com/_next/static/images/getir-mainpage-4-1751ad2d8fb42a88742d6751938da7e7.jpg"
          ></img>
        </div>
        <div>
          <img
            className="w-full h-[500px] object-cover"
            src="https://getir.com/_next/static/images/getir-mainpage-1-757eca6a46304def60cabce74d3f20a2.jpg"
          ></img>
        </div>
      </Slider>
      <div className="container flex gap-y-8 justify-between items-center absolute top-0 left-1/2 -translate-x-1/2 h-full z-20">
        <div>
          <img
            src="https://getir.com/_next/static/images/bimutluluk-b3a7fcb14fc9a9c09b60d7dc9b1b8fd6.svg"
            alt=""
          />
          <h3 className="text-4xl mt-8 font-semibold text-white">
            Dakikalar içinde <br /> kapınızda
          </h3>
        </div>
        <div className="w-[400px] rounded-lg bg-gray-50 p-6">
          <h4 className="text-primary-brand-color text-center font-semibold mb-4">
            Giriş yap ve kayıt ol
          </h4>
          <div className="grid gap-y-3">
            <div className="flex gap-x-2">
              <ReactFlagsSelect
                countries={Object.keys(phones)}
                customLabels={phones}
                placeholder="Select Language"
                onSelect={(code) => setSelected(code)}
                selected={selected}
                className="flag-select"
              />
              <label className="flex-1 relative group block cursor-pointer">
                <input
                  required
                  className="h-14 px-4 border-2 border-gray-200 rounded w-full transition-colors group-hover:border-primary-brand-color outline-none focus:border-primary-brand-color peer text-sm pt-2"
                />
                <span className="absolute inset-0 h-full px-4 flex items-center text-sm text-gray-500 font-medium transition-all peer-focus:h-7  peer-focus:text-primary-brand-color peer-focus:text-xs peer-valid:h-7  peer-valid:text-primary-brand-color peer-valid:text-xs">
                  Telefon Numarası
                </span>
              </label>
            </div>
            <button className="bg-brand-yellow text-primary-brand-color transition-colors hover:bg-primary-brand-color hover:text-brand-yellow h-12 flex items-center justify-center rounded-md w-full txt-sm font-semibold ">
              Telefon numarası ile devam et

              
            </button>
            <hr className="h-[1px] bg-gray-300 my-2"></hr>

            <button className="bg-blue-700 bg-opacity-10 text-blue-700  text-opacity-80 transition-colors h-12 flex items-center px-4  rounded-md w-full txt-sm font-semibold ">
              <FaFacebook size={24} />
              <span className="mx-auto"> Facebook ile devam et</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
