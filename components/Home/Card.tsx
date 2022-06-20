import { Dimensions, ImageSourcePropType } from 'react-native';
import React from 'react';
import styled from 'styled-components/native';
import { ITheme } from '../../constants/theme';
import Text from '../Text';

interface ICard {
    title: string;
    price: number;
    image: ImageSourcePropType
}

const Container = styled.View`
    width: ${(Dimensions.get('screen').width - 64) / 2};
    height: 214px;
    background-color: ${(p: ITheme) => p.theme.colors.background};
    border-radius: 16px;
    justify-content: center;
    position: relative;
`;

const ProductImage = styled.Image`
    width: 112px;
    height: 98px;
    margin: 0 auto 26px auto;
`;

const InfoContainer = styled.View`
    margin-left: 16px
`;

const Price = styled(Text)`
  color: ${(p: ITheme) => p.theme.colors.secondary};
  margin-top: 4px;
`;

const AddButton = styled.TouchableOpacity`
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background-color: ${(p: ITheme) => p.theme.colors.primary};
  position: absolute;
  right: 12px;
  bottom: 12px;
  align-items: center;
  justify-content: center;
`;

const Plus = styled.Image`
  width: 16px;
  height: 16px;
`;

export default function Card({ title, price, image }: ICard) {
  return (
    <Container>
      <ProductImage source={image} />

      <InfoContainer>
        <Text text={title} type="b3" />
        <Price text={`1kg, ${price}$`} type="b1" />
      </InfoContainer>

      <AddButton>
        <Plus source={require('../../assets/plus.png')} />
      </AddButton>
    </Container>
  );
}
