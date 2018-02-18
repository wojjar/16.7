
import React from 'react';
import style from './TodoForm.css';
import PropTypes from 'prop-types';

class TodoForm extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            task: ''
        };
        this.changeTask = this.changeTask.bind(this);
    }
    changeTask(event) {
        this.setState({
            task: event.target.value
        });
    }
    render() {
        return (
            <form className={style.TodoForm}>
                <div>
                    <input type={"text"} className={style.inputForm}  placeholder={"New task..."} value={this.state.task} onChange={this.changeTask}/>
                </div>
                <button className={style.button} type={"button"} onClick={ () => this.props.addTodo(this.state.task)}>Add task</button>
            </form>
        );
    }
}

TodoForm.propTypes = {
    data: PropTypes.array.isRequired,
    addTodo: PropTypes.func.isRequired
}

export default TodoForm;