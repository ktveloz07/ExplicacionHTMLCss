import logo from './media/logo.png';
import './styles/styles.css';
import borderCollie from "./media/borderCollie.jpg";
import rhodesian from "./media/rhodesian.jpg";

function App() {
  return (
    <div className="App">
      <header>
        <ul class="navbar">
          <li>
              <img src={logo} alt="imagen" class="logo" />
          </li> 
          <li>
              <button class="botonGenerico mainButton">Nuevo post</button>
          </li>
          <li><button class="botonGenerico secondaryButton">login</button></li>
          <li><button class="botonGenerico mainButton">Registro</button></li>
          <li>
            <div class="buscar">
              <input placeholder="Buscar una raza" />
              <i class="fas fa-search botonGenerico iconobusqueda"></i>
            </div>
          </li>
        </ul>
      </header>
      <main>
        <section>
          <h1>Razas de perros</h1>
          <ul className="breedcardcontainer">
            <li className="breedcard" >
              <div className="contenedorImagen">
                <img src={borderCollie} alt="border Collie" />
              </div>
              <span className="breedTitle">Border Collie</span>
            </li>
            <li className="breedcard">
              <div className="contenedorImagen">
                <img src={rhodesian} alt="Rhodesian" />
              </div>
              <span className="breedTitle">Rhodesian</span>
            </li>
          </ul>
        </section>
        <section></section>
      </main>
      <footer></footer>
    </div>
  );
}

export default App;
