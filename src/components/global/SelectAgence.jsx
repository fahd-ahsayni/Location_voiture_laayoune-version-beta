import { useEffect, useState } from "react";
import { CheckIcon, ChevronUpDownIcon } from "@heroicons/react/20/solid";
import { Combobox } from "@headlessui/react";
import { useDispatch } from "react-redux";
import { setAgence } from "../../config/creatorActions";

const people = [
  { id: 1, name: "Agence laayoune" },
  { id: 2, name: "Aéroport laayoune" },
  // More users...
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function SelectAgence() {
  const dispatch = useDispatch();
  const [query, setQuery] = useState("");
  const [selectedPerson, setSelectedPerson] = useState("");

  useEffect(() => {
    dispatch(setAgence(selectedPerson.name));
  }, [selectedPerson, query, dispatch]);

  const handelChange = (event) => {
    setQuery(event.target.value);
  };

  const filteredPeople =
    query === ""
      ? people
      : people.filter((person) => {
          return person.name.toLowerCase().includes(query.toLowerCase());
        });

  return (
    <Combobox as="div" value={selectedPerson} onChange={setSelectedPerson}>
      <Combobox.Label className="block text-sm font-medium text-gray-700 dark:text-gray-100">
        Choisissez l'agence
      </Combobox.Label>
      <div className="relative mt-1">
        <Combobox.Input
          className="w-full rounded-md border border-gray-300 dark:border-gray-700 text-gray-900 dark:text-gray-200 bg-white dark:bg-primary-dark-light py-2 pl-3 pr-10 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500 sm:text-sm"
          onChange={(event) => handelChange(event)}
          displayValue={(person) => person?.name}
        />
        <Combobox.Button className="absolute inset-y-0 right-0 flex items-center rounded-r-md px-2 focus:outline-none">
          <ChevronUpDownIcon
            className="h-5 w-5 text-gray-400"
            aria-hidden="true"
          />
        </Combobox.Button>

        {filteredPeople.length > 0 && (
          <Combobox.Options className="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
            {filteredPeople.map((person) => (
              <Combobox.Option
                key={person.id}
                value={person}
                className={({ active }) =>
                  classNames(
                    "relative cursor-default select-none py-2 pl-8 pr-4",
                    active ? "bg-blue-600 text-white" : "text-gray-900"
                  )
                }
              >
                {({ active, selected }) => (
                  <>
                    <span
                      className={classNames(
                        "block truncate",
                        selected && "font-semibold"
                      )}
                    >
                      {person.name}
                    </span>

                    {selected && (
                      <span
                        className={classNames(
                          "absolute inset-y-0 left-0 flex items-center pl-1.5",
                          active ? "text-white" : "text-blue-600"
                        )}
                      >
                        <CheckIcon className="h-5 w-5" aria-hidden="true" />
                      </span>
                    )}
                  </>
                )}
              </Combobox.Option>
            ))}
          </Combobox.Options>
        )}
      </div>
    </Combobox>
  );
}
