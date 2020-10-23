import React, { useState } from 'react';
import styled from 'styled-components';

import astral from '../images/cartas-02-09.png';
import doll from '../images/astrologia-05.png';
import map from '../images/cartas-02-08.png';
import Modal from './Modal';
import moon from '../images/astrologia-04.png';
import Moons from './Moons';

const StyledMain = styled.main`
  display: flex;
  flex-direction: column;
  height: 100vh;
  justify-content: space-between;
  overflow: hidden;
  max-width: var(--box);
  margin: auto;
`;

const StyledH1 = styled.h1`
  color: white;
  font-size: var(--font-size-3XL);
  padding: var(--sizing-2XL) var(--sizing-6XL);
  text-align: center;
  text-shadow: var(--sizing-XS) var(--sizing-XS) var(--sizing-XS)
    var(--color-black);
`;

const StyledMoon = styled.img`
  --rotate: 0deg;
  --scale-x: 1;

  bottom: 0;
  left: 0;
  padding: var(--sizing-MD);
  position: fixed;
  transform: scaleX(var(--scale-x)) rotate(var(--rotate));

  :last-of-type {
    --scale-x: -1;

    left: unset;
    right: 0;
  }

  &:hover {
    --rotate: 12deg;

    cursor: pointer;
  }
`;

const StyledDoll = styled.img`
  flex-shrink: 0;
`;

const Card = styled.img`
  height: 70vh;
`;

const Main = () => {
  const [modalImg, setModalImg] = useState(null);
  const [text, setText] = useState('');
  const [visible, setVisible] = useState(false);

  const showImg = (img) => {
    setModalImg(img);
    setVisible(true);
  };

  return (
    <>
      <StyledMain>
        <StyledH1>La astrología como una guía de vida</StyledH1>
        <Moons
          showModal={(newText) => {
            setText(newText);
            setVisible(true);
          }}
        />
        <StyledDoll src={doll} alt="Doll" />
        <StyledMoon src={moon} onClick={() => showImg(astral)} />
        <StyledMoon src={moon} onClick={() => showImg(map)} />
      </StyledMain>
      <Modal visible={visible} setVisible={setVisible}>
        {modalImg ? <Card src={modalImg} alt="" /> : <p>{text}</p>}
      </Modal>
    </>
  );
};

export default Main;
