import { con, client } from '../index';
//import { date } from 'date-and-time';
const date = require('date-and-time')
function checkMute(message) {
    const now = new Date();

    con.query(`SELECT * FROM moderation WHERE type = 'mute'`, function (err, result) {
        if (err) throw err;
        console.log(now)
        for (var i in result) {
            var formattedDate = date.parse(result[i].endDate,'YYYY/MM/DD HH:mm:ss');
           // console.log('checked a user')
            if(date.subtract(formattedDate, now).toMinutes() <= 0){
                // Time has expired on the ban so we should unmute them

                //Deletes the record from the database
                con.query(`DELETE FROM moderation WHERE id = ${result[i].id}`);
                let user =message.guild.members.cache.get(result[i].userId);
                user.roles.remove(message.guild.roles.cache.find(r => r.name === "Muted"))
            }
            
        }

    });

}


export { checkMute as checkMute }