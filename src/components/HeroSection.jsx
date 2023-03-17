import { useSelector, useDispatch } from "react-redux";
import heroImage from "../assets/heroImage.jpg";

import Modal from "./global/Modal";
import { openHeaderForm } from "../config/creatorActions";
import { Button, IconButton, Typography } from "@material-tailwind/react";
// FLAGS
import maroc from "../assets/morocco.png";
import france from "../assets/france.png";
import uk from "../assets/united-kingdom.png";

export default function HeroSection() {
  const dispatch = useDispatch();
  const modalIsOpen = useSelector((state) => state.headerForm.isOpen);

  const handleModalOpen = () => {
    dispatch(openHeaderForm(true));
  };

  return (
    <>
      {modalIsOpen && <Modal />}
      <div className="bg-white lg:mt-24 mt-8 relative dark:bg-[#0a0c0f]">
        <main>
          <div>
            {/* Hero card */}
            <div className="relative">
              <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gray-100 dark:bg-primary-dark" />
              <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                <div className="relative flex flex-col items-center justify-center shadow-xl md:h-[600px] h-screen dark:shadow-[#0a0c0f] sm:overflow-hidden sm:rounded-2xl">
                  <div className="absolute inset-0">
                    <img
                      className="h-full w-full object-cover"
                      src={heroImage}
                      alt="People working on laptops"
                    />
                    <div className="absolute inset-0 bg-black/50 mix-blend-multiply" />
                    <div className="absolute top-0 left-0 w-full h-36 bg-gradient-to-b from-black/60 to-transparent mix-blend-multiply" />
                  </div>
                  <div className="relative px-4 py-16 text-center sm:px-6 sm:py-24 lg:py-32 lg:px-8">
                    <Typography variant="h1" color="white">
                      À Partire de
                    </Typography>
                    <Typography variant="h1" color="white">
                      195 Dhs / jour !
                    </Typography>

                    <div className="w-full mb-4 flex items-center justify-center mt-5 space-x-8">
                      <div className="flex justify-center items-center w-full space-x-8">
                        <span className="h-[34px] w-[34px] scale-100 hover:scale-105 cursor-pointer">
                          <img src={maroc} />
                        </span>
                        <span className="h-8 w-8 scale-100 hover:scale-105 cursor-pointer">
                          <img src={uk} />
                        </span>
                        <span className="h-8 w-8 scale-100 hover:scale-105 cursor-pointer">
                          <img src={france} />
                        </span>
                      </div>
                    </div>

                    <Typography variant="h5" color="white">
                      Vous Avez Des Question ? N'héstier Pas à Demander
                    </Typography>
                    <div className="mx-auto mt-10 max-w-sm sm:flex sm:max-w-none sm:justify-center">
                      <div className="space-y-4 sm:mx-auto sm:inline-grid sm:grid-cols-2 sm:gap-5 sm:space-y-0">
                        <Button
                          onClick={handleModalOpen}
                          color="white"
                          ripple={false}
                          className="text-primary block w-full py-4"
                        >
                          Réserver
                        </Button>

                        <Button className="block w-full py-4">
                          Appellez-Nous
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Logo cloud */}
            <div className="bg-gray-100 dark:bg-primary-dark lg:pb-12 pb-6">
              <div className="mx-auto max-w-7xl py-16 px-4 sm:px-6 lg:px-8">
                <div className="mt-6 grid grid-cols-2 gap-8 md:grid-cols-6 lg:grid-cols-5">
                  <div className="col-span-1 flex justify-center md:col-span-2 lg:col-span-1">
                    <img
                      className="h-12"
                      src="https://tailwindui.com/img/logos/tuple-logo-gray-400.svg"
                      alt="Tuple"
                    />
                  </div>
                  <div className="col-span-1 flex justify-center md:col-span-2 lg:col-span-1">
                    <img
                      className="h-12"
                      src="https://tailwindui.com/img/logos/mirage-logo-gray-400.svg"
                      alt="Mirage"
                    />
                  </div>
                  <div className="col-span-1 flex justify-center md:col-span-2 lg:col-span-1">
                    <img
                      className="h-12"
                      src="https://tailwindui.com/img/logos/statickit-logo-gray-400.svg"
                      alt="StaticKit"
                    />
                  </div>
                  <div className="col-span-1 flex justify-center md:col-span-2 md:col-start-2 lg:col-span-1">
                    <img
                      className="h-12"
                      src="https://tailwindui.com/img/logos/transistor-logo-gray-400.svg"
                      alt="Transistor"
                    />
                  </div>
                  <div className="col-span-2 flex justify-center md:col-span-2 md:col-start-4 lg:col-span-1">
                    <img
                      className="h-12"
                      src="https://tailwindui.com/img/logos/workcation-logo-gray-400.svg"
                      alt="Workcation"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* More main page content here... */}
        </main>
      </div>
    </>
  );
}
