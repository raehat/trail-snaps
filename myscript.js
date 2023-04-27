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
                "internalType": "uint256",
                "name": "paymentId",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    }
]

const contract_ether_address = '0x1C0e10649b22787e500191C108a77AfAD22c4254'


const createMetaMaskProvider = require('metamask-extension-provider')

const provider = createMetaMaskProvider()
const Web3 = require('web3')
const web3 = new Web3(provider);

const contract = new web3.eth.Contract(contract_ether_ABI, contract_ether_address);

async function send_eth() {

    accounts = await provider.request({ method: 'eth_requestAccounts' })

    // Get the current time
    const currentTime = new Date();

    // Calculate the timestamp of 10 days from the current time
    const tenDaysFromNow = new Date(currentTime.getTime() + (10 * 24 * 60 * 60 * 1000)).getTime();

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

        accounts = await provider.request({ method: 'eth_requestAccounts' })
        console.log(accounts)
        document.getElementById("my_address").innerHTML += accounts[0]
        document.getElementById("view_sent_option").addEventListener("click", () => {
            window.location = "./view_sent_option.html"
        })
        document.getElementById("view_unclaimed_option").addEventListener("click", () => {
            window.location = "./view_unclaimed_option.html"
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
                        var htmlCode = '<div id="tx1"><div id="tx1-box1"><div class="tx_list_data">' + amt + ' ETHER SENT TO <br>' + receiver_address + '</div><div class="tx_list_claim">STATUS : <br>' + claim_status + '</div></div><div class="tx_list_revert" data-target="#revert_conf_box" data-toggle="modal" >REVERT THIS TRANSACTION</div><div class="line"></div></div>';
                        document.getElementById('sent_tx_list').innerHTML += htmlCode

                        document.getElementById('no-sent-tx-page').style = "margin-top: 0px; margin-bottom: 0px; visibility: collapse;"
                    }


                }

                var elements = document.getElementsByClassName('tx_list_claim');
                for (let j = 0; j < elements.length; j++) {
                    if (elements[j].innerHTML.indexOf('UNCLAIMED') !== -1) {
                        elements[j].style.color = 'red';
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

    }
}


async function connect_metamask() {
    accounts = await provider.request({ method: 'eth_requestAccounts' })
    if (accounts.length > 0) {
        window.location = './pages/homepage.html'
    }
}


