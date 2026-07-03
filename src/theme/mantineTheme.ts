import {
  Badge,
  Button,
  Card,
  Container,
  Paper,
  Table,
  Text,
  Title,
  createTheme,
  type MantineColorsTuple,
} from "@mantine/core";
import { dsfrTokens } from "./dsfrTokens";

const institutionalBlue: MantineColorsTuple = [
  "#f3f6ff",
  "#e4e9ff",
  "#c8d2ff",
  "#aab8ff",
  "#8f9eff",
  "#7b8dff",
  "#6678f6",
  "#5364dc",
  "#4654b3",
  "#000091",
];

const signalGreen: MantineColorsTuple = [
  "#eefaf3",
  "#d9f1e2",
  "#b4e2c8",
  "#8dd2ac",
  "#6ac493",
  "#51bb82",
  "#3fab73",
  "#2f8a5e",
  "#236d4b",
  "#18753c",
];

const attentionPink: MantineColorsTuple = [
  "#fff0f5",
  "#f9dce8",
  "#f0b8cf",
  "#e793b5",
  "#df73a0",
  "#da5f91",
  "#cf4b82",
  "#b93770",
  "#9f2d60",
  "#7d214b",
];

export const mantineTheme = createTheme({
  fontFamily: "Marianne, Arial, sans-serif",
  primaryColor: "institutionalBlue",
  colors: {
    institutionalBlue,
    signalGreen,
    attentionPink,
  },
  defaultRadius: "sm",
  radius: {
    xs: "2px",
    sm: "4px",
    md: "6px",
    lg: "8px",
    xl: "8px",
  },
  spacing: {
    xs: "0.5rem",
    sm: "0.75rem",
    md: "1rem",
    lg: "1.5rem",
    xl: "2rem",
  },
  headings: {
    fontFamily: "Marianne, Arial, sans-serif",
    fontWeight: "700",
    sizes: {
      h1: { fontSize: "2.75rem", lineHeight: "1.12" },
      h2: { fontSize: "2rem", lineHeight: "1.2" },
      h3: { fontSize: "1.45rem", lineHeight: "1.28" },
      h4: { fontSize: "1.12rem", lineHeight: "1.35" },
    },
  },
  components: {
    Badge: Badge.extend({
      defaultProps: {
        radius: "sm",
        variant: "light",
      },
    }),
    Button: Button.extend({
      defaultProps: {
        radius: "sm",
      },
    }),
    Card: Card.extend({
      defaultProps: {
        padding: "lg",
        radius: "sm",
        withBorder: true,
      },
      styles: {
        root: {
          borderColor: dsfrTokens.greyBorder,
          boxShadow: "0 1px 2px rgba(0, 0, 0, 0.04)",
        },
      },
    }),
    Container: Container.extend({
      defaultProps: {
        size: "xl",
      },
    }),
    Paper: Paper.extend({
      defaultProps: {
        radius: "sm",
        withBorder: true,
      },
      styles: {
        root: {
          borderColor: dsfrTokens.greyBorder,
        },
      },
    }),
    Table: Table.extend({
      defaultProps: {
        highlightOnHover: true,
        verticalSpacing: "sm",
      },
    }),
    Text: Text.extend({
      styles: {
        root: {
          letterSpacing: "0",
        },
      },
    }),
    Title: Title.extend({
      styles: {
        root: {
          color: dsfrTokens.ink,
          letterSpacing: "0",
        },
      },
    }),
  },
});
