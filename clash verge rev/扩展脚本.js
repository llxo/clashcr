const rules = [
  //自定义直连
  'DOMAIN-SUFFIX,jx.cn,DIRECT',
  'DOMAIN-SUFFIX,waadri.top,DIRECT',
  'DOMAIN-SUFFIX,zd.shinnku.top,DIRECT',
  'DOMAIN-SUFFIX,koyso.to,DIRECT',
  'DOMAIN-KEYWORD,pairdrop,DIRECT',
  'DOMAIN-SUFFIX,1panel.live,DIRECT',
  'DOMAIN-KEYWORD,zerotwo,DIRECT',
  'DOMAIN-KEYWORD,hack6,DIRECT',
  //steam下载直连
  'DOMAIN,steamcdn-a.akamaihd.net,DIRECT',
  'DOMAIN-SUFFIX,steamserver.net,DIRECT',
  //其他分流
  'GEOSITE,telegram,Telegram',
  'GEOIP,telegram,Telegram,no-resolve',
  'DOMAIN-SUFFIX,nexus-cdn.com,HongKong',
  'DOMAIN-SUFFIX,dl.google.com,HongKong',
  'DOMAIN-KEYWORD,zerotwo,HongKong',
  'DOMAIN-KEYWORD,hack6,HongKong',
  'DOMAIN-KEYWORD,steamcloud,HongKong',
  'DOMAIN-KEYWORD,3dmgame,HongKong',
  'GEOSITE,github,HongKong',
  'GEOSITE,rockstar,HongKong',
  'GEOSITE,tiktok,TikTok',
  'GEOSITE,google-gemini,TikTok',
  //基础
  'GEOSITE,gfw,节点选择',
  'GEOSITE,cn,DIRECT',
  'GEOIP,CN,DIRECT,no-resolve',
  'MATCH,节点选择',
];

function main(config, profileName) {
  console.log(profileName)
  config['rules'] = rules;
  config['proxy-groups'] = [
    {
      'name': '节点选择',
      'type': 'select',
      'include-all-proxies': true,
      'icon': 'https://www.clashverge.dev/assets/icons/adjust.svg',
      'proxies': ['DIRECT', 'HongKong'],
    },
    {
      'name': 'Telegram',
      'type': 'select',
      'include-all-proxies': true,
      'filter': "(?i)singapore|sg|新加坡|🇸🇬",
      'icon': 'https://www.clashverge.dev/assets/icons/telegram.svg',
      'proxies': ['节点选择','HongKong'],
    },
    {
      'name': 'TikTok',
      'type': 'select',
      'include-all-proxies': true,
      'filter': "(?i)Japan|日|jp|🇯🇵",
      'icon': 'https://fastly.jsdelivr.net/gh/Orz-3/mini@master/Color/FRANXX.png',
      'proxies': ['节点选择'],
    },
    {
      'name': 'HongKong',
      'type': 'url-test',
      'url': 'https://www.gstatic.com/generate_204',
      'interval': 300,
      'tolerance': 50,
      'include-all-proxies': true,
      'filter': "(?i)港|hk|hongkong|hong kong|🇭🇰",
      'icon': 'https://fastly.jsdelivr.net/gh/clash-verge-rev/clash-verge-rev.github.io@main/docs/assets/icons/flags/hk.svg',
    },
  ];
  return config;
}


// function main(config, profileName) {
//   console.log(profileName)
//   return config;
// }