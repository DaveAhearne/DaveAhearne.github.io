import React, { useState, useEffect } from 'react';

export function useNavigation() {
    const [hashLocation, setHashLocation] = useState(window.location.hash);

    function Navigate(href: string) {
        const element = document.getElementById(href);
        if (element) {
            setHashLocation(href);
            element.scrollIntoView({ behavior: "smooth" });
        }
    }

    function NavigationLink(href: string, text: string, className?: string){
        return <a className={className ? className : ""} onClick={() => Navigate(href)}>{text}</a>
    }

    useEffect(() => {
        if(window.location.hash)
            Navigate(window.location.hash.slice(1))
    }, [])

    useEffect(() => {
        window.location.hash = hashLocation;
    }, [hashLocation])

    return {
        Navigate,
        NavigationLink,
        hashLocation
    }
}