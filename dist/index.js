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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.con = exports.prefix = void 0;
const fs = __importStar(require("fs"));
const mysql = __importStar(require("mysql"));
const discord_js_1 = require("discord.js");
const config_1 = require("./config/config");
const client = new discord_js_1.Client();
const config_json_1 = __importDefault(require("./config/config.json"));
const prefix = config_json_1.default.prefix;
exports.prefix = prefix;
const con = mysql.createConnection({
    host: config_1.dbIp,
    user: config_1.dbUser,
    password: config_1.dbPass,
    database: config_1.dbName,
    multipleStatements: false
});
exports.con = con;
client.commands = new discord_js_1.Collection();
loadCommands(client.commands, `${__dirname}/commands`);
function loadCommands(collection, folder) {
    const commandFiles = fs.readdirSync(folder);
    for (const file of commandFiles) {
        const path = `${folder}/${file}`;
        if (file.endsWith('.js')) {
            const command = require(path);
            //console.log(command)
            collection.set(command.name, command);
        }
        else if (fs.lstatSync(path).isDirectory()) {
            loadCommands(collection, path);
        }
    }
}
;
client.once('ready', () => {
    console.log("Bot is ready");
});
client.on('message', (message) => __awaiter(void 0, void 0, void 0, function* () {
    // Loop for updating the leaderboard
    if (message.content.startsWith(prefix)) {
        const input = message.content.slice(prefix.length).split(' ');
        const commandName = input.shift();
        const commandArgs = input.join(' ');
        const command = client.commands.get(commandName)
            || client.commands.find(cmd => cmd.aliases && cmd.aliases.includes(commandName));
        if (!command)
            return;
        try {
            client.commands.get(command.name).execute(message);
        }
        catch (error) {
            console.error(error);
            message.reply('there was an error trying to execute that command!');
        }
    }
}));
client.login(config_1.token);
