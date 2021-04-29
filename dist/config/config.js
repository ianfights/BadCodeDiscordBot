"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.dbName = exports.dbIp = exports.dbPass = exports.dbUser = exports.token = void 0;
const dotenv = __importStar(require("dotenv"));
dotenv.config();
const token = process.env.TOKEN;
exports.token = token;
const dbUser = process.env.DB_USER;
exports.dbUser = dbUser;
const dbPass = process.env.DB_PASS;
exports.dbPass = dbPass;
const dbIp = process.env.DB_IP;
exports.dbIp = dbIp;
const dbName = process.env.DB_NAME;
exports.dbName = dbName;
if (!token || !dbUser || !dbPass || !dbIp || !dbName) {
    throw Error("You need to fill out the enviorment variables in the .env file. \n A template can be found at https://github.com/POKEBLOX6/BadCodeDiscordBot/blob/main/README.md");
}
