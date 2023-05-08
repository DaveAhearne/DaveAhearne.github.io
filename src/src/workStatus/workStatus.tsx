import React from 'react';
import { useNavigation } from '../utilities/navigation';

export interface IWorkStatusProps {
    openToWork: boolean,
}

function WorkStatus(props: IWorkStatusProps) {
    const { Navigate, NavigationLink } = useNavigation();
    const { openToWork } = props;

    const message = openToWork ? "Currently available to work!" : "Not currently available to work, but hopefully will be soon!"

    return (
        <div className='workStatus'>
            {NavigationLink("cv", message, `${openToWork ? "open" : "closed"}`)}
        </div>
    );
}

export default WorkStatus;

