import React from "react";

const Sum = React.memo(({val})=>{
    function CalculateSum(){
        let sum=0;

        for(let i=1; i<=val; i++){
            sum += i;
        }
        
        return sum;
    }

    const total = CalculateSum();
    console.log("Sum render");
    return(
        <>
        <h1>This is our Math Library</h1>
        <h2>Total is: {total}</h2>
        </>
    )
})

export default Sum;

