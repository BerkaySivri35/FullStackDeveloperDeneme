/* Javascript */
let root = document.getElementById("root");

/* React */

let brand = "Bmw 3.20i";
let price = 500.000;
let description = "Çok pahalı araba";

function formatPrice(p) {
    return p + " TL";
}

let car = {
    brand: "Bmw X6",
    price: 100000,
    description: "Çok güzel araba",
    types: ["blue", "black"]
}

function formatPrice2(p) {
    return p.price + " TL";
}

function getDescription(description) {
    /*if(description){
        return description;
    }else{
        return "no-desc";
    }*/
    /*if(description){
        return <h5 style={{color: "red"}}>Description: {description}</h5>
    }*/
    return description ? <h5 style={{ color: "red" }}>Description: {description}</h5> : "no-description"
}


/* Number arttır azalt uygulaması */ 

let number = 0;
function artiBir() {
    number++;
    renderApp();
    console.log("arttı");
}

let dateTime = new Date().toLocaleTimeString();

function renderApp() {
    let template =
        <div id="carDetail">
                        {/*<h1 id="carName">Name: {car.brand ? car.brand : "Araba yok hocam"}</h1>
                <p id="carPrice">Price: {formatPrice2(car)}</p>
                <p id="description">Description: {getDescription(car.description)}</p>
                <p>{car.types.length ? car.types.length + " Tip var" : "Seçenek yok."}</p>
                <p>
                    {
                    car.types.map(item => <p>{item}</p>)
                    }
                </p>*/}

            <h1>Number: {number}</h1>
            <button id="btnArttir" onClick={artiBir}> +1 </button>
            <button id="btnAzalt" 
                onClick={
                    () => {
                            number != 0 ? number-- : alert("number değeri 0");
                            renderApp();
                            console.log("Azaldı");
                        }

                }> -1 </button>
            
            <div>{tick()}</div>

        </div>;

    /* REACT DOM */
    ReactDOM.render(template, root);
}

renderApp();

/* Saniyesi artan saat işlemi */

function tick(){
    let element = (
        <div>
            <h2>Saat : {new Date().toLocaleTimeString()} </h2>
        </div>
    );
    ReactDOM.render(element, root);
}

setInterval(tick,1000)



