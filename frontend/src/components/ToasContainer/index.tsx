import React from 'react';
import { FiXCircle, FiAlertCircle } from 'react-icons/fi';

import { Container, Toast } from './styles';

const ToasContainer: React.FC = () => {
  return (
    <Container>
      <Toast type="sucess" hasDescription={false}>
        <FiAlertCircle size={20} />

        <div>
          <strong>Aconteceu um erro</strong>
        </div>

        <button type="button">
          <FiXCircle size={16} />
        </button>
      </Toast>

      <Toast type="error" hasDescription>
        <FiAlertCircle size={20} />

        <div>
          <strong>Aconteceu um erro</strong>
          <p>Não foi possível fazer login na aplicação</p>
        </div>

        <button type="button">
          <FiXCircle size={16} />
        </button>
      </Toast>

      <Toast type="info" hasDescription>
        <FiAlertCircle size={20} />

        <div>
          <strong>Aconteceu um erro</strong>
          <p>Não foi possível fazer login na aplicação</p>
        </div>

        <button type="button">
          <FiXCircle size={16} />
        </button>
      </Toast>
    </Container>
  );
};

export default ToasContainer;
