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
  })
  config.proxies.push({
    name: '家宽',
    type: 'socks5', 
    server: 'server', 
    port: 1111, 
    username: 'username', 
    password: 'password', 
    udp: true,
    "dialer-proxy": IEPL // 前置代理，非节点选择避免循环代理
  })
  return config;
}