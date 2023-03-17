// import { Fragment, useEffect, useState } from "react";
// import { Dialog, Transition } from "@headlessui/react";
// import { XMarkIcon } from "@heroicons/react/24/outline";
// import {
//   CheckIcon,
//   QuestionMarkCircleIcon,
//   StarIcon,
// } from "@heroicons/react/20/solid";
// import { GrValidate } from "react-icons/gr";
// import { GiGps } from "react-icons/gi";
// import { FaBaby } from "react-icons/fa";
// import {
//   MdAddCircleOutline,
//   MdOutlineAddTask,
//   MdOutlineDownloadDone,
// } from "react-icons/md";
// import { useDispatch } from "react-redux";
// import { useSelector } from "react-redux";
// import { categoriesData } from "../../data";
// import { Button } from "@material-tailwind/react";
// import SelectAgence from "./SelectAgence";
// import {
//   cardReservartion,
//   daysUpdate,
//   gpsSelected,
//   openHeaderForm,
//   priceSeatUpdate,
//   priceTotalUpdate,
//   resetData,
//   setDateEnd,
//   setDateStart,
// } from "../../config/creatorActions";
// import FormHeroSeconde from "./FormHeroSeconde";

// export default function CardReservation({ reservation, id, setReservation }) {
//   const [open, setOpen] = useState(reservation);
//   const dispatch = useDispatch();
//   const [days, setDays] = useState("");
//   const [startDate, setStartDate] = useState("");
//   const [endDate, setEndDate] = useState("");
//   const [seatBaby, setSeatBaby] = useState(false);
//   const [clicked, setClicked] = useState(false);
//   const cardReservationActive = useSelector(
//     (state) => state.cardReservationActive
//   );

//   const [border, setBorder] = useState(
//     "dark:border-primary-dark/60 border-gray-300"
//   );

//   const isSeatBaby = useSelector((state) => state.isSeatBaby);
//   const isGps = useSelector((state) => state.isGps);

//   const dateStartValue = useSelector((state) => state.dateStart);
//   const dateEndValue = useSelector((state) => state.dateEnd);

//   // Update the redux store on change of days, gps or seatBaby
//   useEffect(() => {
//     dispatch(daysUpdate(days));
//     seatBaby
//       ? dispatch(priceSeatUpdate(40, seatBaby))
//       : dispatch(priceSeatUpdate(0, setSeatBaby));
//     calculateDuration();
//     days > 0 && dispatch(priceTotalUpdate());
//   }, [days, endDate, startDate, seatBaby, dispatch]);

//   // Calculate the duration between start and end dates
//   const calculateDuration = () => {
//     const startDateObj = new Date(startDate);
//     const endDateObj = new Date(endDate);
//     const durationMs = endDateObj.getTime() - startDateObj.getTime();
//     const durationDays = Math.floor(durationMs / (1000 * 60 * 60 * 24));
//     setDays(durationDays);
//   };

//   // Handle the change of start date
//   const handleStartDateChange = (event) => {
//     setStartDate(event.target.value);
//     dispatch(setDateStart(event.target.value));
//     calculateDuration();
//   };

//   // Handle the change of end date
//   const handleEndDateChange = (event) => {
//     setEndDate(event.target.value);
//     dispatch(setDateEnd(event.target.value));
//     calculateDuration();
//     dispatch(priceTotalUpdate());
//   };

//   const defaultGps = false;

//   const handelClick = () => {
//     const dateEndTest = new Date(dateEndValue);
//     const dateStartTest = new Date(dateStartValue);
//     setClicked(!clicked);
//     if (
//       dateStartValue &&
//       dateStartValue &&
//       dateEndValue &&
//       dateEndTest.getTime() > dateStartTest.getTime()
//     ) {
//       dispatch(cardReservartion(2));
//     } else {
//       setBorder("border-red-600");
//       calculateDuration();
//       dispatch(priceTotalUpdate());
//     }
//   };

