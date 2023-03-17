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
} = actions;

const initialState = {
  headerForm: {
    isOpen: false,
  },
  modalConfermation: {
    isOpen: false,
  },
  cardReservationActive: 1,
  confirmation: false,
  formActive: 1,
  isSeatBaby: false,
  isGps: false,
  price: {
    priceCar: 0,
    priceSeatBaby: 0,
    days: 0,
    priceTotal: 0,
  },
  fullName: "",
  dateStart: "",
  dateEnd: "",
  mobile: "",
  address: "",
  email: "",
  carName: "",
  agence: "",
};

export default (state = initialState, action) => {
  switch (action.type) {
    case PRICE_TOTAL_UPDATE:
      return {
        ...state,
        price: {
          ...state.price,
          priceTotal: state.price.priceSeatBaby
            ? parseInt(state.price.priceCar) * parseInt(state.price.days) +
              parseInt(state.price.priceSeatBaby) * parseInt(state.price.days)
            : parseInt(state.price.priceCar) * parseInt(state.price.days),
        },
      };
    case PRICE_CAR_UPDATE:
      return {
        ...state,
        price: {
          ...state.price,
          priceCar: action.payload,
          priceTotal:
            parseInt(state.price.priceCar) * parseInt(state.price.days),
        },
      };
    case PRICE_SEATS_UPDATE:
      return {
        ...state,
        isSeatBaby: action.payload.isSeatBaby,
        price: {
          ...state.price,
          priceSeatBaby: action.payload.price,
          priceTotal:
            parseInt(state.price.priceCar) * parseInt(state.price.days) +
            parseInt(state.price.priceSeatBaby) * parseInt(state.price.days),
        },
      };
    case DAYS_UPDATE:
      return {
        ...state,
        price: {
          ...state.price,
          days: action.payload,
          priceTotal: state.price.priceSeatBaby
            ? parseInt(state.price.priceCar) * parseInt(state.price.days) +
              parseInt(state.price.priceSeatBaby) * parseInt(state.price.days)
            : parseInt(state.price.priceCar) * parseInt(state.price.days),
        },
      };
    case GPS_SELECTED:
      return {
        ...state,
        isGps: action.payload,
      };

    case FORM_ACTIVE:
      return {
        ...state,
        formActive: action.payload,
      };
    // modals cases
    case CONFIRMATION:
      return {
        ...state,
        confirmation: true,
      };
    case OPEN_HEADER_FORM:
      return {
        ...state,
        headerForm: {
          isOpen: action.payload,
        },
      };
    case OPEN_MODAL_CONFERMATION:
      return {
        ...state,
        modalConfermation: {
          isOpen: action.payload,
        },
      };

    case RESET:
      return {
        headerForm: {
          isOpen: false,
        },
        modalConfermation: {
          isOpen: false,
        },
        confirmation: false,
        formActive: 1,
        isSeatBaby: false,
        isGps: false,
        price: {
          priceCar: 0,
          priceSeatBaby: 0,
          days: 0,
          priceTotal: 0,
        },
      };
    case "SET_FULL_NAME":
      return {
        ...state,
        fullName: action.payload,
      };
    case "SET_DATE_START":
      return {
        ...state,
        dateStart: action.payload,
      };
    case "SET_DATE_END":
      return {
        ...state,
        dateEnd: action.payload,
      };
    case "SET_MOBILE":
      return {
        ...state,
        mobile: action.payload,
      };
    case "SET_ADRESS":
      return {
        ...state,
        address: action.payload,
      };
    case "SET_EMAIL":
      return {
        ...state,
        email: action.payload,
      };
    case "SET_AGENCE":
      return {
        ...state,
        agence: action.payload,
      };
    case "SET_CAR_NAME":
      return {
        ...state,
        carName: action.payload,
      };
    case "SET_CARD_RESEVARTION":
      return {
        ...state,
        cardReservationActive: action.payload,
      };
    default:
      return state;
  }
};
