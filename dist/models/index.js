"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = exports.sequelize = void 0;
const db_config_1 = require("../config/db.config");
Object.defineProperty(exports, "sequelize", { enumerable: true, get: function () { return db_config_1.sequelize; } });
const user_model_1 = require("./user.model");
Object.defineProperty(exports, "User", { enumerable: true, get: function () { return user_model_1.User; } });
