import React from 'react';
import logo from './logo.svg';
import { useNavigation } from '../utilities/navigation';
import WorkStatus from '../workStatus/workStatus';

export interface ITitleBarProps {
    id: string,
    openToWork: boolean
}

function TitleBar(props: ITitleBarProps) {
    const { id, openToWork } = props;
    return (
        <>
            <header id={id}>
                <i className="bi bi-robot"></i>
                <h1>Less Human Industries</h1>

            </header>
            <WorkStatus openToWork={openToWork} />
        </>
    )
}

export default TitleBar;