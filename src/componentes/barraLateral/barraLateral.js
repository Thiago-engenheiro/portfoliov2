import './barraLateral.css'
import BotaoExpandir from '../botoes/botaoExpandir';
import { BotaoHambuguer } from '../botoes/botaoHambuguer/botaoHamburguer';


export function BarraLateral () {

    return (

        <aside className={`barra-lateral`}>

            <nav className=''>

                <div>

                    <img className='logotipo' src="/imagens/logotipo/LogotipoFenix.png" alt="Logo Thiago Abraao"/>

                </div>

                <ul>

                    <li className='lista'>

                    <BotaoHambuguer></BotaoHambuguer>

                        <p className='esconder'>

                            Menu

                        </p>

                    </li>

                    <li className='lista'>

                        <div className='continerIcone'>

                        <BotaoExpandir></BotaoExpandir>

                            <p className='esconder'>

                                Expandir

                            </p>

                        </div>
                      
                    </li>

                    <li className='listaAfastar lista listaAtiva'>

                    <a href="http://localhost:3000/" className='linkativo navegacaoLink'>

                        <img className="icone" src="/imagens/icones/homeBranca.png" alt="Ícone Home"/>

                    </a>

                        <p className='esconder'>

                            Home

                        </p>
                        
                    </li>

                    <li className='lista'>

                        <a href="http://localhost:3000/" className='navegacaoLink'>

                            <img className="icone" src="/imagens/icones/Sobre__mim__modoClaro.png" alt="Ícone Sobre mim"/>

                        </a>

                        <p className='esconder'>

                            Sobre mim

                        </p>

                    </li>

                    <li className='lista '>

                        <a href="http://localhost:3000/" className='navegacaoLink'>

                            <img className="icone" src="/imagens/icones/projetosBranco.png" alt="Ícone Projetos"/>

                        </a>

                        <p className='esconder'>

                            Projetos

                        </p>

                    </li>

                    <li className='lista'>

                        <a href="http://localhost:3000/" className='navegacaoLink'>

                            <img className="icone" src="/imagens/icones/certicado__modoClaro.png" alt="Ícone certificados"/>

                        </a>

                        <p className='esconder'>

                            Certificados

                        </p>

                    </li>

                    <li className='lista'>

                        <a href="http://localhost:3000/" className='navegacaoLink'>

                            <img className="icone" src="/imagens/icones/blogBranco.png" alt="Ícone blog"/>

                        </a>

                        <p className='esconder'>

                            Blog

                        </p>

                    </li>

                    <li className='lista'>

                        <a href="http://localhost:3000/" className='navegacaoLink'>

                            <img className="icone" src="/imagens/icones/faleComigoBranco.png" alt="Ícone fale comigo"/>

                        </a>

                        <p className='esconder'>

                            Fale comigo

                        </p>

                    </li>

                </ul>

                <p className='nomeDaPagina'> 
                    
                    HOME

                </p>

            </nav>

        </aside>

    )

}