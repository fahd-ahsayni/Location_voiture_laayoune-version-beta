import actions from "./actions";

const {
  PRICE_TOTAL_UPDATE,
  PRICE_CAR_UPDATE,
  PRICE_SEATS_UPDATE,
  DAYS_UPDATE,
  GPS_SELECTED,
  FORM_ACTIVE,
  CONFIRMATION,
  OPEN_HEADER_FORM,
  OPEN_MODAL_CONFERMATION,
  RESET,
  SET_FULL_NAME,
  SET_DATE_START,
  SET_DATE_END,
  SET_MOBILE,
  SET_ADRESS,
  SET_EMAIL,
  SET_CAR_NAME,
  SET_AGENCE,
  SET_CARD_RESEVARTION
} = actions;

export const priceTotalUpdate = () => {
  return {
    type: PRICE_TOTAL_UPDATE,
  };
};

export const priceCarUpdate = (priceCar) => {
  return {
    type: PRICE_CAR_UPDATE,
    payload: priceCar,
  };
};
export const priceSeatUpdate = (priceSeatBaby, isSeatBaby) => {
  return {
    type: PRICE_SEATS_UPDATE,
    payload: {
      price: priceSeatBaby,
      isSeatBaby: isSeatBaby,
    },
  };
};
export const daysUpdate = (days) => {
  return {
    type: DAYS_UPDATE,
    payload: days,
  };
};
export const gpsSelected = (isGps) => {
  return { type: GPS_SELECTED, payload: isGps };
};

export const formActive = (active) => {
  return { type: FORM_ACTIVE, payload: active };
};

export const confirmationReserve = () => {
  return { type: CONFIRMATION };
};

// actions Modals

export function openHeaderForm(isOpen) {
  return {
    type: OPEN_HEADER_FORM, payload: isOpen
  };
}

export function openModalConfermation(isOpen) {
  return {
    type: OPEN_MODAL_CONFERMATION, payload: isOpen
  };
}

export const resetData = () => ({type: RESET})

export const setFullName = (fullName) => ({
  type: SET_FULL_NAME,
  payload: fullName,
});

export const setDateStart = (dateStart) => ({
  type: SET_DATE_START,
  payload: dateStart,
});

export const setDateEnd = (dateEnd) => ({
  type: SET_DATE_END,
  payload: dateEnd,
});

export const setMobile = (mobile) => ({
  type: SET_MOBILE,
  payload: mobile,
});

export const setAddress = (address) => ({
  type: SET_ADRESS,
  payload: address,
});

export const setEmail = (email) => ({
  type: SET_EMAIL,
  payload: email,
});

export const setAgence = (agence) => ({
  type: SET_AGENCE,
  payload: agence,
});

export const setCarName = (agence) => ({
  type: SET_CAR_NAME,
  payload: agence,
});

export const cardReservartion = (card) => ({
  type: SET_CARD_RESEVARTION,
  payload: card,
});

