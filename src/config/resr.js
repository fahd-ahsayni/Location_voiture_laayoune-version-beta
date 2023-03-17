export default function CardReservation({ reservation, id, setReservation }) {
  const dispatch = useDispatch();
  const [days, setDays] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [seatBaby, setSeatBaby] = useState(false);
  const [clicked, setClicked] = useState(false);
  const cardReservationActive = useSelector(
    (state) => state.cardReservationActive
  );

  const [border, setBorder] = useState(
    "border"
  );

  const isSeatBaby = useSelector((state) => state.isSeatBaby);
  const isGps = useSelector((state) => state.isGps);
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
    calculateDuration();
  };

  // Handle the change of end date
  const handleEndDateChange = (event) => {
    setEndDate(event.target.value);
    dispatch(setDateEnd(event.target.value));
    calculateDuration();
    dispatch(priceTotalUpdate());
  };

  const defaultGps = false;

  const handelClick = () => {
    const dateEndTest = new Date(dateEndValue);
    const dateStartTest = new Date(dateStartValue);
    setClicked(!clicked);
    if (
      dateStartValue &&
      dateStartValue &&
      dateEndValue &&
      dateEndTest.getTime() > dateStartTest.getTime()
    ) {
      dispatch(cardReservartion(2));
    } else {
      setBorder("border-red-600");
      calculateDuration();
      dispatch(priceTotalUpdate());
    }
  };

  return (

                    <>
                      {cardReservationActive === 1 ? (

                                      <input
                                        type="checkbox"
                                        onChange={() => () =>
                                          dispatch(gpsSelected(!defaultGps))}
                                      />
 
                                            {isGps ? (
                                              <MdOutlineAddTask />
                                            ) : (
                                              <MdAddCircleOutline />
                                            )}
                                      <input
                                        onChange={() => setSeatBaby(!seatBaby)}
                                        type="checkbox"
                                      />
                                     

                                          <FaBaby />
    
                                            {isSeatBaby ? (
                                              <MdOutlineAddTask />
                                            ) : (
                                              <MdAddCircleOutline />
                                            )}

                                  <input
                                    value={startDate}
                                    onChange={handleStartDateChange}
                                  />

                                  <input
                                    id="end-date"
                                    value={endDate}
                                    onChange={handleEndDateChange}
                                  />
               
                                <Button
                                  onClick={handelClick}
                                >
                                  Contunuer
                                </Button>
                                <Button

                                  onClick={() => setReservation(false)}
                                
                                >
                                  Annuler
                                </Button>


                      ) : (
                        <div>
                          test
                        </div>
                      )}
                    </>
               
