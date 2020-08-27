import { EnvService } from './services/env.service';
import * as path from 'path';
import { get } from 'lodash';

class App {
  run() {
    const envService = new EnvService();
    const file = path.resolve(process.cwd(), '.env');
    const values = {};
    const envs = process.env.PLUGIN_ENVS.split(',');
    envs.forEach((item) => {
      values[item] = get(process.env, `PLUGIN_${item}`);
    });
    console.log({ values });
    envService.compile(file, values);
  }
}

const app = new App();
app.run();
