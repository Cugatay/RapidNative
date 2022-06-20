import React from 'react';
import styled from 'styled-components/native';
import Search from '../../assets/Search';
// import Search from '../../assets/Search';

// const Icon =

const Container = styled.View`
    margin: 0 24px;
    height: 52px;
    background-color: white;
    flex-direction: row;
    margin-top: 24px;
    border-radius: 50%;
    padding: 0 16px;
    align-items: center;
`;

const TextInput = styled.TextInput`
    margin-left: 8px;
    padding-right: 24px;
`;

export default function SearchCategory() {
  return (
    <Container>
      <Search stroke="primary" />
      <TextInput placeholder="Search category" placeholderTextColor="#979899" />
    </Container>
  );
}
