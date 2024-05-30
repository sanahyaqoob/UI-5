async function connectArConnect() {
    if (window.arweaveWallet) {
        try {
            await window.arweaveWallet.connect(['ACCESS_ADDRESS', 'SIGN_TRANSACTION']);
            document.getElementById('wallet-status').innerText = 'Wallet connected';
            document.getElementById('disconnect-button').style.display = 'block';
            alert('Connected to ArConnect!');
        } catch (e) {
            console.error('Connection failed', e);
            alert('Failed to connect to ArConnect.');
        }
    } else {
        alert('ArConnect wallet not found. Please install it first.');
    }
}

async function disconnectArConnect() {
    if (window.arweaveWallet) {
        try {
            await window.arweaveWallet.disconnect();
            document.getElementById('wallet-status').innerText = '';
            document.getElementById('disconnect-button').style.display = 'none';
            alert('Disconnected from ArConnect!');
        } catch (e) {
            console.error('Disconnection failed', e);
            alert('Failed to disconnect from ArConnect.');
        }
    } else {
        alert('ArConnect wallet not found. Please install it first.');
    }
}