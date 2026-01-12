// --- ELEMENTS ---
const connectBtn = document.getElementById("connectBtn");
const disconnectBtn = document.getElementById("disconnectBtn");
const statusEl = document.getElementById("status");
const addressEl = document.getElementById("address");
const networkEl = document.getElementById("network");
const balanceEl = document.getElementById("balance");

// --- CONSTANTS ---
const AVALANCHE_FUJI_CHAIN_ID = "0xa869"; // Avalanche Fuji Testnet chainId (hex)

// --- WALLET STATE ---
const walletState = {
  address: null,
  chainId: null,
};

// --- UTILITY FUNCTIONS ---
function formatAvaxBalance(balanceWei) {
  const balance = parseInt(balanceWei, 16);
  return (balance / 1e18).toFixed(4);
}

function shortenAddress(address) {
  if (!address) return "";
  return `${address.slice(0, 6)}...${address.slice(-4)}`;
}

function disableConnectButton() {
  connectBtn.disabled = true;
  connectBtn.style.cursor = "not-allowed";
}

function updateNetworkStatus(chainId) {
  walletState.chainId = chainId;
  if (chainId === AVALANCHE_FUJI_CHAIN_ID) {
    networkEl.textContent = "✅ Avalanche Fuji Testnet";
    statusEl.textContent = "Connected ✅";
    statusEl.style.color = "#4cd137";
    console.log(`Network: Avalanche Fuji Testnet (${chainId})`);
  } else {
    networkEl.textContent = "❌ Wrong Network";
    statusEl.textContent = "Please switch to Avalanche Fuji";
    statusEl.style.color = "#fbc531";
    balanceEl.textContent = "-";
    console.log(`Network: Wrong Network (${chainId})`);
    alert("⚠️ Network berubah! Silakan switch ke Avalanche Fuji Testnet.");
  }
}

function showError(message) {
  statusEl.textContent = `Error ❌: ${message}`;
  statusEl.style.color = "#e84118";
  console.error(message);
}

// --- WALLET FUNCTIONS ---
async function connectWallet() {
  if (typeof window.ethereum === "undefined") {
    alert("Core Wallet tidak terdeteksi. Silakan install Core Wallet.");
    showError("Core Wallet not detected");
    return;
  }

  console.log("window.ethereum detected");
  // Listen perubahan akun wallet
if (window.ethereum) {
  window.ethereum.on("accountsChanged", (accounts) => {
    if (accounts.length === 0) {
      disconnectWallet();
    } else {
      const newAddress = accounts[0];
      if (walletState.address && walletState.address !== newAddress) {
        alert(`⚠️ Akun wallet diganti!\nAlamat baru: ${shortenAddress(newAddress)}`);
        console.log(`Account changed: ${newAddress}`);
      }
      walletState.address = newAddress;
      addressEl.textContent = shortenAddress(newAddress);

      // Ambil balance baru
      window.ethereum
        .request({ method: "eth_getBalance", params: [newAddress, "latest"] })
        .then((balanceWei) => {
          balanceEl.textContent = formatAvaxBalance(balanceWei);
          console.log(`Updated Balance: ${balanceEl.textContent} AVAX`);
        })
        .catch((err) => showError(err.message));
    }
  });

  // Listen perubahan network
  window.ethereum.on("chainChanged", (chainId) => {
    console.log(`Chain changed: ${chainId}`);
    updateNetworkStatus(chainId);

    if (chainId === AVALANCHE_FUJI_CHAIN_ID && walletState.address) {
      window.ethereum
        .request({ method: "eth_getBalance", params: [walletState.address, "latest"] })
        .then((balanceWei) => {
          balanceEl.textContent = formatAvaxBalance(balanceWei);
          console.log(`Balance refreshed: ${balanceEl.textContent} AVAX`);
        })
        .catch((err) => showError(err.message));
    } else {
      balanceEl.textContent = "-";
    }
  });
}
  try {
    statusEl.textContent = "Connecting...";

    const accounts = await window.ethereum.request({ method: "eth_requestAccounts" });
    const address = accounts[0];
    walletState.address = address;
    addressEl.textContent = shortenAddress(address);
    console.log(`Connected Address: ${address}`);

    const chainId = await window.ethereum.request({ method: "eth_chainId" });
    updateNetworkStatus(chainId);

    if (chainId === AVALANCHE_FUJI_CHAIN_ID) {
      const balanceWei = await window.ethereum.request({
        method: "eth_getBalance",
        params: [address, "latest"],
      });
      balanceEl.textContent = formatAvaxBalance(balanceWei);
      console.log(`Balance: ${balanceEl.textContent} AVAX`);
    } else {
      balanceEl.textContent = "-";
    }

    disableConnectButton();
    disconnectBtn.disabled = false;
    disconnectBtn.style.cursor = "pointer";
  } catch (error) {
    console.error(error);
    showError("Connection Failed");
  }
}

function disconnectWallet() {
  walletState.address = null;
  walletState.chainId = null;

  addressEl.textContent = "-";
  networkEl.textContent = "-";
  balanceEl.textContent = "-";
  statusEl.textContent = "Wallet disconnected ❌";
  statusEl.style.color = "#e84118";

  connectBtn.disabled = false;
  connectBtn.style.cursor = "pointer";

  disconnectBtn.disabled = true;
  disconnectBtn.style.cursor = "not-allowed";

  console.log("Wallet disconnected");
}

// --- EVENT LISTENERS ---
connectBtn.addEventListener("click", connectWallet);
disconnectBtn.addEventListener("click", disconnectWallet);
disconnectBtn.disabled = true;
disconnectBtn.style.cursor = "not-allowed";


