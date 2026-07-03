

// props = {
//     food: ["Apple", "Orange", "Banana"],
//     a:10
// }



function Food({food}){

    return(
        <>
        <ul>
            {
                food.map(food => <li key={food}>{food}</li>)
            }
        </ul>
        </>
    );
    
}

export default Food;