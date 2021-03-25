import React from 'react';
import { Stack } from '@chakra-ui/react';
import { Button } from '../index';
import { themeDecorator } from '~/story-layout';

export default {
  parameters: {
    layout: "centered",
  },
  decorators: [themeDecorator],
};

export const button_sizes = () => (
  <Stack spacing={4} direction="row" align="center">
    <Button colorScheme="teal" size="xs">
      Button xs
    </Button>
    <Button colorScheme="teal" size="sm">
      Button sm
    </Button>
    <Button colorScheme="teal" size="md">
      Button md
    </Button>
    <Button colorScheme="teal" size="lg">
      Button lg
    </Button>
  </Stack>
);

export const button_variants = () => (
  <Stack direction="row" spacing={4} align="center">
    <Button colorScheme="teal" variant="solid">
      Button solid
    </Button>
    <Button colorScheme="teal" variant="outline">
      Button outline
    </Button>
    <Button colorScheme="teal" variant="ghost">
      Button ghost
    </Button>
    <Button colorScheme="teal" variant="link">
      Button link
    </Button>
  </Stack>
);