//   const carData = categoriesData.find((car) => car.id === id);

//   return (
//     <Transition.Root show={open} as={Fragment}>
//       <Dialog as="div" className="relative z-[9999]" onClose={setOpen}>
//         <Transition.Child
//           as={Fragment}
//           enter="ease-out duration-300"
//           enterFrom="opacity-0"
//           enterTo="opacity-100"
//           leave="ease-in duration-200"
//           leaveFrom="opacity-100"
//           leaveTo="opacity-0"
//         >
//           <div className="fixed inset-0 hidden bg-gray-500 bg-opacity-75 transition-opacity md:block" />
//         </Transition.Child>

//         <div className="fixed inset-0 z-10 overflow-y-auto">
//           <div className="flex min-h-full items-stretch justify-center text-center md:items-center md:px-2 lg:px-4">
//             <Transition.Child
//               as={Fragment}
//               enter="ease-out duration-300"
//               enterFrom="opacity-0 translate-y-4 md:translate-y-0 md:scale-95"
//               enterTo="opacity-100 translate-y-0 md:scale-100"
//               leave="ease-in duration-200"
//               leaveFrom="opacity-100 translate-y-0 md:scale-100"
//               leaveTo="opacity-0 translate-y-4 md:translate-y-0 md:scale-95"
//             >
//               <Dialog.Panel className="flex w-full transform text-left text-base transition md:my-8 md:max-w-2xl md:px-4 lg:max-w-4xl">
//                 <div className="relative flex w-full md:rounded-2xl rounded-none items-center overflow-hidden bg-white dark:bg-primary-dark px-4 pt-14 pb-8 shadow-2xl sm:px-6 sm:pt-8 md:p-6 lg:p-8">
//                   <button
//                     type="button"
//                     className="absolute top-4 right-4 text-gray-400 hover:text-gray-500 sm:top-8 sm:right-6 md:top-6 md:right-6 lg:top-8 lg:right-8"
//                     onClick={() => setReservation(false)}
//                   >
//                     <span className="sr-only">Close</span>
//                     <XMarkIcon className="h-6 w-6" aria-hidden="true" />
//                   </button>

//                   <div className="grid w-full grid-cols-1 items-start gap-y-4 gap-x-6 sm:grid-cols-12 lg:gap-x-8">
//                     <div className="sm:col-span-4 lg:col-span-5">
//                       <div className="aspect-w-2 aspect-h-1 overflow-hidden rounded-lg bg-gray-100">
//                         <img
//                           src={carData.img}
//                           alt={carData.title}
//                           className="object-cover object-center"
//                         />
//                       </div>
//                       <p className="mt-4 mb-2.5 font-semibold text-lg text-gray-900 dark:text-gray-100">
//                         Plus d'informations
//                       </p>
//                       <ul className="ml-4 md:block grid gap-2 grid-cols-2 w-full">
//                         {carData.informaton.map((item) => (
//                           <li
//                             key={item}
//                             className="font-medium mb-2 text-primary flex items-center justify-start"
//                           >
//                             <MdOutlineDownloadDone className="mr-2.5 text-gray-900 dark:text-gray-100" />
//                             <span>{item}</span>
//                           </li>
//                         ))}
//                       </ul>
//                     </div>
//                     <div className="sm:col-span-8 lg:col-span-7">
//                       <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 sm:pr-12">
//                         {carData.title}
//                       </h2>

//                       <section
//                         aria-labelledby="information-heading"
//                         className="mt-4"
//                       >
//                         <h3 id="information-heading" className="sr-only">
//                           Product information
//                         </h3>

//                         <div className="flex items-center">
//                           <p className="text-base text-gray-900 dark:text-gray-200 sm:text-xl">
//                             {carData.price} DHS TTC / JOUR
//                           </p>

