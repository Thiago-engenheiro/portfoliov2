import DarkModeToggle from '../../../botoes/checkbox__modoClaroEscuro';
import CardFlutante02 from '../cardFlutante02';
import './conteudoMenuHambuguer.css'



import React, { useState } from 'react';

export function CardFlutante () {

    const [active, setActive] = useState(false);

    return (

        <div className="card1">
     
        <div className="content1">

        {active && <CardFlutante02></CardFlutante02>}

          <div className="back1">
  
            <div className="back-content1">
                
              <ul className='cardFlutante1'>
    
                <li>

                  <p>

                    Modo claro

                  </p>

                  <DarkModeToggle></DarkModeToggle>

                </li>

                <li>

                  <p>

                    Linguagem

                  </p>

                  <button className={`botaoExpandir ${active ? "active" : ""}`}

                    onClick={() => setActive(!active)}
                  
                  ></button>

                </li>

                <li>

                  <p>

                    Aumentar Fonte

                  </p>

                  <button className='botaoFonte'>A+</button>
              
                </li>

                <li>

                    <p>

                      Diminuir Fonte

                    </p>

                    <button className='botaoFonte'>A-</button>
                    
                </li>

              </ul>
              
            </div>
          </div>
        </div>
      </div>
        
    )

}