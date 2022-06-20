const theme = {
  colors: {
    font: {
      dark: '#06161C',
      grey: '#979899',
    },
    white: '#FFFFFF',
    primary: '#23AA49',
    secondary: '#FF324B',
    stroke: '#F1F1F5',
    light_grey: '#E0E0E0',
    light_grey_2: '#DBDBDB',
    background: '#F3F5F7',
  },
  text: {
    regular: 'font-size: 18px; font-family: DMSans_400Regular;',
    h1: 'font-size: 28px; font-family: DMSans_700Bold;',
    h2: 'font-size: 24px; font-family: DMSans_700Bold;',
    h3: 'font-size: 20px; font-family: DMSans_700Bold;',
    h4: 'font-size: 18px; font-family: DMSans_700Bold;',
    b1: 'font-size: 16px; font-family: DMSans_700Bold;',
    b2: 'font-size: 16px; font-family: DMSans_500Medium;',
    b3: 'font-size: 14px; font-family: DMSans_700Bold;',
    b4: 'font-size: 14px; font-family: DMSans_500Medium;',
    b5: 'font-size: 12px; font-family: DMSans_500Medium;',
  },
};

export default theme;

const ThemeProp = { theme };

export type ITheme = typeof ThemeProp;
export type textType = 'regular' | 'h1' | 'h2' | 'h3' | 'h4' | 'b1' | 'b2' | 'b3' | 'b4' | 'b5';
