"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const user_controller_1 = require("../controllers/user.controller");
const userMiddleware_1 = require("../middleware/userMiddleware");
const router = express_1.default.Router();
router.post('/register', user_controller_1.register);
router.post('/login', user_controller_1.login);
router.get('/users', userMiddleware_1.authenticateToken, user_controller_1.getUsers);
router.delete('/users/:id', userMiddleware_1.authenticateToken, user_controller_1.deleteUser);
exports.default = router;
