import React from 'react';
import { MDXProvider } from '@mdx-js/react';
import { ChakraProvider, extendTheme } from '@chakra-ui/react';
import { CoreLayout } from '@divriots/dockit-react/mdx-layout-core/dist/CoreLayout';
import { theme } from '~/theme';
import { components } from './components';
import './style.css';

// extend default Chakra theme
const fullTheme = extendTheme(theme);

const ThemeProviderLayout = (props) => (
  <MDXProvider components={components}>
    <ChakraProvider theme={fullTheme}>
      <CoreLayout
        logo={
          <img
            src="https://storage.googleapis.com/prd-assets/yogi-color.svg"
            style={{ width: '8rem' }}
          />
        }
        {...props}
      />
    </ChakraProvider>
  </MDXProvider>
);

export default ThemeProviderLayout;
