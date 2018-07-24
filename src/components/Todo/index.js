import React, { Component } from "react" 
import { Adtodo } from "../../store/action/action"
import { connect } from "react-redux"

class Todo extends Component {
    constructor(props){
        super(props);
        this.state={
        todoVal:"",
        }
    } 
    adTodo(){
        console.log(this.state.todoVal)
       let todo = {
            todo:this.state.todoVal
        }
        this.props.todos(todo)
        // console.log(this.props.item.AddTodo)
    }

    on_Change(ev){
       this.setState({todoVal:ev.target.value})
    }
    render(){
        return(
            <div>
                <input value={this.state.todoVal} 
                onChange={this.on_Change.bind(this)} />
                <button onClick={this.adTodo.bind(this)} >Add</button>
                <ul>
                    {this.props.item.AddTodo.map((val, ind)=>{
                        return(
                            <li key={ind}>
                            {val.todo}
                            </li>
                        )
                    })}
                </ul>

            </div>
        )
    }
}

let mapStateToProps = (state)=>{
    // console.log(state,"++++++++++++++++ state")
    return({
        item:state.root
    })
}

const mapDispatchToProps = (dispatch)=>{
    return{
        todos:(data)=>{
            dispatch(Adtodo(data))
        }
    }
}





export default connect(mapStateToProps,mapDispatchToProps) (Todo)