const Link = ({href, className, children}) => {

    const onClick = (e) => {
        if(e.metaKey || e.ctrlKey) return;
        e.preventDefault();
        window.history.pushState({} , '', href);

        const navEvent = new PopStateEvent('popState');
        window.dispatchEvent(navEvent);
    }
    return (
        <a 
            href = {href}
            className = {className}
            onClick = {onClick}
            >{children}</a>
    );
}

export default Link;