const { Command } = require('commander');
const deploy = require('./deploy');
const path = require('node:path');
const program = new Command();

async function execute(name, args) {
    const scriptPath = path.resolve('scripts', name, 'index.js');
    const script = require(scriptPath);
    
    await script(...args);
}

program
    .name('ethernaut executer')
    .description('CLI to deploy, run javascript to hack ethernaut problems')

program
    .command('deploy')
    .description('Deploy a certain smart-contract')
    .argument('<name>', 'name of the contract')
    .option('--args <strings...>', 'arguments of constructor')
    .action(async (name, options) => {
        await deploy(name, options.args);
        process.exit(0);
    });

program
    .command('execute')
    .description('Execute a certain script')
    .argument('<name>', 'name of the contract or ethernaut problem')
    .requiredOption('--args <string...>', 'arguments of executer script')
    .action(async (name, options) => {
        await execute(name, options.args);
        process.exit(0);
    });

program.parse();