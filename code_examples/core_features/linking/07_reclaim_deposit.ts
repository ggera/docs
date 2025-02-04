import type { KeyringPair } from '@polkadot/keyring/types'

import * as Kilt from '@kiltprotocol/sdk-js'

export async function reclaimLinkDeposit(
  depositPayerAccountAccount: KeyringPair,
  linkedAccountAddress: KeyringPair['address'],
  resolveOn: Kilt.SubscriptionPromise.ResultEvaluator = Kilt.BlockchainUtils
    .IS_FINALIZED
): Promise<void> {
  // The tx does not need to be authorized by a DID, but the deposit payer's account claims the deposit and removes the link.
  const accountUnlinkTx = await Kilt.Did.AccountLinks.getReclaimDepositTx(
    linkedAccountAddress
  )

  await Kilt.BlockchainUtils.signAndSubmitTx(
    accountUnlinkTx,
    depositPayerAccountAccount,
    {
      resolveOn
    }
  )
}
