async function connectArConnect() {
    if (window.arweaveWallet) {
        try {
            await window.arweaveWallet.connect(['ACCESS_ADDRESS', 'SIGN_TRANSACTION']);
            document.getElementById('wallet-status').innerText = 'Wallet connected';
            document.getElementById('disconnect-button').style.display = 'block';
            alert('Connected to ArConnect!');
            
            // Show the wallet info section
            document.getElementById('wallet-info').style.display = 'block';
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
            
            // Hide the wallet info and terminal sections
            document.getElementById('wallet-info').style.display = 'none';
            document.getElementById('terminal-container').style.display = 'none';
        } catch (e) {
            console.error('Disconnection failed', e);
            alert('Failed to disconnect from ArConnect.');
        }
    } else {
        alert('ArConnect wallet not found. Please install it first.');
    }
}

function openAOSTerminal() {
    const processId = document.getElementById('process-id').value;
    if (processId) {
        document.getElementById('terminal-container').style.display = 'block';
        document.getElementById('terminal').src = "https://sh_ao.g8way.io/?processId=" + processId;
    } else {
        alert('Please enter a valid Process ID.');
    }
}
