const { exec } = require('child_process');
const fs = require('fs');

const inquirer = require('inquirer');

const showFiles = () => {
  const dirs = fs.readdirSync('.', { encoding: 'utf-8' });

  const dirsSorted = dirs.sort();

  dirsSorted.forEach((dir, idx) => {
    // eslint-disable-next-line no-console
    console.log(idx, dir);
  });
};

const removeNodeModules = () => {
  fs.rmSync('node_modules', { recursive: true });
};

const showDirSize = async () => {
  const { size } = await inquirer.prompt({
    type: 'number',
    name: 'size',
    message: 'Max files:',
    default: 10,
  });

  exec(`du -h node_modules | sort -h | tail -n${size} `, (error, stdout, stderr) => {
    if (error) {
      // eslint-disable-next-line no-console
      console.log(`error: ${error.message}`);
      return;
    }
    if (stderr) {
      // eslint-disable-next-line no-console
      console.log(`stderr: ${stderr}`);
      return;
    }
    // eslint-disable-next-line no-console
    console.log(stdout);
  });
};

module.exports = { showFiles, removeNodeModules, showDirSize };
