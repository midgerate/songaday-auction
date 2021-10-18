import { extendTheme, ThemeOverride, useTheme as defaultUseTheme } from '@chakra-ui/react';
// import defaultTheme from '@chakra-ui/theme';

const override: ThemeOverride = {
  fonts: {
    // body: `'Titillium Web', ${defaultTheme.fonts.body}`,
    // heading: `'DR RAYMOND', ${defaultTheme.fonts.heading}`,
  },
  fontSizes: {},
  fontWeights: {
    normal: 400,
    bold: 700,
  },
  colors: {
    main: '#2B2E6E',
    selectpurple: '#6D70C5',
  },
  styles: {
    global: {
      body: {
        fontFamily: 'body',
        color: 'black',
        bg: 'white',
        overflowX: 'hidden',
        lineHeight: 'normal',
      },
    },
  },
  components: {
    Button: {
      variants: {
        solid: {
          bg: 'teal.300',
          _hover: {
            bg: 'teal.400',
          },
        },
        outline: {
          borderColor: 'teal.500',
          color: 'teal.500',
          borderWidth: '2px',
          _hover: {
            borderColor: 'teal.700',
            color: 'teal.700',
            bg: 'transparent',
          },
        },
      },
    },
    Container: {
      baseStyle: {
        maxWidth: '4xl',
      },
    },
  },
};

export const theme = extendTheme(override);
export const useTheme = () => defaultUseTheme<typeof theme>();
