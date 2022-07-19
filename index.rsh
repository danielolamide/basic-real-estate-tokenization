'reach 0.1';

/*
Real Estate Tokenization Smart Contract
*/

export const main = Reach.App(() => {
	const RealEstateCo = Participant('RealEstateCo', {
		getPropertyParams : Fun([], Object({
			propertyValue : UInt, // TODO check out oracles to provide real-time property value according to market
			unitFraction : UInt,
			name : Bytes(32),
			symbol : Bytes(8),
		})),
		saleReady : Fun([Token, UInt], Null),
		showOwners : Fun([], Null),
	});

	const Investor = API("Investor", {
		buy : Fun([UInt], UInt)
	});

	init();

	RealEstateCo.only(() => {
		const {propertyValue, unitFraction, name, symbol} = declassify(interact.getPropertyParams());
		assume(unitFraction >= 1);
		assume(propertyValue > 0);
	});
	RealEstateCo.publish(propertyValue, unitFraction, name, symbol);
	check(unitFraction >= 1, "unit fraction is greater than or equal to 1");
	check(propertyValue > 0, "property value is greater than 0");
	const token = new Token({name, symbol, supply : unitFraction, decimals : 6});
	const initialTokenCost = propertyValue / unitFraction;
	commit();

	RealEstateCo.publish();
	RealEstateCo.interact.saleReady(token, initialTokenCost);

	const [
	] = parallelReduce([])
		.invariant(token.destroyed() == false )
		.while(true)
		.api_(Investor.buy, (amt) => {
			const tokensPurchased = propertyValue / amt;
			check((tokensPurchased <= balance(token)), "all tokens have been purchased");
			return [amt, (notify) => {
				transfer(tokensPurchased, token).to(this);
				notify(balance(token))
				transfer(amt).to(RealEstateCo);
				return []
			}]
		})

	token.burn(token.supply());
	token.destroy();
	commit();

  exit();
});
