// Types of conditional Rendering
// 1. If-else
// 2. Ternary operators
// 3. Logical Operators (uses && , works only when there is truthy value )


function ConditionRendering(){
    // let foodItems =[];

    let foodItems = [
        "Dal",
        "Roti",
        "vegetables",
        "Fruits",
        "Salad",
        "Milk",
        "Ghee",
      ];

    //   if(foodItems.length != 0){
    //     return <h1>Enjoy food</h1>
    //   }

      return(
        <>
        <br />
        <h4>Conditional Rendering</h4>
        <p><b>Benefits</b> Enhanced user experience. <br /> Reduces unnecessary rendering <br /> Makes apps more interactive and responsive</p>

        {foodItems.length === 0 ? <h3>I am hungry</h3> :null}

        {foodItems.length != 0 && <h6>Enjoy Food</h6>}
        </>
      )
}

export default ConditionRendering;