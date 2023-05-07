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

    useEffect(() => {
        window.location.hash = hashLocation;
    }, [hashLocation])

    return {
        Navigate,
        hashLocation
    }
}