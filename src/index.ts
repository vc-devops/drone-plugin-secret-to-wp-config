import { EnvService } from './services/env.service';
import * as path from 'path';
import { get, isNil } from 'lodash';

class App {
  run() {
    const envService = new EnvService();
    const file = path.resolve(process.cwd(), process.env.PLUGIN_FILE);
    const template = path.resolve(process.cwd(), process.env.PLUGIN_TEMPLATE);
    const values = {};
    const envs = process.env.PLUGIN_ENVS.split(',');
    envs.forEach((item) => {
      values[item] = get(process.env, `PLUGIN_${item}`);
    });
    for (let k in values) {
      if (isNil(values[k]) || values[k] === '') {
        console.log(`can not get value of ${k}`);
        process.exit(1);
      }
    }
    envService.compile(file, template, values);
  }
}

const app = new App();
app.run();
