import React from 'react';
import { useTransition } from 'react-spring';

import { Container } from './styles';

import { ToastMessage } from '../../hooks/toast';

import Toast from './Toast';

interface ToasContainerProps {
  messages: ToastMessage[];
}

const ToasContainer: React.FC<ToasContainerProps> = ({ messages }) => {
  const messagesWithTransitions = useTransition(
    messages,
    message => message.id,
    {
      from: { right: '-120%', opacity: 0 },
      enter: { right: '0%', opacity: 1 },
      leave: { right: '-120%', opacity: 0 },
    },
  );

  return (
    <Container>
      {messagesWithTransitions.map(({ item, key, props }) => (
        <Toast key={key} style={props} toast={item} />
      ))}
    </Container>
  );
};

export default ToasContainer;
