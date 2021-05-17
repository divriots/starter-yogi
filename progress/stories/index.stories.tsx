import { chakra } from "../src/index"
import { extendTheme, useTheme, ThemeProvider } from "../src/index"
import * as React from "react"
import { Progress } from "../src/index"
import { ProgressLabel } from "../src/index"

import { themeDecorator } from "../../story-layout/src/index";

export default {
  title: "Linear Progress",
  decorators: [themeDecorator],
}

export const basic = () => <Progress value={50} />

export const withColorScheme = () => <Progress colorScheme="pink" value={20} />

export const indeterminate = () => (
  <Progress margin="20px" colorScheme="cyan" size="xs" isIndeterminate />
)

export const withLabel = () => (
  <Progress value={60}>
    <ProgressLabel>60%</ProgressLabel>
  </Progress>
)

export const withStripe = () => (
  <Progress colorScheme="green" hasStripe value={20} />
)

export const withSizes = () => (
  <div>
    <Progress colorScheme="green" size="sm" value={20} />
    <br />
    <Progress colorScheme="green" size="md" value={20} />
    <br />
    <Progress colorScheme="green" size="lg" value={20} />
  </div>
)

export const withAnimation = () => (
  <Progress colorScheme="green" hasStripe isAnimated value={20} />
)

export const withCustomBorderRadius = () => (
  <Progress value={20} borderRadius="4px" />
)

export const WithThemeBorderRadiusOverride = () => {
  const theme = useTheme()
  const extendedTheme = extendTheme(
    {
      components: {
        Progress: {
          baseStyle: {
            track: {
              borderRadius: "md",
            },
          },
        },
      },
    },
    theme as any,
  )

  return (
    <ThemeProvider theme={extendedTheme}>
      <Progress value={50} />
    </ThemeProvider>
  )
}
