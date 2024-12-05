import "./App.css";
import BarraLateral from "./componentes/barraLateral";
import CardCurriculo from "./componentes/cardCurriculo";
import CardGif from "./componentes/cardGif";
import { CardMeusProjetos02 } from "./componentes/cardMeusProjetos2/cardMeusProjetos02";
import CardBlog from "./componentes/cards/CardsHome/cardBlog";
import CardCarreira from "./componentes/cards/CardsHome/cardCarreira";
import CardCertificado from "./componentes/cards/CardsHome/cardCertificado";
import CardConhecimento from "./componentes/cards/CardsHome/cardConhecimento";
import CardFaleComigo from "./componentes/cards/CardsHome/cardFaleComigo";
import CardLinks from "./componentes/cards/CardsHome/cardLink";
import CardMeusProjetos from "./componentes/cards/CardsHome/cardMeusProjetos";
import CardMinhaFoto from "./componentes/cards/CardsHome/cardMinhaFoto";
import CardMusica from "./componentes/cards/CardsHome/cardMusica";
import CardSobreMim from "./componentes/cards/CardsHome/cardSobreMim";
import CardSobreMimTopo from "./componentes/cards/CardsHome/cardSobremimTopo";
import { Decoracao } from "./componentes/decoracao/decoracao";

import { Titulo } from "./componentes/Titulo/Titulo";

function App() {
  return (
    <div className="App">
      <section>

        <BarraLateral></BarraLateral>

      </section>

      <main className="continerConteudo">

        <Titulo></Titulo>

        <section className="homeCards">

            <div>

              <CardSobreMimTopo></CardSobreMimTopo>
              <CardSobreMim></CardSobreMim>
              <CardMeusProjetos></CardMeusProjetos>
              

            </div>

            <div className="continerHome02">

              <CardMinhaFoto></CardMinhaFoto>
              <CardMeusProjetos02></CardMeusProjetos02>

            </div>

          <div className="continerHome03">

              <CardLinks></CardLinks>

            <div className="continerHome03__divisao">

              <CardCarreira></CardCarreira>

            </div>

            <div className="continerHome03__divisao">

              <CardMusica></CardMusica>

              <CardCurriculo></CardCurriculo>

            </div>

            <div className="continerHome03__divisao">

              <CardCertificado></CardCertificado>

              <CardBlog></CardBlog>


            </div>

            <div className="continerHome03__divisao">

              <CardGif></CardGif>

              <CardFaleComigo></CardFaleComigo>

              <Decoracao></Decoracao>

            </div>

            

          </div>

          <CardConhecimento></CardConhecimento>
         
          

          

        </section>
      </main>
    </div>
  );
}

export default App;
