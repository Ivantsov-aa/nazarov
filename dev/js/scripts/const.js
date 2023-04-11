let lazyLoadInstance = null;
const root = document.documentElement;
const MOBILE_POINT = 768;
const MAIN_COLOR = '#005695';
const ACTIVE_CLASS = '_active';
const HIDDEN_CLASS = '_hidden';
const OVERFLOW_SELECTOR = '_overflow-hidden';
const OVERLAY_SELECTOR = '_menu-opened';
const OVERLAY_CONTAINER_SELECTOR = 'body';
const DATA_ACTION = 'data-action';
const HEADER_CLASS_ANIMATE = 'header--has-bg';
const WRAPPER_SELECTOR = '.form-item';
const SIDEBAR_SELECTOR = '[data-sidebar]';
const SIDEBAR_ACTION_STRING = 'sidebar-switcher';

root.style.setProperty('--viewport-width', `${window.innerWidth}px`);
root.style.setProperty('--viewport-height', `${window.innerHeight}px`);

const getConstant = (name) => {
  const TEMPLATE_PATH = '.';
  const cons = new Map([['icons-path', `${TEMPLATE_PATH}/img/svg/`]]);

  return cons.get(name);
};
