import { Fragment, useEffect, useState } from "react";
import { Listbox, Transition } from "@headlessui/react";
import { CheckIcon, ChevronUpDownIcon, StarIcon } from "@heroicons/react/20/solid";
import { categoriesData } from "../../data";
import { priceCarUpdate, setCarName } from "../../config/creatorActions";
import { useDispatch } from "react-redux";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function SelectCars({id}) {
  const dispatch = useDispatch();
  const selectedVoiture = id ? categoriesData.find(item => item.id === id) : categoriesData[3]
  const [selected, setSelected] = useState(selectedVoiture);

  useEffect(() => {
    dispatch(priceCarUpdate(selected.price));
    dispatch(setCarName(selected.title))
  }, [selected]);

  return (
    <Listbox value={selected} onChange={setSelected}>
      {({ open }) => (
        <>
          <div className="relative mt-1">
              <p className="block text-gray-900 dark:text-gray-50 md:text-lg text-xl font-semibold mb-1.5">
                {selected.title}
              </p>
            <div className="flex mb-1.5 items-center">
              <p className="text-gray-700 text-lg dark:text-gray-300">
                {selected.price} DHS / JOUR
              </p>

              <div className="ml-4 border-l border-gray-300 pl-4">
                <h4 className="sr-only">Reviews</h4>
                <div className="flex items-center">
                  <div className="flex items-center">
                    {[0, 1, 2, 3, 4].map((rating) => (
                      <StarIcon
                        key={rating}
                        className="text-yellow-300 h-4 w-4 flex-shrink-0"
                        aria-hidden="true"
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <Listbox.Button className="relative w-full cursor-default rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-primary-dark-light py-2 pl-3 pr-10 text-left shadow-sm focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary sm:text-sm">
              <span className="flex items-center">
                <img
                  src={selected.img}
                  alt=""
                  className="h-6 w-8 flex-shrink-0 rounded"
                />
                <span className="ml-3 block truncate font-semibold text-gray-900 dark:text-gray-100">
                  {selected.title}
                </span>
              </span>
              <span className="pointer-events-none absolute inset-y-0 right-0 ml-3 flex items-center pr-2">
                <ChevronUpDownIcon
                  className="h-5 w-5 text-gray-400"
                  aria-hidden="true"
                />
              </span>
            </Listbox.Button>

            <Transition
              show={open}
              as={Fragment}
              leave="transition ease-in duration-100"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Listbox.Options className="absolute z-10 mt-1 max-h-56 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                {categoriesData.map((car) => (
                  <Listbox.Option
                    key={car.id}
                    className={({ active }) =>
                      classNames(
                        active ? "text-white bg-primary" : "text-gray-900",
                        "relative cursor-default select-none py-2 pl-3 pr-9"
                      )
                    }
                    value={car}
                  >
                    {({ selected, active }) => (
                      <>
                        <div className="flex items-center">
                          <img
                            src={car.img}
                            alt=""
                            className="h-6 w-8 flex-shrink-0 rounded"
                          />
                          <span
                            className={classNames(
                              selected ? "font-semibold" : "font-normal",
                              "ml-3 block truncate"
                            )}
                          >
                            {car.title}
                          </span>
                        </div>

                        {selected ? (
                          <span
                            className={classNames(
                              active ? "text-white" : "text-primary",
                              "absolute inset-y-0 right-0 flex items-center pr-4"
                            )}
                          >
                            <CheckIcon className="h-5 w-5" aria-hidden="true" />
                          </span>
                        ) : null}
                      </>
                    )}
                  </Listbox.Option>
                ))}
              </Listbox.Options>
            </Transition>
          </div>
        </>
      )}
    </Listbox>
  );
}
