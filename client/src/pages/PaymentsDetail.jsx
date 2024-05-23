import React from 'react';

const PaymentsDetail = () => {
  return (
    <div className="container mx-auto p-4 min-h-screen">
      <h1 className="text-4xl font-semibold mb-14 text-center text-gray-900 dark:text-gray-100">Payments</h1>
      <div className="bg-white dark:bg-[#1c1c24] shadow-md rounded-lg p-8 max-w-5xl w-full mx-auto">
        <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-gray-100">Connecting Your MetaMask Wallet</h2>
        <p className="mb-4 text-gray-800 dark:text-gray-200">
          MetaMask is a popular cryptocurrency wallet that allows you to interact with the Ethereum blockchain. Follow these steps to connect your MetaMask wallet to Block Fund:
        </p>
        <ol className="list-decimal list-inside space-y-6 text-gray-800 dark:text-gray-200">
          <li>
            <strong>Install MetaMask:</strong> 
            <p className="mt-1">If you haven't already, <a href="https://metamask.io/" className="text-blue-500 underline" target="_blank" rel="noopener noreferrer">install MetaMask</a>. It's available as a browser extension and a mobile app.</p>
          </li>
          <li>
            <strong>Create or Import a Wallet:</strong> 
            <p className="mt-1">Open MetaMask and create a new wallet or import an existing one using your seed phrase.</p>
          </li>
          <li>
            <strong>Connect to Ethereum Mainnet:</strong> 
            <p className="mt-1">Ensure you are connected to the Ethereum Mainnet.</p>
          </li>
          <li>
            <strong>Login to Block Fund:</strong> 
            <p className="mt-1">Go to the Block Fund platform and log in to your MetaMask account.</p>
          </li>
          <li>
            <strong>Confirm Connection:</strong> 
            <p className="mt-1">Your MetaMask wallet is now connected to your Block Fund account. You can receive funds directly to your wallet.</p>
          </li>
        </ol>

        <h2 className="text-2xl font-semibold mb-4 mt-8 text-gray-900 dark:text-gray-100">Receiving Funds</h2>
        <p className="mb-4 text-gray-800 dark:text-gray-200">
          Once your campaign is funded, the pledged funds will be transferred to your connected MetaMask wallet. You can view and manage these funds directly in MetaMask.
        </p>
        <p className="mb-4 text-gray-800 dark:text-gray-200">
          To ensure a smooth transaction process, make sure you have some Ether (ETH) in your MetaMask wallet to cover gas fees.
        </p>

        <h2 className="text-2xl font-semibold mb-4 mt-8 text-gray-900 dark:text-gray-100">Troubleshooting Payment Issues</h2>
        <p className="mb-4 text-gray-800 dark:text-gray-200">
          If you encounter any issues with payments, here are some common troubleshooting steps:
        </p>
        <ul className="list-disc list-inside space-y-4 text-gray-800 dark:text-gray-200">
          <li>Ensure that your MetaMask wallet is properly connected and you are logged in.</li>
          <li>Verify that you are connected to the Ethereum Mainnet.</li>
          <li>Check if you have enough ETH in your wallet to cover gas fees.</li>
          <li>If a transaction fails, try resubmitting it after checking the network status on <a href="https://etherscan.io/" className="text-blue-500 underline" target="_blank" rel="noopener noreferrer">Etherscan</a>.</li>
          <li>For further assistance, contact Block Fund support or visit the <a href="https://metamask.io/faqs.html" className="text-blue-500 underline" target="_blank" rel="noopener noreferrer">MetaMask FAQ</a>.</li>
        </ul>
      </div>
    </div>
  );
};

export default PaymentsDetail;
