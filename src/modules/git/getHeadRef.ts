import { shellExec } from '../../utils/execProcess.js';

export const getHeadRef = async () => {
  try {
    return await shellExec('git rev-parse HEAD');
  } catch (error) {
    console.log('error: ', error);
    return null;
  }
};
