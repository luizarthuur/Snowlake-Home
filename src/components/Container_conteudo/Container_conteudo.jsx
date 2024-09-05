import { useState, useEffect } from 'react';


import './Container_conteudo.css'

export function Container_conteudo() {

    const [isMobileView, setIsMobileView] = useState(window.innerWidth <= 1023);

    useEffect(() => {
      // Função para verificar o tamanho da janela e atualizar o estado
      const handleResize = () => {
        setIsMobileView(window.innerWidth <= 1023);
      };
  
      // Adiciona o listener de resize
      window.addEventListener('resize', handleResize);
  
      // Cleanup para remover o listener quando o componente desmontar
      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }, []);
  

    return (
        <>

        <div className='container_conteudo_teste'> 

        <div className='container_conteudo'>

        {isMobileView? <img src="https://demos.elemisthemes.com/snowlake/style/images/art/about2.jpg" alt="" className='container_conteudo_imagem_mobile'/> :null}

        <div className='container_conteudo_conteudotexto'>

            <h2 className='container_conteudo_conteudotexto_titulo'>Teste</h2>
            <p className='container_conteudo_conteudotexto_texto'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Neque pariatur commodi vitae reprehenderit mollitia fugiat, voluptates nemo velit debitis laborum quisquam cumque sunt quos veritatis, maxime tempora tempore ab delectus!</p>

            <ul className='progress-bar'>

                <li>Teste 1</li>
                <li>Teste 2</li>
                <li>Teste 3</li>
                <li>Teste 4</li>

            </ul>


        </div>

        
        {!isMobileView? <img src="https://demos.elemisthemes.com/snowlake/style/images/art/about2.jpg" alt="" className='container_conteudo_imagem_desktop' />: null}

        </div>
        </div>
        </>
    )
}