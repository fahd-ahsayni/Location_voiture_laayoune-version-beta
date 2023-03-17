import { Fragment, useState } from "react";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
  Typography,
} from "@material-tailwind/react";

import { conditionData } from "../data";

export default function Condition() {
  const [open, setOpen] = useState(1);

  const handleOpen = (value) => {
    setOpen(open === value ? 0 : value);
  };

  return (
    <div className="relative lg:pb-80 md:pb-72 pb-52">
        <div className="mx-auto max-w-7xl">
      <Typography variant="lead" color="blue" className='text-center capitalize font-semibold'>conditions</Typography>
      <Typography variant="h2" className='text-gray-900 text-center capitalize mb-4'>Location de voiture laayoune conditions</Typography>
      <Typography variant="lead" className='text-gray-700 text-center mb-12'>Agence – Aéroport de Laâyoune</Typography>
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="dark:bg-primary-dark-light bg-gray-100 py-4 px-8 rounded shadow-md">
            <Fragment>
              {conditionData.map((item, key) => (
                <Accordion className="w-full" key={key} open={open === key + 1}>
                  <AccordionHeader
                    onClick={() => handleOpen(key + 1)}
                    className="text-gray-900 dark:text-gray-50"
                  >
                    {key + 1}
                    {" - "}
                    {item.title}
                  </AccordionHeader>
                  <AccordionBody>
                    <Typography className="dark:text-gray-200 text-gray-700 px-2" variant="paragraph">
                      {item.text}
                    </Typography>
                  </AccordionBody>
                </Accordion>
              ))}
            </Fragment>
          </div>
        </div>
        <svg
          id="contacts"
          className="absolute w-screen -bottom-3 left-0"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
        >
          <path
            className="fill-gray-100 dark:fill-primary-dark"
            fillOpacity="1"
            d="M0,128L60,117.3C120,107,240,85,360,85.3C480,85,600,107,720,138.7C840,171,960,213,1080,218.7C1200,224,1320,192,1380,176L1440,160L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
          ></path>
        </svg>
      </div>
    </div>
  );
}
