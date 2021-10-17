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
    Container: {
      baseStyle: {
        maxWidth: '4xl',
      },
    },
  },
};

export const theme = extendTheme(override);
export const useTheme = () => defaultUseTheme<typeof theme>();
