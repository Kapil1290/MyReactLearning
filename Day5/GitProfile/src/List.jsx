import { useState } from "react";
import Food from "./Food";

function List(){

    const [foodItems, setFoodItems] = useState(["Apple", "Orange", "Banana"]);

    function handleChange(){
        setFoodItems(["Mango",...foodItems]);
    }

    return(
        <>
        <button onClick={handleChange}>Increment</button>
        <Food food={foodItems} a={"10"}></Food>
        </>
    );
}

export default List;




