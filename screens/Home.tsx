import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import styled from 'styled-components/native';
import Header from '../components/Header';
import Banner from '../components/Home/Banner';
import Card from '../components/Home/Card';
import Category from '../components/Home/Category';
import SearchCategory from '../components/Home/SearchCategory';
import Title from '../components/Home/Title';
import { ITheme } from '../constants/theme';

const BannerContainer = styled.View`
  width: 100%;
  margin-top: 24px;
  align-items: center;
  max-height: 24%;
`;

const Background = styled.View`
    width: 120%;
    height: 264px;
    margin-left: -10%;
    position: absolute;
    border-bottom-left-radius: 150%;
    border-bottom-right-radius: 150%;
    background-color: ${(p: ITheme) => p.theme.colors.background};
    z-index: -2;
`;

const CategoryContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin: 16px 24px 0 24px;
`;

const CardContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin: 16px 24px 0 24px;
`;

export default function Mobile() {
  return (
    <SafeAreaView>
      <Header avatar position />
      <Background />

      <SearchCategory />

      <BannerContainer>
        <Banner />
      </BannerContainer>

      <Title title="Categories" />
      <CategoryContainer>
        <Category text="Fruits" image={require('../assets/images/apple.png')} />
        <Category text="Vegetables" image={require('../assets/images/broccoli.png')} />
        <Category text="Diary" image={require('../assets/images/cheese.png')} />
        <Category text="Meat" image={require('../assets/images/meat.png')} />
      </CategoryContainer>

      <Title title="Best Selling" />
      <CardContainer>
        <Card title="Bell Pepper Red" image={require('../assets/images/product1.png')} price={4} />
        <Card title="Lamb Meat" image={require('../assets/images/product2.png')} price={45} />
      </CardContainer>
    </SafeAreaView>
  );
}
