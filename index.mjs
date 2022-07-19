import { loadStdlib } from '@reach-sh/stdlib';
import * as backend from './build/index.main.mjs';
const stdlib = loadStdlib(process.env);

const startingBalance = stdlib.parseCurrency(100);
const accRealEstateCo = await stdlib.newTestAccount(startingBalance);
const realEstateSaleParams = {
	propertyValue: 100,
	unitFraction: 11,
	name: "TheHub",
	symbol: "THB"
};

const investors = [];
const startInvestors = async (tokenId) => {
	const runInvestor = async (who, amountPaid) => {
		const acc = await stdlib.newTestAccount(startingBalance);
		acc.setDebugLabel(who);
		await acc.tokenAccept(tokenId);
		investors.push([who, acc]);
		const ctc = acc.contract(backend, ctcRealEstateCo.getInfo());
		try {
			console.log(`${who} is buying tokens worth ${amountPaid} ${stdlib.standardUnit}`);
			const tokenBalance = await ctc.apis.Investor.buy(stdlib.parseCurrency(amountPaid));
			console.log(`Token balance after ${who} buys is ${tokenBalance}`)
			const tokenSymbol = await acc.tokenMetadata(tokenId);
			console.log(`${who} has a balance of ${await acc.balanceOf(tokenId)}${tokenSymbol.symbol} and ${stdlib.formatCurrency(await acc.balanceOf())}${stdlib.standardUnit}`);
		} catch (e) {
			console.error(`${e?.message}`);
		}
	}

	await runInvestor("Alice", 5);
	await runInvestor("Bob", 1);
	await runInvestor("Claire", 1);
}
const ctcRealEstateCo = accRealEstateCo.contract(backend);
await ctcRealEstateCo.participants.RealEstateCo({
	getPropertyParams: () => realEstateSaleParams,
	saleReady: (tokenId, startPrice) => {
		console.log(`Sale is live for ${realEstateSaleParams.unitFraction}${realEstateSaleParams.symbol} at ${startPrice}${stdlib.standardUnit} each`);
		startInvestors(tokenId);
	},
	showOwners: () => {
		console.log("Owners");
	},
	//showMoneyMade: async () => {
		//console.log(`Real Estate Company has wallet balance of ${stdlib.formatCurrency(await accRealEstateCo.balanceOf())}${stdlib.standardUnit}`);
	//}
});

