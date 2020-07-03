import React from 'react';
import { TextInputProperties } from 'react-native';

import Icon from 'react-native-vector-icons/Feather';

import { Container, TextInput } from './styles';

interface InputProps extends TextInputProperties {
  name: string;
  icon: string;
}

const Input: React.FC<InputProps> = ({ name, icon, ...rest }) => (
  <Container>
    <Icon name="mail" size={20} color="#666360" />

    <TextInput
      keyboardAppearance="dark"
      placeholderTextColor="#666360"
      {...rest}
    />
  </Container>
);

export default Input;
