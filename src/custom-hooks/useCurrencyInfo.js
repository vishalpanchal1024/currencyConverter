import { useState, useEffect } from "react";

function useCurrencyInfo(currency) {
    let [data, setData] = useState({});
    useEffect(() => {
        fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@2024.3.30/v1/currencies/${currency}.json`).then((res) => res.json()).then((res) => setData(res[currency]));
    }, [currency]);
    console.log(data);
    return data;
}

export default useCurrencyInfo;