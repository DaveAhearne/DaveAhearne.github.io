import React from 'react';

export interface IOrganizationDetailsProps {
    logo: string,
    name: string,
    title: string,
    dateRange: string,
    link?: string
    content?: React.ReactNode,
}

function OrganizationDetails(props: IOrganizationDetailsProps) {
    const { logo, title, dateRange, content, name, link } = props;
    return (
        <div className='companyDetails'>
            <a href={link}>
                <img src={logo} className='companyLogo' alt={`${name} logo`} />
            </a>
            <div>
                <div className='companyJobTitle'>
                    <h4>{title}</h4>
                    <h5>{dateRange}</h5>
                </div>
                {content ? content : <></>}
            </div>
        </div>
    )
}

export default OrganizationDetails;