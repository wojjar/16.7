
import React from 'react';
import PropTypes from 'prop-types';
import style from './TodoList.css';

const TodoList = (props) => {

    return (
        <ol className={style.TodoList}>
            {
                props.todos.map(item => {
                    return <li key={item.id}>
                        {item.text}
                        <button className={style.button} onClick={() => props.removeTodo(item.id)}>Delete</button>
                    </li>
                })
            }
        </ol>
    );
}
TodoList.propTypes = {
    todos: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
        text: PropTypes.string.isRequired
    })).isRequired,

}

export default TodoList;