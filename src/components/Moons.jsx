import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';

import bg from '../images/astrologia-02.png';
import bottom from '../images/astrologia-08.png';
import full from '../images/astrologia-03.png';
import middle from '../images/astrologia-07.png';
import top from '../images/astrologia-06.png';

const data = [
  {
    img: bottom,
    text: `Todas las personas tenemos combinaciones diferentes de signos e influencia de planetas, por lo tanto, no tenemos las mismas características ni el mismo proceso o propósito de vida, a pesar de ser del mismo signo solar.`,
    reflect: true,
  },
  {
    img: middle,
    text: `Todas las personas tenemos combinaciones diferentes de signos e influencia de planetas, por lo tanto, no tenemos las mismas características ni el mismo proceso o propósito de vida, a pesar de ser del mismo signo solar.`,
    reflect: true,
  },
  {
    img: top,
    text: `Todas las personas tenemos combinaciones diferentes de signos e influencia de planetas, por lo tanto, no tenemos las mismas características ni el mismo proceso o propósito de vida, a pesar de ser del mismo signo solar.`,
    reflect: true,
  },
  {
    img: full,
    text: `Todas las personas tenemos combinaciones diferentes de signos e influencia de planetas, por lo tanto, no tenemos las mismas características ni el mismo proceso o propósito de vida, a pesar de ser del mismo signo solar.`,
    reflect: false,
  },
  {
    img: top,
    text: `Todas las personas tenemos combinaciones diferentes de signos e influencia de planetas, por lo tanto, no tenemos las mismas características ni el mismo proceso o propósito de vida, a pesar de ser del mismo signo solar.`,
    reflect: false,
  },
  {
    img: middle,
    text: `Sin importar el horóscopo que consultes, siempre debes tener claro que las estrellas solamente describen posibilidades y te muestran diferentes caminos, pero tanto tus acciones como tus pensamientos, son los que determinan los verdaderos resultados.`,
    reflect: false,
  },
  {
    img: bottom,
    text: `Los estudios de las transiciones planetarias ayudan principalmente a entender, la influencia que tienen los planetas en diferentes acontecimientos de la vida y saber que procesos, debemos realizar dependiendo de la transición.
    `,
    reflect: false,
  },
];

const StyledFigure = styled.figure`
  --rotate: 0;
  --scale-x: 1;
  --scale: 1;
  --translate-x: 0;
  --translate-y: 0;

  flex-shrink: 1;
  flex-grow: 0;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(3, 1fr);
  padding: var(--sizing-XL);
  background-image: url(${bg});
  background-size: 80%;
  background-position: center center;
  background-repeat: no-repeat;

  img {
    transform: scaleX(var(--scale-x)) translateX(var(--translate-x))
      translateY(var(--translate-y)) rotate(var(--rotate)) scale(var(--scale));
  }
`;

const StyledButton = styled.button`
  cursor: pointer;

  :nth-of-type(1) {
    grid-area: 3 / 1 / 4 / 2;
  }
  :nth-of-type(2) {
    grid-area: 2 / 1 / 3 / 2;
    --translate-x: 25%;
  }
  :nth-of-type(3) {
    grid-area: 1 / 1 / 2 / 2;
  }

  /* Full moon */
  :nth-of-type(4) {
    grid-area: 1 / 2 / 2 / 3;

    --translate-y: -25%;
  }

  :nth-of-type(5) {
    grid-area: 1 / 3 / 2 / 4;
  }
  :nth-of-type(6) {
    grid-area: 2 / 3 / 3 / 4;
    --translate-x: 25%;
  }
  :nth-of-type(7) {
    grid-area: 3 / 3 / 4 / 4;
  }

  /* First 3 */
  :nth-of-type(-n + 3) {
    --scale-x: -1;
  }
`;

const StyledImg = styled.img`
  :hover {
    --scale: 1.2;
    --rotate: 180deg;
  }
`;

const StyledFigc = styled.figcaption`
  grid-area: 2 / 2 / 3 / 3;
  text-align: center;
  font-size: var(--font-size-SM);
  --size: calc(100vw - calc(var(--sizing-XL) * 2));
  max-height: calc(var(--size) / 3);
  color: white;
  transform: scale(1.2);
`;

const Moons = ({ showModal }) => (
  <StyledFigure>
    {data.map(({ img, text }) => (
      <StyledButton onClick={() => showModal(text)} type="button" key={text}>
        <StyledImg src={img} alt="" />
      </StyledButton>
    ))}
    <StyledFigc>
      Es una herramienta muy útil para entender el lenguaje del alma, trabajar
      en el crecimiento personal y potenciar nuestras habilidades.
    </StyledFigc>
  </StyledFigure>
);

Moons.propTypes = {
  showModal: PropTypes.func.isRequired,
};

export default Moons;
