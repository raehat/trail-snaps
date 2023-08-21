const contract_ether_ABI = [
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "payId",
        "type": "uint256"
      },
      {
        "indexed": false,
        "internalType": "address",
        "name": "sender",
        "type": "address"
      },
      {
        "indexed": false,
        "internalType": "address",
        "name": "receiver",
        "type": "address"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "amount",
        "type": "uint256"
      }
    ],
    "name": "PaymentClaimed",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "payId",
        "type": "uint256"
      },
      {
        "indexed": false,
        "internalType": "address",
        "name": "sender",
        "type": "address"
      },
      {
        "indexed": false,
        "internalType": "address",
        "name": "receiver",
        "type": "address"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "amount",
        "type": "uint256"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "deadline",
        "type": "uint256"
      }
    ],
    "name": "PaymentInitiated",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "payId",
        "type": "uint256"
      },
      {
        "indexed": false,
        "internalType": "address",
        "name": "sender",
        "type": "address"
      },
      {
        "indexed": false,
        "internalType": "address",
        "name": "receiver",
        "type": "address"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "amount",
        "type": "uint256"
      }
    ],
    "name": "PaymentReverted",
    "type": "event"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "_paymentId",
        "type": "uint256"
      }
    ],
    "name": "claimPayment",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "currPaymentId",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "_receiver",
        "type": "address"
      }
    ],
    "name": "getReceivedPayments",
    "outputs": [
      {
        "components": [
          {
            "internalType": "address payable",
            "name": "sender",
            "type": "address"
          },
          {
            "internalType": "address payable",
            "name": "receiver",
            "type": "address"
          },
          {
            "internalType": "uint256",
            "name": "amount",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "deadline",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "claimed",
            "type": "bool"
          },
          {
            "internalType": "bool",
            "name": "reverted",
            "type": "bool"
          },
          {
            "internalType": "uint256",
            "name": "paymentId",
            "type": "uint256"
          }
        ],
        "internalType": "struct ETHEscrow.Payment[]",
        "name": "",
        "type": "tuple[]"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "_sender",
        "type": "address"
      }
    ],
    "name": "getSentPayments",
    "outputs": [
      {
        "components": [
          {
            "internalType": "address payable",
            "name": "sender",
            "type": "address"
          },
          {
            "internalType": "address payable",
            "name": "receiver",
            "type": "address"
          },
          {
            "internalType": "uint256",
            "name": "amount",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "deadline",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "claimed",
            "type": "bool"
          },
          {
            "internalType": "bool",
            "name": "reverted",
            "type": "bool"
          },
          {
            "internalType": "uint256",
            "name": "paymentId",
            "type": "uint256"
          }
        ],
        "internalType": "struct ETHEscrow.Payment[]",
        "name": "",
        "type": "tuple[]"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "name": "payments",
    "outputs": [
      {
        "internalType": "address payable",
        "name": "sender",
        "type": "address"
      },
      {
        "internalType": "address payable",
        "name": "receiver",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "amount",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "deadline",
        "type": "uint256"
      },
      {
        "internalType": "bool",
        "name": "claimed",
        "type": "bool"
      },
      {
        "internalType": "bool",
        "name": "reverted",
        "type": "bool"
      },
      {
        "internalType": "uint256",
        "name": "paymentId",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "name": "receivedPayments",
    "outputs": [
      {
        "internalType": "address payable",
        "name": "sender",
        "type": "address"
      },
      {
        "internalType": "address payable",
        "name": "receiver",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "amount",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "deadline",
        "type": "uint256"
      },
      {
        "internalType": "bool",
        "name": "claimed",
        "type": "bool"
      },
      {
        "internalType": "bool",
        "name": "reverted",
        "type": "bool"
      },
      {
        "internalType": "uint256",
        "name": "paymentId",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "_paymentId",
        "type": "uint256"
      }
    ],
    "name": "revertPayment",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address payable",
        "name": "_receiver",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "_timeAhead",
        "type": "uint256"
      }
    ],
    "name": "sendPayment",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "name": "sentPayments",
    "outputs": [
      {
        "internalType": "address payable",
        "name": "sender",
        "type": "address"
      },
      {
        "internalType": "address payable",
        "name": "receiver",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "amount",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "deadline",
        "type": "uint256"
      },
      {
        "internalType": "bool",
        "name": "claimed",
        "type": "bool"
      },
      {
        "internalType": "bool",
        "name": "reverted",
        "type": "bool"
      },
      {
        "internalType": "uint256",
        "name": "paymentId",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  }
]

async function checkNotifications() {

  const approved = await provider.request({
    method: 'wallet_invokeSnap',
    params: { snapId: process.env.SNAP_ORIGIN, request: { method: 'hello' } },
  });

  const accounts = await provider.request({ method: 'eth_accounts' });
  console.log(accounts[0])

  if (accounts.length > 0) {

    const ether_contract = new web3.eth.Contract(contract_ether_ABI, ether_contract_address);

    console.log(ether_contract.events)

    ether_contract.events.PaymentInitiated({}, function (error, event) {
      const receiver_address = event["returnValues"]["receiver"]
      console.log(event["returnValues"]["receiver"])
      console.log(accounts[0])

      console.log(event["returnValues"]["sender"])

      if (accounts[0].toLowerCase() == receiver_address.toLowerCase()) {
        chrome.notifications.create('', {
          title: 'Payment received!',
          message: 'You have received ' + event["returnValues"]["amount"] + " wei from " + event["returnValues"]["sender"],
          iconUrl: '/metamask_logo.png',
          type: 'basic'
        });
      }
    })
      .on('error', console.error);

    // const webSocketProvider = new ethers.providers.WebSocketProvider(provider);
    // const ether_contract = new ethers.Contract(ether_contract_address, contract_ether_ABI, webSocketProvider);

    // contract.on("Transfer", (from, to, value, event) => {
    //   console.log({
    //     from: from,
    //     to: to,
    //     value: value.toString(),
    //     data: event
    //   });
    // });

    // chrome.notifications.create('', {
    //   title: 'Just wanted to notify you',
    //   message: 'How great it is!',
    //   iconUrl: '/metamask_logo.png',
    //   type: 'basic'
    // });

  }
}

// Call the function every 6 seconds
// setInterval(checkNotifications, 6000);

const createMetaMaskProvider = require('metamask-extension-provider')

const provider = createMetaMaskProvider()

const Web3 = require('web3')
const web3 = new Web3(provider);

// const ether_contract_address = "0x610319176dFA876d438d20E71C390Cb74ED5Ab66"
const ether_contract_address = "0xF9B6C3BE4004E5b2C36fF26e9D19dFe2668F3466"

checkNotifications();
