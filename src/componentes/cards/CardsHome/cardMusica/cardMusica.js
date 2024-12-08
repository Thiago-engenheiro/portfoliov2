import { useState } from 'react';
import './cardMusica.css';

export function MusicPlayer() {
  const [isPlaying, setIsPlaying] = useState(false); // Estado para controlar a animação

  const handlePlayClick = () => {
    setIsPlaying(!isPlaying); // Alterna o estado de animação
  };

  return (
    <section className='cardMusica'>
      <div className="music-player-container">
        <div className="animation-container">
          <svg
            width="128"
            height="128"
            viewBox="0 0 128 128"
            className={`animation-svg ${isPlaying ? 'rotate' : ''}`} // Adiciona a classe 'rotate' se estiver tocando
          >
            <rect width="128" height="128" fill="black"></rect>
            <circle cx="20" cy="20" r="2" fill="white"></circle>
            <circle cx="40" cy="30" r="2" fill="white"></circle>
            <circle cx="60" cy="10" r="2" fill="white"></circle>
            <circle cx="80" cy="40" r="2" fill="white"></circle>
            <circle cx="100" cy="20" r="2" fill="white"></circle>
            <circle cx="120" cy="50" r="2" fill="white"></circle>
            <circle cx="90" cy="30" r="10" fill="white" fillOpacity="0.5"></circle>
            <circle cx="90" cy="30" r="8" fill="white"></circle>
            <path
              d="M0 128 Q32 64 64 128 T128 128"
              fill="purple"
              stroke="black"
              strokeWidth="1"
            ></path>
            <path
              d="M0 128 Q32 48 64 128 T128 128"
              fill="mediumpurple"
              stroke="black"
              strokeWidth="1"
            ></path>
            <path
              d="M0 128 Q32 32 64 128 T128 128"
              fill="rebeccapurple"
              stroke="black"
              strokeWidth="1"
            ></path>
            <path
              d="M0 128 Q16 64 32 128 T64 128"
              fill="purple"
              stroke="black"
              strokeWidth="1"
            ></path>
            <path
              d="M64 128 Q80 64 96 128 T128 128"
              fill="mediumpurple"
              stroke="black"
              strokeWidth="1"
            ></path>
          </svg>
          <div className="circle-overlay"></div>
        </div>
      </div>

      <button class="buttonPlay">
      <div class="dots_border"></div>
          <img
            className='Play'
            src="/imagens/icones/play.png"
            alt=""
            onClick={handlePlayClick} // Dispara a função para alternar o estado
          />

          <span class="text_button">{isPlaying ? 'Pausar' : 'Play'}</span>

        </button>
    </section>
  );
};