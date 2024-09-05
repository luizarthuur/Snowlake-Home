import './AdminComponent.css';
import axios from 'axios';
import React, { useState, useRef, useEffect } from 'react';
import { CSSTransition } from 'react-transition-group';
import { useForm, useFieldArray } from 'react-hook-form';
import { Imagemevalidacaocomponent } from './Imagemevalidacaocomponent/Imagemevalidacaocomponent';
import { MultipleCarousels } from './Cardcarouselcomponent/Cardcarouselcomponent';



export function AdminComponent() {

  const [menuOpen, setMenuOpen] = useState(false); // Controla a abertura do menu no modo mobile
  const [listOpen, setListOpen] = useState(null); // Controla a lista aberta

  const { handleSubmit, register } = useForm();

  const menuRef = useRef(null); // Referência para a área do menu

  function ToggleMenuAdmin() {
    setMenuOpen((prevMenuOpen) => {
      const isOpen = !prevMenuOpen;
  
      if (isOpen) {
        // Se o menu for aberto
        document.body.style.marginLeft = '26%';
      } else {
        // Se o menu for fechado
        document.body.style.marginLeft = '0';
      }
  
      return isOpen;
    });
  }
  
  // Adiciona o manipulador de clique fora do menu
  useEffect(() => {
    // Adiciona a transição ao body
    document.body.style.transition = 'margin-left 1.5s ease';
  
    function handleClickOutside(event) {
      const exceptions = ['AdminContainerBotao', 'scrollbar'];
  
      const clickedException = exceptions.some((exception) => 
        event.target.id === exception || event.target.classList.contains(exception)
      );
  
      // Verifica se o clique ocorreu na área das barras de rolagem
      const isScrollBarClick = (event.clientX >= (window.innerWidth - 15)) || (event.clientY >= (window.innerHeight - 15));
  
      if (menuOpen && menuRef.current && !menuRef.current.contains(event.target) && !clickedException && !isScrollBarClick) {
        setMenuOpen(false);
        document.body.style.marginLeft = '0'; // Reseta a margem ao clicar fora 
      }
    }
  
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [menuOpen]);
  
  

// Função chamada ao submeter o formulário
const onSubmit = (data, event) => {
  const showAlertAndPrevent = (message) => {
    event.preventDefault();
    alert(message);
  };

  // Validação para o formulário de Logo
  if (!data.inputlogo) {
    showAlertAndPrevent('Você deve preencher todos os campos do formulário Logo antes de enviar!');
    return;
  }

  // Validação para o formulário de Área de navegação
  if (!data.titulo_nav || !data.subtitulo_nav || !data.papel_parede_Nav) {
    showAlertAndPrevent('Você deve preencher todos os campos do formulário Área de navegação antes de enviar!');
    return;
  }

  // Validação para o formulário de Conteúdo Inicial
  if (!data.titulo_initialcontent || !data.subtitulo_initialcontent || !data.papel_parede_InitialContent) {
    showAlertAndPrevent('Você deve preencher todos os campos do formulário Conteúdo Inicial antes de enviar!');
    return;
  }

  // Validação para o formulário de Área de Vídeo
  if (!data.titulo_video || !data.link_video || !data.papel_parede_Video) {
    showAlertAndPrevent('Você deve preencher todos os campos do formulário Área de Vídeo antes de enviar!');
    return;
  }

  // Validação para o formulário Carrossel de Imagens
  if (!data.imagens_carrossel || !data.multiplo_carrossel) {
    showAlertAndPrevent('Você deve preencher todos os campos do formulário Carrossel de imagens antes de enviar!');
    return;
  }

  // Validação para o formulário de Informações de Contato
  if (!data.titulo_informacoes || !data.informacoes_email || !data.informacoes_endereco || !data.informacoes_telefone) {
    showAlertAndPrevent('Você deve preencher todos os campos do formulário Informações de Contato antes de enviar!');
    return;
  }

  // Se todas as validações passarem, o formulário será enviado normalmente
};


// Função para alternar a lista
function ToggleListOpen(key) {
  setListOpen(listOpen === key ? null : key);
}


  const listaDeItens = [
    {
      key: 'logo',
      titulo: 'Logo',
      content: (
        <div className='input_admin'>
          <h3 className='admin_titulo_input'>Escolha a logo do seu site</h3>
          <label htmlFor="inputlogo" className="custom-file-upload">
            <span className="plus-icon">+</span> Escolher Logo
            <Imagemevalidacaocomponent {...register("inputlogo")} name={'inputlogo'} nome={'inputlogo'} MensagemdeErro={'A imagem deve ter ao menos 128x42 pixels de resolução'} minWidth={128} minHeight={42} required/>
          </label>

        </div>
      ),
    },
    {
      key: 'Área de Navegação',
      titulo: 'Área de Navegação',
      content: (
        <div className='input_admin'>
          <h3 className='admin_titulo_input'>Escolha o título e subtítulo da sua área de navegação</h3>
          <label htmlFor="titulo_nav">Título</label>
          <input type="text" {...register("titulo_nav")} id="titulo_nav" maxLength={100} minLength={8} required placeholder='Digite o Título (Mínimo de 8 caracteres)'/>
          <label htmlFor="subtitulo_nav">Subtítulo</label>
          <input type="text" {...register("subtitulo_nav")} id="subtitulo_nav" maxLength={200} required placeholder='Digite o Subtítulo' />
          <h3 className='admin_titulo_input'>Escolha o papel de parede da sua área de navegação - (Possibilidade de até 4 imagens para fazer um carrossel)</h3>
          <label htmlFor="papel_parede_Nav" className="custom-file-upload">
            <span className="plus-icon">+</span> Escolher papel de parede
            <Imagemevalidacaocomponent {...register("papel_parede_Nav")} name={"papel_parede_Nav"} nome={"papel_parede_Nav"} MensagemdeErro={'As imagens devem ter ao menos 2000x1335 pixels de resolução'} minWidth={2000} minHeight={1335} multiple={true} required/>
          </label>
          
        </div>
      ),
    },
    {
        key: 'Conteúdo inicial',
        titulo: 'Conteúdo inicial',
        content: (
          <div className='input_admin'>
            <h3 className='admin_titulo_input'>Escolha o título e conteúdo da sua área de conteúdo inicial</h3>
            <label htmlFor="titulo_nav">Título</label>
            <input type="text" {...register("titulo_initialcontent")} id="titulo_initialcontent" maxLength={100} minLength={8} required placeholder='Digite o Título (Mínimo de 8 caracteres)'/>
            <label htmlFor="subtitulo_nav">Conteúdo</label>
            <input type="text" {...register("subtitulo_initialcontent")} id="subtitulo_initialcontent" maxLength={600} required placeholder='Digite o Conteúdo'/>
            <h3 className='admin_titulo_input'>Escolha a imagem que ficará próxima do seu conteúdo</h3>
            <label htmlFor="papel_parede_InitialContent" className="custom-file-upload">
              <span className="plus-icon">+</span> Escolher imagem
            <Imagemevalidacaocomponent {...register('papel_parede_InitialContent')} name={'papel_parede_InitialContent'} nome={'papel_parede_InitialContent'} MensagemdeErro={'A imagem deve ter ao menos 550 x 485 pixels de resolução'} minWidth={550} minHeight={485} required/>
            </label>
          </div>
        ),
      },
      {
        key: 'Área de Vídeo',
        titulo: 'Área de Vídeo',
        content: (
          <div className='input_admin'>
            <h3 className='admin_titulo_input'>Escolha o título, o link de Referência e o papel de parede da sua área de vídeo</h3>
            <label htmlFor="titulo_nav">Título</label>
            <input type="text" {...register("titulo_video")} id="titulo_video" maxLength={100} minLength={8} required placeholder='Digite o Título (Mínimo de 8 caracteres)'/>
            <label htmlFor="subtitulo_nav">Link de Referência</label>
            <input type="URL" {...register("link_video")} id="link_video" maxLength={600} required placeholder='Digite o link externo de redirecionamento'/>
            <h3 className='admin_titulo_input'>Escolha o papel de parede</h3>
            <label htmlFor="papel_parede_Video" className="custom-file-upload">
              <span className="plus-icon">+</span> Escolher imagem
              <Imagemevalidacaocomponent {...register('papel_parede_Video')} name={'papel_parede_Video'} nome={'papel_parede_Video'} MensagemdeErro={'A imagem deve ter ao menos 2000 x 1410 pixels de resolução'} minWidth={2000} minHeight={1410} multiple={false} required/>
            </label>
          </div>
        ),
      },
      {
        key: 'Carrossel de imagens',
        titulo: 'Carrossel de imagens',
        content: (
          <div className='input_admin'>
            <h3 className='admin_titulo_input'>Escolha até 8 imagens para fazer um carrossel de imagens</h3>
            <h3 className='admin_titulo_input'>Escolha as imagens</h3>
            <label htmlFor="imagens_carrossel" className="custom-file-upload">
              <span className="plus-icon">+</span> Escolher imagem
              <Imagemevalidacaocomponent {...register('imagens_carrossel')} name={'imagens_carrossel'} nome={'imagens_carrossel'} MensagemdeErro={'As imagens devem ter ao menos 150 x 150 pixels de resolução'} minWidth={150} minHeight={150} multiple={true} minImages={5} maxImages={8} required/>
            </label>
          </div>
        ),
      },
      {
        key: 'Carrossel de cards',
        titulo: 'Carrossel de cards',
        content: (
          <div className='input_admin'>
              <MultipleCarousels required {...register('multiplo_carrossel')}/>
          </div>
        ),
      },
      {
        key: 'Área de informações',
        titulo: 'Área de informações',
        content: (
          <div className='input_admin'>
            <h3 className='admin_titulo_input'>Escolha o título para sua área de informações</h3>
            <label htmlFor="titulo_informacoes">Título</label>
            <input type="text" {...register("titulo_informacoes")} id="titulo_informacoes" maxLength={100} minLength={8} required placeholder='Digite o Título (Mínimo de 8 caracteres)'/>
            <label htmlFor="informacoes_endereco">Endereço</label>
            <input type="text" {...register("informacoes_endereco")} id="informacoes_endereco" maxLength={600} required placeholder='Digite o seu endereço'/>
            <label htmlFor="informacoes_telefone">Telefone</label>
            <input type="text" {...register("informacoes_telefone")} id="informacoes_telefone" maxLength={600} required placeholder='Digite o seu telefone'/>
            <label htmlFor="informacoes_email">Email Comercial</label>
            <input type="text" {...register("informacoes_email")} id="informacoes_email" maxLength={600} required placeholder='Digite o seu email comercial'/>
            
          </div>
        ),
      },

    // Adicione outros itens aqui com a mesma estrutura
  ];

  return (
    <div className='AdminContainer'>
      <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />

      <button className='AdminContainerBotao' id='AdminContainerBotao' onClick={ToggleMenuAdmin}>
      <svg className='AdminContainerBotao' id='AdminContainerBotao' xmlns="http://www.w3.org/2000/svg" height="30px" viewBox="0 -960 960 960" width="30px" fill="#FFFFFF"><path d="M672-288q25 0 42.5-17.5T732-348q0-25-17.5-42.5T672-408q-25 0-42.5 17.5T612-348q0 25 17.5 42.5T672-288Zm-.09 120Q704-168 731-184t43-42q-23-13-48.72-19.5t-53.5-6.5q-27.78 0-53.28 7T570-226q16 26 42.91 42 26.91 16 59 16ZM480-96q-133-30-222.5-150.5T168-515v-229l312-120 312 120v221q-22-10-39-16t-33-8v-148l-240-92-240 92v180q0 49 12.5 96t36.5 88.5q24 41.5 58.5 76T425-194q8 23 25.5 48.5T489-98l-4.5 1-4.5 1Zm191.77 0Q592-96 536-152.23q-56-56.22-56-136Q480-368 536.23-424q56.22-56 136-56Q752-480 808-423.77q56 56.22 56 136Q864-208 807.77-152q-56.22 56-136 56ZM480-480Z"/></svg>
      </button>

      <CSSTransition in={menuOpen} timeout={2000} classNames="offcanvas_admincomponent" unmountOnExit>
        <div className="offcanvas-nav_admincomponent" ref={menuRef}>
          <div className='menu-botoes'>
            <button onClick={ToggleMenuAdmin} className='menu-botao-fechar'>
              <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#FFFFFF">
                <path d="M0 0h24v24H0z" fill="none" />
                <path d="M18.3 5.71a.996.996 0 00-1.41 0L12 10.59 7.11 5.7a.996.996 0 10-1.41 1.41L10.59 12l-4.88 4.88a.996.996 0 101.41 1.41L12 13.41l4.88 4.88a.996.996 0 101.41-1.41L13.41 12l4.88-4.88a.996.996 0 000-1.41z" />
              </svg>
            </button>
          </div>

          <div className='container-logo-listas'>
            <div className='inicio_area_admin'>
              <a href="index.html">
                <img src="https://www.vistatecnologia.com.br/_next/image?url=%2Flogo_branca.png&w=128&q=75" className="logo-menu" alt="" />
              </a>
              <h1>Admin Area</h1>
              <span className="material-symbols-outlined" id='inicio_area_admin_cadeado'>lock</span>
            </div>

            <form onSubmit={handleSubmit(onSubmit)} className='form_admin'>
              {listaDeItens.map(item => (
                <div key={item.key}>
                  <div className='item_menu_input_admin'>
                    <h3 className='titulo_menu_input_admin' onClick={() => ToggleListOpen(item.key)}>{item.titulo}</h3>
                    <span className="material-symbols-outlined" id='arrow_down_menu_input_admin' onClick={() => ToggleListOpen(item.key)}>
                      {listOpen === item.key ? 'keyboard_arrow_up' : 'keyboard_arrow_down'}
                    </span>
                  </div>

                  <CSSTransition
                    in={listOpen === item.key}
                    timeout={{
                      appear: 150,
                      enter: 150,
                      exit: 10,
                    }}
                    classNames="ListaItensMenu_lista"
                    unmountOnExit
                  >
                    <ul className='ListaItensMenu_lista'>
                      <li>{item.content}</li>
                    </ul>
                  </CSSTransition>
                </div>
              ))}
              <div className='enviar_dados_div'>
              <label htmlFor="enviar_dados" className='label_button_enviardados'> Já finalizou? então envie os seus dados!
              <input  type="submit" value="+ Enviar dados" id='enviar_dados' className='button_enviardados' />
              </label>
              </div>
            </form>
          </div>
        </div>
      </CSSTransition>
    </div>
  );
}
