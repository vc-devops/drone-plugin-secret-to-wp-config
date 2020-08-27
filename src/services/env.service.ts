import * as fs from 'fs';
import { template } from 'lodash';

export class EnvService {
  async compile(file, values) {
    const content = fs.readFileSync(file, 'utf8');
    const compiled = template(content);
    const data = compiled(values);
    console.log(data);
    return data;
  }
}
