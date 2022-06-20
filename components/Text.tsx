import React from 'react';
import styled from 'styled-components/native';
import { textType } from '../constants/theme';

interface IText {
    text: string;
    type?: textType;
}

const StyledText = styled.Text<{type?: textType;}>`
    ${(p: any) => p.theme.text[p.type]}
`;

const Text: React.FC<IText> = ({ text, type, ...rest }) => (
  <StyledText type={type} {...rest}>{text}</StyledText>
);

Text.defaultProps = {
  type: 'regular',
};

export default Text;
