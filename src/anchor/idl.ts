export type Vesting = {
  "version": "0.1.0",
  "name": "vesting",
  "instructions": [
    {
      "name": "initialize",
      "accounts": [
        { "name": "dataAccount", "isMut": true, "isSigner": false },
        { "name": "escrowWallet", "isMut": true, "isSigner": false },
        { "name": "walletToWithdrawFrom", "isMut": true, "isSigner": false },
        { "name": "tokenMint", "isMut": false, "isSigner": false },
        { "name": "sender", "isMut": true, "isSigner": true },
        { "name": "systemProgram", "isMut": false, "isSigner": false },
        { "name": "tokenProgram", "isMut": false, "isSigner": false }
      ],
      "args": [
        {
          "name": "beneficiaries",
          "type": { "vec": { "defined": "Beneficiary" } }
        },
        { "name": "amount", "type": "u64" },
        { "name": "decimals", "type": "u8" },
        { "name": "launchDay", "type": "i64" }
      ]
    },
    {
      "name": "updateLaunchDay",
      "accounts": [
        { "name": "dataAccount", "isMut": true, "isSigner": false },
        { "name": "initializer", "isMut": true, "isSigner": true },
        { "name": "tokenMint", "isMut": false, "isSigner": false }
      ],
      "args": [{ "name": "newLaunchDay", "type": "i64" }]
    },
    {
      "name": "addBeneficiaries",
      "accounts": [
        { "name": "dataAccount", "isMut": true, "isSigner": false },
        { "name": "initializer", "isMut": true, "isSigner": true },
        { "name": "tokenMint", "isMut": false, "isSigner": false }
      ],
      "args": [
        {
          "name": "newBeneficiaries",
          "type": { "vec": { "defined": "Beneficiary" } }
        }
      ]
    },
    {
      "name": "claim",
      "accounts": [
        { "name": "dataAccount", "isMut": true, "isSigner": false },
        { "name": "escrowWallet", "isMut": true, "isSigner": false },
        { "name": "sender", "isMut": true, "isSigner": true },
        { "name": "tokenMint", "isMut": false, "isSigner": false },
        { "name": "walletToDepositTo", "isMut": true, "isSigner": false },
        { "name": "associatedTokenProgram", "isMut": false, "isSigner": false },
        { "name": "tokenProgram", "isMut": false, "isSigner": false },
        { "name": "systemProgram", "isMut": false, "isSigner": false }
      ],
      "args": [
        { "name": "dataBump", "type": "u8" },
        { "name": "escrowBump", "type": "u8" }
      ]
    }
  ],
  "accounts": [
    {
      "name": "DataAccount",
      "type": {
        "kind": "struct",
        "fields": [
          { "name": "tokenAmount", "type": "u64" },
          { "name": "initializer", "type": "publicKey" },
          { "name": "escrowWallet", "type": "publicKey" },
          { "name": "tokenMint", "type": "publicKey" },
          {
            "name": "beneficiaries",
            "type": { "vec": { "defined": "Beneficiary" } }
          },
          { "name": "decimals", "type": "u8" },
          { "name": "launchDay", "type": "i64" }
        ]
      }
    }
  ],
  "types": [
    {
      "name": "Beneficiary",
      "type": {
        "kind": "struct",
        "fields": [
          { "name": "key", "type": "publicKey" },
          { "name": "allocatedTokens", "type": "u64" },
          { "name": "claimedTokens", "type": "u64" },
          { "name": "lastClaimTime", "type": "i64" }
        ]
      }
    }
  ],
  "errors": [
    {
      "code": 6000,
      "name": "InvalidSender",
      "msg": "Sender is not owner of Data Account"
    },
    {
      "code": 6001,
      "name": "ClaimNotAllowed",
      "msg": "Not allowed to claim new tokens currently"
    },
    {
      "code": 6002,
      "name": "BeneficiaryNotFound",
      "msg": "Beneficiary does not exist in account"
    }
  ],

  "metadata": {
    "address": "5826KTAS3tk1MbdjXTGZZkMaDrFD6Qiq6zaZfsi62Qc7"
  }
}


