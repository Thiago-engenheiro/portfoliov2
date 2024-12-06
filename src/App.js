import "./App.css";
import BarraLateral from "./componentes/barraLateral";
import CardCurriculo from "./componentes/cards/CardsHome/cardCurriculo";
import CardGif from "./componentes/cards/CardsHome/cardGif";
import CardMeusProjetos02 from "./componentes/cards/CardsHome/cardMeusProjetos2";
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
import { Titulo } from "./componentes/Titulo/Titulo";
import { Bolinhas } from "./componentes/cards/Bolinhas/bolinhas";
import Bolinhas2 from "./componentes/cards/bolinha02";
import Bolinhas3 from "./componentes/cards/bolinha03";
import Bolinhas4 from "./componentes/cards/bolinha04";




function App() {
  
  return (
    <html>
    <div className="App">

      <section>

        <BarraLateral></BarraLateral>

      </section>

      <main className="continerConteudo">

        <section className="homeCards">

          <Titulo></Titulo>
          <CardSobreMimTopo></CardSobreMimTopo>
          <CardSobreMim></CardSobreMim>
          <CardMeusProjetos></CardMeusProjetos>
          <CardMinhaFoto></CardMinhaFoto>
          <CardMeusProjetos02></CardMeusProjetos02>
          <CardLinks></CardLinks>
          <CardCarreira></CardCarreira>
          <Bolinhas2></Bolinhas2>
          <Bolinhas3></Bolinhas3>
          <Bolinhas4></Bolinhas4>
          <CardMusica></CardMusica>
          <CardCurriculo></CardCurriculo>
          <CardCertificado></CardCertificado>
          <CardBlog></CardBlog>
          <CardGif></CardGif>
          <CardFaleComigo></CardFaleComigo>
          <Bolinhas></Bolinhas>
          <CardConhecimento></CardConhecimento>
         
          
        

        </section>
      </main>
    </div>
    </html>
  );
}

export default App;
