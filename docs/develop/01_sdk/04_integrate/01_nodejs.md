---
id: howto-integrate-nodejs
title: NodeJS
---

import CodeBlock from '@theme/CodeBlock';
import QueryAccountName from '!!raw-loader!@site/code_examples/core_features/linking/03_account_web3name_query.ts';


NodeJS is natively supported and doesn't require any additional setup.

Have a look at these example `package.json` and `index.js` files for reference:

<!--
  TODO: Make this JSON dynamically generated (and tested),
  or at least the SDK version automatically updated as part of the CI PR on SDK releases
-->
```json
{
  "name": "kilt-sdk-node-test",
  "type": "module",
  "version": "1.0.0",
  "main": "index.js",
  "license": "MIT",
  "dependencies": {
    "@kiltprotocol/sdk-js": "0.27.0"
  }
}
```

<CodeBlock className="language-ts">
  {QueryAccountName}
</CodeBlock>