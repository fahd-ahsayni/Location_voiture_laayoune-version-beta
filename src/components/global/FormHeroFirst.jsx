import React, { useEffect, useState } from "react";
import SelectCars from "./SelectCars";
import { useDispatch, useSelector } from "react-redux";
import {
  daysUpdate,
  formActive,
  gpsSelected,
  openHeaderForm,
  priceSeatUpdate,
  priceTotalUpdate,
  resetData,
  setDateEnd,
  setDateStart,
} from "../../config/creatorActions";
import { Button } from "@material-tailwind/react";

const FormHeroFirst = ({children, setReservation}) => {
  const dispatch = useDispatch();
  const [days, setDays] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  const defaultGps = false;
  const [seatBaby, setSeatBaby] = useState(false);
  const [clicked, setClicked] = useState(false);
  const [border, setBorder] = useState(
    "dark:border-primary-dark/60 border-gray-300"
  );

  const dateStartValue = useSelector((state) => state.dateStart);
  const dateEndValue = useSelector((state) => state.dateEnd);

  // Update the redux store on change of days, gps or seatBaby
  useEffect(() => {
    dispatch(daysUpdate(days));
    seatBaby
      ? dispatch(priceSeatUpdate(40, seatBaby))
      : dispatch(priceSeatUpdate(0, setSeatBaby));
    calculateDuration();
    days > 0 && dispatch(priceTotalUpdate());
  }, [days, endDate, startDate, seatBaby, dispatch]);

  // Calculate the duration between start and end dates
  const calculateDuration = () => {
    const startDateObj = new Date(startDate);
    const endDateObj = new Date(endDate);
    const durationMs = endDateObj.getTime() - startDateObj.getTime();
    const durationDays = Math.floor(durationMs / (1000 * 60 * 60 * 24));
    setDays(durationDays);
  };

  // Handle the change of start date
  const handleStartDateChange = (event) => {
    setStartDate(event.target.value);
    dispatch(setDateStart(event.target.value));
  };
  
  // Handle the change of end date
  const handleEndDateChange = (event) => {
    setEndDate(event.target.value);
    dispatch(setDateEnd(event.target.value));
    dispatch(priceTotalUpdate());
  };

  // Handle the click of the Annuler button
  const handelClose = () => {
    // Add your code to handle the close action
    dispatch(openHeaderForm(false));
    dispatch(resetData())
    setReservation(false)
  };

  const handelClick = () => {
    const dateEndTest = new Date(dateEndValue);
    const dateStartTest = new Date(dateStartValue);
    setClicked(!clicked);
    if (
      dateStartValue &&
      dateEndValue &&
      dateEndTest.getTime() > dateStartTest.getTime()
    ) {
      dispatch(formActive(2))
      calculateDuration();
      dispatch(priceTotalUpdate());
    } else {
      setBorder("border-red-600");
    }
  };

  return (
    <div className="card  flex-shrink-0 relative w-full h-full">
      <div className="card-body justify-center">
        {/* Select the car */}
        {children}

        {/* Input fields for start and end dates */}
        <label
          htmlFor="start-date"
          className="block text-sm font-medium text-gray-900 dark:text-gray-100"
        >
          La date de debut
        </label>
        <input
          id="start-date"
          value={startDate}
          onChange={handleStartDateChange}
          type="date"
          className={`block w-full rounded-md   py-2 px-4 text-gray-900 dark:text-gray-50 shadow-sm dark:shadow-xl focus:border-parimary focus:ring-primary dark:bg-gray-700 ${border}`}
        />
        <label
          htmlFor="end-date"
          className="block text-sm font-medium text-gray-900 dark:text-gray-100"
        >
          La date fin
        </label>
        <input
          id="end-date"
          value={endDate}
          onChange={handleEndDateChange}
          type="date"
          className={`block w-full rounded-md   py-2 px-4 text-gray-900 dark:text-gray-50 shadow-sm dark:shadow-xl focus:border-parimary focus:ring-primary dark:bg-gray-700 ${border}`}
        />

        {/* Checkboxes for GPS and seat baby */}
        <fieldset className="space-y-5">
          <legend className="sr-only">Notifications</legend>
          <div className="relative flex items-start">
            <div className="flex h-5 items-center">
              <input
                onChange={() => setSeatBaby(!seatBaby)}
                id="comments"
                aria-describedby="comments-description"
                name="comments"
                type="checkbox"
                className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
              />
            </div>
            <div className="ml-3 text-sm">
              <label
                htmlFor="comments"
                className="font-medium text-gray-700 dark:text-gray-100"
              >
                Siége Bébé
              </label>
              <span
                id="comments-description"
                className="text-gray-500 dark:text-gray-300 block"
              >
                40.00 Dhs/Jour
              </span>
            </div>
          </div>
          <div className="relative flex items-start">
            <div className="flex h-5 items-center">
              <input
                onChange={() => dispatch(gpsSelected(!defaultGps))}
                id="candidates"
                aria-describedby="candidates-description"
                name="candidates"
                type="checkbox"
                className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
              />
            </div>
            <div className="ml-3 text-sm">
              <label
                htmlFor="candidates"
                className="font-medium text-gray-700 dark:text-gray-100"
              >
                GPS Gratuit
              </label>
              <span
                id="candidates-description"
                className="text-gray-500 block dark:text-gray-300"
              >
                0.00 Dhs/Jour
              </span>
            </div>
          </div>
        </fieldset>
        <a
          href="#"
          className="text-primary hover:underline hover:text-gray-700"
        >
          Plus d'informations ?
        </a>

        {/* Reserve and Cancel buttons */}
        <div className="flex flex-col mt-2.5 justify-center items-center">
          <Button onClick={handelClick} className="block w-full py-4">
            Reserve
          </Button>
          <Button
            color="white"
            onClick={handelClose}
            className="mt-2.5 py-4 bg-gray-100 border-none px-12 text-gray-500 hover:text-gray-600 hover:bg-gray-50 w-full"
          >
            Annuler
          </Button>
        </div>
      </div>
    </div>
  );
};

export default FormHeroFirst;
