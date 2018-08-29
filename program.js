const program = require('commander');

const log = require('./logger.js');

program
    .version('0.1.0')
    .option('-s, --start <start>', "Start date of the time series (YYYY-MM-DD)")
    .option('-e, --end <end>', "End date of the time series (YYYY-MM-DD)")
    .option('-o, --output <output>', 'Name of the output file')
    .option('-f, --format [format]', 'Output format')//, /^(json|xml|csv]$/i, 'json')
    .option('-g, --granularity [granularity]', 'Time series granular')//, '/^(15m|1h|1d]$/i', '1h')

const parse = (input) => {
    const result = program.parse(process.argv);
    if (!program.start || !program.end) {
        log.info('Invalid command: %s\nSee --help for a list of available commands.', program.args.join(' '));
        process.exit(1);
    }
    return result;
}

module.exports = { parse };