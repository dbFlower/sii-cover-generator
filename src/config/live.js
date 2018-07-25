export default {
  name: '成员直播',
  identifier: 'live',
  width: 960,
  height: 600,
  fonts: [
    {
      fontFamily: 'Microsoft Yahei',
      name: '微软雅黑',
    },
  ],
  layers: [
    {
      type: 'img',
      path: '/presets/live/background.png',
      offset: {
        x: 0,
        y: 0,
      },
    },
    {
      type: 'text',
      fromUser: true,
      identifier: 'title',
      default: '',
      style: {
        fontFamily: 'Microsoft Yahei',
      },
      offset: {
        x: 0,
        y: 0,
      },
    },
    {
      type: '',
    },
  ],
}
