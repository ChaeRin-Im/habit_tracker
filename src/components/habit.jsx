import React, { PureComponent } from 'react';

class Habit extends PureComponent {

    componentDidMount() { //사용자에게 보여질 때
        console.log(`habit: ${this.props.habit.name} mounted`);
    }

    componentWillUnmount() { //우리가 지울 때
        console.log(`habit: ${this.props.habit.name} will unmounted`);
    }

    handleIncrement = () => {
        this.props.onIncrement(this.props.habit);
    };
    handleDecrement = () => {
        this.props.onDecrement(this.props.habit);
    };
    handleDelete = () => {
        this.props.onDelete(this.props.habit);
    };

    render() {
        //외부에서 전달받은 변수를 바인딩
        const {name, count} = this.props.habit;
        return (
            <li className="habit">
                <span className="habit-name">{name}</span>
                <span className="habit-count">{count}</span>
                <button className="habit-button habit-increase" onClick={this.handleIncrement}>
                    <i className="fas fa-plus-square"></i>
                </button>
                <button className="habit-button habit-decrease" onClick={this.handleDecrement}>
                    <i className="fas fa-minus-square"></i>
                </button>
                <button className="habit-button habit-delete" onClick={this.handleDelete}>
                    <i className="fas fa-trash"></i>
                </button>
            </li>
        );
    }
}

export default Habit;