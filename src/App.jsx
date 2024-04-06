import { useState } from "react";
import InputBox from "./components/InputBox";
import useCurrencyInfo from "./custom-hooks/useCurrencyInfo";
import SwapVertIcon from "@mui/icons-material/SwapVert";
import "./App.css";

function App() {
  const [amount, setAmount] = useState(0);
  const [from, setFrom] = useState("usd");
  const [to, setTo] = useState("inr");
  const [convertedAmount, setConvertedAmount] = useState(0);

  const currencyInfo = useCurrencyInfo(from);

  const options = Object.keys(currencyInfo);

  const swap = () => {
    setFrom(to);
    setTo(from);
    setConvertedAmount(amount);
    setAmount(convertedAmount);
  };

  const convert = () => {
    setConvertedAmount(amount * currencyInfo[to]);
  };
  return (
    <>
      <div
        className=" w-screen h-screen bg-black flex items-center justify-center bg-cover "
        style={{
          backgroundImage: `url('https://images.pexels.com/photos/33109/fall-autumn-red-season.jpg?auto=compress&cs=tinysrgb&w=800')`,
        }}
      >
        <div className=" w-3/5 h-2/3  flex items-center justify-center flex-col rounded-xl backdrop-filter backdrop-blur-sm border-2 border-sky-200 ">
          <h1 className=" text-gray-100 shadow-2xl text-2xl font-bold m-3 font-mono">
            Currency Converter
          </h1>
          <InputBox
            label="From"
            amount={amount}
            currencyOptions={options}
            onCurrencyChange={(currency) => setFrom(currency)}
            selectCurrency={from}
            onAmountChange={(amount) => setAmount(amount)}
          />
          <button
            className=" w-20 h-10 bg-blue-600 text-white active:bg-blue-500 rounded-lg"
            onClick={swap}
          >
            Swap <SwapVertIcon />
          </button>
          <InputBox
            label="To"
            amount={convertedAmount}
            currencyOptions={options}
            onCurrencyChange={(currency) => setTo(currency)}
            selectCurrency={to}
            amountDisable
            onAmountChange={(amount) => setAmount(amount)}
          />
          <button
            type="submit"
            onClick={convert}
            className="w-4/5 bg-blue-600 text-white px-4 py-3 rounded-lg m-6 active:bg-blue-500"
          >
            Convert {from.toUpperCase()} to {to.toUpperCase()}
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
