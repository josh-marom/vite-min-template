import "@mantine/core/styles.css";
import { Flex, MantineProvider, Stack } from "@mantine/core";
import { theme } from "./theme";
import { SegmentedButton } from "./SegmentedButton";
import { useState } from "react";

const companies = [
  {
    label: 'Google',
    value: 'google',
  },
  {
    label: 'Amazon',
    value: 'amazon',
  },
  {
    label: 'Microsoft',
    value: 'microsoft',
  }
] as const

const formatting = [
  {
    label: 'B',
    value: 'bold',
  },
  {
    label: 'U',
    value: 'underline',
  },
  {
    label: 'I',
    value: 'italic',
  },
  {
    label: 'S',
    value: 'strikethrough',
  },
] as const

type Company = typeof companies[number]['value']
type Formatting = typeof formatting[number]['value']

export default function App() {
  const [company, setCompany] = useState<Company>();
  const [format, setFormat] = useState<Formatting[]>();

  return (
    <MantineProvider theme={theme}>
      <Flex h="600px" justify="center" align="center">
        <Stack>
          <SegmentedButton
            color="purple"
            radius="md"
            items={companies}
            onClick={setCompany}
            value={company}
          />
          <SegmentedButton
            color="orange"
            radius="md"
            isMulti
            items={formatting}
            onClick={setFormat}
            value={format}
          />
        </Stack>
      </Flex>
    </MantineProvider>
  );
}
