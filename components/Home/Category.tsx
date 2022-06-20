import { ImageSourcePropType } from 'react-native';
import React from 'react';
import styled from 'styled-components/native';
import Text from '../Text';
import { ITheme } from '../../constants/theme';

interface ICategory {
    text: string;
    image: ImageSourcePropType;
}

const Container = styled.TouchableOpacity`
    align-items: center;
`;

const ImageContainer = styled.View`
    width: 74px;
    height: 74px;
    background-color: ${(p: ITheme) => p.theme.colors.background};
    border-radius: 50%;
    align-items: center;
    justify-content: center;
    margin-bottom: 8px;
`;

const StyledImage = styled.Image`
    
`;

export default function Category({ text, image }: ICategory) {
  return (
    <Container>
      <ImageContainer>
        <StyledImage source={image} />
      </ImageContainer>

      <Text text={text} type="b4" />
    </Container>
  );
}
