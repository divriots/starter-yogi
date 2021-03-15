import React from 'react';
import { MDXProvider } from '@mdx-js/react';
import { ChakraProvider } from '@chakra-ui/react';
import { CoreLayout } from '@divriots/dockit-react/mdx-layout-core/dist/CoreLayout';
import { theme } from '../../theme/src';
import { extendTheme } from '@chakra-ui/react';
import { components } from './components';
import './style.css';

// extend default Chakra theme
const fullTheme = extendTheme(theme);

const ThemeProviderLayout = (props) => (
  <MDXProvider components={components}>
    <ChakraProvider theme={fullTheme}>
      <CoreLayout {...props} />
    </ChakraProvider>
  </MDXProvider>
);

export default ThemeProviderLayout;
