**CAUTION: WIP**

# Symbol Devnet Preset, Scripts, and Setup

This is a zero fee, experimental configuration of a Symbol testnet.

## Running

*Make sure you have [symbol-bootstrap](https://github.com/fboucquez/symbol-bootstrap) installed!*

Create a networks folder if it doesn't exist already, and clone this repo:

```sh
mkdir networks && cd networks

git clone https://github.com/CrackTheCode016/devnet-config.git
```

Configure a node with bootstrap:

```sh
symbol-bootstrap start -p bootstrap -a dual -c devnet-config/preset.yml
```
and you're good to go!

