import { defineConfig } from 'vite';
import viteTsconfigPaths from 'vite-tsconfig-paths';
import svgrPlugin from 'vite-plugin-svgr';
import reactSupport from '@vitejs/plugin-react';
import { viteStaticCopy } from 'vite-plugin-static-copy';
import { createHtmlPlugin } from 'vite-plugin-html';

export default defineConfig(({ command }) => {
  if (command === 'serve') {
    return {
      plugins: [viteTsconfigPaths(), svgrPlugin(), reactSupport({
        babel: {
          parserOpts: {
            plugins: ['decorators-legacy', 'classProperties']
          }
        }
      }), viteStaticCopy({
        targets: [
          { src: 'src/lib/abp.js', dest: 'assets' },
          { src: 'node_modules/@aspnet/signalr/dist/browser/signalr.min.js', dest: 'assets' },
        ],
        flatten: true,
      }), createHtmlPlugin({
        minify: true,
        inject: {
          data: {
            abpJS: `<script type="text/javascript" src="/src/lib/abp.js"></script>`,
            signalR: `<script type="text/javascript" src="/node_modules/@aspnet/signalr/dist/browser/signalr.min.js"></script>`,
            viteDev: `<script type="module" src="http://localhost:3000/@vite/client"></script>`,
          }
        }
      })],
      server: {
        port: 3000,
        host: 'localhost',
      },
      preview: {
        port: 3000
      },
      rollupInputOptions: {
        input: {
          'abp.js': 'src/lib/abp.js',
          'signalr.min.js': 'node_modules/@aspnet/signalr/dist/browser/signalr.min.js',
        },
        external: [],
      },
      rollupOutputOptions: {
        dir: 'dist',
        entryFileNames: '[name]',
      },
      css: {
        preprocessorOptions: {
          less: {
            javascriptEnabled: true,
          },
        },
      },
    }
  } else {
    return {
      plugins: [viteTsconfigPaths(), svgrPlugin(), reactSupport({
        babel: {
          parserOpts: {
            plugins: ['decorators-legacy', 'classProperties']
          }
        }
      }), viteStaticCopy({
        targets: [
          { src: 'src/lib/abp.js', dest: 'assets' },
          { src: 'node_modules/@aspnet/signalr/dist/browser/signalr.min.js', dest: 'assets' },
        ],
        flatten: true,
      }), createHtmlPlugin({
        minify: true,
        inject: {
          data: {
            abpJS: `<script type="text/javascript" src="/assets/abp.js"></script>`,
            signalR: `<script type="text/javascript" src="/assets/signalr.min.js"></script>`,
            viteDev: null,
          }
        }
      })],
      server: {
        port: 3000,
        host: 'localhost',
      },
      preview: {
        port: 3000
      },
      rollupInputOptions: {
        input: {
          'abp.js': 'src/lib/abp.js',
          'signalr.min.js': 'node_modules/@aspnet/signalr/dist/browser/signalr.min.js',
        },
        external: [],
      },
      rollupOutputOptions: {
        dir: 'dist',
        entryFileNames: '[name]',
      },
      css: {
        preprocessorOptions: {
          less: {
            javascriptEnabled: true,
          },
        },
      },
    }
  }
});