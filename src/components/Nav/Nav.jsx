import React, { useState, useEffect, useRef } from 'react';
import { CSSTransition } from 'react-transition-group';
import './Nav.css';
import { ListaItensMenu } from './ListaItensMenuMobile.';
import { ListaItensMenuDesktop } from './ListaItensMenuDesktop';
import { AdminComponent } from '../AdminComponent/AdminComponent';
import dataNavBar from '../../Data/Dados';
import logoUrl from '../../Data/Urls';

export function Nav() {

    /* Constantes de lógica de funcionamento do website */
    const [menuOpen, setMenuOpen] = useState(false); // Constante que controla a abertura do menu no modo mobile (<1023px)
    const [searchOpen, setSearchOpen] = useState(false); // Constante que controla a abertura do botão de pesquisa
    const [infoOpen, setInfoOpen] = useState(false); // Constante que controla a abertura do botão de informação
    const [isMobile, setIsMobile] = useState(window.innerWidth < 1023); // Seta o nav para quando em janelas menores de 1023px mostrar o menu hambúrguer e quando maior, mostra o menu aberto

    const searchRef = useRef(null); // Constante usada para saber se o usuário clicou fora quando o input search está aberto

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 1023);
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []); // Função que identifica se a janela é maior ou menor que 1023px

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (searchRef.current && !searchRef.current.contains(event.target)) {
                setSearchOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []); // Função que identifica se o usuário clicou fora do input search para ele fechar automaticamente

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (searchRef.current && !searchRef.current.contains(event.target)) {
                setInfoOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []); // Função que identifica se o usuário clicou fora do menu info para ele fechar automaticamente

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (searchRef.current && !searchRef.current.contains(event.target)) {
                setMenuOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []); // Função que identifica se o usuário clicou fora do menu hamburguer para ele fechar automaticamente

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    } // Função que identifica se o menu hamburguer foi clicado ou não

    const toggleSearch = () => {
        setSearchOpen(!searchOpen)
    } // Função que identifica se o botão search foi clicado ou não

    const toggleInfo = () => {
        setInfoOpen(!infoOpen)
    } // Função que identifica se o botão info foi clicado ou não

    const [scrollPosition, setScrollPosition] = useState(0);
    const [isVisible, setIsVisible] = useState(true);

    const handleScroll = () => {
        const currentScrollPosition = window.pageYOffset;
    
        if (currentScrollPosition > scrollPosition) {
          // Usuário rolando para baixo, Nav desaparece
          setIsVisible(false);
        } else {
          // Usuário rolando para cima, Nav reaparece
          setIsVisible(true);
        }
    
        setScrollPosition(currentScrollPosition);
      };
    
      useEffect(() => {
        window.addEventListener('scroll', handleScroll);
    
        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
      }, [scrollPosition]);

    return (
        <>

        {/* BONUS: Podemos incluir um menu que desaparece/reaparece conforme a rolagem do usuario */}
        <div className='conteudoNav_HomePage'>
        {/* Comentário animação do menu hamburguer incluindo botão de fechamento (este menu só existe no mobile <1023px)*/}
            <CSSTransition in={menuOpen} timeout={2000} classNames="offcanvas" unmountOnExit> 
                <div className="offcanvas-nav">
                    <div className='menu-botoes'>
                        <button onClick={toggleMenu} className='menu-botao-fechar'>
                        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#FFFFFF">
                        <path d="M0 0h24v24H0z" fill="none"/>
                         <path d="M18.3 5.71a.996.996 0 00-1.41 0L12 10.59 7.11 5.7a.996.996 0 10-1.41 1.41L10.59 12l-4.88 4.88a.996.996 0 101.41 1.41L12 13.41l4.88 4.88a.996.996 0 101.41-1.41L13.41 12l4.88-4.88a.996.996 0 000-1.41z"/>
                        </svg>
                        </button>
                    </div>

                    <div className='container-logo-listas'>
                        <a href="index.html">
                            <img src={logoUrl.logoUrl} className="logo-menu" alt="" />
                        </a>

                        {/* Componente que permite adicionar itens ao menu hamburguer aberto no mobile, permite consumir dados externos, no caso estamos utilizando um "fakebd" de exemplo */}
                        
                        {Object.keys(dataNavBar).map((key) => (
                            <ListaItensMenu
                            key={key}
                            titulo={dataNavBar[key].titulo}
                            listaitems={dataNavBar[key].listaitems}
                            />
                        ))}

                    </div>
                </div>
            </CSSTransition>

            {/* Navbar principal do componente contendo logo e botões para telas mobile (<1023px) */}
            <nav className="navbar-brand">
                <a href="index.html">
                    <img src="././assets/logo-light@2x.png" className="logo" alt="" />
                </a>                    
                   {isMobile ? ( 

                    <div className='botoes_direita'>
                    <AdminComponent />
                        <button className='botao-hamburguer' onClick={toggleMenu}>
                        {menuOpen ? (
                            <svg xmlns="http://www.w3.org/2000/svg" height="35px" viewBox="0 -960 960 960" width="35px" fill="#FFFFFF">
                                <path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z" />
                            </svg>
                        ) : (
                            <svg xmlns="http://www.w3.org/2000/svg" height="35px" viewBox="0 -960 960 960" width="35px" fill="#FFFFFF">
                                <path d="M120-240v-66.67h720V-240H120Zm0-206.67v-66.66h720v66.66H120Zm0-206.66V-720h720v66.67H120Z" />
                            </svg>
                        )}
                        </button>


                    <div className="search-container" ref={searchRef}>
                    <button className='botao-pesquisar' onClick={toggleSearch}>
                        <svg xmlns="http://www.w3.org/2000/svg" height="30px" viewBox="0 -960 960 960" width="30px" fill="#FFFFFF">
                        <path d="M792-120.67 532.67-380q-30 25.33-69.64 39.67Q423.39-326 378.67-326q-108.44 0-183.56-75.17Q120-476.33 120-583.33t75.17-182.17q75.16-75.17 182.5-75.17 107.33 0 182.16 75.17 74.84 75.17 74.84 182.27 0 43.23-14 82.9-14 39.66-40.67 73l260 258.66-48 48Zm-414-272q79.17 0 134.58-55.83Q568-504.33 568-583.33q0-79-55.42-134.84Q457.17-774 378-774q-79.72 0-135.53 55.83-55.8 55.84-55.8 134.84t55.8 134.83q55.81 55.83 135.53 55.83Z" />
                        </svg>
                    </button>
                    {/* Animação do input de pesquisa do mobile (<1023px) */}
                    <CSSTransition in={searchOpen} timeout={300} classNames="dropdown" unmountOnExit>
                    <div className="input-wrapper">
                    <input type="search" className='input_pesquisa' placeholder='Pesquise algo...' />
                    </div>
                    </CSSTransition>
                    </div>

                    <div className='botao-informacao_container'>
                    <button className='botao-informacao' onClick={toggleInfo}>
                        <svg xmlns="http://www.w3.org/2000/svg" height="30px" viewBox="0 -960 960 960" width="30px" fill="#FFFFFF">
                        <path d="M448.67-280h66.66v-240h-66.66v240Zm31.32-316q15.01 0 25.18-9.97 10.16-9.96 10.16-24.7 0-15.3-10.15-25.65-10.16-10.35-25.17-10.35-15.01 0-25.18 10.35-10.16 10.35-10.16 25.65 0 14.74 10.15 24.7 10.16 9.97 25.17 9.97Zm.19 516q-82.83 0-155.67-31.5-72.84-31.5-127.18-85.83Q143-251.67 111.5-324.56T80-480.33q0-82.88 31.5-155.78Q143-709 197.33-763q54.34-54 127.23-85.5T480.33-880q82.88 0 155.78 31.5Q709-817 763-763t85.5 127Q880-563 880-480.18q0 82.83-31.5 155.67Q817-251.67 763-197.46q-54 54.21-127 85.84Q563-80 480.18-80Zm.15-66.67q139 0 236-97.33t97-236.33q0-139-96.87-236-96.88-97-236.46-97-138.67 0-236 96.87-97.33 96.88-97.33 236.46 0 138.67 97.33 236 97.33 97.33 236.33 97.33ZM480-480Z" />
                        </svg>
                    </button>

                    {/* Animação do botão info do mobile (<1023px) */}
                    <CSSTransition 
                        in={infoOpen}
                        timeout={2000}
                        classNames="offcanvas_info"
                        unmountOnExit
                    >
                        <div className="offcanvas-nav_info">
                        <div className='menu-botoes'>
                            <button onClick={toggleInfo} className='menu-botao-fechar'>
                            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#FFFFFF">
                                <path d="M0 0h24v24H0z" fill="none"/>
                                <path d="M18.3 5.71a.996.996 0 00-1.41 0L12 10.59 7.11 5.7a.996.996 0 10-1.41 1.41L10.59 12l-4.88 4.88a.996.996 0 101.41 1.41L12 13.41l4.88 4.88a.996.996 0 101.41-1.41L13.41 12l4.88-4.88a.996.996 0 000-1.41z"/>
                            </svg>
                            </button>
                        </div>

                        <div className='container-logo-listas'>
                            <a href="index.html">
                            <img src="././assets/logo-light@2x.png" className="logo-menu" alt="" />
                            </a>

                            <p className='conteudo_menu_texto'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam accusantium corrupti culpa impedit accusamus ad maiores explicabo perferendis assumenda voluptates expedita minus reiciendis consectetur perspiciatis suscipit quam, molestiae corporis quod?</p>
                            <p className='conteudo_menu_texto'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam accusantium corrupti culpa impedit accusamus ad maiores explicabo perferendis assumenda voluptates expedita minus reiciendis consectetur perspiciatis suscipit quam, molestiae corporis quod?</p>
                            <p className='conteudo_menu_texto'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam accusantium corrupti culpa impedit accusamus ad maiores explicabo perferendis assumenda voluptates expedita minus reiciendis consectetur perspiciatis suscipit quam, molestiae corporis quod?</p>
                            <p className='conteudo_menu_texto'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam accusantium corrupti culpa impedit accusamus ad maiores explicabo perferendis assumenda voluptates expedita minus reiciendis consectetur perspiciatis suscipit quam, molestiae corporis quod?</p>
                            <p className='conteudo_menu_texto'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam accusantium corrupti culpa impedit accusamus ad maiores explicabo perferendis assumenda voluptates expedita minus reiciendis consectetur perspiciatis suscipit quam, molestiae corporis quod?</p>
                            <p className='conteudo_menu_texto'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam accusantium corrupti culpa impedit accusamus ad maiores explicabo perferendis assumenda voluptates expedita minus reiciendis consectetur perspiciatis suscipit quam, molestiae corporis quod?</p>
                            <p className='conteudo_menu_texto'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam accusantium corrupti culpa impedit accusamus ad maiores explicabo perferendis assumenda voluptates expedita minus reiciendis consectetur perspiciatis suscipit quam, molestiae corporis quod?</p>
                        </div>
                        </div>
                    </CSSTransition>
                    </div>

                    </div>
                    ): 
                    
                    <div className='botoes_menuDesktop'> 

                         {/* Mapeando e renderizando ListaItensMenuDesktop dinamicamente */}
                        {Object.keys(dataNavBar).map((key) => (
                            <ListaItensMenuDesktop
                            key={key}
                            titulo={dataNavBar[key].titulo}
                            listaitens={dataNavBar[key].listaitems}
                            />
                        ))}
                    
                    </div>}

                    {/* Acima temos o menu de botões do desktop, LISTAITENSMENUDESKTOP é um componente que permite inserir dados dinamicamente, estamos consumindo o mesmo "FAKEDB" do outro componente para dispor o conteúdo */}


                    {/* Abaixo temos a função que verifica se estamos no ambiente desktop, caso sim ele dispõe os botões do desktop */}
                { !isMobile? 

                
                <div className='botoes_direita'>
                    <AdminComponent />
                    <div className="search-container" ref={searchRef}>
                    <button className='botao-pesquisar' onClick={toggleSearch}>
                        <svg xmlns="http://www.w3.org/2000/svg" height="30px" viewBox="0 -960 960 960" width="30px" fill="#FFFFFF">
                        <path d="M792-120.67 532.67-380q-30 25.33-69.64 39.67Q423.39-326 378.67-326q-108.44 0-183.56-75.17Q120-476.33 120-583.33t75.17-182.17q75.16-75.17 182.5-75.17 107.33 0 182.16 75.17 74.84 75.17 74.84 182.27 0 43.23-14 82.9-14 39.66-40.67 73l260 258.66-48 48Zm-414-272q79.17 0 134.58-55.83Q568-504.33 568-583.33q0-79-55.42-134.84Q457.17-774 378-774q-79.72 0-135.53 55.83-55.8 55.84-55.8 134.84t55.8 134.83q55.81 55.83 135.53 55.83Z" />
                        </svg>
                    </button>

                    {/* Animação do input de pesquisa do menu desktop (>1023px) */}
                    <CSSTransition 
                        in={searchOpen}
                        timeout={300}
                        classNames="dropdown"
                        unmountOnExit
                    >
                    <div className="input-wrapper">
                    <input type="search" className='input_pesquisa' placeholder='Pesquise algo...' />
                    </div>
                    </CSSTransition>
                    </div>
                    <div className='botao-informacao_container'>
                    <button className='botao-informacao' onClick={toggleInfo}>
                        <svg xmlns="http://www.w3.org/2000/svg" height="30px" viewBox="0 -960 960 960" width="30px" fill="#FFFFFF">
                        <path d="M448.67-280h66.66v-240h-66.66v240Zm31.32-316q15.01 0 25.18-9.97 10.16-9.96 10.16-24.7 0-15.3-10.15-25.65-10.16-10.35-25.17-10.35-15.01 0-25.18 10.35-10.16 10.35-10.16 25.65 0 14.74 10.15 24.7 10.16 9.97 25.17 9.97Zm.19 516q-82.83 0-155.67-31.5-72.84-31.5-127.18-85.83Q143-251.67 111.5-324.56T80-480.33q0-82.88 31.5-155.78Q143-709 197.33-763q54.34-54 127.23-85.5T480.33-880q82.88 0 155.78 31.5Q709-817 763-763t85.5 127Q880-563 880-480.18q0 82.83-31.5 155.67Q817-251.67 763-197.46q-54 54.21-127 85.84Q563-80 480.18-80Zm.15-66.67q139 0 236-97.33t97-236.33q0-139-96.87-236-96.88-97-236.46-97-138.67 0-236 96.87-97.33 96.88-97.33 236.46 0 138.67 97.33 236 97.33 97.33 236.33 97.33ZM480-480Z" />
                        </svg>
                    </button>
                                    
                    {/* Animação do menu info do menu desktop (>1023px) */}

                    <CSSTransition
                        in={infoOpen}
                        timeout={2000}
                        classNames="offcanvas_info"
                        unmountOnExit
                    >
                        <div className="offcanvas-nav_info">
                        <div className='menu-botoes'>
                            <button onClick={toggleInfo} className='menu-botao-fechar'>
                            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#FFFFFF">
                                <path d="M0 0h24v24H0z" fill="none"/>
                                <path d="M18.3 5.71a.996.996 0 00-1.41 0L12 10.59 7.11 5.7a.996.996 0 10-1.41 1.41L10.59 12l-4.88 4.88a.996.996 0 101.41 1.41L12 13.41l4.88 4.88a.996.996 0 101.41-1.41L13.41 12l4.88-4.88a.996.996 0 000-1.41z"/>
                            </svg>
                            </button>
                        </div>

                        <div className='container-logo-listas'>
                            <a href="index.html">
                            <img src="././assets/logo-light@2x.png" className="logo-menu" alt="" />
                            </a>
                            
                            <p className='conteudo_menu_texto'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam accusantium corrupti culpa impedit accusamus ad maiores explicabo perferendis assumenda voluptates expedita minus reiciendis consectetur perspiciatis suscipit quam, molestiae corporis quod?</p>
                            <p className='conteudo_menu_texto'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam accusantium corrupti culpa impedit accusamus ad maiores explicabo perferendis assumenda voluptates expedita minus reiciendis consectetur perspiciatis suscipit quam, molestiae corporis quod?</p>
                            <p className='conteudo_menu_texto'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam accusantium corrupti culpa impedit accusamus ad maiores explicabo perferendis assumenda voluptates expedita minus reiciendis consectetur perspiciatis suscipit quam, molestiae corporis quod?</p>
                            <p className='conteudo_menu_texto'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam accusantium corrupti culpa impedit accusamus ad maiores explicabo perferendis assumenda voluptates expedita minus reiciendis consectetur perspiciatis suscipit quam, molestiae corporis quod?</p>
                            <p className='conteudo_menu_texto'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam accusantium corrupti culpa impedit accusamus ad maiores explicabo perferendis assumenda voluptates expedita minus reiciendis consectetur perspiciatis suscipit quam, molestiae corporis quod?</p>
                            <p className='conteudo_menu_texto'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam accusantium corrupti culpa impedit accusamus ad maiores explicabo perferendis assumenda voluptates expedita minus reiciendis consectetur perspiciatis suscipit quam, molestiae corporis quod?</p>
                            <p className='conteudo_menu_texto'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam accusantium corrupti culpa impedit accusamus ad maiores explicabo perferendis assumenda voluptates expedita minus reiciendis consectetur perspiciatis suscipit quam, molestiae corporis quod?</p>

                        </div>
                        </div>
                    </CSSTransition>
                    </div>
                    
                </div>
                : null}
                
            </nav>


            <div className='conteudo_container'>
                <h1 className='conteudo_container_titulo'>We are Snowlake</h1>
                <h3 className='conteudo_container_conteudo'>A digital & branding company that believes in
                the power of creative ideas and great design.</h3>
            </div>

        </div>

        </>
    );
}
