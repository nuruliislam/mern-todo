import React, { Component } from 'react'

export default class Form extends Component {
    render() {
            const { userId, title, completed } = this.props.todo;
            return (
                <div className="row text-left">
                    <div className="col">
                        <input  className="form-check-input" 
                            type="checkbox" 
                            checked={ completed }
                            onChange={ ()=> this.props.onChangeTodo(userId) }
                        />

                        <label className = { completed ? "completedText label-text": "label-text" }>{ title } </label>
                    </div> 

                    <div className="col text-right">
                        <button className="btn btn-delete" onClick={ ()=> this.props.onDelete(userId) } > Delete </button>
                    </div>  
                </div>
            );
    }
}

