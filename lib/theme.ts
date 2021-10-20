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
    brand: {
      teal: '#00CBBC',
      darkTeal: '#26858B',
      lightTeal: '#E4F2F1',
    },
  },
  styles: {
    global: {
      body: {
        fontFamily: 'body',
        color: 'teal.900',
        bg: 'white',
        overflowX: 'hidden',
        lineHeight: '180%',
        textAlign: 'left',
      },
      a: {
        color: 'teal.500',
        _hover: {
          textDecoration: 'underline',
        },
      },
    },
  },
  components: {
    Button: {
      variants: {
        solid: {
          bg: 'brand.teal',
          color: 'Black',
          _hover: {
            bg: '#0FBAAD',
          },
          _active: {
            bg: 'brand.teal',
          },
          _focus: {
            boxShadow: 'none',
          },
        },
        outline: {
          borderColor: 'brand.darkTeal',
          color: 'brand.darkTeal',
          borderWidth: '2px',
          _hover: {
            borderColor: 'brand.teal',
            bg: 'brand.teal',
            color: 'Black',
          },
          _active: {
            bg: '#0FBAAD',
          },
          _focus: {
            boxShadow: 'none',
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
