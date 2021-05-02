import { prefix, con } from '../../index';
import date from 'date-and-time';

module.exports = {
    name: 'mute',
    aliases: ['m'],
    execute(message) {
        let member = message.mentions.members.first();

        // Time before changing into a standard var to not have to deal with array indexes

        const args = message.content.slice(prefix.length).trim().toLowerCase().split(/ +/g);
        console.log(args);


        // Check to see if the "Muted" role exists. If not create it
        if (!message.guild.roles.cache.find(r => r.name === "Muted")) {
            //Role doesn't exist so create one

            message.guild.roles.create({
                data: {
                    name: "Muted",
                    color: "GREY",
                    hoist: true,
                    position: -10,
                    permissions: 1115137,
                }
            }).then(d => {
                console.log("Created role");
            });
        }

    },

}