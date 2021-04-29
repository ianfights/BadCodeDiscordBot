import * as dotenv from 'dotenv';
dotenv.config();

const token = process.env.TOKEN;
const dbUser = process.env.DB_USER;
const dbPass = process.env.DB_PASS;
const dbIp = process.env.DB_IP;
const dbName = process.env.DB_NAME;


if(!token || !dbUser || !dbPass || !dbIp || !dbName){
	throw Error("You need to fill out the enviorment variables in the .env file. \n A template can be found at https://github.com/POKEBLOX6/BadCodeDiscordBot/blob/main/README.md")
}
export {token as token, dbUser as dbUser, dbPass as dbPass, dbIp as dbIp, dbName as dbName}

