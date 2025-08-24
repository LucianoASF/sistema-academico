import { Sequelize } from 'sequelize';
import config from '../config/database.js';

export default new Sequelize(
  config.database!,
  config.username!,
  config.password!,
  config,
);
