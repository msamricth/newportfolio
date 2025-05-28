import { execSync } from 'child_process';
execSync('git add .', { stdio: 'inherit' });
const msg = `npm run push - New deploy ${new Date().toISOString()}`;
try {
  execSync(`git commit -m "${msg}"`, { stdio: 'inherit' });
} catch (e) {
}
