// JSX: Javascript + XML (HTML)
// Componentes / Propriedades

import "./styles/main.css";
import logoImg from "./assets/logo.svg";

function App() {
  return (
    <div className="max-w-[1344px] mx-auto flex flex-col items-center my-20">
      <img src={logoImg} alt="logoNLW" />
      
      <h1 className="text-6xl text-white font-black mt-20">Seu <span className="bg-nlw-gradient bg-clip-text text-transparent">duo</span> está aqui.</h1>

      <div className="grid grid-cols-6 gap-6 mt-16">
        <a href="">
          <img src="./public/game1.png" alt="" />
        </a>
        <a href="">
          <img src="./public/game2.png" alt="" />
        </a>
        <a href="">
          <img src="./public/game3.png" alt="" />
        </a>
        <a href="">
          <img src="./public/game4.png" alt="" />
        </a>
        <a href="">
          <img src="./public/game5.png" alt="" />
        </a>
        <a href="">
          <img src="./public/game6.png" alt="" />
        </a>
      </div>
    </div>
  );
}

export default App
