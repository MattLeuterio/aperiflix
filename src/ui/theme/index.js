import colors from './partials/colors';
import constants from './partials/constants';
import { fonts } from './partials/fonts';
import zIndex from './partials/zIndex';
import device from './partials/device';
import { mixin } from './partials/mixin';

const theme = {
  colors,
  device,
  constants,
  fontset: fonts,
  zIndex,
  mixin
};

export default theme;
