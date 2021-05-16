import { loadStdlib } from '@reach-sh/stdlib';
import * as backend from './build/index.main.mjs';

(async () => {
  const stdlib = await loadStdlib();
  console.log(process.argv);
  stdlib.assert(process.argv[2] === 'Hello');
  stdlib.assert(process.argv[3] === 'Mr. Postman');
})();
