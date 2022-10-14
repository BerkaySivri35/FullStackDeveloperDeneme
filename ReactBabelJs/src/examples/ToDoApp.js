const root = document.getElementById("root");

let app = {
    title: "ToDo App",
    description: "lorem, ipsum",
    items: [
        "Lorem.",
        "Lorem, ipsum.",
        "Lorem, ipsum dolor.",
        "Lorem ipsum dolor sit."
    ]
};


let HeaderStyle = {
    textAlign: 'center',
    color: 'green'
};

let OlStyles = {
    color:'blue',
    fontWeight:'bold',
}

function onFormSubmit(event) {
    event.preventDefault();
    let item = event.target.elements.txtItem.value;
    console.log(item);
    if(item === ""){
        alert("Bos deger atanamaz!")

    }else{
        app.items.push(item);
        event.target.elements.txtItem.value="";
        render()
    }


}

function render() {
    let template = (

        <div>

            <h1 style={HeaderStyle}>{app.title}</h1>
            <p>{app.description}</p>
            <ol style={OlStyles}>
                {app.items.map((item, index) =>
                    <li key={index}>{item}</li>)}

            </ol>
            <p>
                <button onClick={
                    ()=>{
                        app.items = [];
                        render();
                    }
                }>Clear Items</button>
            </p>
            <p>Todo Sayısı : {app.items.length}</p>

            <form onSubmit={onFormSubmit}>
                <input type="text" name="txtItem" id="txtItem" />
                <button type="submit">Add Item</button>
            </form>
        </div>
    );

    ReactDOM.render(template, root);
}

render();