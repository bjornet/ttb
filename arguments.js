import yargs from 'yargs'
import { hideBin } from 'yargs/helpers';

export const getArguments = () => yargs(hideBin(process.argv)).argv;
