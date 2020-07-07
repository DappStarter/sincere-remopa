require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'inflict enter occur slab chaos note sister pumpkin hunt loan equal genius'; 
let testAccounts = [
"0xe4617c851331739d5e73fc87238b38c77e7a1cf56ae835183715f964d274c5d6",
"0x6de67e2817acf3299a69c8dca2302b943c8e66759e412f2950edb3b88d2c1014",
"0x6dc6cf552671a6dc5565aea8bc26f00e3f2555b10d3706e8f261a68fa83de615",
"0xe76dd20b33b968a3c165fe6b2eab9bb083e449a60eee9f539cb492d37cc4c9a7",
"0xf44f48e7d8c257c0aa054d27375529e6ee764fa53e95ba5bb01b22f0abfca529",
"0x6e352f15cc7fd09f1291ef792887d40fb992d5fdb5dfd5cdebde37330adb6c35",
"0x2212c54afbfe03c5ad492fd48a47f6efbd8d5c6981493ff76d7bb80305780621",
"0x8a5f7e86917cf2b9c211cd6e32b0b02da8b7e0991c6bb69fcf69c1363778b8c5",
"0xd2eeefd9479fb20f1afd70ce2914ad68f98346e2cdc0a4b97eae6c2e7161b3d8",
"0x9f56ef5da181116045f4ab165ee7dd0be75600140a35d4dee872453c86e58975"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
