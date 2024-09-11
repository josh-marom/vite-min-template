import "@mantine/core/styles.css";
import { Flex, MantineProvider } from "@mantine/core";
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

type Company = typeof companies[number]['value']

export default function App() {
  const [company, setCompany] = useState<Company>();
  return (
    <MantineProvider theme={theme}>
      <Flex h="600px" justify="center" align="center">
        <SegmentedButton
          color="grape"
          radius="md"
          items={companies}
          onClick={setCompany}
          value={company}
        />
      </Flex>
    </MantineProvider>
  );
}
