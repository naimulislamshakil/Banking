import React from 'react';
import AnimatedCointer from './AnimatedCointer';
import DoughnutChart from './DoughnutChart';

const TotalBalance = ({
	accounts = [],
	totalBanks,
	totalCurrentBalance,
}: TotlaBalanceBoxProps) => {
	return (
		<section className="total-balance">
			<div>
				<DoughnutChart accounts={accounts} />
			</div>

			<div className="flex flex-col gap-6">
				<h2 className="header-2">
					{totalBanks === 1 ? 'Bank Account: ' : 'Bank Accounts: '}
					{totalBanks}
				</h2>

				<div className="flex flex-col gap-2">
					<p className="total-balance-lebel">Total Current Balance</p>
					<p className="total-balance-amount text-center gap-2">
						<AnimatedCointer amount={totalCurrentBalance} />
					</p>
				</div>
			</div>
		</section>
	);
};

export default TotalBalance;
