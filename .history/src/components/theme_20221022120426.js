import {Dimensions} from 'react-native';
import {getStatusBarHeight} from 'react-native-status-bar-height';
export const Colors = {
  primaryColor: '#230871',
  secondaryColor: '#FF664C',
  tertiaryColor: '#feaebb',
  disabledColor: '#CDCDCD',
  darkTextColor: '#000000',
  lightTextColor: '#FFFFFF',
  headerBackground: "#fafafa",
};

export const DesignTokens = {
  spaces: {
    container: 20,
    content: 8,
    inline: 5,
    item: 10,
  },
  borders: {
    indicator: 2,
    line: 1,
  },
  radiuses: {
    quarter: 5,
    full: 70,
    half: 10,
  },
  disabled: {
    opacity: 0.33,
  },
  fontWeights: {
    thin: '100',
    extraLight: '200',
    light: '300',
    regular: '400',
    medium: '500',
    semiBold: '600',
    bold: '700',
    extraBold: '800',
    black: '900',
  },
  fontSizes: {
    title: 10,
    text: 14,
  },
  widths: {
    large: '90%',
    medium: '80%',
    small: '60%',
    iconButton:50,
  },
  heights:{
    statusbar:getStatusBarHeight(),
    header:((Platform.OS === 'ios' ? 45 : 35)+getStatusBarHeight()),
    iconButton: 40,
  }
 
};
