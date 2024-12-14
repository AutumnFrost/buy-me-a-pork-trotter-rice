const hre = require("hardhat");

async function main() {
    // 获取合约工厂部署
    const Rice = await hre.ethers.getContractFactory("PorkTrotterRice");
    const porkTrotterRice = await Rice.deploy();  

    await porkTrotterRice.waitForDeployment();  
    console.log("Address of contract:", await porkTrotterRice.getAddress());  

    return porkTrotterRice.getAddress();
}


main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});