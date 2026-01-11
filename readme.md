---
# Block Fund

Block Fund is a decentralized crowdfunding platform built on the blockchain, leveraging the power of React for the frontend. This platform allows users to create and contribute to crowdfunding campaigns securely and transparently.

## Table of Contents
1. [Introduction](#introduction)
2. [Features](#features)
3. [Technologies Used](#technologies-used)
4. [Installation](#installation)
5. [Usage](#usage)
6. [Project Structure](#project-structure)
7. [Smart Contract](#smart-contract)
8. [Contributing](#contributing)
9. [License](#license)

## Introduction

Block Fund is designed to provide a secure, transparent, and efficient way to raise funds for various projects. By leveraging blockchain technology, it ensures that all transactions are immutable and transparent, providing trust to both project creators and contributors.

## Features

- **Decentralized**: Operates on a blockchain network, ensuring security and transparency.
- **Smart Contracts**: Utilizes smart contracts to handle campaign creation and contributions.
- **User Authentication**: Secure user authentication via blockchain wallets.
- **Responsive Design**: Fully responsive design, compatible with various devices.
- **Real-time Updates**: Real-time updates on campaign status and contributions.

## Technologies Used

- **React**: Frontend framework.
- **Ethereum**: Blockchain platform for smart contracts.
- **Solidity**: Programming language for writing smart contracts.
- **Web3.js**: JavaScript library for interacting with the Ethereum blockchain.
- **MetaMask**: Browser extension for Ethereum wallet management.

## Installation

To get started with Block Fund, follow these steps:

1. **Clone the repository**:
    ```bash
    git clone https://github.com/hassan4702/block-fund.git
    cd block-fund
    ```

2. **Install dependencies**:
    ```bash
    npm install
    ```

3. **Run the development server**:
    ```bash
    npm start
    ```

    The application will be available at `http://localhost:3000`.

## Usage

1. **Connecting Wallet**: Users need to connect their Ethereum wallet (e.g., MetaMask) to interact with the platform.
2. **Creating a Campaign**: Users can create new crowdfunding campaigns by specifying the goal amount and deadline.
3. **Contributing to a Campaign**: Users can contribute to existing campaigns using their Ethereum wallet.
4. **Viewing Campaigns**: Users can view the list of all campaigns and their details, including the amount raised and time remaining.

## Project Structure

```
block-fund/
├── public/
│   ├── index.html
│   └── ...
├── src/
│   ├── components/
│   │   ├── CampaignCard.js
│   │   ├── CreateCampaign.js
│   │   ├── Navbar.js
│   │   └── ...
│   ├── contracts/
│   │   ├── BlockFund.sol
│   │   └── ...
│   ├── contexts/
│   │   ├── Web3Context.js
│   │   └── ...
│   ├── pages/
│   │   ├── Home.js
│   │   ├── Campaign.js
│   │   └── ...
│   ├── App.js
│   ├── index.js
│   └── ...
├── package.json
└── README.md
```

## Smart Contract

The smart contract is written in Solidity and is located in the `src/contracts/BlockFund.sol` file. It handles the core functionality of the platform, including:

- Campaign creation
- Contribution management
- Fund withdrawal by campaign creators

### Example Contract

```solidity
pragma solidity ^0.8.0;

contract BlockFund {
    struct Campaign {
        address payable creator;
        uint goal;
        uint raisedAmount;
        uint deadline;
        bool completed;
    }

    mapping(uint => Campaign) public campaigns;
    uint public campaignCount;

    function createCampaign(uint _goal, uint _duration) public {
        campaignCount++;
        campaigns[campaignCount] = Campaign(
            payable(msg.sender),
            _goal,
            0,
            block.timestamp + _duration,
            false
        );
    }

    function contribute(uint _campaignId) public payable {
        Campaign storage campaign = campaigns[_campaignId];
        require(block.timestamp < campaign.deadline, "Campaign ended");
        require(!campaign.completed, "Campaign completed");

        campaign.raisedAmount += msg.value;
        if (campaign.raisedAmount >= campaign.goal) {
            campaign.completed = true;
        }
    }

    function withdrawFunds(uint _campaignId) public {
        Campaign storage campaign = campaigns[_campaignId];
        require(msg.sender == campaign.creator, "Not campaign creator");
        require(block.timestamp > campaign.deadline, "Campaign not ended");

        campaign.creator.transfer(campaign.raisedAmount);
    }
}
```

## Contributing

Contributions are welcome! To contribute:

1. Fork the repository.
2. Create a new branch: `git checkout -b feature/your-feature`.
3. Make your changes and commit them: `git commit -m 'Add some feature'`.
4. Push to the branch: `git push origin feature/your-feature`.
5. Open a pull request.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

---
