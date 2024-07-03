module.exports = {
  preset: 'react-native',
  setupFilesAfterEnv: ['./jest-setup-after-env.js'],
  transformIgnorePatterns: ['/node_modules/(?!native-base)/'],
};
