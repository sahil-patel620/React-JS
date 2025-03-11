import Button from "./Button";
// import { useState } from "react";


function Item({foodItem, bought, handleBuyButton}){
    return(
        <><li className={`list-group-item ${bought && 'active'} `} >{foodItem} <Button handleOnClick={handleBuyButton}></Button></li>
        </>
    )
}

export default Item;
