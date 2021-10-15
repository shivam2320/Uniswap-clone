const TestFactory = artifacts.require("TestFactory");

module.exports = function (deployer) {
  deployer.deploy(TestFactory, '0x839e77BEf1588A04a31d72573988fA6a78CD2Bd5');
};
