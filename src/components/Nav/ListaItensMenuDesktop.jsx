import React, { useState } from 'react';
import { CSSTransition } from 'react-transition-group';
import './ListaItensMenuDesktop.css';

export function ListaItensMenuDesktop({ titulo, listaitens }) {
    const [isDropdownVisible, setIsDropdownVisible] = useState(false);

    const handleMouseEnter = () => {
        setIsDropdownVisible(true);
    };

    const handleMouseLeave = () => {
        setIsDropdownVisible(false);
    };

    return (
        <div
            className='container_lista_wrapper'
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            <div className='titulo'>{titulo}</div>
            <CSSTransition
                in={isDropdownVisible}
                timeout={300}
                classNames="dropdown"
                unmountOnExit
            >
                <ul className='container_lista'>
                    {listaitens.map((item, index) => (
                        <li className='ListaItensMenu_item' key={index}>
                            <a href={item.link} className='ListaItensMenu_link' target='_blank' rel='noopener noreferrer'>
                                {item.text}
                            </a>
                        </li>
                    ))}
                </ul>
            </CSSTransition>
        </div>
    );
}
