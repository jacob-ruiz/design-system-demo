module.exports = {
  components: './playroom/components',
  outputPath: './dist/playroom',

  // Optional:
  title: 'Design System Demo',
  // themes: './themes',
  snippets: './playroom/snippets.js',
  frameComponent: './playroom/FrameComponent.js',
  widths: [1024],
  port: 9000,
  openBrowser: true,
  exampleCode: `
    <Box padding="3">
      <Stack space="3">
        <Heading variant="heading.1">Heading 1</Heading>
        <Heading variant="heading.2">Heading 2</Heading>
        <Heading variant="heading.3">Heading 3</Heading>
        <Heading variant="heading.4">Heading 4</Heading>
        <Heading variant="heading.5">Heading 5</Heading>
      </Stack>
    </Box>
  `,
  //
  // baseUrl: '/playroom/',
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
