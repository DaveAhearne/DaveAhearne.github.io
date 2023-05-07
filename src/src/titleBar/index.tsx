import React from 'react';
import logo from './logo.svg';
import { useNavigation } from '../utilities/navigation';

export interface ITitleBarProps {
}

function TitleBar(props: ITitleBarProps) {
    return (
        <header>
            <i className="bi bi-robot"></i>
            <h1>Less Human Industries</h1>
        </header>
    )
}

export default TitleBar;