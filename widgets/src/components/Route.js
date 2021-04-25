import { useEffect, useState } from 'react'

const Route = ({path, children}) => {

    const livePath = window.location.pathname;
    const [ currentPath, setCurrentPath ] = useState(window.location.pathname);
    
    useEffect(() => {
        const onLocationChange = () => {
            console.log('deep')
            setCurrentPath(window.location.pathname);
        }
        window.addEventListener('popState', onLocationChange);

        return () => {
            window.removeEventListener('popState', onLocationChange);
        }
    }, [window.location.pathname])

    return (
        currentPath === path ? children : null
    );
}

export default Route;