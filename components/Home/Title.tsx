import React from 'react';
import { TouchableOpacity } from 'react-native-gesture-handler';
import styled from 'styled-components/native';
import { ITheme } from '../../constants/theme';
import Text from '../Text';

interface ITitle {
  title: string;
}

const Container = styled.View`
  margin-top: 24px;
  padding: 0 24px;
  justify-content: space-between;
  flex-direction: row;
  align-items: center;
`;

const SeeAll = styled(Text)`
  color: ${(p: ITheme) => p.theme.colors.primary};
`;

export default function Title({ title }: ITitle) {
  return (
    <Container>
      <Text text={title} type="h4" />
      <TouchableOpacity>
        <SeeAll text="See all" type="b4" />
      </TouchableOpacity>
    </Container>
  );
}
