import { ThemeProvider, useTheme } from "../src/index"
import { mergeWith } from "../src/index"
import * as React from "react"
import { Spinner } from "../src/index"


import { themeDecorator } from "../../story-layout/src/index";

export default {
  title: "Spinner",
decorators: [themeDecorator],
  parameters: {
    layout: 'centered',
  },
}

export const basic = () => <Spinner />

export const color = () => <Spinner color="red.500" />

export const size = () => (
  <div>
    {["xl", "lg", "md", "sm", "xs"].map((size) => (
      <Spinner key={size} margin={3} color="green.500" size={size} />
    ))}
  </div>
)

export const speed = () => (
  <Spinner color="blue.500" emptyColor="gray.200" speed="0.8s" />
)

export const emptyColor = () => (
  <Spinner color="red.500" emptyColor="gray.200" />
)

export const WithCustomStyleConfig = () => {
  const theme = useTheme()
  return (
    <ThemeProvider
      theme={mergeWith(theme, {
        components: {
          Spinner: {
            baseStyle: {
              color: "blue.300",
            },
          },
        },
      })}
    >
      <Spinner color="red.500" />
    </ThemeProvider>
  )
}