//                           <div className="ml-4 border-l border-gray-300 pl-4">
//                             <h4 className="sr-only">Reviews</h4>
//                             <div className="flex items-center">
//                               <div className="flex items-center">
//                                 {[0, 1, 2, 3, 4].map((rating) => (
//                                   <StarIcon
//                                     key={rating}
//                                     className="text-yellow-300 h-5 w-5 flex-shrink-0"
//                                     aria-hidden="true"
//                                   />
//                                 ))}
//                               </div>
//                             </div>
//                           </div>
//                         </div>
//                       </section>
//                       {cardReservationActive === 1 ? (
//                         <>
//                           <section
//                             aria-labelledby="options-heading"
//                             className="mt-6"
//                           >
//                             <h3 id="options-heading" className="sr-only">
//                               Product options
//                             </h3>

//                             <form>
//                               <div className="sm:flex sm:justify-between">
//                                 {/* Size selector */}
//                                 <div className="flex flex-col">
//                                   <h3 className="block mb-2.5 text-lg font-medium text-gray-900 dark:text-white">
//                                     AJOUT DE VÉHICULES
//                                   </h3>
//                                   <ul className="flex flex-row gap-4  items-center justify-start">
//                                     <li className="w-[160px] h-[120px]">
//                                       <input
//                                         type="checkbox"
//                                         id="react-option"
//                                         value=""
//                                         className="hidden peer"
//                                         required=""
//                                         onChange={() =>
//                                           dispatch(gpsSelected(!isGps))}
//                                       />
//                                       <label
//                                         htmlFor="react-option"
//                                         className="inline-flex items-center justify-between w-full p-5 text-gray-500 bg-white border-2 border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 peer-checked:border-blue-600 hover:text-gray-600 dark:peer-checked:text-gray-300 peer-checked:text-gray-600 hover:bg-gray-50 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700"
//                                       >
//                                         <div className="block">
//                                           <GiGps className="w-6 h-6" />
//                                           <h4 className="w-full mt-3 text-sm font-semibold text-gray-700 dark:text-gray-300 flex justify-start items-center">
//                                             {isGps ? (
//                                               <MdOutlineAddTask className="text-green-500 dark:text-green-400 mr-2.5" />
//                                             ) : (
//                                               <MdAddCircleOutline className="mr-2.5 dark:text-gray-200" />
//                                             )}
//                                             <span>GPS Gratuit</span>
//                                           </h4>
//                                           <p className="w-full text-sm ">
//                                             0.00 Dhs / jour
//                                           </p>
//                                         </div>
//                                       </label>
//                                     </li>
//                                     <li className="w-[160px] h-[120px]">
//                                       <input
//                                         onChange={() => setSeatBaby(!seatBaby)}
//                                         type="checkbox"
//                                         id="gps"
//                                         value=""
//                                         className="hidden peer"
//                                       />
//                                       <label
//                                         htmlFor="gps"
//                                         className="inline-flex items-center justify-between w-full p-5 text-gray-500 bg-white border-2 border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 peer-checked:border-blue-600 hover:text-gray-600 dark:peer-checked:text-gray-300 peer-checked:text-gray-600 hover:bg-gray-50 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700"
//                                       >
//                                         <div className="block">
//                                           <FaBaby className="w-6 h-6" />
//                                           <p className="w-full mt-3 text-sm font-semibold flex justify-start items-center">
//                                             {seatBaby ? (
//                                               <MdOutlineAddTask className="text-green-500 mr-2.5" />
//                                             ) : (
//                                               <MdAddCircleOutline className="mr-2.5" />
//                                             )}
//                                             <span>Siége Bébé</span>
//                                           </p>
//                                           <div className="w-full text-sm">
//                                             40.00 Dhs / jour
//                                           </div>
//                                         </div>
//                                       </label>
//                                     </li>
//                                   </ul>
//                                 </div>
//                               </div>
//                               <div className="w-full mt-12">
//                                 {/* Input fields for start and end dates */}
//                                 <div>
//                                   <label
//                                     htmlFor="start-date"
//                                     className="block text-sm font-medium text-gray-900 dark:text-gray-100"
//                                   >
//                                     La date de debut
//                                   </label>
//                                   <input
//                                     id="start-date"
//                                     value={startDate}
//                                     onChange={handleStartDateChange}
//                                     type="date"
//                                     className={`block w-full rounded-md   py-2 px-4 text-gray-900 dark:text-gray-50 shadow-sm dark:shadow-xl focus:border-parimary focus:ring-primary dark:bg-gray-700 ${border}`}
//                                   />
//                                 </div>
//                                 <div className="mt-4">
//                                   <label
//                                     htmlFor="end-date"
//                                     className="block text-sm font-medium text-gray-900 dark:text-gray-100"
//                                   >
//                                     La date fin
//                                   </label>
//                                   <input
//                                     id="end-date"
//                                     value={endDate}
//                                     onChange={handleEndDateChange}
//                                     type="date"
//                                     className={`block w-full rounded-md   py-2 px-4 text-gray-900 dark:text-gray-50 shadow-sm dark:shadow-xl focus:border-parimary focus:ring-primary dark:bg-gray-700 ${border}`}
//                                   />
//                                 </div>
//                               </div>
//                               <div className="mt-4">
//                                 <SelectAgence />
//                               </div>

