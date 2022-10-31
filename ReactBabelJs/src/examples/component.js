const root = document.getElementById("root");

//Es6
class TodoApp extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            items: ["item1","item2","item3"] //props aracalığı ile
        };
        this.clearItems = this.clearItems.bind(this); //State aracılı ile
        this.addItem = this.addItem.bind(this);
        this.deleteItem = this.deleteItem.bind(this);

        
    }
    clearItems(){
            this.setState({
                items: []

            });
    }

    addItem(item){
        if(!item){
            return "Boş değer ekleyemezsin";
        }else if(this.state.items.includes(item)){
            return "Aynı elemanı ekleyemezsiniz";
        }

        this.setState((prevState)=>{
           return {items: prevState.items.concat(item)}
        })
    }

    deleteItem(item){
        this.setState((prevState)=>{
            const arr = prevState.items.filter((i)=>{
                return item != i ;
            })
            return{
                items: arr
            };
        })
        
    }

    render(){
        const title = "Todo Application";
        const description = "Bu bir açıklamadır"

        let app = {
            title: "Todo Application BackEnd",
            description: "Lorem, ipsum 2.",
            
        };


        return(
            <>
                <Header title={app.title} description={app.description}/>
                <TodoList deleteItem={this.deleteItem} items={this.state.items} clearItems = {this.clearItems}/>
                <Action addItem={this.addItem} />
            </>
            
        );
    }
}

//Es5 Header
/*const Header = function(props){
    return(
        <div>
            <h1>{props.title}</h1>
            <p>{props.description}</p>
        </div>
    );
}
*/

//Es6 Header
class Header extends React.Component{
    render(){
        return(
            //props ile yukarıdaki title'ye eriştik.
            <div>
                <h1>{this.props.title}</h1> 
                <p>{this.props.description}</p>
            </div>
        ); 
        
    }
}






class TodoList extends React.Component{
    constructor(props){
        super(props)
        //this.clearItems = this.clearItems.bind(this)
    }

    clearItems(){
        console.log(this.props)
        console.log(this.props.items)//iilgili props un içindeki itemlara erişmiş olduk.
    }

    render(){
        //let obj = this.props.items;
        return(
            <>
                {
                    // this.props.items.map((item,index) => 
                    // <li key={index}>{item}</li>
                    // )
                }
                <ul>
                    {
                    this.props.items.map((item,index) =>
                        <TodoItem deleteItem={this.props.deleteItem} key={index} item={item}/>
                        )
                    }
                </ul>
                
                
                <p>
                    <button onClick={this.props.clearItems}>Clear Items</button>
                </p>
            </>
        );
    }
}

class TodoItem extends React.Component{
    constructor(props){
        super(props);
        this.deleteItem = this.deleteItem.bind(this);
    }

    deleteItem() {
        console.log("tıklandı")
        this.props.deleteItem(this.props.item);
    }

    render(){
        return(
            <li>
                {this.props.item}
                <button onClick={this.deleteItem}>Sil</button>
            </li>
        );
    }
}

class Action extends React.Component{
    constructor(props){
        super(props);
        this.onFormSubmit = this.onFormSubmit.bind(this);
        this.state = {
            err: ''
        }
    }
    onFormSubmit(e){
        e.preventDefault();
        //console.log(e.target.elements.txtItem.value); //inputa girilen değeri aldı.
        
        const item = e.target.elements.txtItem.value.trim(); //trim ile boşluları sildik
        const errr = this.props.addItem(item);
        this.setState({
            err: errr
        });

        e.target.elements.txtItem.value = "";
        /*if(item){ //eğer item varsa.
            console.log(item);
            e.target.elements.txtItem.value = "";
        }*/
    }

    render(){
        
        return(
            <div>
                {this.state.err && <p style={{color:"red"}}>{this.state.err}</p>}
                <form onSubmit={this.onFormSubmit}>
                    <input type="text" name="txtItem" id="txtItem" />
                    <button type="submit">Add Item</button>
                </form>
            </div>
            
        );
    }
}



/*const template = (
    <div>
        <Header/>
        <Header/>
        <Header/>
        <Header/>
        <Header/> 
    </div>
    
   <div>
        <Header/>
        <Todo/>
        <Action/>
   </div>
   
);*/


ReactDOM.render(<TodoApp />, root);

//STATE
class Car extends React.Component{
    constructor(props){
        super(props);
        console.log(props)
        this.changeColor = this.changeColor.bind(this);
        this.changeColorBeyaz = this.changeColorBeyaz.bind(this);
        this.changeColorMavi = this.changeColorMavi.bind(this);

        this.state = {
            brand: 'Opel',
            model: 'Astra',
            color: 'red',
            year: 2020
        }
    }
    changeColor(){
        //console.log(this);
        this.setState({
            color: "blue",
        }) 

    }
    changeColorBeyaz(){
        //console.log(this);
        this.setState({
            color: "white",
        }) 

    }
    changeColorMavi(){
        this.setState({
            color:"Blue",
        })
    }
    

    render(){
        return(
            <div>
                <h1>{this.state.brand}</h1>
                <h3>{this.state.model}</h3>
                <p>Selected Color: <b>{this.state.color}</b></p>
                <button onClick={this.changeColor}>Rengi Değiştir</button>
                <p>
                    <button 
                    onClick={this.changeColorBeyaz}>Beyaz
                    </button>
                    <button
                        onClick={this.changeColorMavi}>
                        Mavi
                    </button>
                    <button>
                        Siyah
                    </button>
                    <button>
                        Turuncu
                    </button>
                </p>
                
            </div>
        );
    }
}

//Counter APP
//State
class Counter extends React.Component{
    constructor(props){
        super(props);
        this.artiBir = this.artiBir.bind(this);
        this.eksiBir = this.eksiBir.bind(this);
        this.reset = this.reset.bind(this);
        this.state = {
            number: 0,
        };
    }
    artiBir(){
        this.setState({
            number: (this.state.number += 1)
        })

    }
    eksiBir(){
        if(this.state.number ==0){
                this.setState({
                number : 0
            })
            alert("Değer 0 ın altına inemez")
        }else{
            this.setState({
                number: this.state.number -1
            })
        }
        
        
    }
    reset(){
        this.setState({
            number: 0
        })
        
    }
    

    render(){
        return(
            <div>
                <h1>Number: {this.state.number}</h1>
                <button onClick={this.artiBir}> +1 </button>
                <button onClick={this.eksiBir}> -1 </button>
                <button onClick={this.reset}> Reset </button>
            </div>
        );
    }
}

ReactDOM.render(<Counter />, root);
