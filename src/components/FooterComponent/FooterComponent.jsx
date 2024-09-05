import './FooterComponent.css'

import React, {useState, useEffect} from 'react'

export function FooterComponent () {
   
    const [isMobile, setIsMobile] = useState(window.innerWidth < 1023); // Seta o nav para quando em janelas menores de 1023px mostrar o menu hambúrguer e quando maior, mostra o menu aberto

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 1023);
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []); // Função que identifica se a janela é maior ou menor que 1023px
      

    return(
        <>
        {!isMobile? 
            <footer className='FooterContainer'>

                <section className='FooterContainerConteudo'>

                <div className='FooterContainer_logoandtext-1'>

                    <img src="././assets/logo-light@2x.png" alt="Logo-Snowlake" className="FooterContainer_logoandtext_logo"/>
                    <p className='FooterContainer_logoandtext_text'>Snowlake is a multi-concept and powerful site template contains rich layouts with possibility of unlimited combinations & beautiful elements.</p>

                </div>

                <div className='FooterContainer_logoandtext'>

                <h2 className='FooterContainer_logoandtext_title'>Need Help?</h2>

                <ul className='FooterContainer_logoandtext_list'>
                    <li className='FooterContainer_logoandtext_list_item'>Support</li>
                    <li className='FooterContainer_logoandtext_list_item'>Get Started</li>
                    <li className='FooterContainer_logoandtext_list_item'>Terms of Use</li>
                    <li className='FooterContainer_logoandtext_list_item'>Privacy Policy</li>
                    <li className='FooterContainer_logoandtext_list_item'>Contact Us</li>
                </ul>

                </div>

                <div className='FooterContainer_logoandtext'>

                <h2 className='FooterContainer_logoandtext_title'>Learn More</h2>

                <ul className='FooterContainer_logoandtext_list'>
                    <li className='FooterContainer_logoandtext_list_item'>About Us</li>
                    <li className='FooterContainer_logoandtext_list_item'>Our Story</li>
                    <li className='FooterContainer_logoandtext_list_item'>Projects</li>
                    <li className='FooterContainer_logoandtext_list_item'>Pricing</li>
                    <li className='FooterContainer_logoandtext_list_item'>Features</li>
                </ul>

                </div>

                <div className='FooterContainer_logoandtext'>

                <h2 className='FooterContainer_logoandtext_title'>Company</h2>

                <ul className='FooterContainer_logoandtext_list'>
                    <li className='FooterContainer_logoandtext_list_item'>Support</li>
                    <li className='FooterContainer_logoandtext_list_item'>Get Started</li>
                    <li className='FooterContainer_logoandtext_list_item'>Terms of Use</li>
                    <li className='FooterContainer_logoandtext_list_item'>Privacy Policy</li>
                    <li className='FooterContainer_logoandtext_list_item'>Contact Us</li>
                </ul>

                </div>

                
                <div className='FooterContainer_logoandtext'>

                    <h2 className='FooterContainer_logoandtext_title'>Contact</h2>
                    <p className='FooterContainer_logoandtext_text'>Moonshine St. 14/05 Light City, London</p>
                    <p className='FooterContainer_logoandtext_text'>info@email.com +00 (123) 456 78 90</p>

                </div>


            </section>
            

            <div className='FooterContainer_socialmedia'>
                        
                        <p className='FooterContainer_logoandtext_text'>© 2020 Snowlake. All rights reserved.</p>
                        <div className='container_icons'>
                            <a href=""><img src="https://cdn-icons-png.flaticon.com/512/124/124021.png" alt="" className='container_icons_image'/></a>
                            <a href=""><img src="https://cdn-icons-png.flaticon.com/512/145/145802.png" alt="" className='container_icons_image'/></a>
                            <a href=""><img src="https://cdn-icons-png.flaticon.com/512/174/174855.png" alt="" className='container_icons_image'/></a>
                            <a href=""><img src="https://cdn-icons-png.flaticon.com/256/174/174857.png" alt="" className='container_icons_image'/></a>
                            <a href=""><img src="https://cdn-icons-png.flaticon.com/256/1384/1384060.png" alt="" className='container_icons_image'/></a>
                        </div>

            </div>


            </footer>
        
        : 
        
            <footer className='FooterContainerMobile'>

                    <section className='FooterContainerConteudoMobile'>

                    <div className='FooterContainer_logoandtextmobile-1'>

                    <img src="././assets/logo-light@2x.png" alt="Logo-Snowlake" className="FooterContainer_logoandtext_logo"/>
                    <p className='FooterContainer_logoandtext_text'>Snowlake is a multi-concept and powerful site template contains rich layouts with possibility of unlimited combinations & beautiful elements.</p>

                    </div>

                    <div className='FooterContainerContentContainerMobile'>

                    <div className='FooterContainer_logoandtextmobile'>

                    <h2 className='FooterContainer_logoandtext_title'>Need Help?</h2>

                    <ul className='FooterContainer_logoandtext_list'>
                        <li className='FooterContainer_logoandtext_list_item'>Support</li>
                        <li className='FooterContainer_logoandtext_list_item'>Get Started</li>
                        <li className='FooterContainer_logoandtext_list_item'>Terms of Use</li>
                        <li className='FooterContainer_logoandtext_list_item'>Privacy Policy</li>
                        <li className='FooterContainer_logoandtext_list_item'>Contact Us</li>
                    </ul>

                    </div>

                    <div className='FooterContainer_logoandtextmobile'>

                    <h2 className='FooterContainer_logoandtext_title'>Learn More</h2>

                    <ul className='FooterContainer_logoandtext_list'>
                        <li className='FooterContainer_logoandtext_list_item'>About Us</li>
                        <li className='FooterContainer_logoandtext_list_item'>Our Story</li>
                        <li className='FooterContainer_logoandtext_list_item'>Projects</li>
                        <li className='FooterContainer_logoandtext_list_item'>Pricing</li>
                        <li className='FooterContainer_logoandtext_list_item'>Features</li>
                    </ul>

                    </div>

                    </div>

                    <div className='FooterContainerContentContainerMobile'>

                    <div className='FooterContainer_logoandtextmobile'>

                    <h2 className='FooterContainer_logoandtext_title'>Company</h2>

                    <ul className='FooterContainer_logoandtext_list'>
                        <li className='FooterContainer_logoandtext_list_item'>Support</li>
                        <li className='FooterContainer_logoandtext_list_item'>Get Started</li>
                        <li className='FooterContainer_logoandtext_list_item'>Terms of Use</li>
                        <li className='FooterContainer_logoandtext_list_item'>Privacy Policy</li>
                        <li className='FooterContainer_logoandtext_list_item'>Contact Us</li>
                    </ul>

                    </div>


                    <div className='FooterContainer_logoandtextmobile'>

                        <h2 className='FooterContainer_logoandtext_title'>Contact</h2>
                        <p className='FooterContainer_logoandtext_text'>Moonshine St. 14/05 <br /> Light City, London</p>
                        <p className='FooterContainer_logoandtext_text'>info@email.com <br /> +00 (123) 456 78 90</p>

                    </div>


                    </div>

                    <div className='FooterContainerContentContainerMobile'>
                    
                    <div className='FooterContainer_socialmediamobile'>
                        
                        <p className='FooterContainer_logoandtext_text'>© 2020 Snowlake. br All rights reserved.</p>
                        <div className='container_icons'>
                            <a href=""><img src="https://cdn-icons-png.flaticon.com/512/124/124021.png" alt="" className='container_icons_image'/></a>
                            <a href=""><img src="https://cdn-icons-png.flaticon.com/512/145/145802.png" alt="" className='container_icons_image'/></a>
                            <a href=""><img src="https://cdn-icons-png.flaticon.com/512/174/174855.png" alt="" className='container_icons_image'/></a>
                            <a href=""><img src="https://cdn-icons-png.flaticon.com/256/174/174857.png" alt="" className='container_icons_image'/></a>
                            <a href=""><img src="https://cdn-icons-png.flaticon.com/256/1384/1384060.png" alt="" className='container_icons_image'/></a>
                        </div>

                    </div>

                    </div>

                    </section>

            </footer>
        
        
        }

        </>
    )
}