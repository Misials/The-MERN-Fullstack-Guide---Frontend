import React from 'react';

import UsersList from '../components/UsersList';

const Users = () => {
	const USERS = [
		{
			id: 'u1',
			name: 'Mikolaj Michalski',
			image: 'https://www.looper.com/img/gallery/every-power-sasuke-has-on-naruto-explained/intro-1663193400.webp',
			places: 3,
		},
		{
			id: 'u2',
			name: 'Joanna Cłapka',
			image:
				'https://wszykina.pl/wp-content/uploads/2021/08/What-Is-Sasukes-Rinnegan-And-What-Are-Its-Abilities-00-1024x536.jpg',
			places: 6,
		},
	];

	return <UsersList items={USERS} />;
};

export default Users;
