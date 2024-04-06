import React, { useId } from "react";

function InputBox({
  label,
  amount,
  onAmountChange,
  onCurrencyChange,
  currencyOptions = [],
  selectCurrency = "usd",
  amountDisable = false,
  currencyDisable = false,
  className = "",
}) {
  const anotherId = useId();
  return (
    <div className={`w-4/5 h-20 bg-white rounded-lg flex m-2 ${className} `}>
      <div className=" w-2/3 h-10  rounded-lg m-2 flex flex-col  justify-evenly font-medium">
        <label htmlFor={anotherId}> {label}</label>
        <input
          id={anotherId}
          disabled={amountDisable}
          value={amount === 0 ? "" : amount}
          onChange={(e) =>
            onAmountChange && onAmountChange(Number(e.target.value))
          }
          placeholder="Amount"
          type="number"
          className="rounded-lg px-3 py-1 bg-gray-300 cursor-pointer outline-none"
        />
      </div>
      <div className=" w-1/4 h-10 rounded-lg flex flex-col  items-end  ">
        <p className=" text-sm font-medium m-2">Currency Type</p>
        <select
          value={selectCurrency}
          onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)}
          disabled={currencyDisable}
          className="appearance-auto  bg-gray-300 rounded-sm border  text-black "
        >
          {currencyOptions.map((currency) => (
            <option value={currency} key={currency}>
              {currency.toUpperCase()}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}
export default InputBox;
