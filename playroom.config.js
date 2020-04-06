module.exports = {
  components: './playroom/components',
  outputPath: './dist/playroom',

  // Optional:
  title: 'Qordoba',
  // themes: './themes',
  snippets: './playroom/snippets.js',
  frameComponent: './playroom/FrameComponent.js',
  widths: [1024],
  port: 9000,
  openBrowser: true,
  exampleCode: `
    <Heading>
      Hello World!
    </Heading>
  `,
  baseUrl: '/playroom/',
  webpackConfig: () => ({
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: [
            {
              loader: 'babel-loader',
              options: {
                presets: [
                  ['@babel/preset-env', { modules: false }],
                  '@babel/preset-react',
                ],
              },
            },
          ],
        },
      ],
    },
  }),
};
