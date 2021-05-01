import { con } from '../index';
function checkBan(date) {
    con.query(`S`, function (err, result) {
        if (err) throw err;


    });

}

export { checkBan as checkBan }