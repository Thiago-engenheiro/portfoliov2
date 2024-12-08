import { BotaoHambuguer } from '../botoes/botaoHambuguer/botaoHamburguer'
import './BarraVertical.css'

export function BarraVertical () {

   
    return (

        <aside className={`continerBarraVertical`}>

            <nav className='barraVertical'>

                <div className='barraVertica__continer'>

                    <img className='logotipo' src="/imagens/logotipo/LogotipoFenix.png" alt="Logo Thiago Abraao"/>

                    <div>

                        <h2 className='TituloDaPagina'>BEM-VINDO</h2>

                    </div>

                </div>

                <ul className='continer__barraVertical__links'>

                    <li className='barraVertical__links'>

                        <a className='barraVertical__link link__ativo' href="http://localhost:3000/">

                            Home

                        </a>

                        <a className='barraVertical__link' href="http://localhost:3000/">

                            Sobre mim

                        </a>

                    </li>

                    <li className='barraVertical__icones'>

                        <BotaoHambuguer></BotaoHambuguer>

                    </li>

                </ul>

            </nav>

        </aside>

    )

}