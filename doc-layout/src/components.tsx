import React from 'react';
import '@chakra-ui/react-utils';
import { chakra } from '@chakra-ui/react';
import { Alert } from '~/alert';
import { Table } from '~/table';
import { Props as PropsTable } from '@divriots/dockit-react/props';

const components = {
  h1: (props) => <chakra.h1 apply="mdx.h1" {...props} />,
  h2: (props) => <chakra.h2 apply="mdx.h2" {...props} />,
  h3: (props) => <chakra.h3 apply="mdx.h3" {...props} />,
  h4: (props) => <chakra.h4 apply="mdx.h4" {...props} />,
  h5: (props) => <chakra.h5 apply="mdx.h5" {...props} />,
  h6: (props) => <chakra.h6 apply="mdx.h6" {...props} />,
  hr: (props) => <chakra.hr apply="mdx.hr" {...props} />,
  inlineCode: (props) => (
    <chakra.code apply="mdx.code" color="teal.500" bg="teal.50" {...props} />
  ),
  //code: CodeBlock,
  // pre: Pre,
  // kbd: Kbd,
  // br: ({ reset, ...props }) => (
  //   <Box
  //     as={reset ? "br" : undefined}
  //     height={reset ? undefined : "24px"}
  //     {...props}
  //   />
  // ),
  table: Table,
  // th: Thead,
  // td: TData,
  a: (props) => <chakra.a apply="mdx.a" {...props} />,
  p: (props) => <chakra.p apply="mdx.p" {...props} />,
  // ul: (props) => <chakra.ul apply="mdx.ul" {...props} />,
  // ol: (props) => <chakra.ol apply="mdx.ul" {...props} />,
  // li: (props) => <chakra.li pb="4px" {...props} />,
  blockquote: (props) => (
    <Alert
      mt="4"
      role="none"
      status="warning"
      variant="left-accent"
      as="blockquote"
      rounded="4px"
      my="1.5rem"
      {...props}
    />
  ),
  PropsTable,
};

export { components };
