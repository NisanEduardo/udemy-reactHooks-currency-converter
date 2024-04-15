import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import axios from "axios";

import { faAngleDoubleRight } from "@fortawesome/free-solid-svg-icons";
import { CurrencyList } from "../currencyList/CurrencyList";
import { useState } from "react";

export const Converter = () => {
  const [currencyValue, setCurrencyValue] = useState(1);
  const [currencyFrom, setcurrencyFrom] = useState("BRL");
  const [currencyTo, setcurrencyTo] = useState("USD");
  const [resultadoConversao, setResultadoConversao] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const apiURL =
    "http://data.fixer.io/api/latest?access_key=eba7130a5b2d720ce43eb5fcddd47cc3";

  const handleCurrencyValue = (event) => {
    setCurrencyValue(event.target.value.replace(/\D/g, ""));
  };

  const handlecurrencyFrom = (event) => {
    setcurrencyFrom(event.target.value);
  };

  const handlecurrencyTo = (event) => {
    setcurrencyTo(event.target.value);
  };

  const converter = (event) => {
    event.preventDefault();

    setIsLoading(true);

    axios
      .get(apiURL)
      .then((res) => {
        console.log("res", res);

        if (res.data.success !== true) return;

        const cotacaoData = calcularCotacao(res.data);

        setResultadoConversao(
          `${currencyValue} ${currencyFrom} = ${cotacaoData} ${currencyTo} `
        );

        setShowModal(true);
      })
      .catch((err) => console.log("error", err))
      .finally(() => {
        setIsLoading(false);
      });
  };

  const calcularCotacao = (dadosCotacao) => {
    const cotacaoDe = dadosCotacao.rates[currencyFrom];
    const cotacaoPara = dadosCotacao.rates[currencyTo];

    const cotacao = (1 / cotacaoDe) * cotacaoPara * currencyValue;

    return cotacao.toFixed(2);
  };

  return (
    <div className="py-10">
      <div className="bg-gray-200 border border-gray-300 px-5 py-10">
        <form onSubmit={converter}>
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
                value={currencyFrom}
                name=""
                id=""
                onChange={handlecurrencyFrom}
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
                value={currencyTo}
                name=""
                id=""
                onChange={handlecurrencyTo}
              >
                <CurrencyList />
              </select>
            </div>
            <div>
              <button
                className="flex items-center justify-between rounded-md bg-green-700 text-white py-1 px-4"
                type="submit"
              >
                {isLoading ? "Carregando!" : "Converter"}
              </button>
            </div>
          </section>
        </form>
      </div>
      {/* Modal */}
      <section
        data-testId="modal"
        className={`${
          showModal ? "flex" : "hidden"
        } items-center justify-center absolute left-0 top-0 w-[100%] h-[100%] bg-[rgba(0,0,0,0.6)]`}
      >
        <div className="min-w-[50%] bg-white rounded-lg">
          <header className="border-b border-b-gray-200 px-5">
            <h3 className="text-[32px] font-semibold">Conversão</h3>
          </header>
          <div className="px-5">{resultadoConversao}</div>
          <footer className="px-5">
            <button>Nova conversão</button>
          </footer>
        </div>
      </section>
    </div>
  );
};
