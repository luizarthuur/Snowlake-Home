import './ConteudoDisplay.css'

export function ConteudoDisplay ({children}) {
    return (
        <>
                <div className='conteudo_display_conteudo'>{children}</div>
        </>
    )
}