//                               <div className="mt-6">
//                                 <Button
//                                   onClick={handelClick}
//                                   className="w-full py-5"
//                                 >
//                                   Contunuer
//                                 </Button>
//                                 <Button
//                                   color="white"
//                                   onClick={() => {
//                                     setReservation(false)
//                                     dispatch(resetData())
//                                   }}
//                                   className="mt-2.5 py-4 bg-gray-100 border-none px-12 text-gray-500 hover:text-gray-600 hover:bg-gray-50 w-full"
//                                 >
//                                   Annuler
//                                 </Button>
//                               </div>
//                             </form>
//                           </section>
//                         </>
//                       ) : (
//                         <div>
//                           <FormHeroSeconde></FormHeroSeconde>
//                         </div>
//                       )}
//                     </div>
//                   </div>
//                 </div>
//               </Dialog.Panel>
//             </Transition.Child>
//           </div>
//         </div>
//       </Dialog>
//     </Transition.Root>
//   );
// }

import { Fragment, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import FormHeroFirst from "./FormHeroFirst";
import { useDispatch, useSelector } from "react-redux";
import FormHeroSeconde from "../global/FormHeroSeconde";
import { openHeaderForm } from "../../config/creatorActions";
import SelectAgence from "./SelectAgence";
import SelectCars from "./SelectCars";

export default function CardReservation({ reservation, id, setReservation }) {
  const dispatch = useDispatch()
  const isOpenModal = useSelector(state => state.headerForm.isOpen)
  const formActive = useSelector((state) => state.formActive);

  return (
    <div>
      <Transition.Root show={reservation} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={setReservation}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black/70 bg-opacity-75 transition-opacity" />
          </Transition.Child>

          <div className="fixed md:-top-20 inset-0 z-10 overflow-y-auto">
            <div className="flex md:min-h-full items-center justify-center md:p-4 text-center sm:items-center pt-0 p-0 md:pt-32">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                enterTo="opacity-100 translate-y-0 sm:scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              >
                <Dialog.Panel className="relative transform overflow-hidden md:rounded-lg bg-gray-50 backdrop-blur md:px-4 px-2 pt-5 pb-4 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:p-2 dark:bg-primary-dark/50 w-screen md:h-full h-screen md:w-[500px]">
                  {formActive === 1 ? (
                    <FormHeroFirst setReservation={setReservation} >
                      <SelectCars id={id} />
                    </FormHeroFirst>
                  ) : (
                    <FormHeroSeconde setReservation={setReservation}>
                      <SelectAgence />
                    </FormHeroSeconde>
                  )}
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition.Root>
    </div>
  );
}
