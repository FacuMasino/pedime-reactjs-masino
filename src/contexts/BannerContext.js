import { createContext, useState } from 'react';

export const BannerContext = createContext({ name: '' });

export const BannerProvider = ({ children }) => {
	const [category, setCategory] = useState({});

	const changeCategory = (name) => setCategory({ name });

	return (
		<BannerContext.Provider value={{ category, changeCategory }}>{children}</BannerContext.Provider>
	);
};
