import React, { useState } from 'react';
import  {InputBox}  from './components/index';
import useCurrencyInfo from './hooks/useCurrencyInfo'


function App() {
  const [amount, setAmount] = useState();
  const [from, setFrom] = useState("inr")
  const [to, setTo] = useState("usd")
  const [convertedAmount, setConvertedAmount] = useState(0)

  const currencyInfo = useCurrencyInfo(from)
  console.log(currencyInfo)
  const options = Object.keys(currencyInfo)

  const swap = () =>{
    setFrom(to)
    setTo(from)
    setConvertedAmount(amount)
    setAmount(convertedAmount)
  }

  const convert = () => {
    setConvertedAmount(amount * currencyInfo[to])
  }
  return (
    <div className='flex flex-row'>
       
        <div className="w-full">
             
            <div className="w-190 h-full p-30   p-5 backdrop-blur-sm bg-green-800 text-white">
                <form
                    onSubmit={(e) => {
                        e.preventDefault();
                        convert()
                       
                    }}
                >
                    <div className="w-fullmb-1">
                        <InputBox
                            label="From"
                            amount={amount}
                            onAmountChange={(amount) => setAmount(amount)}
                            onCurrencyChange={(currency) => setTo(currency)}
                            currencyOptions={options}
                            selectCurrency={from}
                            amountDisable={false}
                            onChange={(e)=>e.preventDefault()}
                        />
                        
                    </div>
                    <div className="relative w-100 h-0.5">
                        <button
                            type="button"
                            className="absolute left-70 -translate-x-1/2 -translate-y-1/2 border-2 border-white cursor-pointer rounded-md bg-blue-600 text-white px-2 py-0.5"
                            onClick={swap}
                        >
                            swap
                        </button>
                    </div>
                    <div className="w-full mt-1 mb-4">
                        <InputBox
                            label="To"
                            amount={convertedAmount}
                            currencyOptions={options}
                            onCurrencyChange={(currency) => setFrom(currency)}
                            selectCurrency={to}
                           amountDisable
                        />
                    </div>

                    <button className='w-140 h-10 border-0 cursor-pointer rounded-md bg-blue-600'>
                        convert {from.toUpperCase()} to {to.toUpperCase()}
                    </button>
                    
                </form>
            </div>

            
        </div>

        <div className='h-165 w-500'
             style={{backgroundImage:`url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSt9cdSmxKcXRXY5cdlMqYWvn2K4HW-V-SX1H-BxjwQ2g&s=10')`}}
            >

            </div>
    </div>

  )

 
}

export default App;