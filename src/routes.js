const ENV_BASE_PATH = {
  DEV: null,
  PRE_PROD: null,
  PROD: null,

  DEFAULT: '/'
};
const APP_DEPLOY_ENV = process.env.REACT_APP_DEPLOY_ENV
  ? process.env.REACT_APP_DEPLOY_ENV.trim()
  : process.env.REACT_APP_DEPLOY_ENV;
const basePath = ENV_BASE_PATH[APP_DEPLOY_ENV] || ENV_BASE_PATH.DEFAULT;

const baseRoutes = {
  sample: {
    path: `${basePath}sample`,
    title: 'Sample'
  },
  home: {
    path: `${basePath}home`,
    title: 'Home'
  },
};

const routes = {
  ...baseRoutes
};

export default routes;
