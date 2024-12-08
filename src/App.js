import "./App.css";
import BarraLateral from './componentes/barraLateral';
import Titulo from './componentes/Titulo';
import CardSobreMimTopo from './componentes/cards/CardsHome/cardSobremimTopo'
import CardMinhaFoto from './componentes/cards/CardsHome/cardMinhaFoto'
import CardLinks from './componentes/cards/CardsHome/cardLink'
import CardSobreMim from './componentes/cards/CardsHome/cardSobreMim'
import MusicPlayer from './componentes/cards/CardsHome/cardMusica'
import CardBlog from './componentes/cards/CardsHome/cardBlog'
import CardCarreira from './componentes/cards/CardsHome/cardCarreira'
import CardGif from './componentes/cards/CardsHome/cardGif'
import CardCertificado from './componentes/cards/CardsHome/cardCertificado'
import CardMeusProjetos from './componentes/cards/CardsHome/cardMeusProjetos'
import {Bolinhas} from './componentes/cards/Bolinhas/bolinhas'
import Bolinhas2 from './componentes/cards/bolinha02'
import Bolinhas3 from './componentes/cards/bolinha03'
import Bolinha4 from './componentes/cards/bolinha04'
import CardFaleComigo from './componentes/cards/CardsHome/cardFaleComigo'
import CardCurriculo from './componentes/cards/CardsHome/cardCurriculo'
import CardConhecimento from './componentes/cards/CardsHome/cardConhecimento'


function App() {
  
  return (
    <html>
    <div className="App">

      <main className="Home">

        <section className="continer__conteudoHome">

          <BarraLateral></BarraLateral>
          <Titulo></Titulo>
          <CardSobreMimTopo></CardSobreMimTopo>
          <CardMinhaFoto></CardMinhaFoto>
          <CardLinks></CardLinks>
          <CardSobreMim></CardSobreMim>
          <Bolinhas></Bolinhas>
          <MusicPlayer></MusicPlayer>
          <CardBlog></CardBlog>
          <CardCarreira></CardCarreira>
          <CardGif></CardGif>
          <CardCertificado></CardCertificado>
          <CardMeusProjetos></CardMeusProjetos>
          <Bolinhas2></Bolinhas2>
          <Bolinhas3></Bolinhas3>
          <Bolinha4></Bolinha4>
          <CardFaleComigo></CardFaleComigo>
          <CardCurriculo></CardCurriculo>
          <CardConhecimento></CardConhecimento>
        
        </section>

      </main>

    </div>
    </html>
  );
}

export default App;