export const IDL: Vesting = {
  "version": "0.1.0",
  "name": "vesting",
  "instructions": [
    {
      "name": "initialize",
      "accounts": [
        { "name": "dataAccount", "isMut": true, "isSigner": false },
        { "name": "escrowWallet", "isMut": true, "isSigner": false },
        { "name": "walletToWithdrawFrom", "isMut": true, "isSigner": false },
        { "name": "tokenMint", "isMut": false, "isSigner": false },
        { "name": "sender", "isMut": true, "isSigner": true },
        { "name": "systemProgram", "isMut": false, "isSigner": false },
        { "name": "tokenProgram", "isMut": false, "isSigner": false }
      ],
      "args": [
        {
          "name": "beneficiaries",
          "type": { "vec": { "defined": "Beneficiary" } }
        },
        { "name": "amount", "type": "u64" },
        { "name": "decimals", "type": "u8" },
        { "name": "launchDay", "type": "i64" }
      ]
    },
    {
      "name": "updateLaunchDay",
      "accounts": [
        { "name": "dataAccount", "isMut": true, "isSigner": false },
        { "name": "initializer", "isMut": true, "isSigner": true },
        { "name": "tokenMint", "isMut": false, "isSigner": false }
      ],
      "args": [{ "name": "newLaunchDay", "type": "i64" }]
    },
    {
      "name": "addBeneficiaries",
      "accounts": [
        { "name": "dataAccount", "isMut": true, "isSigner": false },
        { "name": "initializer", "isMut": true, "isSigner": true },
        { "name": "tokenMint", "isMut": false, "isSigner": false }
      ],
      "args": [
        {
          "name": "newBeneficiaries",
          "type": { "vec": { "defined": "Beneficiary" } }
        }
      ]
    },
    {
      "name": "claim",
      "accounts": [
        { "name": "dataAccount", "isMut": true, "isSigner": false },
        { "name": "escrowWallet", "isMut": true, "isSigner": false },
        { "name": "sender", "isMut": true, "isSigner": true },
        { "name": "tokenMint", "isMut": false, "isSigner": false },
        { "name": "walletToDepositTo", "isMut": true, "isSigner": false },
        { "name": "associatedTokenProgram", "isMut": false, "isSigner": false },
        { "name": "tokenProgram", "isMut": false, "isSigner": false },
        { "name": "systemProgram", "isMut": false, "isSigner": false }
      ],
      "args": [
        { "name": "dataBump", "type": "u8" },
        { "name": "escrowBump", "type": "u8" }
      ]
    }
  ],
  "accounts": [
    {
      "name": "DataAccount",
      "type": {
        "kind": "struct",
        "fields": [
          { "name": "tokenAmount", "type": "u64" },
          { "name": "initializer", "type": "publicKey" },
          { "name": "escrowWallet", "type": "publicKey" },
          { "name": "tokenMint", "type": "publicKey" },
          {
            "name": "beneficiaries",
            "type": { "vec": { "defined": "Beneficiary" } }
          },
          { "name": "decimals", "type": "u8" },
          { "name": "launchDay", "type": "i64" }
        ]
      }
    }
  ],
  "types": [
    {
      "name": "Beneficiary",
      "type": {
        "kind": "struct",
        "fields": [
          { "name": "key", "type": "publicKey" },
          { "name": "allocatedTokens", "type": "u64" },
          { "name": "claimedTokens", "type": "u64" },
          { "name": "lastClaimTime", "type": "i64" }
        ]
      }
    }
  ],
  "errors": [
    {
      "code": 6000,
      "name": "InvalidSender",
      "msg": "Sender is not owner of Data Account"
    },
    {
      "code": 6001,
      "name": "ClaimNotAllowed",
      "msg": "Not allowed to claim new tokens currently"
    },
    {
      "code": 6002,
      "name": "BeneficiaryNotFound",
      "msg": "Beneficiary does not exist in account"
    }
  ],

  "metadata": {
    "address": "5826KTAS3tk1MbdjXTGZZkMaDrFD6Qiq6zaZfsi62Qc7"
  }
}

