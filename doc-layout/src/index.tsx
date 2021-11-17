import * as React from 'react';
import { MDXProvider } from '@mdx-js/react';
import {
  ChakraProvider,
  extendTheme,
  useColorMode,
  ColorModeScript,
  ThemeConfig,
} from '@chakra-ui/react';
import {
  CoreLayout,
  StylesheetSwitch,
} from '@divriots/dockit-react/mdx-layout-core';
import { theme } from '~/theme';
import { components } from './components';
import './style.css';
import { Logo } from './Logo';
import { ColorScheme } from '@divriots/dockit-react/mdx-layout-core/dist/StylesheetSwitch';

// extend default Chakra theme
const config: ThemeConfig = {
  initialColorMode: 'system',
  useSystemColorMode: false,
};

const fullTheme = extendTheme({ ...theme, config });

const ColorModeSwitch = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <StylesheetSwitch
      defaultColorScheme={colorMode}
      onSwitch={() => toggleColorMode()}
      stylesheets={{ dark: '', light: '' }}
    />
  );
};

const ThemeProviderLayout = (props) => (
  <>
    <ColorModeScript initialColorMode="system" />
    <MDXProvider components={components}>
      <ChakraProvider theme={fullTheme}>
        <CoreLayout
          stylesheetSwitch={<ColorModeSwitch />}
          logo={
            <div style={{ width: '8rem' }}>
              <Logo />
            </div>
          }
          {...props}
        />
      </ChakraProvider>
    </MDXProvider>
  </>
);

export default ThemeProviderLayout;
