const fs = require('fs');
const fsPromises = require('fs/promises');
const path = require('path');

const logDir = path.join(__dirname, 'logs');
const logFile = path.join(logDir, 'session.log');
const backupFile = path.join(logDir, 'backup-session.log');

(async () => {
  try {
    // ✅ Check + create log folder (Sync - fast, setup)
    if (!fs.existsSync(logDir)) {
      fs.mkdirSync(logDir);
      console.log('Created logs folder');
    }

    // ✅ Write main log file (Async - avoid blocking for large writes)
    const userCommand = 'npm run start';
    await fsPromises.writeFile(logFile, `Command: ${userCommand}\n`);
    console.log('Log written.');

    // ✅ Append metadata (Sync - quick and critical info)
    fs.appendFileSync(logFile, `Timestamp: ${new Date().toISOString()}\n`);
    console.log('Metadata added.');

    // ✅ Copy log to backup (Async - could be heavy in real use)
    await fsPromises.copyFile(logFile, backupFile);
    console.log('Backup complete.');

    // ✅ Cleanup old backup (Sync - optional, quick)
    if (fs.existsSync(path.join(logDir, 'old-backup.log'))) {
      fs.unlinkSync(path.join(logDir, 'old-backup.log'));
      console.log('Old backup deleted.');
    }

  } catch (err) {
    console.error('Something went wrong:', err);
  }
})();
