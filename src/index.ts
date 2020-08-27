import { EnvService } from './services/env.service';
import * as path from 'path';
import { get, isNil } from 'lodash';

class App {
  run() {
    const envService = new EnvService();
    const file = path.resolve(process.cwd(), process.env.PLUGIN_FILE);
    const values = {};
    const envs = process.env.PLUGIN_ENVS.split(',');
    envs.forEach((item) => {
      values[item] = get(process.env, `PLUGIN_${item}`);
    });
    for (let k in envs) {
      console.log(k, envs[k]);
      if (isNil(envs[k]) || envs[k] === '') {
        console.log(`can not get value of ${k}`);
        process.exit(1);
      }
    }
    envService.compile(file, values);
  }
}

const app = new App();
app.run();
