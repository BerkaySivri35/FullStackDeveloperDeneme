const root = document.getElementById("root");

//Es6
class TodoApp extends React.Component{
    render(){
        const title = "Todo Application";
        const description = "Bu bir açıklamadır"

        let app = {
            title: "Todo Application BackEnd",
            description: "Lorem, ipsum 2.",
            items: ["item1","item2","item3"]
        };

        return(
            <>
                <Header title={app.title} description={app.description}/>
                <TodoList items={app.items}/>
                <Action/>
            </>
            
        );
    }
}

//Es5 Header
const Header = function(props){
    return(
        <div>
            <h1>{props.title}</h1>
            <p>{props.description}</p>
        </div>
    );
}

//Es6 Header
/*class Header extends React.Component{
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
*/





class TodoList extends React.Component{
    render(){
        //let obj = this.props.items;
        return(
            <>
                {
                    // this.props.items.map((item,index) => 
                    // <li key={index}>{item}</li>
                    // )
                }
                {
                    this.props.items.map((item,index) =>
                        <TodoItem key={index} item={item}/>
                    )
                }
                
                
            </>
        );
    }
}

class TodoItem extends React.Component{
    render(){
        return(
            <li>{this.props.item}</li>
        );
    }
}

class Action extends React.Component{
    render(){
        return(
            <div>
                <p>
                    <button type="reset">Clear Items</button>
                </p>
                <form>
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