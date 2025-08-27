import { Sequelize } from 'sequelize';
import config from '../config/database.js';
import { readdirSync } from 'fs';
import { basename, join } from 'path';

export default new Sequelize(
  config.database!,
  config.username!,
  config.password!,
  config,
);

export const models: any = {};
const files = readdirSync('./');

for (const file of files) {
  if (
    file.indexOf('.') !== 0 &&
    file !== basename('./index') &&
    file.endsWith('.js')
  ) {
    // importa dinamicamente
    const modelModule = await import(join('./', file));
    const model = modelModule.default || modelModule;
    models[model.name] = model;
  }
}

// associa os models
Object.values(models).forEach((model: any) => {
  if (typeof model.associate === 'function') {
    model.associate(models);
  }
});
