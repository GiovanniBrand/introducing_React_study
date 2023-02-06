import "./Footer.css" 
import "./reset.css"

const Footer = () => {

    return(
        <footer className='footer'>
            
            <div className="footer-content">
                <ul>
                    <li><img src="/imagens/fb.png" alt="Banner principal da página Organo"/></li>
                    <li><img src="/imagens/tw.png" alt="Banner principal da página Organo"/></li>
                    <li><img src="/imagens/ig.png" alt="Banner principal da página Organo"/></li>
                </ul>
                <img src="/imagens/logo.png" alt="Banner principal da página Organo"/>
                <p>Desenvolvido por Alura</p>
            </div>
        </footer>
    )
}

export default Footer