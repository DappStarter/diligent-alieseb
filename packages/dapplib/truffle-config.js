require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'good enter bottom solution finger deliver remain collect harvest clog sun session'; 
let testAccounts = [
"0x016605ff7bd46128efac74f6eddb4afecf6bbb68a764158a121a16c59b47c9fb",
"0xbd31539c1d9e7c79273b8d19d8c40a2301d35dc1c302b80f68a2430a8e2cc4b8",
"0xf47c751a38a74aa96a03ef0c9da7d103a211c0428d9c07b1e402493441e6e713",
"0xe053cc3674a5e17d9371fc15b2e3b67fb29addd25a83b575c4e1dd01ee16900d",
"0xc9d9f7e15184075d66b603f169cee627ecb31e05ff313d8587a591e2d8cda613",
"0xab159ea188ceb6300055dfa41264ea775aba7636a638e5c8b8e46f84e7f57b03",
"0x359d68dd33b05ea9a271c780759af11b7f3e55cb19db02698b23188420207c80",
"0x47764e3cb041e9bd9f9faa7c9224660cdeb2a2e35f8a09e39e3b883acfdd6e38",
"0x76b26101deb8d10e015ea2d02b75335583b626e9fb824005a3f08be6328fd7d6",
"0xc9c3ce58686289a310e5f4017a2cb0d6a7c14bcb71b2fbf9984b2ab68a7f82a3"
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
