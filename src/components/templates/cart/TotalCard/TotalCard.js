"use client";
import React, { useState } from "react";
import { useCart } from "@/utils/validations/CartContext";
import stateData from "@/utils/stateData";
import Select from "react-select";

function TotalCard() {
  const { cart } = useCart();
  const totalPrice = cart.reduce(
    (prev, cur) => prev + cur.price * cur.amount,
    0
  );

  const [selectedCity, setSelectedCity] = useState(null);
  const [localOptions, setLocalOptions] = useState([]);
  const [selectedLocal, setSelectedLocal] = useState(null);
  const data = stateData();

  const handleCityChange = (selectedOption) => {
    setSelectedCity(selectedOption);
    setSelectedLocal(null); // Reset selectedLocal when city changes

    // Find the locations corresponding to the selected city
    const findLocations = data.find(city => city.label === selectedOption.label);
    if (findLocations && Array.isArray(findLocations.value)) {
      const formattedOptions = findLocations.value.map(location => ({
        label: location,
        value: location
      }));
      setLocalOptions(formattedOptions); // Update local options when city changes
    } else {
      setLocalOptions([]); // Set empty array if no locations found
    }
  };

  const [showChangeAddressBox , setShowChangeAddressBox] = useState(false)

  return (
    <div className="shadow-xl rounded p-6 mt-4 text-sm text-slate-900 border border-gray-200">
      <h2 className="text-xl font-Shabnam-bold to-slate-900 mb-6">
        جمع کل سبد خرید
      </h2>
      <div className="flex items-center justify-between border-b border-gray-300 pb-3 my-2">
        <span className="font-Shabnam-medium">جمع جزء</span>
        <span className="text-gray-500 font-Shabnam-light-digit text-base">
          {totalPrice?.toLocaleString()} تومان
        </span>
      </div>
      <div className="flex items-center justify-between border-b border-gray-300 pb-3 my-2">
        <span className={`font-Shabnam-medium ${showChangeAddressBox ? 'invisible' : null}`}>حمل و نقل</span>
        <div className="flex flex-col justify-center items-end gap-y-2">
          <span>ارسال رایگان</span>
          <span className="text-gray-500">
            حمل و نقل به تهران (فقط شهر تهران).
          </span>
          <span className="font-Shabnam-medium cursor-pointer" onClick={()=>setShowChangeAddressBox(prev=>!prev)}>تغیر آدرس</span>
        </div>
      </div>
      {showChangeAddressBox && (
          <div className="flex items-center justify-between border-b border-gray-300 pb-3 my-2" data-aos="fade-up">
          <span className="font-Shabnam-medium">حمل و نقل</span>
          <div className="flex flex-col gap-y-2">
            <Select
              value={selectedCity}
              options={data}
              onChange={handleCityChange}
              placeholder="شهر مورد نظر را انتخاب کنید"
            />
            <Select
              value={selectedLocal}
              options={localOptions}
              onChange={setSelectedLocal}
              placeholder="محل مورد نظر را انتخاب کنید"
              isDisabled={!selectedCity} // Disable if no city is selected
            />
            <input
              type="text"
              className="outline-none border border-gray-600 text-gray-600 h-9 w-64 px-2"
              placeholder="شهر"
            />
            <input
              type="text"
              className="outline-none border border-gray-600 text-gray-600 h-9 w-64 px-2"
              placeholder="کد پستی (بدون فاصله و با اعداد)"
            />
          </div>
        </div>
      )}
      <div className="flex items-center justify-between text-xl font-Shabnam-medium mt-4 mb-8">
        <span>مجموع</span>
        <span>{totalPrice?.toLocaleString()} تومان</span>
      </div>
      <div className="flex justify-center">
        <button className="bg-emerald-700 text-white shadow flex items-center justify-center text-sm border-b border-emerald-800 font-Shabnam-medium w-11/12 h-11">
          ادامه جهت تسویه حساب
        </button>
      </div>
      <span className="m-6 inline-block font-Shabnam-medium">
        پیش فاکتور سبد خرید
      </span>
    </div>
  );
}

export default TotalCard;