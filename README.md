fetch your ip ,or  information of IP from https://ip4.dev/

usage:
```
yarn add ip4dev
```

or 
```
npm install ip4dev
```

Coding:

```
import {Ip4Dev} from "./src";

let ip4dev = new Ip4Dev()
ip4dev.myIp().then((ip)=>{
    console.log(ip);
});
ip4dev.ipInfo("").then((info)=>{
    console.log(info);
});
```


outputs:
```
$ ts-node ./test.ts
125.120.106.113
Ip4DevResponse {
  ip: '125.120.106.113',
  asn: 4134,
  tz: 'Asia/Shanghai',
  city: 'Hangzhou',
  region: 'Zhejiang',
  continent_code: 'AS',
  country: 'China',
  country_code: 'CN',
  region_code: 'ZJ',
  country_code3: 'CHN',
  longitude: 120.1612,
  latitude: 30.2994,
  organization: 'Chinanet'
}
```