import { Account, NetworkType } from 'symbol-sdk';

function generateAddressList(amount) {
    var accounts = [];
    for (var i = 0; i < amount; i++) {
        const account = Account.generateNewAccount(NetworkType.TEST_NET)
        accounts.push(account)
    }
    const amounts = accounts.map((a, i) => {
        if (i == 0)
            return { address: a.address.plain(), amount: 1285571428285716 }
        return  { address: a.address.plain(), amount: 1285571428285714 }
    })

    var setup = [ {
        name: "dollars",
    	divisibility: 6,
    	duration: 0,
    	supply: 8998999998000000,
    	isTransferable: true,
    	isSupplyMutable: false,
    	isRestrictable: false,
        currencyDistributions: amounts
    }, { repeat: 1 }]

    console.log('nemesis:')
    console.log('    mosaics:')
    console.log(JSON.stringify(setup, null, 2).replace(/"/g, ''))
}

generateAddressList(7);