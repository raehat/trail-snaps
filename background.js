// Define a function to call window.ethereum.request
function callEthereum() {
    // provider.request({ method: 'eth_requestAccounts' });

    // chrome.notifications.create('', {
    //   title: 'Just wanted to notify you',
    //   message: 'How great it is!',
    //   iconUrl: '/metamask_logo.png',
    //   type: 'basic'
    // });

  }

  // Call the function every 6 seconds
  setInterval(callEthereum, 6000);

const createMetaMaskProvider = require('metamask-extension-provider')

const provider = createMetaMaskProvider()

// provider.on('error', (error) => {
//     console.log(error)
// })

// if (provider != null) {
//     console.log("yes");
// } else {
//     console.log("no");
// }