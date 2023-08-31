import postcssPresetEnv from 'postcss-preset-env';
import postcssEach from 'postcss-each';

const config = {
  plugins: [
    postcssEach(),
    postcssPresetEnv({ stage: 0 })
  ]
};

export default config;
