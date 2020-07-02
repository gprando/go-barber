import React from 'react';

import { Container } from './styles';

import { ToastMessage } from '../../hooks/toast';

import Toast from './Toast';

interface ToasContainerProps {
  messages: ToastMessage[];
}

const ToasContainer: React.FC<ToasContainerProps> = ({ messages }) => {
  return (
    <Container>
      {messages.map(message => (
        <Toast key={message.id} toast={message} />
      ))}
    </Container>
  );
};

export default ToasContainer;
