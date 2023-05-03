const contract_ether_ABI = [
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

const contract_mytoken_abi = [
    {
        "inputs": [
            {
                "internalType": "string",
                "name": "_name",
                "type": "string"
            },
            {
                "internalType": "string",
                "name": "_symbol",
                "type": "string"
            },
            {
                "internalType": "uint8",
                "name": "_decimals",
                "type": "uint8"
            },
            {
                "internalType": "uint256",
                "name": "_totalSupply",
                "type": "uint256"
            }
        ],
        "stateMutability": "nonpayable",
        "type": "constructor"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "internalType": "address",
                "name": "owner",
                "type": "address"
            },
            {
                "indexed": true,
                "internalType": "address",
                "name": "spender",
                "type": "address"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "value",
                "type": "uint256"
            }
        ],
        "name": "Approval",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "internalType": "address",
                "name": "from",
                "type": "address"
            },
            {
                "indexed": true,
                "internalType": "address",
                "name": "to",
                "type": "address"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "value",
                "type": "uint256"
            }
        ],
        "name": "Transfer",
        "type": "event"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "",
                "type": "address"
            },
            {
                "internalType": "address",
                "name": "",
                "type": "address"
            }
        ],
        "name": "allowance",
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
                "name": "_spender",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "_value",
                "type": "uint256"
            }
        ],
        "name": "approve",
        "outputs": [
            {
                "internalType": "bool",
                "name": "success",
                "type": "bool"
            }
        ],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "",
                "type": "address"
            }
        ],
        "name": "balanceOf",
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
        "inputs": [],
        "name": "decimals",
        "outputs": [
            {
                "internalType": "uint8",
                "name": "",
                "type": "uint8"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "name",
        "outputs": [
            {
                "internalType": "string",
                "name": "",
                "type": "string"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "symbol",
        "outputs": [
            {
                "internalType": "string",
                "name": "",
                "type": "string"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "totalSupply",
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
                "name": "_to",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "_value",
                "type": "uint256"
            }
        ],
        "name": "transfer",
        "outputs": [
            {
                "internalType": "bool",
                "name": "success",
                "type": "bool"
            }
        ],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "_from",
                "type": "address"
            },
            {
                "internalType": "address",
                "name": "_to",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "_value",
                "type": "uint256"
            }
        ],
        "name": "transferFrom",
        "outputs": [
            {
                "internalType": "bool",
                "name": "success",
                "type": "bool"
            }
        ],
        "stateMutability": "nonpayable",
        "type": "function"
    }
]

