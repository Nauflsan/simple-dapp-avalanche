# 🚀 Shortcourse Blockchain dApp - Day 5 Completion
 

Saya Naufal Sausan S. telah **menyelesaikan Day 5** dari shortcourse Full Stack Web3 dApp, mencakup semua materi, integrasi, dan deployment full stack.  
Hari ini fokus pada **Full Stack Integration & Deployment**, dari smart contract hingga frontend production.

---

## 🔗 Live Demo

- **Frontend:** [https://simple-dapp-avalanche.vercel.app/](https://simple-dapp-avalanche.vercel.app/)  
- **Backend API:** [https://simple-dapp-avalanche-nauflsan.up.railway.app/swagger](https://simple-dapp-avalanche-nauflsan.up.railway.app/swagger)

---

## ✅ Materi & Pencapaian

### 1. Full Stack dApp Architecture
- Smart Contract: Solidity + Hardhat → logic & state on-chain  
- Backend: NestJS + viem → API, aggregation, UX improvement  
- Frontend: Next.js + Wagmi → UI & wallet interaction  
- Blockchain: Avalanche Fuji / Mainnet → source of truth

### 2. User Interaction Flow
- **Read Flow:** Frontend → Backend API → Blockchain  
- **Write Flow:** Frontend → Wallet → Blockchain (Backend read-only)  
- Backend aman, tidak berada di jalur transaksi  

### 3. Environment & Configuration
- Pisahkan config untuk local, testnet, dan mainnet  
- Gunakan `.env` dan jangan hardcode RPC, contract address, atau API endpoint  

### 4. Production & Deployment Best Practice
- Immutable smart contract, simpan ABI & address  
- Backend read-only, handle RPC errors, timeout & caching  
- Frontend handle loading, error, dan validasi network  

### 5. Full Stack Integration
- **Frontend ↔ Backend:** fetch data blockchain via API, aman dari RPC exposure  
- **Frontend ↔ Smart Contract:** wallet connection, transaction, confirmation  
- Data tampil realtime & UI responsif  

### 6. Deployment
- **Smart Contract:** Avalanche Fuji Testnet  
- **Backend:** NestJS di Railway  
- **Frontend:** Next.js di Vercel  

### 7. Final Demo
- Frontend connect wallet ✅  
- Read & write blockchain ✅  
- Backend API live ✅  
- Full stack dApp berjalan end-to-end ✅  

---

## 🎓 Outcome Day 5

Setelah menyelesaikan Day 5, saya sekarang memiliki:  
- Full Stack Web3 dApp yang **production-ready**  
- Pemahaman penuh integrasi frontend, backend, dan blockchain  
- Praktik deployment ke environment live (Vercel & Railway)  

🚀 **Status:** ✅ COMPLETED  

---

## 📌 Catatan
- Frontend menggunakan environment variable `NEXT_PUBLIC_BACKEND_URL` untuk mengakses backend live  
- Backend handle RPC & contract address, tetap read-only  
- Deployment sudah live dan dapat diakses publik  

---

**🎉 Full Stack Web3 dApp siap digunakan dan dikembangkan lebih lanjut!**
