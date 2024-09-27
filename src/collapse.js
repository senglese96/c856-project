import { useRef, useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';
import './collapse.css'

export const Collapse = ({
    expanded,
    title,
    children
}) => {
    const ref = useRef(null);
    const [height, setHeight] = useState(0);
    const [isExpanded, setIsExpanded] = useState(expanded)

    const handleFilterExpanding = () => {
        setIsExpanded((prev) => !prev);
    }

    useEffect(() => {
        if (isExpanded) setHeight(ref.current?.getBoundingClientRect().height);
        else setHeight(0);
    }, [isExpanded]);

    return (
        <div className='collapse-container'>
            <div className='collapse-bar'>
                <h3>{title}</h3>
                <button type='button' className='collapse-button' onClick={handleFilterExpanding}>
                {!isExpanded ? (
                    <FontAwesomeIcon icon={faChevronDown}/>
                ) : (
                    <FontAwesomeIcon icon={faChevronUp} />
                )}
                </button>
            </div>
            <div style={{height}} className='collapse-content'>
                <div ref={ref}>
                    <div className='collapse-content-padding'>{children}</div>
                </div>
            </div>
        </div>
    );
};