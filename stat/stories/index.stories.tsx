import * as React from "react"
import { Stat } from "../src/index"
import { StatArrow, StatGroup, StatHelpText, StatLabel, StatNumber } from "../src/index"

import { themeDecorator } from "../../story-layout/src/index";

export default {
  title: "Stat",
decorators: [themeDecorator],
}

/**
 * Default Stat component
 */

export const Default = () => {
  return (
    <Stat>
      <StatLabel>Collected Fees</StatLabel>
      <StatNumber>£0.00</StatNumber>
      <StatHelpText>Feb 12 - Feb 28</StatHelpText>
    </Stat>
  )
}

/**
 * Stat component with indicators
 */

export const WithIndicators = () => {
  return (
    <StatGroup>
      <Stat>
        <StatLabel>Sent</StatLabel>
        <StatNumber>345,670</StatNumber>
        <StatHelpText>
          <StatArrow type="increase" />
          23.36%
        </StatHelpText>
      </Stat>

      <Stat>
        <StatLabel>Clicked</StatLabel>
        <StatNumber>45</StatNumber>
        <StatHelpText>
          <StatArrow type="decrease" />
          9.05%
        </StatHelpText>
      </Stat>
    </StatGroup>
  )
}
