module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        extensions: [
          '.ios.ts',
          '.android.ts',
          '.ios.tsx',
          '.android.tsx',
          '.json',
          '.ts',
          '.tsx',
        ],
        root: ['.'],
        alias: {
          '@components': './src/components/index.ts',
          '@navigation': './src/navigation/index.ts',
          '@screens': './src/screens/index.ts',
          '@types': './src/Types.ts',
        },
      },
    ],
  ],
};
