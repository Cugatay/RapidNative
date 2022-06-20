import React from 'react';
import styled from 'styled-components/native';
import { ITheme } from '../../constants/theme';
import Button from '../Button';
import Text from '../Text';

const Container = styled.View`
    width: 95%;
    height: 100%;
    /* height: 188px; */
    border-radius: 16px;
    position: relative;
    overflow: hidden;
`;

const Picture = styled.Image`
    width: 100%;
    height: 100%;
`;

const Content = styled.View`
    width: 50%;
    height: 200%;
    margin-top: -20%;
    background: ${(p: ITheme) => p.theme.colors.primary};
    position: absolute;
    right: 0;
    top: 0;
    border-top-left-radius: 140%;
    border-bottom-left-radius: 140%;
    align-items: center;
    justify-content: center;
`;

const OfferName = styled(Text)`
  color: white;
  opacity: 0.8;
`;

const Title = styled.Text`
  margin: 12px 0;
  font-size: 32px;
  color: white;
  font-family: DMSans_500Medium;
`;

export default function Banner() {
  return (
    <Container>
      <Picture source={require('../../assets/images/banner_picture.png')} />
      <Content>
        <OfferName text="Ramadan Offers" type="b5" />
        <Title>Get 25%</Title>
        <Button text="Grab Offer >" onPress={() => console.log('hi')} background="white" textColor="#6BA821" width="108" height="32" buttonTextType="b4" />
      </Content>
    </Container>
  );
}
