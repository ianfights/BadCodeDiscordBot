import { con } from '../index';
//import { date } from 'date-and-time';
const date = require('date-and-time')
function checkBan(message) {
    const now = new Date();

    con.query(`SELECT * FROM moderation WHERE type = 'ban'`, function (err, result) {
        if (err) throw err;
        console.log(now)
        for (var i in result) {
            var formattedDate = date.parse(result[i].endDate,'YYYY/MM/DD HH:mm:ss');
            console.log('checked a user')
            if(date.subtract(formattedDate, now).toMinutes() <= 0){
                // Time has expired on the ban so we should unban them

                //Deletes the record from the database
                con.query(`DELETE FROM moderation WHERE id = ${result[i].id}`);
                message.guild.members.unban(result[i].userId, 'Ban time expired');
                
            }
            
        }

    });

}


export { checkBan as checkBan }