import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import ReduxProvider from './redux/ReduxProvider';

ReactDOM.render(
    <ReduxProvider />,
    document.getElementById('root')
);
