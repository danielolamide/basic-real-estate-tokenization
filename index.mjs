import {loadStdlib} from '@reach-sh/stdlib';
import * as backend from './build/index.main.mjs';
const stdlib = loadStdlib(process.env);

const startingBalance = stdlib.parseCurrency(100);
const accRealEstateCo = await stdlib.newTestAccount(startingBalance);
const realEstateSaleParams = {
	propertyValue : 100,
	unitFraction : 10,
	name : "TheHub",
	symbol : "THB"
};

const investors = [];
const startInvestors = async () => {
	const runInvestor = async (who, tokens) => {
		const acc = await stdlib.newTestAccount(startingBalance);
		acc.setDebugLabel(who);
		investors.push([who, acc]);
		const ctc = acc.contract(backend, ctcRealEstateCo.getInfo());
		try{
			console.log(`${who} is buying ${tokens} tokens`);
			await ctc.apis.Investor.buy(tokens);
		}catch(e){
			console.log('tokens are over');
		}
	}

	await runInvestor("Alice", 10);
	await runInvestor("Bob", 100);
	await runInvestor("Claire", 80);
}
const ctcRealEstateCo = accRealEstateCo.contract(backend);
await ctcRealEstateCo.participants.RealEstateCo({
	getPropertyParams : () => realEstateSaleParams,
	saleReady : () => {
		console.log("Sale is live");
		startInvestors();
	},
	showOwners : () => {
		console.log("Owners");
	}
});

