import { Account, NetworkType } from 'symbol-sdk';

// nemesis:
//   mosaics:
//     [
//       {
//         name: dollars,
//         divisibility: 6,
//         duration: 0,
//         supply: 8998999998000000,
//         isTransferable: true,
//         isSupplyMutable: false,
//         isRestrictable: false,
//         currencyDistributions:
//           [
//             {
//               address: TAIGUYL5JV3K3TNA76I74TLCGU5PM5DLHVFZMPI,
//               amount: 1285571428285716,
//             },
//             {
//               address: TBMJAJ433VM6WJ2A2IK7YRRF6I4I7YAKOYCJQSQ,
//               amount: 1285571428285714,
//             },
//             {
//               address: TDFD2UJ6C3PDQNXCTFBB2YU6CQI7YB25YA2ZQ2A,
//               amount: 1285571428285714,
//             },
//             {
//               address: TAKAPZPR2X2CVWA5PXTT4SROALGXFVHFMFS2IAY,
//               amount: 1285571428285714,
//             },
//             {
//               address: TDYEJ35KOQNSQNRAJGYTB5KHSPUZ3XVS4APJQ5Q,
//               amount: 1285571428285714,
//             },
//             {
//               address: TDEMH7ABWH2UXGZRLWL5FGTLZNJX3UB43HHTCJI,
//               amount: 1285571428285714,
//             },
//             {
//               address: TDF34NZRENXAH3D7JVIXNFB5CQUKD2WSRJ6ZMLI,
//               amount: 1285571428285714,
//             },
//           ],
//       },
//       { repeat: 1 },
//     ]



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
    }, { repeat: 0 }]
    console.log('nemesis:')
    console.log('    mosaics:')
    console.log(JSON.stringify(setup, null, 2))
}
generateAddressList(7);