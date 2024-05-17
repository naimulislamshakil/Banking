import Header from '@/components/ui/Header';
import TotalBalance from '@/components/ui/TotalBalance';
import React from 'react';

const Home = () => {
	const loggedIn = { firstName: 'Naimul' };
	return (
		<section className="home">
			<div className="home-content">
				<header className="home-header">
					<Header
						type="greeting"
						title="Wellcome"
						user={loggedIn ? loggedIn.firstName : 'Guest'}
						subtext="Access and manage your account and transactions efficiently."
					/>

					<TotalBalance
						accounts={[]}
						totalBanks={1}
						totalCurrentBalance={12500.35}
					/>
				</header>
			</div>
		</section>
	);
};

export default Home;
