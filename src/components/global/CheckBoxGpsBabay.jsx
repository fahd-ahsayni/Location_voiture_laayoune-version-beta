import React, { useRef, useState } from "react";
import { FaBaby } from "react-icons/fa";
import { GiGps } from "react-icons/gi";
import { MdAddCircleOutline, MdOutlineAddTask } from "react-icons/md";

const CheckBoxGpsBabay = () => {
    const [addGps, setAddGps] = useState(false);
    const [addBaby, setAddBaby] = useState(false);

  return (
    <ul className="flex mt-4 gap-4 lg:items-center items-start justify-center">
      <li className="w-[200px] h-[150px]">
        <input
          type="checkbox"
          id="react-option"
          value=""
          className="hidden peer"
          required=""
        />
        <label
          onClick={() => setAddGps(!addGps)}
          htmlFor="react-option"
          className="inline-flex items-center justify-between w-full p-3 text-gray-500 bg-white border-2 border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 peer-checked:border-blue-600 hover:text-gray-600 dark:peer-checked:text-gray-300 peer-checked:text-gray-600 hover:bg-gray-50 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700"
        >
          <div className="block">
            <h4 className="w-full font-semibold flex justify-start items-center">
              {addGps ? (
                <MdOutlineAddTask className="text-green-500 mr-2" />
              ) : (
                <MdAddCircleOutline className="mr-2" />
              )}
              <span className="text-sm">GPS Gratuit</span>
            </h4>
            <p className="w-full text-sm ml-[1.35rem]">0.00 Dhs</p>
          </div>
        </label>
      </li>
      <li className="w-[200px] h-[150px]">
        <input
          type="checkbox"
          id="flowbite-option"
          value=""
          className="hidden peer"
        />
        <label
          onClick={() => setAddBaby(!addBaby)}
          htmlFor="flowbite-option"
          className="inline-flex items-center justify-between w-full p-3 text-gray-500 bg-white border-2 border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 peer-checked:border-blue-600 hover:text-gray-600 dark:peer-checked:text-gray-300 peer-checked:text-gray-600 hover:bg-gray-50 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700"
        >
          <div className="block">
            <p className="w-full font-semibold flex justify-start items-center">
              {addBaby ? (
                <MdOutlineAddTask className="text-green-500 mr-2.5" />
              ) : (
                <MdAddCircleOutline className="mr-2" />
              )}
              <span className="text-sm">Siége Bébé</span>
            </p>
            <div className="w-full text-sm ml-[1.35rem]">40.00 Dhs</div>
          </div>
        </label>
      </li>
    </ul>
  );
};

export default CheckBoxGpsBabay;
