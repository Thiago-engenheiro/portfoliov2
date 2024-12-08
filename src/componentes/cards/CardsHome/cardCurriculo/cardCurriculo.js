import './cardCurriculo.css'

export function CardCurriculo () {

    return (

        <section className='cardCurriculo'>

            <div className='cardCurriculoApresentacao'>

                <h2 className='CardPortfolioTitulo'>

                    currículo

                </h2>

                <div className='continerArquivo'>

                        <img className="iconeArquivo" src="/decoracaoCard/text_snippet.png" alt="Ícone arquivo"/>

                        <div className='continerArquivoTexto'>

                        <p className='arquivoNome'>

                            DEVThiago.pdf
                        

                        </p>

                        <p className='arquivoTamanho'>

                            <br></br>
                            500 KB

                        </p>

                    </div>

                </div>

            </div>

                    <div className='cardCurriculoParteBaixo'>

                        <button class="buttonbaixar">

                    <div class="dots_border"></div>
                    
                    <img
                        className='Play'
                        src="/decoracaoCard/download.png"
                        alt=""
                        // Dispara a função para alternar o estado
                    />

                    <span class="text_button">{'baixar currículo'}</span>

                </button>

            </div>

        </section>

    );
};
 
