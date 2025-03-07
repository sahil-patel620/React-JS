
function Random(){
    let random = Math.random()*100;
    return(
        <>
        <h3 style={{"background-color": '#212121', "color":"#fff"}}>Random Number is: {Math.round(random)}</h3>        
        </>
    )
}

export default Random;