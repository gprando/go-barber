import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  padding: 0 24px;
`;

export const Title = styled.Text`
  font-size: 32px;
  color: #f4ede8;
  text-align: center;
  margin-top: 48px;
  font-family: 'RobotoSlab-Medium';
`;

export const Description = styled.Text`
  font-size: 18px;
  color: #999591;
  font-family: 'RobotoSlab-Regular';
  margin-top: 16px;
`;

export const OkButton = styled(RectButton)`
  background: #ff9900;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  margin-top: 24px;
  padding: 12px 24px;
`;

export const OkButtonText = styled.Text`
  font-size: 18px;
  color: #312e38;
  font-family: 'RobotoSlab-Medium';
`;
