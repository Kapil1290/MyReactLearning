import React, { useId, useInsertionEffect } from "react";
import App from "../App";
import useCurrencyInfo from "../hooks/useCurrencyInfo";

function InputBox({
    label,
    amount,
    currencyDisable=false,
    onAmountChange,
    onCurrencyChange,
    currencyOptions = [],
    selectCurrency,
    amountDisable = false,
    className = "",
}) {
    const amountInputId = useId()   

    return(
        <div className="rounded-md w-140 h-30 border border-gray-800  flex flex-row justify-between" >
            <div className="flex flex-col gap-2 m-4">
                <label htmlFor="">
                    {label}
                </label>
                
                <input
                 className="border border-gray-70 pl-2 rounded-md"
                 type="number" 
                 id={amountInputId}
                 value={amount}
                 placeholder="Amount"
                 disabled={amountDisable}
                 onChange={(e) => onAmountChange &&
                    onAmountChange(Number(e.target.value))
                 }
                />
            </div>

            <div className="px-2">
                <p className="my-3">CurrencyType</p>

                <select value={selectCurrency} className="border border-gray-60 rounded-md w-20" name="options" id="option">
                    {
                        currencyOptions.map((currency)=>(
                            <option key={currency} value={currency}>
                                {currency}
                            </option>
                        ))
                    }
                </select>
            </div>
        </div>

        
    )
}

export default InputBox;