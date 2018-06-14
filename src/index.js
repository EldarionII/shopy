import React    from 'react';
import ReactDOM from 'react-dom'
import {Router} from './router'
import './styles.scss'

if (process.env.NODE_ENV !== 'production') {
    console.log('DEVELOPMENT MODE');
}

if (!document.getElementById("root"))
{
    function component() {
        var element = document.createElement('div');
        element.id = 'root';

        return element;
    }

    document.body.appendChild(component());
}

ReactDOM.render(<Router/>,document.getElementById("root"));