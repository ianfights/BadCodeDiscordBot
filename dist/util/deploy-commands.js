"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeployCommands = void 0;
const rest_1 = require("@discordjs/rest");
const v9_1 = require("discord-api-types/v9");
function DeployCommands(commands, token, clientId, guildId) {
    const rest = new rest_1.REST({ version: '9' }).setToken(token);
    (() => __awaiter(this, void 0, void 0, function* () {
        try {
            yield rest.put(
            //@ts-ignore
            v9_1.Routes.applicationGuildCommands(clientId, guildId), { body: commands });
            console.log('Successfully registered application commands.');
        }
        catch (error) {
            console.error(error);
        }
    }))();
}
exports.DeployCommands = DeployCommands;
