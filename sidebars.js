module.exports = {
  apps: [
    {
      type: 'autogenerated',
      dirName: 'participate/apps',
    },
  ],
  governance: [
    {
      type: 'autogenerated',
      dirName: 'participate/1-Governance',
    },
  ],
  chain: [
    {
      type: 'autogenerated',
      dirName: 'develop/chain',
    },
  ],
  workshop: [{ type: 'autogenerated', dirName: 'develop/workshop' }],
  sdk: [
    'develop/sdk/introduction',
    {
      'Core KILT Features': [
        {
          type: 'autogenerated',
          dirName: 'develop/sdk/0-core-feature',
        },
      ],
    },
    'sdk/dev-setup',
  ],
}
