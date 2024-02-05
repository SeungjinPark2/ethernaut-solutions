const { Command } = require('commander');
const deploy = require('./deploy');
const path = require('node:path');
const program = new Command();

async function execute(name, address) {
    const scriptPath = path.resolve('scripts', name, 'index.js');
    const script = require(scriptPath);
    
    await script(address);
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
    });

program
    .command('execute')
    .description('Execute a certain script')
    .argument('<name>', 'name of the contract or ethernaut problem')
    .requiredOption('--address <string>', 'address of deployed target contract')
    .action(async (name, options) => {
        await execute(name, options.address);
    })

program.parse();