import { registerMicroApps, start } from 'qiankun';
registerMicroApps([
  {
    name: 'appvue',
    entry:'//localhost:8888/',
    container: '#container',
    activeRule: '/appvue2',
  },
]);

start();