const contract_erc20_abi = [
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
                "internalType": "address",
                "name": "erc20Token",
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
                "internalType": "address",
                "name": "erc20Token",
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
                "internalType": "address",
                "name": "erc20Token",
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
        "name": "revertPayment",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "_receiver",
                "type": "address"
            },
            {
                "internalType": "address",
                "name": "_erc20Token",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "_amount",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "_timeAhead",
                "type": "uint256"
            }
        ],
        "name": "sendPayment",
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
                        "internalType": "address",
                        "name": "sender",
                        "type": "address"
                    },
                    {
                        "internalType": "address",
                        "name": "receiver",
                        "type": "address"
                    },
                    {
                        "internalType": "address",
                        "name": "erc20Token",
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
                "internalType": "struct ERC20Escrow.Payment[]",
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
                        "internalType": "address",
                        "name": "sender",
                        "type": "address"
                    },
                    {
                        "internalType": "address",
                        "name": "receiver",
                        "type": "address"
                    },
                    {
                        "internalType": "address",
                        "name": "erc20Token",
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
                "internalType": "struct ERC20Escrow.Payment[]",
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
                "internalType": "address",
                "name": "sender",
                "type": "address"
            },
            {
                "internalType": "address",
                "name": "receiver",
                "type": "address"
            },
            {
                "internalType": "address",
                "name": "erc20Token",
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
                "internalType": "address",
                "name": "sender",
                "type": "address"
            },
            {
                "internalType": "address",
                "name": "receiver",
                "type": "address"
            },
            {
                "internalType": "address",
                "name": "erc20Token",
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
        "name": "sentPayments",
        "outputs": [
            {
                "internalType": "address",
                "name": "sender",
                "type": "address"
            },
            {
                "internalType": "address",
                "name": "receiver",
                "type": "address"
            },
            {
                "internalType": "address",
                "name": "erc20Token",
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

const dai_token_address = "0x7AF17A48a6336F7dc1beF9D485139f7B6f4FB5C8"
const tether_token_address = "0xB6434EE024892CBD8e3364048a259Ef779542475"

const contract_ether_address = '0x610319176dFA876d438d20E71C390Cb74ED5Ab66'

const erc20_escrow_address = "0x9dAa521803Db7d044625029C60977e9A7Fe82BF5"

const createMetaMaskProvider = require('metamask-extension-provider')

var ownTokenAddress = ""

const provider = createMetaMaskProvider()
const Web3 = require('web3')
const web3 = new Web3(provider);

const contract = new web3.eth.Contract(contract_ether_ABI, contract_ether_address);
const erc20_escrow_contract = new web3.eth.Contract(contract_erc20_abi, erc20_escrow_address)

var selectedToken = "eth_token_text"
var selectedTokenText = "ETHER"

async function send_eth() {

    accounts = await provider.request({ method: 'eth_requestAccounts' })

    // Get the current time
    const currentTime = new Date();

    // Calculate the timestamp of 10 days from the current time
    const tenDaysFromNow = new Date(currentTime.getTime() + (10 * 24 * 60 * 60 * 1000)).getTime();

    if (selectedToken !== "eth_token_text") {
        // erc20 transfer
        console.log("selectedToken")
        console.log(selectedToken)

        var amt_erc20_tokens = document.getElementById("amount_to_be_send").value

        var token_addr

        if (selectedToken == "dai_token_text")
            token_addr = dai_token_address
        else if (selectedToken == "tether_token_text")
            token_addr = tether_token_address
        else if (selectedToken == "own_token")
            token_addr = document.getElementById("erc20_token_address").value
        else
            return

        var token_contract = new web3.eth.Contract(contract_mytoken_abi, token_addr)

        console.log(document.getElementById("erc20_token_address").value.length)

        token_contract.methods.allowance(accounts[0], erc20_escrow_address).call((error, result) => {
            const res = result / 1000000000000000000
            console.log(result)
            if (amt_erc20_tokens > res) {
                console.log("You are not allowed to spend this amount of tokens")
                $(document.getElementById("approve_erc20_amt")).modal("show")
                return
            }
            /* global BigInt */
            amt_erc20_tokens = amt_erc20_tokens * 1000000000000000000
            erc20_escrow_contract.methods.sendPayment(document.getElementById("receiving_address").value, token_addr,
                BigInt(amt_erc20_tokens), tenDaysFromNow
            ).send({ from: accounts[0] }, (error, txHash) => {
                console.log(txHash)
            })
        })

        document.getElementById("increase_allowance_btn").addEventListener("click", () => {
            token_contract.methods.approve(erc20_escrow_address, amt_erc20_tokens).send(
                { from: accounts[0] }, (error, txHash) => {
                    console.log(txHash)
                }
            )
        })

        return
    }

    console.log(tenDaysFromNow);
    console.log(document.getElementById("receiving_address").value)
    console.log(document.getElementById("amount_to_be_send").value)

    const amt_in_wei = document.getElementById("amount_to_be_send").value * 1000000000000000000
    console.log(amt_in_wei)

    document.getElementById("send_eth").innerHTML = "Sending..."
    document.getElementById("send_eth").style.color = "#808080"
    document.getElementById("send_eth").style.backgroundColor = "#ebebeb"

    contract.methods.sendPayment(document.getElementById("receiving_address").value, tenDaysFromNow).send(
        { from: accounts[0], value: amt_in_wei }, (error, txHash) => {

            document.getElementById("send_eth").innerHTML = "Send"
            document.getElementById("send_eth").style.color = "#ffffff"
            document.getElementById("send_eth").style.backgroundColor = "#686C8C"

            console.log("contractcall")
            if (error)
                console.log(error)
            console.log(txHash)
        })

    console.log("send_eth")
}

window.onload = async function () {

    if (window.location.href.indexOf("popup.html") !== -1)
        document.getElementById("connect_button").addEventListener("click", connect_metamask);
    else if (window.location.href.indexOf("homepage.html") !== -1) {

        document.getElementById("eth_token_text").addEventListener("click", () => {
            if (ownTokenAddress.length == 0)
                document.getElementById(selectedToken).innerHTML = selectedTokenText
            else
                ownTokenAddress = ""
            document.getElementById("eth_token_text").innerHTML = "ETHER (SELECTED)"
            selectedToken = "eth_token_text"
            selectedTokenText = "ETHER"

            document.getElementById("sending_unit_name").innerHTML = "ETHER"
            document.getElementById("eth_logo").src = "../erc20data/eth_logo.png"
        })
        document.getElementById("tether_token_text").addEventListener("click", () => {
            if (ownTokenAddress.length == 0)
                document.getElementById(selectedToken).innerHTML = selectedTokenText
            else
                ownTokenAddress = ""
            document.getElementById("tether_token_text").innerHTML = "TETHER (SELECTED)"
            selectedToken = "tether_token_text"
            selectedTokenText = "TETHER"

            document.getElementById("sending_unit_name").innerHTML = "TETHER"
            document.getElementById("eth_logo").src = "../erc20data/tether_logo.png"
        })
        document.getElementById("binance_token_text").addEventListener("click", () => {
            if (ownTokenAddress.length == 0)
                document.getElementById(selectedToken).innerHTML = selectedTokenText
            else
                ownTokenAddress = ""
            document.getElementById("binance_token_text").innerHTML = "BINANCE (SELECTED)"
            selectedToken = "binance_token_text"
            selectedTokenText = "BINANCE"

            document.getElementById("sending_unit_name").innerHTML = "BINANCE"
            document.getElementById("eth_logo").src = "../erc20data/binance_logo.png"
        })
        document.getElementById("uniswap_token_text").addEventListener("click", () => {
            if (ownTokenAddress.length == 0)
                document.getElementById(selectedToken).innerHTML = selectedTokenText
            else
                ownTokenAddress = ""
            document.getElementById("uniswap_token_text").innerHTML = "UNISWAP (SELECTED)"
            selectedToken = "uniswap_token_text"
            selectedTokenText = "UNISWAP"

            document.getElementById("sending_unit_name").innerHTML = "UNISWAP"
            document.getElementById("eth_logo").src = "../erc20data/uniswap_logo.svg"
        })
        document.getElementById("dai_token_text").addEventListener("click", () => {
            if (ownTokenAddress.length == 0)
                document.getElementById(selectedToken).innerHTML = selectedTokenText
            else
                ownTokenAddress = ""
            document.getElementById("dai_token_text").innerHTML = "DAI (SELECTED)"
            selectedToken = "dai_token_text"
            selectedTokenText = "DAI"

            document.getElementById("sending_unit_name").innerHTML = "DAI"
            document.getElementById("eth_logo").src = "../erc20data/dai_logo.png"
        })
        document.getElementById("erc20_own_token_btn").addEventListener("click", async () => {
            ownTokenAddress = ""
            if (document.getElementById("erc20_token_address").value.length == 0) {
                alert("Enter some address first!")
                return
            }
            document.getElementById(selectedToken).innerHTML = selectedTokenText
            ownTokenAddress = document.getElementById("erc20_token_address").value
            selectedToken = "own_token"
            selectedTokenText = "OWN TOKEN"

            var contract = new web3.eth.Contract(contract_mytoken_abi, ownTokenAddress)
            var token_name = await contract.methods.name().call()

            document.getElementById("sending_unit_name").innerHTML = token_name
            document.getElementById("eth_logo").src = "../erc20data/eth_logo.png"
        })

        accounts = await provider.request({ method: 'eth_requestAccounts' })
        console.log(accounts)
        document.getElementById("my_address").innerHTML += accounts[0]
        document.getElementById("view_sent_option").addEventListener("click", () => {
            window.location = "./view_sent_option.html"
        })
        document.getElementById("view_unclaimed_option").addEventListener("click", () => {
            window.location = "./view_unclaimed_option.html"
        })
        document.getElementById("view_sent_erc20_option").addEventListener("click", () => {
            window.location = "./view_sent_erc20_transactions.html"
        })
        document.getElementById("view_unclaimed_erc20_option").addEventListener("click", () => {
            window.location = "./view_unclaimed_erc20_option.html"
        })

        document.getElementById("send_eth").addEventListener("click", send_eth)

    }
    else if (window.location.href.indexOf("view_sent_option.html") !== -1) {

        accounts = await provider.request({ method: 'eth_requestAccounts' })
        console.log(accounts)
        document.getElementById("my_address").innerHTML += accounts[0]
        document.getElementById("send_eth_option").addEventListener("click", () => {
            window.location = "./homepage.html"
        })
        document.getElementById("view_unclaimed_option").addEventListener("click", () => {
            window.location = "./view_unclaimed_option.html"
        })
        document.getElementById("view_sent_erc20_option").addEventListener("click", () => {
            window.location = "./view_sent_erc20_transactions.html"
        })
        document.getElementById("view_unclaimed_erc20_option").addEventListener("click", () => {
            window.location = "./view_unclaimed_erc20_option.html"
        })

        accounts = await provider.request({ method: 'eth_requestAccounts' })

        contract.methods.getSentPayments(accounts[0]).call((error, result) => {
            console.log("getsentpayments")
            console.log(result)

            if (result.length > 0) {

                for (let i = 0; i < result.length; i++) {

                    let amt = result[i]['amount'] / 1000000000000000000
                    let receiver_address = result[i]['receiver']
                    let claim_status = 'claimed'
                    if (result[i]['claimed'] == true) {
                        claim_status = 'CLAIMED'
                    } else {
                        claim_status = 'UNCLAIMED'
                    }


                    if (amt !== 0) {

                        if (result[i]["reverted"] == false) {

                            if (result[i]["claimed"] == true) {
                                var htmlCode = '<div id="tx1"><div id="tx1-box1"><div class="tx_list_data">' + amt + ' ETHER SENT TO <br>' + receiver_address + '</div><div class="tx_list_claim">STATUS : <br>' + claim_status + '</div></div><div class="tx_list_revert already_rev">ALREADY CLAIMED</div><div class="line"></div></div>';
                                document.getElementById('sent_tx_list').innerHTML += htmlCode

                                document.getElementById('no-sent-tx-page').style = "margin-top: 0px; margin-bottom: 0px; visibility: collapse;"
                            } else {
                                var htmlCode = '<div id="tx1"><div id="tx1-box1"><div class="tx_list_data">' + amt + ' ETHER SENT TO <br>' + receiver_address + '</div><div class="tx_list_claim">STATUS : <br>' + claim_status + '</div></div><div class="tx_list_revert" data-target="#revert_conf_box" data-toggle="modal" >REVERT THIS TRANSACTION</div><div class="line"></div></div>';
                                document.getElementById('sent_tx_list').innerHTML += htmlCode

                                document.getElementById('no-sent-tx-page').style = "margin-top: 0px; margin-bottom: 0px; visibility: collapse;"
                            }

                        } else if (result[i]["reverted"] == true) {

                            var htmlCode = '<div id="tx1"><div id="tx1-box1"><div class="tx_list_data">' + amt + ' ETHER SENT TO <br>' + receiver_address + '</div><div class="tx_list_claim">STATUS : <br>' + claim_status + '</div></div><div class="tx_list_revert already_rev">ALREADY REVERTED</div><div class="line"></div></div>';
                            document.getElementById('sent_tx_list').innerHTML += htmlCode

                            document.getElementById('no-sent-tx-page').style = "margin-top: 0px; margin-bottom: 0px; visibility: collapse;"

                        }

                    }


                }

                var elements = document.getElementsByClassName('tx_list_claim');
                for (let j = 0; j < elements.length; j++) {
                    if (elements[j].innerHTML.indexOf('UNCLAIMED') !== -1) {
                        elements[j].style.color = 'red';
                    }
                }

                var revertDataElements = document.getElementsByClassName("tx_list_revert")
                for (let k = 0; k < revertDataElements.length; k++) {
                    if (result[k]["reverted"] == false) {
                        revertDataElements[k].addEventListener("click", () => {

                            let amt = result[k]['amount'] / 1000000000000000000
                            let receiver_address = result[k]['receiver']

                            document.getElementById("revert_info").innerHTML = amt + ' ETHER SENT TO <br>' + receiver_address

                            console.log('revert data element index: ' + k)
                            document.getElementById("accept_revert").addEventListener("click", () => {
                                const payId = result[k]['paymentId']
                                contract.methods.revertPayment(payId).send({ from: accounts[0] }, (error, txHash) => {
                                    console.log(txHash)
                                })
                            })
                        })
                    }
                }

            }

        })

    }
    else if (window.location.href.indexOf("view_unclaimed_option.html") !== -1) {
        accounts = await provider.request({ method: 'eth_requestAccounts' })
        console.log(accounts)
        document.getElementById("my_address").innerHTML += accounts[0]
        document.getElementById("send_eth_option").addEventListener("click", () => {
            window.location = "./homepage.html"
        })
        document.getElementById("view_sent_option").addEventListener("click", () => {
            window.location = "./view_sent_option.html"
        })
        document.getElementById("view_sent_erc20_option").addEventListener("click", () => {
            window.location = "./view_sent_erc20_transactions.html"
        })
        document.getElementById("view_unclaimed_erc20_option").addEventListener("click", () => {
            window.location = "./view_unclaimed_erc20_option.html"
        })

        contract.methods.getReceivedPayments(accounts[0]).call((error, result) => {
            console.log(result)

            for (let i = 0; i < result.length; i++) {

                console.log(result[i]['amount'])
                let amt = result[i]['amount'] / 1000000000000000000
                let claimed = result[i]['claimed']
                let sender = result[i]['sender']

                let claimed_btn_txt = 'CLAIM'
                if (claimed == false)
                    claimed_btn_txt = 'CLAIM'
                else if (claimed == true) {
                    claimed_btn_txt = 'ALREADY CLAIMED'
                }

                if (amt !== 0) {
                    var htmlCode = '<div id="tx_unclaimed_1"><div class="unclaimed_box_1">' + sender + ' SENT YOU ' + amt + ' ETHER</div><div class="unclaimed_claim_button">' + claimed_btn_txt + '</div><div class="line"></div></div>';
                    document.getElementById('unclaimed_list').innerHTML += htmlCode

                    document.getElementById('tx_unclaimed_list').style = "margin-top: 0px; margin-bottom: 0px; visibility: collapse;"
                }

            }

            var elements = document.getElementsByClassName('unclaimed_claim_button')
            for (let j = 0; j < elements.length; j++) {
                if (elements[j].innerHTML.indexOf('ALREADY CLAIMED') === -1) {
                    elements[j].addEventListener("click", () => {
                        // claim ether
                        console.log("payment ID")
                        console.log(typeof (result[j]['paymentId']))
                        const paymentId = result[j]['paymentId']
                        contract.methods.claimPayment(paymentId).send({ from: accounts[0] }, (error, txHash) => {
                            console.log(txHash)
                        })
                    })
                } else {
                    document.getElementsByClassName('unclaimed_claim_button')[j].style.backgroundColor = '#d9d9d9'
                }
            }

        })

    } else if (window.location.href.indexOf("view_sent_erc20_transactions.html") !== -1) {

        accounts = await provider.request({ method: 'eth_requestAccounts' })
        console.log(accounts)
        document.getElementById("my_address").innerHTML += accounts[0]

        document.getElementById("view_sent_option").addEventListener("click", () => {
            window.location = "./view_sent_option.html"
        })
        document.getElementById("view_unclaimed_option").addEventListener("click", () => {
            window.location = "./view_unclaimed_option.html"
        })
        document.getElementById("send_eth_option").addEventListener("click", () => {
            window.location = "./homepage.html"
        })
        document.getElementById("view_unclaimed_erc20_option").addEventListener("click", () => {
            window.location = "./view_unclaimed_erc20_option.html"
        })


        accounts = await provider.request({ method: 'eth_requestAccounts' })

        erc20_escrow_contract.methods.getSentPayments(accounts[0]).call(async (error, result) => {
            console.log("getsentpayments")
            console.log(result)

            if (result.length > 0) {

                for (let i = 0; i < result.length; i++) {

                    let amt = result[i]['amount'] / 1000000000000000000
                    let receiver_address = result[i]['receiver']

                    let erc20_address = result[i]['erc20Token']
                    token_contract = new web3.eth.Contract(contract_mytoken_abi, erc20_address)
                    var token_name = ""
                    token_name = await token_contract.methods.name().call()
                    console.log(token_name)

                    let claim_status = 'claimed'
                    if (result[i]['claimed'] == true) {
                        claim_status = 'CLAIMED'
                    } else {
                        claim_status = 'UNCLAIMED'
                    }


                    if (amt !== 0) {

                        if (result[i]["reverted"] == false) {

                            if (result[i]["claimed"] == true) {
                                var htmlCode = '<div id="tx1"><div id="tx1-box1"><div class="tx_list_data">' + amt + " " + token_name + ' SENT TO <br>' + receiver_address + '</div><div class="tx_list_claim">STATUS : <br>' + claim_status + '</div></div><div class="tx_list_revert already_rev">ALREADY CLAIMED</div><div class="line"></div></div>';
                                document.getElementById('sent_tx_list').innerHTML += htmlCode

                                document.getElementById('no-sent-tx-page').style = "margin-top: 0px; margin-bottom: 0px; visibility: collapse;"
                            } else {
                                var htmlCode = '<div id="tx1"><div id="tx1-box1"><div class="tx_list_data">' + amt + " " + token_name + ' SENT TO <br>' + receiver_address + '</div><div class="tx_list_claim">STATUS : <br>' + claim_status + '</div></div><div class="tx_list_revert" data-target="#revert_conf_box" data-toggle="modal" >REVERT THIS TRANSACTION</div><div class="line"></div></div>';
                                document.getElementById('sent_tx_list').innerHTML += htmlCode

                                document.getElementById('no-sent-tx-page').style = "margin-top: 0px; margin-bottom: 0px; visibility: collapse;"
                            }

                        } else if (result[i]["reverted"] == true) {

                            var htmlCode = '<div id="tx1"><div id="tx1-box1"><div class="tx_list_data">' + amt + " " + token_name + ' SENT TO <br>' + receiver_address + '</div><div class="tx_list_claim">STATUS : <br>' + claim_status + '</div></div><div class="tx_list_revert already_rev">ALREADY REVERTED</div><div class="line"></div></div>';
                            document.getElementById('sent_tx_list').innerHTML += htmlCode

                            document.getElementById('no-sent-tx-page').style = "margin-top: 0px; margin-bottom: 0px; visibility: collapse;"

                        }

                    }


                }

                var elements = document.getElementsByClassName('tx_list_claim');
                for (let j = 0; j < elements.length; j++) {
                    if (elements[j].innerHTML.indexOf('UNCLAIMED') !== -1) {
                        elements[j].style.color = 'red';
                    }
                }

                var revertDataElements = document.getElementsByClassName("tx_list_revert")
                for (let k = 0; k < revertDataElements.length; k++) {
                    if (result[k]["reverted"] == false) {
                        revertDataElements[k].addEventListener("click", async () => {

                            let amt = result[k]['amount'] / 1000000000000000000
                            let receiver_address = result[k]['receiver']

                            let erc20_address = result[k]['erc20Token']
                            token_contract = new web3.eth.Contract(contract_mytoken_abi, erc20_address)
                            var token_name = ""
                            token_name = await token_contract.methods.name().call()

                            document.getElementById("revert_info").innerHTML = amt + " " + token_name + ' SENT TO <br>' + receiver_address

                            console.log('revert data element index: ' + k)
                            document.getElementById("accept_revert").addEventListener("click", () => {
                                const payId = result[k]['paymentId']
                                erc20_escrow_contract.methods.revertPayment(payId).send({ from: accounts[0] }, (error, txHash) => {
                                    console.log(txHash)
                                })
                            })
                        })
                    }
                }

            }

        })

    } else if ((window.location.href.indexOf("view_unclaimed_erc20_option.html") !== -1)) {

        accounts = await provider.request({ method: 'eth_requestAccounts' })
        console.log(accounts)
        document.getElementById("my_address").innerHTML += accounts[0]

        document.getElementById("view_sent_option").addEventListener("click", () => {
            window.location = "./view_sent_option.html"
        })
        document.getElementById("view_unclaimed_option").addEventListener("click", () => {
            window.location = "./view_unclaimed_option.html"
        })
        document.getElementById("send_eth_option").addEventListener("click", () => {
            window.location = "./homepage.html"
        })
        document.getElementById("view_sent_erc20_option").addEventListener("click", () => {
            window.location = "./view_sent_erc20_transactions.html"
        })

        erc20_escrow_contract.methods.getReceivedPayments(accounts[0]).call(async (error, result) => {
            console.log(result)

            for (let i = 0; i < result.length; i++) {

                console.log(result[i]['amount'])
                let amt = result[i]['amount'] / 1000000000000000000
                let claimed = result[i]['claimed']
                let sender = result[i]['sender']

                let erc20_address = result[i]['erc20Token']
                token_contract = new web3.eth.Contract(contract_mytoken_abi, erc20_address)
                var token_name = ""
                token_name = await token_contract.methods.name().call()
                console.log(token_name)


                let claimed_btn_txt = 'CLAIM'
                if (claimed == false)
                    claimed_btn_txt = 'CLAIM'
                else if (claimed == true) {
                    claimed_btn_txt = 'ALREADY CLAIMED'
                }

                if (amt !== 0) {
                    var htmlCode = '<div id="tx_unclaimed_1"><div class="unclaimed_box_1">' + sender + ' SENT YOU ' + amt + ' ' + token_name + '</div><div class="unclaimed_claim_button">' + claimed_btn_txt + '</div><div class="line"></div></div>';
                    document.getElementById('unclaimed_list').innerHTML += htmlCode

                    document.getElementById('tx_unclaimed_list').style = "margin-top: 0px; margin-bottom: 0px; visibility: collapse;"
                }

            }

            var elements = document.getElementsByClassName('unclaimed_claim_button')
            for (let j = 0; j < elements.length; j++) {
                if (elements[j].innerHTML.indexOf('ALREADY CLAIMED') === -1) {
                    elements[j].addEventListener("click", () => {
                        // claim ether
                        console.log("payment ID")
                        console.log(typeof (result[j]['paymentId']))
                        const paymentId = result[j]['paymentId']
                        erc20_escrow_contract.methods.claimPayment(paymentId).send({ from: accounts[0] }, (error, txHash) => {
                            console.log(txHash)
                        })
                    })
                } else {
                    document.getElementsByClassName('unclaimed_claim_button')[j].style.backgroundColor = '#d9d9d9'
                }
            }

        })

    }
}


async function connect_metamask() {
    accounts = await provider.request({ method: 'eth_requestAccounts' })
    if (accounts.length > 0) {
        window.location = './pages/homepage.html'
    }
}


