import React from 'react';
import Svg, { Path } from 'react-native-svg';
import styled from 'styled-components/native';

interface ISearch {
    stroke: 'black' | 'primary'
}

const StyledSvg = styled(Svg)<{xmlns: any}>`
    width: 22px;
    height: 22px;
`;

const Search = ({ stroke }: ISearch) => (
  <StyledSvg
    width={22}
    height={22}
    xmlns="http://www.w3.org/2000/svg"
    stroke={stroke === 'black' ? '#06161C' : '#23AA49'}
  >
    <Path
      stroke={stroke === 'black' ? '#06161C' : '#23AA49'}
      d="M10.412 16.825a6.413 6.413 0 1 0 0-12.825 6.413 6.413 0 0 0 0 12.825zm7.088.675-1.35-1.35"
    />
  </StyledSvg>
);

export default Search;
