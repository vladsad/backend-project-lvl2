import path from 'path';
import fs from 'fs';
import genDiff from '../src/genDiff';

test('good json files => good results', () => {
  expect(genDiff(
    path.join(__dirname, '__fixtures__/yaml_1/before.yaml'),
    path.join(__dirname, '__fixtures__/yaml_1/after.yaml'),
  )).toEqual(
    JSON.parse(fs.readFileSync(path.join(__dirname, '__fixtures__/yaml_1/result.yaml'), 'utf8')).result,
  );
});
