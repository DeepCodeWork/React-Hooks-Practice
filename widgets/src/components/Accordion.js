import React, {useState} from 'react';

const Accordion = ({items}) => {
    
    const [activeIndex, setIndex] = useState(null)
    const onClickTitle = (index) => {
        setIndex(index);
    }
    const isActive = (index) => index === activeIndex ? 'active' : ''; 
    const renderedItems = items.map((item, index) => {
        const active = isActive(index);
        return <React.Fragment key = {index}>
            <div className = {`title ${active}`}
            onClick = {() => onClickTitle(index)}>
                <i className = "dropdown icon" ></i>
                {item.title}
            </div>
            <div className = {`content ${active}`}>
                <p>{item.content}</p>
            </div>
        </React.Fragment>
    })
    return  <div className = 'ui styled accordion'>{renderedItems}</div> 
};

export default Accordion;