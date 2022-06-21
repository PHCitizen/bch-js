import Address = require("./address");

export = BitcoinCash;
declare class BitcoinCash {
  constructor(address: Address);
  _address: Address;
  /**
   * @api BitcoinCash.toSatoshi() toSatoshi()
   * @apiName toSatoshi
   * @apiGroup BitcoinCash
   * @apiDescription
   * Converting Bitcoin Cash units to satoshi units.
   *
   * @example Example usage:
   * // convert 9 $BCH to satoshis
   * bchjs.BitcoinCash.toSatoshi(9)
   * // 900000000
   *
   * // convert 1 $BCH to satoshis
   * bchjs.BitcoinCash.toSatoshi(1)
   * // 100000000
   *
   * // convert 100 $BCH to satoshis
   * bchjs.BitcoinCash.toSatoshi(100)
   * // 10000000000
   *
   * // convert 42 $BCH to satoshis
   * bchjs.BitcoinCash.toSatoshi(42)
   * // 4200000000
   *
   * // convert 507 $BCH to satoshis
   * bchjs.BitcoinCash.toSatoshi(507)
   * // 50700000000
   */
  toSatoshi(coins: number | string): number;
  /**
   * @api BitcoinCash.toBitcoinCash() toBitcoinCash()
   * @apiName toBitcoinCash
   * @apiGroup BitcoinCash
   * @apiDescription
   * Converting satoshi units to Bitcoin Cash units.
   *
   * @example Example usage:
   * // convert 900000000 satoshis to $BCH
   * bchjs.BitcoinCash.toBitcoinCash(900000000)
   * // 9
   *
   * // convert 100000000 satoshis to $BCH
   * bchjs.BitcoinCash.toBitcoinCash(100000000)
   * // 1
   *
   * // convert 10000000000 satoshis to $BCH
   * bchjs.BitcoinCash.toBitcoinCash(10000000000)
   * // 100
   *
   * // convert 4200000000 satoshis to $BCH
   * bchjs.BitcoinCash.toBitcoinCash(4200000000)
   * // 42
   *
   * // convert 50700000000 satoshis to $BCH
   * bchjs.BitcoinCash.toBitcoinCash(50700000000)
   * // 507
   */
  toBitcoinCash(satoshis: number | string): number;
  /**
   * @api BitcoinCash.toBits() toBits()
   * @apiName toBits
   * @apiGroup BitcoinCash
   * @apiDescription
   * Converting satoshi units to Bits denomination.
   *
   * @example Example usage:
   * // convert 4242323400 satoshis to 42423.234 bits
   * bchjs.BitcoinCash.toBits(4242323400)
   * // 42423.234
   * // convert 100000000 satoshis to 1000 bits
   * bchjs.BitcoinCash.toBits(100000000)
   * // 1000
   * // convert 314000000 satoshis to 3140 bits
   * bchjs.BitcoinCash.toBits(314000000)
   * // 3140
   * // convert 987600000000 satoshis to 9876000 bits
   * bchjs.BitcoinCash.toBits(987600000000)
   * // 9876000
   * // convert 12300 satoshis to 0.123 bits
   * bchjs.BitcoinCash.toBits(12300)
   * // 0.123
   */
  toBits(satoshis: number | string): number;
  satsToBits(satoshis: number | string): number;
  /**
   * @api BitcoinCash.signMessageWithPrivKey() signMessageWithPrivKey()
   * @apiName signMessageWithPrivKey
   * @apiGroup BitcoinCash
   * @apiDescription
   * Sign message with private key.
   *
   * @example Example usage:
   * bchjs.BitcoinCash.signMessageWithPrivKey(
   * 'KxtpRDUJDiutLaTV8Vuavhb6h7zq9YV9ZKA3dU79PCgYmNVmkkvS',
   * 'EARTH'
   * )
   * // IIYVhlo2Z6TWFjYX1+YM+7vQKz0m+zYdSe4eYpFLuAQDEZXqll7lZC8Au22VI2LLP5x+IerZckVk3QQPsA3e8/8=
   */
  signMessageWithPrivKey(privateKeyWIF: string, message: string): string;
  /**
   * @api BitcoinCash.verifyMessage() verifyMessage()
   * @apiName verifyMessage
   * @apiGroup BitcoinCash
   * @apiDescription
   * Verify message.
   *
   * @example Example usage:
   * bchjs.BitcoinCash.verifyMessage(
   * 'bitcoincash:qp2zvw3zpk5xx43w4tve7mtekd9kaxwj4uenq9eupv',
   * 'IIYVhlo2Z6TWFjYX1+YM+7vQKz0m+zYdSe4eYpFLuAQDEZXqll7lZC8Au22VI2LLP5x+IerZckVk3QQPsA3e8/8=',
   * 'EARTH'
   * )
   * // true
   */
  verifyMessage(address: string, signature: string, message: string): boolean;
  /**
   * @api BitcoinCash.encodeBase58Check() encodeBase58Check()
   * @apiName encodeBase58Check
   * @apiGroup BitcoinCash
   * @apiDescription
   * Encodes hex string as base58Check.
   *
   * @example Example usage:
   * // encode 0079bd35d306f648350818470c9f18903df6e06902a026f2a7 as base58check
   * let hex = '0079bd35d306f648350818470c9f18903df6e06902a026f2a7'
   * bchjs.BitcoinCash.encodeBase58Check(hex)
   * // 1C6hRmfzvWst5WA7bFRCVAqHt5gE2g7Qar
   *
   * // encode 006da742680accf2282df5fade8e9b7a01a517e779289b52cc as base58check
   * let hex = '006da742680accf2282df5fade8e9b7a01a517e779289b52cc'
   * bchjs.BitcoinCash.encodeBase58Check(hex)
   * // 1Azo2JBz2JswboeY9xSMcp14BAfhjnD9SK
   *
   * // encode 00c68a6a07ccdaf1669cfd8d244d80ff36b713551c6208f672 as base58check
   * let hex = '00c68a6a07ccdaf1669cfd8d244d80ff36b713551c6208f672'
   * bchjs.BitcoinCash.encodeBase58Check(hex)
   * // 1K6ncAmMEyQrKUYosZRD9swyZNXECu2aKs
   *
   * // encode 00d0a6b5e3dd43d0fb895b3b3df565bb8266c5ab00a25dbeb5 as base58check
   * let hex = '00d0a6b5e3dd43d0fb895b3b3df565bb8266c5ab00a25dbeb5'
   * bchjs.BitcoinCash.encodeBase58Check(hex)
   * // 1L2FG9hH3bwchhxHaCs5cg1QNbhmbaeAs6
   *
   * // encode 00db04c2e6f104997cb04c956bf25da6078e559d303127f08b as base58check
   * let hex = '00db04c2e6f104997cb04c956bf25da6078e559d303127f08b'
   * bchjs.BitcoinCash.encodeBase58Check(hex)
   * // 1Ly4gqPddveYHMNkfjoXHanVszXpD3duKg
   */
  encodeBase58Check(hex: string): string;
  /**
   * @api BitcoinCash.decodeBase58Check() decodeBase58Check()
   * @apiName decodeBase58Check
   * @apiGroup BitcoinCash
   * @apiDescription
   * Decodes base58Check encoded string to hex.
   *
   * @example Example usage:
   * // decode 1C6hRmfzvWst5WA7bFRCVAqHt5gE2g7Qar to hex
   * let base58check = '1C6hRmfzvWst5WA7bFRCVAqHt5gE2g7Qar'
   * bchjs.BitcoinCash.decodeBase58Check(base58check)
   * // 0079bd35d306f648350818470c9f18903df6e06902a026f2a7
   *
   * // decode 1Azo2JBz2JswboeY9xSMcp14BAfhjnD9SK to hex
   * let base58check = '1Azo2JBz2JswboeY9xSMcp14BAfhjnD9SK'
   * bchjs.BitcoinCash.decodeBase58Check(base58check)
   * // 006da742680accf2282df5fade8e9b7a01a517e779289b52cc
   *
   * // decode 1K6ncAmMEyQrKUYosZRD9swyZNXECu2aKs to hex
   * let base58check = '1K6ncAmMEyQrKUYosZRD9swyZNXECu2aKs'
   * bchjs.BitcoinCash.decodeBase58Check(base58check)
   * // 00c68a6a07ccdaf1669cfd8d244d80ff36b713551c6208f672
   *
   * // decode 1L2FG9hH3bwchhxHaCs5cg1QNbhmbaeAs6 to hex
   * let base58check = '1L2FG9hH3bwchhxHaCs5cg1QNbhmbaeAs6'
   * bchjs.BitcoinCash.decodeBase58Check(base58check)
   * // 00d0a6b5e3dd43d0fb895b3b3df565bb8266c5ab00a25dbeb5
   *
   * // decode 1Ly4gqPddveYHMNkfjoXHanVszXpD3duKg to hex
   * let base58check = '1Ly4gqPddveYHMNkfjoXHanVszXpD3duKg'
   * bchjs.BitcoinCash.decodeBase58Check(base58check)
   * // 00db04c2e6f104997cb04c956bf25da6078e559d303127f08b
   */
  decodeBase58Check(address: string): string;
  /**
   * @api BitcoinCash.encodeBIP21() encodeBIP21()
   * @apiName encodeBIP21
   * @apiGroup BitcoinCash
   * @apiDescription
   * Encodes address and options as BIP21 uri.
   *
   * @example Example usage:
   * let address = 'bitcoincash:qrdsfshx7yzfjl9sfj2khuja5crcu4vaxqrt2qkz5s'
   * let options = {
   * amount: 1,
   * label: '#BCHForEveryone',
   * }
   * bchjs.BitcoinCash.encodeBIP21(address, options)
   * // bitcoincash:qrdsfshx7yzfjl9sfj2khuja5crcu4vaxqrt2qkz5s?amount=1&label=%23BCHForEveryone
   *
   * let address = '1C6hRmfzvWst5WA7bFRCVAqHt5gE2g7Qar'
   * let options = {
   * amount: 12.5,
   * label: 'coinbase donation',
   * message: "and ya don't stop",
   * }
   * bchjs.BitcoinCash.encodeBIP21(address, options)
   * // bitcoincash:qpum6dwnqmmysdggrprse8ccjq7ldcrfqgmmtgcmny?amount=12.5&label=coinbase%20donation&message=and%20ya%20don%27t%20stop
   *
   * let address = 'qzw6tfrh8p0jh834uf9rhg77pjg5rgnt3qw0e54u03'
   * let options = {
   *  amount: 42,
   *  label: 'no prefix',
   * }
   * bchjs.BitcoinCash.encodeBIP21(address, options)
   * // bitcoincash:qzw6tfrh8p0jh834uf9rhg77pjg5rgnt3qw0e54u03?amount=42&label=no%20prefix
   */
  encodeBIP21(
    address: string,
    options: { [TKey in string]: string | number },
    regtest?: boolean
  ): string;
  /**
   * @api BitcoinCash.decodeBIP21() decodeBIP21()
   * @apiName decodeBIP21
   * @apiGroup BitcoinCash
   * @apiDescription
   * Decodes BIP21 uri.
   *
   * @example Example usage:
   * let bip21 =
   * 'bitcoincash:qrdsfshx7yzfjl9sfj2khuja5crcu4vaxqrt2qkz5s?amount=1&label=%23BCHForEveryone'
   * bchjs.BitcoinCash.decodeBIP21(bip21)
   * // { address: 'qrdsfshx7yzfjl9sfj2khuja5crcu4vaxqrt2qkz5s', options: { amount: 1, label: '#BCHForEveryone' } }
   *
   * let bip21 =
   * 'bitcoincash:qpum6dwnqmmysdggrprse8ccjq7ldcrfqgmmtgcmny?amount=12.5&label=coinbase%20donation&message=and%20ya%20don%27t%20stop'
   * bchjs.BitcoinCash.decodeBIP21(bip21)
   * // { address: 'qpum6dwnqmmysdggrprse8ccjq7ldcrfqgmmtgcmny',
   * //   options:
   * //    { amount: 12.5,
   * //      label: 'coinbase donation',
   * //      message: 'and ya don\'t stop'
   * //    }
   * // }
   *
   * let bip21 =
   * 'bitcoincash:qzw6tfrh8p0jh834uf9rhg77pjg5rgnt3qw0e54u03?amount=42&label=no%20prefix'
   * bchjs.BitcoinCash.decodeBIP21(bip21)
   * // { address: 'qzw6tfrh8p0jh834uf9rhg77pjg5rgnt3qw0e54u03', options: { amount: 42, label: 'no prefix' } }
   */
  decodeBIP21(url: string): {
    address: string;
    options: { [TKey in string]: string | number };
  }; // TODO: Typescript url parser?
  /**
   * @api BitcoinCash.getByteCount() getByteCount()
   * @apiName getByteCount
   * @apiGroup BitcoinCash
   * @apiDescription
   * Get byte count of transaction.
   *
   * @example Example usage:
   * // 1 P2PKH input
   * let inputs = {
   * P2PKH: 1,
   * }
   * // 1 P2SH output
   * let outputs = {
   *  P2SH: 1,
   * }
   * bchjs.BitcoinCash.getByteCount(inputs, outputs)
   * // 190
   *
   * // 4 MULTISIG-P2SH 2-of-4 and 10 P2PKH inputs
   * let inputs = {
   * 'MULTISIG-P2SH:2-4': 4,
   * P2PKH: 10,
   * }
   * // 23 P2PKH outputs
   * let outputs = {
   * P2PKH: 23,
   * }
   * bchjs.BitcoinCash.getByteCount(inputs, outputs)
   * // 2750
   *
   * // 2 MULTISIG-P2SH 3-of-5 inputs
   * let inputs = {
   * 'MULTISIG-P2SH:3-5': 2,
   * }
   * // 2 P2PKH outputs
   * let outputs = {
   * P2PKH: 2,
   * }
   * bchjs.BitcoinCash.getByteCount(inputs, outputs)
   * // 565
   *
   * // 111 P2PKH inputs
   * let inputs = {
   * P2PKH: 111,
   * }
   * // 2 P2PKH outputs
   * let outputs = {
   * P2PKH: 2,
   * }
   * bchjs.BitcoinCash.getByteCount(inputs, outputs)
   * // 16506
   *
   * // 10 P2PKH and 1 MULTISIG-P2SH 1-of-2 input
   * let inputs = {
   * P2PKH: 10,
   * 'MULTISIG-P2SH:1-2': 1,
   * }
   * // 2 P2PKH and 1 P2SH outputs
   * let outputs = {
   * P2PKH: 2,
   * P2SH: 1,
   * }
   * bchjs.BitcoinCash.getByteCount(inputs, outputs)
   * // 1780
   */
  getByteCount(inputs: any, outputs: any): number; // TODO: Fix any type
  /**
   * @api BitcoinCash.encryptBIP38() encryptBIP38()
   * @apiName encryptBIP38
   * @apiGroup BitcoinCash
   * @apiDescription
   * BIP38 encrypt privkey WIFs.
   *
   * @example Example usage:
   * // mainnet
   * bchjs.BitcoinCash.encryptBIP38(
   *  'L1phBREbhL4vb1uHHHCAse8bdGE5c7ic2PFjRxMawLzQCsiFVbvu',
   * '9GKVkabAHBMyAf'
   * )
   * // 6PYU2fDHRVF2194gKDGkbFbeu4mFgkWtVvg2RPd2Sp6KmZx3RCHFpgBB2G
   *
   * // testnet
   * bchjs.BitcoinCash.encryptBIP38(
   *  'cSx7KzdH9EcvDEireu2WYpGnXdFYpta7sJUNt5kVCJgA7kcAU8Gm',
   * '1EBPIyj55eR8bVUov9'
   * )
   * // 6PYUAPLwLSEjWSAfoe9NTSPkMZXnJA8j8EFJtKaeSnP18RCouutBrS2735
   */
  encryptBIP38(privKeyWIF: string, passphrase: string): string;
  /**
   * @api BitcoinCash.decryptBIP38() decryptBIP38()
   * @apiName decryptBIP38
   * @apiGroup BitcoinCash
   * @apiDescription
   * BIP38 encrypt privkey WIFs.
   *
   * @example Example usage:
   * // mainnet
   * bchjs.BitcoinCash.decryptBIP38(
   * '6PYU2fDHRVF2194gKDGkbFbeu4mFgkWtVvg2RPd2Sp6KmZx3RCHFpgBB2G',
   * '9GKVkabAHBMyAf',
   * 'mainnet'
   * )
   * // L1phBREbhL4vb1uHHHCAse8bdGE5c7ic2PFjRxMawLzQCsiFVbvu
   *
   * // testnet
   * bchjs.BitcoinCash.decryptBIP38(
   * '6PYUAPLwLSEjWSAfoe9NTSPkMZXnJA8j8EFJtKaeSnP18RCouutBrS2735',
   * '1EBPIyj55eR8bVUov9',
   * 'testnet'
   * )
   * // cSx7KzdH9EcvDEireu2WYpGnXdFYpta7sJUNt5kVCJgA7kcAU8Gm
   */
  decryptBIP38(
    encryptedKey: string,
    passphrase: string,
    network?: string
  ): string;
}
