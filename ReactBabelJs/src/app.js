const root = document.getElementById("root");

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
