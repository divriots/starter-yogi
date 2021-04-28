import * as React from "react"
import { VisuallyHidden } from "../src/index"
import { VisuallyHiddenInput } from "@chakra-ui/react"


export default {
  title: "Visually Hidden",
}

export const hiddenSpan = () => (
  <VisuallyHidden>This is visually hidden</VisuallyHidden>
)

export const hiddenInput = () => (
  <VisuallyHiddenInput
    defaultChecked
    onChange={(event) => {
      console.log(event.target.checked)
    }}
  />
)
