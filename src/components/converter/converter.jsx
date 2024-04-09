import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faAngleDoubleRight } from "@fortawesome/free-solid-svg-icons";
import { CurrencyList } from "../currencyList/CurrencyList";
import { useState } from "react";

export const Converter = () => {
  const [currencyValue, setCurrencyValue] = useState(1);
  const [currentFrom, setCurrentFrom] = useState("BRL");
  const [currentTo, setCurrentTo] = useState("USD");

  const handleCurrencyValue = (event) => {
    setCurrencyValue(event.target.value.replace(/\D/g, ""));
  };

  const handleCurrentFrom = (event) => {
    setCurrentFrom(event.target.value);
  };

  const handleCurrentTo = (event) => {
    setCurrentFrom(event.target.value);
  };

  return (
    <div className="bg-gray-200 border border-gray-300 px-5 py-10">
      <form action="">
        <section className="flex justify-between">
          <div className="flex justify-between gap-9 min-w-[30%]">
            <input
              className="flex rounded-md p-1"
              type="text"
              name=""
              id=""
              value={currencyValue}
              onChange={handleCurrencyValue}
              placeholder="0"
            />
            <select
              className="flex rounded-md p-1"
              value={currentFrom}
              name=""
              id=""
            >
              <CurrencyList />
            </select>
          </div>
          <div>
            <span>
              <FontAwesomeIcon icon={faAngleDoubleRight} />
            </span>
          </div>
          <div>
            <select
              className="flex rounded-md p-1"
              value={currentTo}
              name=""
              id=""
            >
              <CurrencyList />
            </select>
          </div>
          <div>
            <button
              className="flex items-center justify-between rounded-md bg-green-700 text-white py-1 px-4"
              type="submit"
            >
              Converter
            </button>
          </div>
        </section>
      </form>
    </div>
  );
};
