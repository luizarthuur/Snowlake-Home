import './App.css';
import { Nav } from './components/Nav/Nav';
import { ConteudoDisplay } from './components/Conteudo Display/ConteudoDisplay';
import { Container_conteudo } from './components/Container_conteudo/Container_conteudo';
import { Containerconteudovideo } from './components/Container_conteudo_video/Containerconteudovideo';
import { CarrosselComponent } from './components/CarrosselComponent/carrosselComponent';
import { TeamCarrossel } from './components/TeamCarrosselComponent/teamCarrossel';
import { AddressComponent } from './components/AddressComponent/AddressComponent';
import { FooterComponent } from './components/FooterComponent/FooterComponent';


function App() {
  return (
    <>
      <Nav />
      <ConteudoDisplay><Container_conteudo /></ConteudoDisplay>
      <Containerconteudovideo />

      <CarrosselComponent />

      <TeamCarrossel />

      <AddressComponent />

      <FooterComponent />

    </>
  );
}

export default App;
