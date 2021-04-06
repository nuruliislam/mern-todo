import React, { Component } from 'react'
import Form from './Form';

export default class Todo extends Component {


    constructor(props){
        super(props);
        this.state =
        {
            todos: [],
            title: '',
            counter: 0
        } 
    }

    onChangeTodoCompleted= ( userId) =>{
        console.log(userId)
        this.setState(prevState => {  
            return {
              todos: prevState.todos.map( todo => 
                todo.userId === userId ? { ...todo, completed: !todo.completed} : todo
              ),
            }
          });
    };
    
    deleteTodo = id => {
        console.log('deleteT');
        this.setState({
            todos: [
                ...this.state.todos.filter(todo=>{
                    return todo.userId !== id
                })
            ],
            counter: this.state.counter - 1
        })
    }

    onSubmitHandler = (e)=>{
        e.preventDefault();

    
        const newObj = {
            userId: this.state.counter + 1,
            title:  this.state.title === 'maria' ? 'i am an imposter':
                    this.state.title === 'sami' ? 'i am mpostter' :
                    this.state.title === 'futh' ? 'i look ugly' :
                    this.state.title
                    , 
            completed: false,
            }
            
        
        this.setState({
            todos: [...this.state.todos, newObj],
            counter: this.state.counter+1
        })

    }

    onChange = e =>{
        this.setState({
            title: e.target.value
        })
    }


    render() {

        return (
            <div className="container">

                <div className="row">
                    <h2> Your todo List </h2>

                </div>
                    <div className="row">
                        {
                            this.state.todos.map((todo,index)=>{
                            return(
                                <Form key={ index}
                                    todo= { todo }
                                    onChangeTodo= { this.onChangeTodoCompleted }
                                    onDelete={ this.deleteTodo}
                            />
                            );
                            })
                        }
                    </div>

                    <div className="row">
                        <form onSubmit={ this.onSubmitHandler } className="todo-form"> 
                            <input type="text" placeholder="Add Todo..." onChange={ this.onChange } required />
                            <input type="submit" className="btn btn-input" defaultValue="Submit" />
                        </form>
                    </div>
            </div>
        )
    }
}