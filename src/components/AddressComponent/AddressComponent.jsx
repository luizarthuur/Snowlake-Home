import './AddressComponent.css'

export function AddressComponent() {
    return(
        <>
            <div className='AddressComponentContainer'>
                <h3 className='AddressComponentContainer_titulo'>Convinced yet? Let's make something great together. If you got any questions, don't hesitate to get in touch with us.</h3>
                <div className='AddressComponentContainer_images'>

                    <div className='AddressComponentContainer_imagemetexto'>
                    <img src="https://demos.elemisthemes.com/snowlake/style/images/icons/ui-gps.png" alt="Imagem Home" className='AddressComponentContainer_imagemetexto_imagem' />
                    <p className='AddressComponentContainer_imagemetexto_texto'>Moon Street Light Avenue <br /> 14/05 Jupiter, JP 80630</p>
                    </div>

                    <div className='AddressComponentContainer_imagemetexto'>
                    <img src="https://demos.elemisthemes.com/snowlake/style/images/icons/co-telephone.png" alt="Imagem Telefone" className='AddressComponentContainer_imagemetexto_imagem'/>
                    <p className='AddressComponentContainer_imagemetexto_texto'>00 (123) 456 78 90</p>
                    <p className='AddressComponentContainer_imagemetexto_texto'>00 (987) 654 32 10</p>
                    </div>

                    <div className='AddressComponentContainer_imagemetexto'>
                    <img src="https://demos.elemisthemes.com/snowlake/style/images/icons/co-email-5.png" alt="Imagem Email" className='AddressComponentContainer_imagemetexto_imagem'/>
                    <p className='AddressComponentContainer_imagemetexto_texto'>manager@email.com</p>
                    <p className='AddressComponentContainer_imagemetexto_texto'>asistant@email.com</p>
                    </div>

                </div>
            </div>
        </>
    )
}