import type { Metadata } from "next";
import '@mantine/core/styles.css';
import "./globals.css";
import { MantineProvider, createTheme, ColorSchemeScript } from "@mantine/core";

const theme = createTheme({
  fontFamily: 'Verdana, sans-serif',
  
  colors: {
    dark: [
      '#d5d7e0',
      '#acaebf',
      '#8c8fa3',
      '#666980',
      '#4d4f66',
      '#34354a',
      '#121212',
      '#121212',
      '#0c0d21',
      '#01010a',
    ],
  },
  fontFamilyMonospace: 'Monaco, Courier, monospace',
  headings: { fontFamily: 'Greycliff CF, sans-serif' },
  fontSmoothing : true,
  primaryColor: "blue",
  autoContrast: true,
  defaultGradient: {
    from: "blue",
    to: "cyan",
    deg: 45,
  },
});

export const metadata: Metadata = {
  title: "About Me",
  description: "Portfolio of a frontend developer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <ColorSchemeScript />
      </head>
      <body>
        <MantineProvider defaultColorScheme={'dark'} theme={theme}>
          {children}
        </MantineProvider>
      </body>
    
    </html>
  );
}
