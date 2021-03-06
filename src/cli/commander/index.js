const program = require('commander');

const log = require('../../logger.js');
const pkg = require('../../../package.json');

program
    .version(pkg.version)
    .option('-d, --debug', 'Activate debug logging')
    .option('-s, --start <start>', 'Start date of the time series (YYYY-MM-DD)')
    .option('-e, --end <end>', 'End date of the time series (YYYY-MM-DD)')
    .option(
        '-o, --output [output]',
        'Name of the output file (ts-{start}-{end}-{granualarity})'
    )
    .option(
        '-f, --format [format]',
        'Output format (json, xml, csv)',
        /^(json|xml|csv)$/i,
        'json'
    )
    .option(
        '-g, --granularity [granularity]',
        'Time series granular (15min, 1h, 1d)',
        /^(15m|1h|1d)$/i,
        '1h'
    );

const run = () => {
    return new Promise((resolve, reject) => {
        const result = program.parse(process.argv);
        if (!program.start || !program.end) {
            log.info(
                'Invalid command: \nSee --help for a list of available commands.',
                program.args.join(' ')
            );
            reject(new Error('Invalid Command'));
        }

        resolve(result);
    });
};

module.exports = { run };
