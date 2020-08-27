import * as fs from 'fs';
import { template } from 'lodash';

export class EnvService {
  async compile(file, values) {
    const content = fs.readFileSync(file, 'utf8');
    const compiled = template(content);
    const new_content = compiled(values);
    console.log({ new_content });
    fs.writeFileSync(file, new_content);
    return new_content;
  }
}
