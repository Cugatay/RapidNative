import React from 'react';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import styled from 'styled-components/native';
import type { RootStackParamList } from '../App';
import Text from '../components/Text';
import { ITheme } from '../constants/theme';
import Button from '../components/Button';

type Props = NativeStackScreenProps<RootStackParamList, 'Home'>;

const Container = styled.SafeAreaView`
  flex: 1;
  align-items: center;
  /* justify-content: center; */
`;

const Background = styled.Image`
  width: 100%;
  height: 360px;
  position: absolute;
  left: 0;
  top: 0;
  z-index: -3;
`;

const LogoContainer = styled.View`
  background-color: white;
  width: 64px;
  height: 64px;
  border-radius: 50%;
  align-items: center;
  justify-content: center;
  margin-top: 96px;
`;

const Logo = styled.Image`
  width: 40px;
  height: 33px;
  margin-left: -2px;
  margin-top: -2px;
`;

const Title = styled(Text).attrs(() => ({ type: 'h1', text: 'Get your groceries delivered to your home' }))`
  width: 320px;
  margin-top: 32px;
  text-align: center;
`;

const SubTitle = styled(Text).attrs(() => ({ type: 'b2', text: 'The best delivery app in town for delivering your daily fresh groceries' }))`
  width: 274px;
  color: ${(p: ITheme) => p.theme.colors.font.grey};
  margin-top: 24px;
`;

const StyledButton = styled(Button)`
  margin-top: 40px;
`;

const BottomImage = styled.Image`
  position: absolute;
  width: 100%;
  height: 360px;
  left: 0;
  bottom: 0;
`;

export default function Home({ navigation }: Props) {
  return (
    <Container>
      <Background source={require('../assets/images/circular_background.png')} />

      <LogoContainer>
        <Logo source={require('../assets/icon.png')} />
      </LogoContainer>

      <Title />
      <SubTitle />

      <StyledButton text="Shop now" onPress={() => navigation.navigate('Mobile')} />

      <BottomImage source={require('../assets/images/intro_picture.png')} />
    </Container>
  );
}
