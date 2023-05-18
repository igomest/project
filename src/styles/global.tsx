import { Global } from '@mantine/core';
import ftFont from '../fonts/FTBase-Book.ttf';

export function GlobalStyles() {
  return (
    <Global
      styles={(theme) => ({
        // '*, *::before, *::after': { boxSizing: 'border-box' },
        body: {
          backgroundColor: theme.colors.blue[9],
        },
        colors: {
          blue: [
            '#e6f7ff',
            '#bae7ff',
            '#91d5ff',
            '#69c0ff',
            '#40a9ff',
            '#1890ff',
            '#096dd9',
            '#0050b3',
            '#003a8c',
            '#002766',
            '#BB4846'
          ],
          green: [
            '#D2D7D4',
            '#BDC6C0',
            '#A8B7AD',
            '#94AB9C',
            '#81A28B',
            '#6D9B7C',
            '#5C946E',
            '#588065',
            '#53705C',
            '#4D6254',
          ],
          charcoal: [
            '#7B7C81',
            '#6F7076',
            '#64666C',
            '#5A5C63',
            '#50535B',
            '#484B54',
            '#40434E',
            '#3B3D45',
            '#36373D',
            '#252527',
          ],
          red: [
            '#BF9897',
            '#B97F7E',
            '#B86563',
            '#BB4846',
            '#B93331',
            '#B7201D',
            '#B80C09',
            '#961A18',
            '#7C2221',
            '#672726',
          ],
        },
        '@font-face': {
          fontFamily: 'Greycliff CF',
          src: `url('${ftFont}') format("woff2")`,
          fontWeight: 400,
          fontStyle: 'normal',
        },

        components: {
          Navbar: {
            root: {
              backgroundColor:
                theme.colorScheme === 'dark' ? theme.colors.charcoal[9] : theme.colors.gray[0],
            },
          },
          Checkbox: {
            label: {
              cursor: 'pointer',
            },
            input: {
              cursor: 'pointer',
            },
          },
        },
        fontFamily: 'Inter, sans-serif',
        primaryColor: 'blue',
      })}
    />
  );
}
