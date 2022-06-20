import React from 'react';
import styled from 'styled-components/native';
import Search from '../assets/Search';
import { ITheme } from '../constants/theme';
import Text from './Text';

interface IHeader {
    back?: boolean;
    avatar?: boolean;
    position?: boolean;
    search?: boolean;
    title?: string;
}

const Container = styled.View`
    margin: 0 24px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`;

const Button = styled.TouchableOpacity`
    width: 44px;
    height: 44px;
    border-width: 1px;
    border-color: ${(p: ITheme) => p.theme.colors.stroke};
    border-radius: 50%;
    align-items: center;
    justify-content: center;
`;

const Icon = styled.Image`
    width: 22px;
    height: 22px;
`;

const AvatarComponent = styled.View`
    flex-direction: row;
    align-items: center;
`;

const AvatarContainer = styled.View`
    width: 44px;
    height: 44px;
    align-items: center;
    justify-content: flex-end;
    background-color: #DEDEE8;
    border-radius: 50%;
    overflow: hidden;
`;

const Avatar = styled.Image`
    width: 32px;
    height: 32px;
    margin-bottom: 0;
`;

const AvatarText = styled.View`
    margin-left: 12px;
`;

const Greeting = styled(Text)`
    color: ${(p: ITheme) => p.theme.colors.font.grey}
`;

const PositionContainer = styled.TouchableOpacity`
    width: 116px;
    height: 40px;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    background-color: white;
    border-radius: 50%;
`;

const PositionIcon = styled.Image`
    width: 15px;
    height: 18px;
    margin-right: 8px;
`;

const Down = styled.Image`
    width: 8px;
    height: 8px;
    margin-left: 8px;
`;

export default function Header({
  back, avatar, position, search, title,
}: IHeader) {
  return (
    <Container>
      { back
      && (
      <Button>
        <Icon source={require('../assets/back.png')} />
      </Button>
      )}

      {
        avatar
        && (
        <AvatarComponent>
          <AvatarContainer>
            <Avatar source={require('../assets/images/avatar.png')} />
          </AvatarContainer>

          <AvatarText>
            <Greeting text="Good Morning" type="b5" />
            <Text text="Amelia Barlow" type="b2" />
          </AvatarText>
        </AvatarComponent>
        )
      }

      {
        position
      && (
      <PositionContainer>
        <PositionIcon source={require('../assets/position.png')} />
        <Text text="My Flat" type="b5" />
        <Down source={require('../assets/down.png')} />
      </PositionContainer>
      )
      }

      {
        title
        && <Text text={title} type="h3" />
      }

      {
      search
      && (
      <Button>
        <Search stroke="black" />
      </Button>
      )
      }

    </Container>
  );
}

Header.defaultProps = {
  back: false,
  avatar: false,
  position: false,
  search: false,
  title: null,
};
