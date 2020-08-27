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
      if (isNil(envs[k]) || envs[k] === '') {
        throw new Error(`can not get value of ${k}`);
      }
    }
    envService.compile(file, values);
  }
}

const app = new App();
app.run();
