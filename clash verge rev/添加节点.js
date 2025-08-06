function main(config, profileName) {
  config.proxies.push({
    name: 'name',
    type: 'vmess',
    server: 'server',
    port: 1111,
    uuid: 'uuid',
    alterId: 0,
    cipher: 'auto',
    udp: true,
    network: 'ws',
    'skip-cert-verify': true
  });
  config.proxies.push({
    name: 'name2',
    type: 'vmess',
    server: 'server',
    port: 1111,
    uuid: 'uuid',
    alterId: 0,
    cipher: 'auto',
    udp: true,
    network: 'ws',
    'skip-cert-verify': true
  });
  return config;
}