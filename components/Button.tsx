import React from 'react';
import styled from 'styled-components/native';
import { textType } from '../constants/theme';
import Text from './Text';

interface IStyledButton {
    width?: string;
    height?: string;
    background?: string;
}

interface IButton extends IStyledButton {
    text: string;
    textColor?: string;
    buttonTextType?: textType;
    onPress: any;
}

const StyledButton = styled.TouchableOpacity<IStyledButton>`
    width: ${(p: IStyledButton) => p.width};
    height: ${(p: IStyledButton) => p.height};
    background-color: ${(p: any) => (p.background === 'primary' ? p.theme.colors.primary : p.background)};
    border-radius: 50%;
    align-items: center;
    justify-content: center;
`;

const StyledText = styled(Text)<{color: string;}>`
  color: ${(p: any) => p.color};
`;

const Button: React.FC<IButton> = ({
  width, height, text, background, textColor, buttonTextType, onPress, ...rest
}) => (
  <StyledButton width={width} height={height} background={background} onPress={onPress} {...rest}>
    <StyledText text={text} type={buttonTextType} color={textColor!} />
  </StyledButton>
);

Button.defaultProps = {
  width: '90%',
  height: '54px',
  background: 'primary',
  textColor: 'white',
  buttonTextType: 'b2',
};

export default Button;
