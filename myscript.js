const createMetaMaskProvider = require('metamask-extension-provider')

const provider = createMetaMaskProvider()
let accounts = null

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
    }
}


async function connect_metamask() {
    accounts = await provider.request({ method: 'eth_requestAccounts' })
    if (accounts.length > 0) {
        window.location = './pages/homepage.html'
    }
}

