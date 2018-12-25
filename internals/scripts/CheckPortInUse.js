'use strict';

import chalk from 'chalk';
import detectPort from 'detect-port';
import { PORT } from '../../config/env';

(function CheckPortInUse() {
  const _port = PORT.toString();

  detectPort(_port, (err, availablePort) => {
    if (_port !== String(availablePort)) {
      throw new Error(
        chalk.whiteBright.bgRed.bold(
          `Port "${_port}" on "localhost" is already in use. Please use another port. ex: PORT=4343 yarn dev`
        )
      );
    } else {
      process.exit(0);
    }
  });
})();
