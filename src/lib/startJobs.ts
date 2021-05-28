import * as cron from 'cron';
import { checkBan } from '../jobs/checkBan'
import { checkMute } from '../jobs/checkMute';
function startCronJobs(message) {
    // console.log('a');
    var CronJob = cron.CronJob;
    const job = new CronJob('0 */5 * * * *', function () {
        checkBan(message);
        checkMute(message);
    });
    job.start();
    

}

export { startCronJobs as startJobs }