const { SHOW_FILES, REMOVE_NODE_MODULES, SHOW_DIR_SIZE } = require('.');

const menuOptions = [
  { name: 'Show files', value: SHOW_FILES, description: 'Display file in the current dir' },
  { name: 'Delete Node modules', value: REMOVE_NODE_MODULES, description: 'Delete Node Modules' },
  { name: 'Dir size', value: SHOW_DIR_SIZE, description: 'Display dir size in huminize' },
];

module.exports = menuOptions;
