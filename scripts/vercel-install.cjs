const fs = require('node:fs');
const path = require('node:path');
const { spawnSync } = require('node:child_process');

const root = path.resolve(__dirname, '..');
const modulesPath = path.join(root, 'node_modules');
const cachePath = path.join('/tmp', 'elementos-npm-cache');

function remove(target) {
  try {
    fs.rmSync(target, { recursive: true, force: true, maxRetries: 5, retryDelay: 250 });
  } catch (error) {
    console.error(`Unable to remove ${target}:`, error);
    process.exit(1);
  }
}

remove(modulesPath);
remove(cachePath);
fs.mkdirSync(cachePath, { recursive: true });

const env = {
  ...process.env,
  npm_config_cache: cachePath,
  npm_config_audit: 'false',
  npm_config_fund: 'false',
  npm_config_update_notifier: 'false',
};

console.log('ElementOS install repair: using isolated cache and npm 10.8.2');
const result = spawnSync(
  process.platform === 'win32' ? 'npx.cmd' : 'npx',
  ['--yes', 'npm@10.8.2', 'install', '--no-audit', '--no-fund'],
  { cwd: root, env, stdio: 'inherit' }
);

if (result.error) {
  console.error(result.error);
  process.exit(1);
}
process.exit(result.status ?? 1);
