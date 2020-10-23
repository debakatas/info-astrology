import PropTypes from 'prop-types';
import React, { useRef } from 'react';
import styled, { css } from 'styled-components';
import { useClickOutside } from '../utils/hooks';

const Backdrop = styled.div`
  background-color: #00000088;
  height: 100vh;
  width: 100vw;
  position: fixed;
  z-index: var(--z-index-modal);
  top: 0;
  left: 0;
  display: flex;
  padding: var(--sizing-XL);
  align-items: center;
  justify-content: center;

  ${({ visible }) =>
    visible
      ? css`
          opacity: 1;
          pointer-events: auto;
        `
      : css`
          opacity: 0;
          pointer-events: none;
        `};
`;

const Aside = styled.aside`
  background-color: var(--color-brand-pink);
  flex: auto 0 1;
  border-radius: var(--border-radius-LG);
  padding: var(--sizing-2XL) var(--sizing-3XL);
  color: var(--color-brand-blue);
  text-align: center;
  font-size: var(--font-size-XL);
  position: relative;
  max-width: calc(var(--box) * 1.2);
  margin: auto;

  &::after {
    content: '';
    width: 95%;
    height: 90%;
    display: block;
    position: absolute;
    border: var(--sizing-XS) solid var(--color-brand-yellow);
    border-radius: var(--border-radius-MD);
    top: 5%;
    left: 2.5%;
  }
`;

const Modal = ({ visible = false, setVisible, children }) => {
  const ref = useRef(null);

  useClickOutside(ref, () => {
    if (visible) {
      setVisible(false);
    }
  });

  return (
    <Backdrop visible={visible}>
      <Aside ref={ref}>{children}</Aside>
    </Backdrop>
  );
};

Modal.propTypes = {
  children: PropTypes.any,
  setVisible: PropTypes.func.isRequired,
  visible: PropTypes.bool.isRequired,
};

export default Modal;
