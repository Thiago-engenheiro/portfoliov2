import { TextoAnimado } from '../textoAnimado/textoAnimado';
import './cardSobreMim.css'

export function CardSobreMim () {

    return (

        <section className='cardSobreMim'>

            <div className='CardSobreMim__esquerdo'>

                <div className='titulos'>

                    <div>

                        <h2 className='titulo__engenheiro'>

                            Engenheiro de software 

                        </h2>

                        <h2 className='subtitulo__engenheiro'>

                            DESENVOLVEDOR REACT

                        </h2>

                        <div className='continerTextoAnimado'>

                            <p className='frase__auxiliar'>

                                Certificado em

                            </p>

                            <p>
                                    
                                <TextoAnimado></TextoAnimado>
                                
                            </p>

                        </div>

                    </div>

                    <div>

                        <h3 className='subtitulo'>

                            Especializações que vão além do código

                        </h3>

                    </div>

                </div>

            </div>
    
        </section>

    );
};
 

