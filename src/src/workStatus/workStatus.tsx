import React from 'react';
import { useNavigation } from '../utilities/navigation';

export interface IWorkStatusProps {
    openToWork: boolean,
}

function WorkStatus(props: IWorkStatusProps) {
    const { Navigate, NavigationLink } = useNavigation();
    const { openToWork } = props;

    const message = openToWork ? "Currently available to work!" : "Currently under contract, but contact me anyway!"

    return (
        <div className='workStatus'>
            {NavigationLink("cv", message, `${openToWork ? "open" : "closed"}`)}
        </div>
    );
}

export default WorkStatus;

