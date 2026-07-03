import { createTheme, type MantineColorsTuple } from "@mantine/core";

const blueFrance: MantineColorsTuple = [
  "#f4f6ff",
  "#e7eaff",
  "#cbd2ff",
  "#adb7ff",
  "#919eff",
  "#7d8cff",
  "#6b78f6",
  "#5865d8",
  "#4954aa",
  "#000091",
];

const greenSignal: MantineColorsTuple = [
  "#effaf3",
  "#dff3e7",
  "#bce6ce",
  "#96d7b2",
  "#73ca99",
  "#5cc288",
  "#45aa73",
  "#34885c",
  "#276d49",
  "#18753c",
];

export const mantineTheme = createTheme({
  fontFamily: "Marianne, Arial, sans-serif",
  primaryColor: "blueFrance",
  colors: {
    blueFrance,
    greenSignal,
  },
  defaultRadius: "sm",
  headings: {
    fontFamily: "Marianne, Arial, sans-serif",
    fontWeight: "700",
  },
});
