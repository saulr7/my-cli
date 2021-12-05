#!/usr/bin/env node
const inquirer = require('inquirer');

const { SHOW_FILES, REMOVE_NODE_MODULES, SHOW_DIR_SIZE } = require('./src/constants');
const menuOptions = require('./src/constants/menuOptions');
const { showFiles, removeNodeModules, showDirSize } = require('./src/services/filesServices');

async function run() {
  const { selected } = await inquirer.prompt({
    type: 'list',
    name: 'selected',
    message: 'Select an option:',
    default: true,
    choices: menuOptions,
  });

  switch (selected) {
    case SHOW_FILES:
      showFiles();
      break;
    case REMOVE_NODE_MODULES:
      removeNodeModules();
      break;
    case SHOW_DIR_SIZE:
      await showDirSize();
      break;
    default:
      // eslint-disable-next-line no-console
      console.log('Ush');
      break;
  }
}
run();
