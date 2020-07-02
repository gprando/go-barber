import React, { useEffect } from 'react';
import {
  FiXCircle,
  FiAlertCircle,
  FiCheckCircle,
  FiInfo,
} from 'react-icons/fi';

import { Container } from './styles';

import { ToastMessage, useToast } from '../../../hooks/toast';

interface ToastProps {
  toast: ToastMessage;
}

const icons = {
  info: <FiInfo size={24} />,
  sucess: <FiCheckCircle size={24} />,
  error: <FiAlertCircle size={24} />,
};

const Toast: React.FC<ToastProps> = ({ toast }) => {
  const { removeToast } = useToast();

  useEffect(() => {
    const time = setTimeout(() => {
      removeToast(toast.id);
    }, 3000);

    return () => {
      clearTimeout(time);
    };
  }, [toast.id, removeToast]);

  return (
    <Container type={toast.type} hasDescription={!!toast.description}>
      {icons[toast.type || 'info']}

      <div>
        <strong>{toast.title}</strong>
        {toast.description && <p>{toast.description}</p>}
      </div>

      <button onClick={() => removeToast(toast.id)} type="button">
        <FiXCircle size={16} />
      </button>
    </Container>
  );
};

export default Toast;