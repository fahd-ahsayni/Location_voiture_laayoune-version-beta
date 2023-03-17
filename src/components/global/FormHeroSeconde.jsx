import React from "react";
import SelectAgence from "./SelectAgence";
import { useDispatch, useSelector } from "react-redux";
import {
  cardReservartion,
  confirmationReserve,
  formActive,
  openHeaderForm,
  openModalConfermation,
  resetData,
  setAddress,
  setEmail,
  setFullName,
  setMobile,
} from "../../config/creatorActions";
import emailjs from "emailjs-com";
import { Button } from "@material-tailwind/react";

const FormHeroSeconde = ({children, setReservation}) => {
  const dispatch = useDispatch();
  const priceTotal = useSelector((state) => state.price.priceTotal);
  const factorInfo = useSelector((state) => state);

  const {
    fullName,
    dateStart,
    dateEnd,
    mobile,
    address,
    email,
    carName,
    agence,
    price,
  } = factorInfo;
  const { priceCar } = price;
  const { days } = price
  const gps = factorInfo.isGps ? "avec GPS Choisi" : "sans GPS";
  const seatBaby = factorInfo.isSeatBaby ? "avec Siége bébé" : "sans Siége bébé"

  const handelclick = () => {
    emailjs
      .send(
        "service_efarc4k",
        "template_e1dzfvd",
        {
          fullName,
          email,
          mobile,
          address,
          carName,
          priceCar,
          dateStart,
          dateEnd,
          days,
          priceTotal,
          agence,
          gps,
          seatBaby
        },
        "AYrkx1jjG82zspr1b"
      )
      .then(
        (response) => {
          console.log("Email sent", response.status, response.text);
        },
        (error) => {
          console.log("Email failed to send", error);
        }
      );
    dispatch(confirmationReserve(true));
    dispatch(openHeaderForm(false));
    dispatch(openModalConfermation(true));
    dispatch(formActive(1))
    setReservation && setReservation(false)
    dispatch(resetData());
  };

  const handleReturn = () => {
    dispatch(formActive(1))
    dispatch(cardReservartion(1))
  }
  return (
    <>
      <div className="card  relative overflow-y-auto">
        <div className="card-body">
          <h1 className="text-lg block text-center my-2 text-gray-900 dark:text-gray-300">
            Prix Total :{" "}
            <span className="font-semibold ">{priceTotal}.00 Dhs TTC</span>
          </h1>
          {children}
          <div>
            <label
              htmlFor="nom"
              className="block text-sm font-medium text-gray-700 dark:text-gray-100"
            >
              Nom et Prénom
            </label>
            <div className="mt-1">
              <input
                onChange={(e) => dispatch(setFullName(e.target.value))}
                type="text"
                name="nom"
                id="nom"
                className="block dark:border-gray-700 w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm dark:bg-primary-dark-light dark:text-gray-200"
              />
            </div>
          </div>

          <div>
            <label
              htmlFor="email"
              className="block  text-sm font-medium text-gray-700 dark:text-gray-100"
            >
              Adresse - Ville
            </label>
            <div className="mt-1">
              <input
                onChange={(e) => dispatch(setAddress(e.target.value))}
                type="text"
                name="adresse"
                id="adresse"
                className="block dark:border-gray-700  w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm dark:bg-primary-dark-light dark:text-gray-200"
              />
            </div>
          </div>

          <div>
            <label
              htmlFor="mobile"
              className="block text-sm font-medium text-gray-700 dark:text-gray-100"
            >
              N. Téléphone
            </label>
            <div className="mt-1">
              <input
                onChange={(e) => dispatch(setMobile(e.target.value))}
                type="text"
                name="mobile"
                id="mobile"
                className="block w-full dark:border-gray-700 rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm dark:bg-primary-dark-light dark:text-gray-200"
              />
            </div>
          </div>

          <div>
            <label
              htmlFor="mail"
              className="block text-sm font-medium text-gray-700 dark:text-gray-100"
            >
              Adresse Email
            </label>
            <div className="mt-1">
              <input
                onChange={(e) => dispatch(setEmail(e.target.value))}
                type="email"
                name="mail"
                id="mail"
                className="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm dark:bg-primary-dark-light dark:text-gray-200 dark:border-gray-700"
              />
            </div>
          </div>

          <div className="relative flex mt-2.5 items-start">
            <div className="ml-3 text-sm">
              <label htmlFor="accepte" className="font-semibold block text-gray-700 dark:text-gray-100">
                Paiment à La Livraison
              </label>
              <p id="comments-description" className="text-gray-500 dark:text-gray-300">
                Payer en argent comptant à la livraison.
              </p>
            </div>
          </div>

          <div className="mt-4 flex flex-col">
            <Button
              onClick={handelclick}
              className="block w-full py-4"
            >
              Confirmation
            </Button>
            <Button
            color="white"
              onClick={() => handleReturn()}
              className="mt-2.5 py-4 bg-gray-100 border-none px-12 text-gray-500 hover:text-gray-600 hover:bg-gray-50 w-full"
            >
              Précédente
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default FormHeroSeconde;
