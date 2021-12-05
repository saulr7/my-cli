#!/usr/bin/env node
const inquirer = require('inquirer');

const options = require('./src/constants/options');
const { showFiles, removeNodeModules, showDirSize } = require('./src/services/filesServices');

async function run() {
  const { selected } = await inquirer.prompt({
    type: 'list',
    name: 'selected',
    message: 'Select an option:',
    default: true,
    choices: options,
  });

  switch (selected) {
    case 'showFiles':
      showFiles();
      break;
    case 'removeNodeModules':
      removeNodeModules();
      break;
    case 'showDirSize':
      await showDirSize();
      break;
    default:
      // eslint-disable-next-line no-console
      console.log('Ush');
      break;
  }
}
run();
