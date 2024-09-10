import './AdminComponent.css';
import { useState, useRef, useEffect } from 'react';
import { CSSTransition } from 'react-transition-group';
import { useForm, useFieldArray } from 'react-hook-form';
import { Imagemevalidacaocomponent } from './Imagemevalidacaocomponent/Imagemevalidacaocomponent';
import { MultipleCarousels } from './Cardcarouselcomponent/Cardcarouselcomponent';
import { FormSubmit } from './Postformcomponent/FormSubmit';
import { type } from '@testing-library/user-event/dist/type';



export function AdminComponent() {

  const [menuOpen, setMenuOpen] = useState(false); // Controla a abertura do menu no modo mobile
  const [listOpen, setListOpen] = useState(null); // Controla a lista aberta

  const { register, getValues } = useForm();

  const [values, setValues] = useState('');

  const [files, setFiles] = useState({
    inputlogo: null,
    papel_parede_Nav: [null],
    papel_parede_InitialContent: null,
    papel_parede_video:null,
    imagens_carrossel: [null]
  });

  const HandleFiles = (e) => {
    const { name, files: selectedFiles } = e.target;

    setFiles((prevState) => {
      // Verifica se o campo é "imagens_carrossel" para lidar com múltiplos arquivos
      if (name === "imagens_carrossel" || name === "papel_parede_Nav") {
        return {
          ...prevState,
          [name]: [...selectedFiles],  // Salva todos os arquivos como array
        };
      } else {
        // Para os demais campos, salva apenas um arquivo
        return {
          ...prevState,
          [name]: selectedFiles[0],  // Salva o arquivo no estado
        };
      }
    });
  };
  function HandleValues () {
    setValues(getValues())
    console.log(files) 
  }


  const menuRef = useRef(null); // Referência para a área do menu

  const handleSuccess = (data) => {
      console.log('Envio bem-sucedido:', data);
  };

  const handleError = (error) => {
      console.error('Erro ao enviar:', error);
  };

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
  

// Função para alternar a lista
function ToggleListOpen(key) {
  setListOpen(listOpen === key ? null : key);
}


  const listaDeItens = [
    {
      key: 'logo',
      titulo: 'Logo',
      content: [{
        id: 'logo_upload',
        type: 'image',
        label:'Escolha a logo do seu site',
        component: (
          <div className='input_admin'>
            <h3 className='admin_titulo_input'>Escolha a logo do seu site (Tamanho mínimo de 128x42)</h3>
            <label htmlFor="inputlogo" className="custom-file-upload">
              <span className="plus-icon">+</span> Escolher Logo
              <input {...register("inputlogo")} type="file" name="inputlogo" id="inputlogo" onChange={HandleFiles} className='inputimagem' required accept=".jpg, .jpeg, .png" />             
            </label>
            {files.inputlogo ? <> <p className='mensagem_validacao_strong'> Arquivo carregado <br /> </p> <p className='mensagem_validacao'> {files.inputlogo.name}</p></> : null }
          </div>
        ),
      }]
    },
    {
      key: 'Área de Navegação',
      titulo: 'Área de Navegação',
      content: [{
        id: 'nav_main_titulo_principal',
        type: 'text',
        label: 'Titulo',
        component: (
          <div className='input_admin'>
            <h3 className='admin_titulo_input'>Escolha o título e subtítulo da sua área de navegação</h3>
            <label htmlFor="nav_main_titulo_principal">Título</label>
            <input type="text"  {...register("nav_main_titulo_principal")} id="nav_main_titulo_principal" name="nav_main_titulo_principal" maxLength={100} minLength={8} required placeholder='Digite o Título (Mínimo de 8 caracteres)'/>
          </div>
        ),
      },
    {
      id: 'nav_main_subtitulo',
      type: 'text',
      label: 'Subtitulo',
      component: (
        <div className='input_admin'>
          <label htmlFor="nav_main_subtitulo">Subtítulo</label>
          <input type="text" {...register("nav_main_subtitulo")} id="nav_main_subtitulo" name="nav_main_subtitulo" maxLength={200} required placeholder='Digite o Subtítulo' />        
        </div>
      ),
    },
    {
      id:'nav_main_imagem',
      type: 'file',
      label: 'Papel de parede',
      component: (
        <div className='input_admin'>
          <h3 className='admin_titulo_input'>Escolha o papel de parede da sua área de navegação - (Possibilidade de até 4 imagens para fazer um carrossel, tamanho mínimo de 2000x1335)</h3>
          <label htmlFor="papel_parede_Nav" className="custom-file-upload">
            <span className="plus-icon">+</span> Escolher papel de parede
            <input {...register("papel_parede_Nav")} type="file" name="papel_parede_Nav" id="papel_parede_Nav" onChange={HandleFiles} className='inputimagem' required multiple accept=".jpg, .jpeg, .png"/>
          </label>
          {files.papel_parede_Nav && files.papel_parede_Nav.length > 0 && files.papel_parede_Nav[0] !== null ? (
            <><p className='mensagem_validacao_strong'>
              Arquivo(s) carregado(s) <br /> </p>
              <p className='mensagem_validacao'>{files.papel_parede_Nav.map((file, idx) => file && <span key={idx}>{file.name}<br /></span>)}</p></>
          ) : null}
          
        </div>
      ),
    }
    ]
    },

    {
      key: 'Conteúdo Inicial',
      titulo: 'Conteúdo Inicial',
      content: [{
        id: 'content_section_titulo',
        type: 'text',
        label: 'Titulo',
        component: (
          <div className='input_admin'>
          <h3 className='admin_titulo_input'>Escolha o título e conteúdo da sua área de conteúdo inicial</h3>
          <label htmlFor="content_section_titulo">Título</label>
          <input type="text" {...register("content_section_titulo")} id="content_section_titulo" maxLength={100} minLength={8} required placeholder='Digite o Título (Mínimo de 8 caracteres)'/>
        </div>
        )
      },
      {
        id: 'content_section_conteudo',
        type: 'text',
        label: 'Conteúdo',
        component: (
          <div className='input_admin'>
          <label htmlFor="content_section_conteudo">Conteúdo</label>
          <input type="text" {...register("content_section_conteudo")} id="content_section_conteudo" maxLength={600} required placeholder='Digite o Conteúdo'/>
        </div>
        )
      },
      {
        id: 'papel_parede_InitialContent',
        type: 'file',
        label: 'Escolha a imagem',
        component: (
          <div className='input_admin'>
          <h3 className='admin_titulo_input'>Escolha a imagem que ficará próxima do seu conteúdo (Tamanho mínimo de 550 x 485)</h3>
          <label htmlFor="papel_parede_InitialContent" className="custom-file-upload">
            <span className="plus-icon">+</span> Escolher imagem
            <input {...register('papel_parede_InitialContent')} type="file" name="papel_parede_InitialContent" id="papel_parede_InitialContent" onChange={HandleFiles} className='inputimagem' required accept=".jpg, .jpeg, .png"/>
          </label>
          {files.papel_parede_InitialContent ? <> <p className='mensagem_validacao_strong'> Arquivo carregado <br /> </p> <p className='mensagem_validacao'> {files.papel_parede_InitialContent.name}</p></> : null }
        </div>
        )
      }
    ]
    },
    {
      key: 'Área de Vídeo',
      titulo: 'Área de Vídeo',
      content: [{
        id: "video_content_titulo",
        type: "text",
        label: "Titulo",
        component: (
          <div className='input_admin'>
            <h3 className='admin_titulo_input'>Escolha o título, o link de Referência e o papel de parede da sua área de vídeo</h3>
            <label htmlFor="video_content_titulo">Título</label>
            <input type="text" {...register("video_content_titulo")} id="video_content_titulo" name="video_content_titulo" maxLength={100} minLength={8} required placeholder='Digite o Título (Mínimo de 8 caracteres)'/>
          </div>
        )
      },
    {
      id: "video_content_link",
      type: "text",
      label: "Link Vídeo",
      component: (
        <div className='input_admin'>
        <label htmlFor="video_content_video_link">Link de Referência</label>
            <input type="URL" {...register("video_content_video_link")} id="video_content_video_link" name="video_content_video_link" maxLength={600} required placeholder='Digite o link externo de redirecionamento'/>
        </div>
      )
    },
    {
      id: "papel_parede_Video",
      type: "file",
      label: "papel de parede vídeo",
      component: (
        <div className='input_admin'>
           <h3 className='admin_titulo_input'>Escolha o papel de parede</h3>
            <label htmlFor="papel_parede_video" className="custom-file-upload">
              <span className="plus-icon">+</span> Escolher imagem
              <input {...register('papel_parede_Video')} type="file" name="papel_parede_video" id="papel_parede_video" onChange={HandleFiles} className='inputimagem' required multiple accept=".jpg, .jpeg, .png"/>
          </label>
          {files.papel_parede_video ? <> <p className='mensagem_validacao_strong'> Arquivo carregado <br /> </p> <p className='mensagem_validacao'> {files.papel_parede_video.name}</p></> : null }
        </div>
      )
    }
  ]
    },
    {
      key: 'Carrossel de imagens',
      titulo: 'Carrossel de imagens',
      content: [{
        id: 'imagens_carrossel',
        type: 'file',
        label: 'Carrossel de imagens',
        component: (
          <div className='input_admin'>
          <h3 className='admin_titulo_input'>Escolha até 8 imagens para fazer um carrossel de imagens</h3>
          <h3 className='admin_titulo_input'>Escolha as imagens</h3>
          <label htmlFor="imagens_carrossel" className="custom-file-upload">
            <span className="plus-icon">+</span> Escolher imagem
            <input {...register('imagens_carrossel')} type="file" name="imagens_carrossel" id="imagens_carrossel" onChange={HandleFiles} className='inputimagem' required multiple accept=".jpg, .jpeg, .png"/>
          </label>
          {files.imagens_carrossel && files.imagens_carrossel.length > 0 && files.imagens_carrossel[0] !== null ? (
            <><p className='mensagem_validacao_strong'>
              Arquivos carregados <br /> </p>
              <p className='mensagem_validacao'>{files.imagens_carrossel.map((file, idx) => file && <span key={idx}>{file.name}<br /></span>)}</p></>
          ) : null}
        </div>
        )
      }] 
    },
    {
      key: 'Área de informações',
      titulo: 'Área de informações',
      content : [{
        id: "address_component_titulo",
        type: "text",
        label: "Adress Component Titulo",
        component: (
          <div className='input_admin'>
            <h3 className='admin_titulo_input'>Escolha o título para sua área de informações</h3>
            <label htmlFor="address_component_titulo">Título</label>
            <input type="text" {...register("address_component_titulo")} id="address_component_titulo" name="address_component_titulo" maxLength={100} minLength={8} required placeholder='Digite o Título (Mínimo de 8 caracteres)'/>
          </div>
        )
      },
    {
      id: "address_component_endereco_conteudo",
      type: "text",
      label: "Adress Component Conteúdo",
      component: (
        <div className='input_admin'>
        <label htmlFor="address_component_endereco_conteudo">Endereço</label>
        <input type="text" {...register("address_component_endereco_conteudo")} id="address_component_endereco_conteudo" name="address_component_endereco_conteudo" maxLength={600} required placeholder='Digite o seu endereço'/>
        </div>
      )
    },
    {
      id: "address_component_telefone_conteudo",
      type: "text",
      label: "Address Component Telefone",
      component: (
        <div className='input_admin'>
        <label htmlFor="address_component_telefone_conteudo">Telefone</label>
        <input type="text" {...register("address_component_telefone_conteudo")} id="address_component_telefone_conteudo" name="address_component_telefone_conteudo" maxLength={600} required placeholder='Digite o seu telefone'/>
        </div>
      )
    },
    {
      id: "address_component_email_conteudo",
      type: "text",
      label: "Address Component Conteúdo",
      component: (
        <div className='input_admin'>
        <label htmlFor="address_component_email_conteudo">Email Comercial</label>
        <input type="text" {...register("address_component_email_conteudo")} id="address_component_email_conteudo" name="address_component_email_conteudo" maxLength={600} required placeholder='Digite o seu email comercial'/>
        </div>
      )
    }
    ]
    }

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

            <FormSubmit valores = {values} baseUrl="http://localhost:8000/api/v1" imageEndpoint={'/Imagens'} textEndpoint={'/Texto'} onSuccess={handleSuccess} onError={handleError}>
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
                    {item.content.map(contentItem => (
                      <li key={contentItem.id}>{contentItem.component}</li>
                    ))}
                  </ul>

                </CSSTransition>
              </div>
            ))}
            <button onClick={HandleValues}>Teste</button>
            <div className='enviar_dados_div'>
              <label htmlFor="enviar_dados" className='label_button_enviardados'> Já finalizou? então envie os seus dados!
              </label>
            </div>
          </FormSubmit>
          </div>
        </div>
      </CSSTransition>
    </div>
  );
}
