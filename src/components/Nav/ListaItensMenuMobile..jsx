import React, { useState } from 'react';
import { CSSTransition } from 'react-transition-group';
import './ListaItensMenuMobile.css';



export function ListaItensMenu({ titulo, listaitems }) {
    const [mostrarLista, setMostrarLista] = useState(true);

    // Função para alternar a visibilidade da lista
    const executeArrow = () => {
        setMostrarLista(prevMostrarLista => !prevMostrarLista);
    };

    return (
        <>
            <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet" />
            <div className='container_ListaItensMenu'>
                <div className='container_tituloearrow'>
                    <h2 className='ListaItensMenu_titulo'>{titulo}</h2>
                    <span 
                        onClick={executeArrow} 
                        className="material-icons" 
                        id='ListaItensMenu_titulo_arrow'
                    >
                        {mostrarLista ? 'keyboard_arrow_down' : 'keyboard_arrow_up'}
                    </span>
                </div>
                <CSSTransition
                    in={!mostrarLista}
                    timeout={{
                        appear: 1500,
                        enter: 1500,
                        exit: 1500,
                    }} // Ajuste o tempo de animação conforme necessário
                    classNames="ListaItensMenu_lista"
                    unmountOnExit
                >
                    <ul className='ListaItensMenu_lista'>
                        {listaitems.map((item, index) => (
                            <li className='ListaItensMenu_item' key={index}>
                                <a href={item.link} className='ListaItensMenu_link' target='_blank' external>
                                    {item.text}
                                </a>
                            </li>
                        ))}
                    </ul>
                </CSSTransition>
            </div>
        </>
    );
}
