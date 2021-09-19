import React, { PureComponent } from 'react';

class Habit extends PureComponent {
    componentDidMount(){

    }
    componentWillUnmount(){
        
    }
    handleIncrement = () => {
        this.props.onIncrement(this.props.habit)
    }
    handleDecrement = () => {
        this.props.onDecrement(this.props.habit)
    }
    handleDelete = () => {
        this.props.onDelete(this.props.habit)
    }

    render() {
        
        const {name, count} = this.props.habit

        return (
            <li className="habit">
                <span className="habit-name">{name}</span>
                <span className="habit-count">{count}</span>
                <button onClick={this.handleIncrement}>
                <i className="far fa-plus-square"></i>
                </button>
                <button onClick={this.handleDecrement}>
                <i className="far fa-minus-square"></i>
                </button>
                <button onClick={this.handleDelete}>
                <i className="far fa-trash-alt"></i>
                </button>
            </li>
        );
    }
}

export default Habit;