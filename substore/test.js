const fs = require('fs');
const path = require('path');

const dir = __dirname;
const srcPath = path.join(dir, 'rename.js');
const execPath = path.join(dir, 'rename_exec.js');

let src = fs.readFileSync(srcPath, 'utf8');
// Append export so we can require operator from the file without modifying original
src += '\nmodule.exports = { operator };\n';
fs.writeFileSync(execPath, src, 'utf8');

// Test cases
const tests = [
  { args: { name: 'BAR', flag: true, nf: true }, proxies: [{ name: '🇭🇰香港 测试' }, { name: '🇯🇵日本 节点' }] , desc: 'nf=true should put BAR at end'},
  { args: { name: 'BAZ', flag: true,}, proxies: [{ name: '🇭🇰香港 测试' }, { name: '🇯🇵日本 节点' }] , desc: 'default should put name in middle (nNames)'}
];

for (const t of tests) {
  global.$arguments = t.args;
  // require fresh
  delete require.cache[require.resolve('./rename_exec.js')];
  const mod = require('./rename_exec.js');
  const inPro = JSON.parse(JSON.stringify(t.proxies));
  const out = mod.operator(inPro);
  console.log('--- Test:', t.desc);
  out.forEach(p => console.log(p.name));
}

// cleanup
try { fs.unlinkSync(execPath); } catch (e) {}
