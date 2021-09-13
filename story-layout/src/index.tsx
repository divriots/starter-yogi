import React from 'react';
import { ChakraProvider, extendTheme } from '@chakra-ui/react';
import { theme } from '~/theme';

// extend default Chakra theme
const fullTheme = extendTheme(theme);

export const themeDecorator = (Story) => (
  <ChakraProvider theme={fullTheme}>
    <Story />
  </ChakraProvider>
);
