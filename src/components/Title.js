import React from 'react';
import style from './Title.css';

class Title extends React.Component {
    render() {
        return (
            <div >
                <h1>To do List</h1>
                <p>{"Number of tasks: " + this.props.todoslength}</p>
            </div>
        );
    }
}

export default Title;