import { createContext, useState } from 'react';

export const CartContext = createContext({
	items: [],
	canAdd: (id, stock, qty) => {},
	addItem: (item, qty) => {},
	removeItem: (id) => {},
	clear: () => {},
	getTotalQty: () => {},
});

export const CartProvider = ({ children }) => {
	const [items, setItems] = useState([]);

	const isInCart = (id) => {
		return items.some((item) => item.id === id);
	};

	const canAdd = (id, stock, qty) => {
		if (!isInCart(id)) return true;
		const actualQty = items.find((item) => item.id === id).quantity;
		return actualQty + qty <= stock ? true : false;
	};

	const addItem = (item, qty) => {
		if (isInCart(item.id)) {
			setItems(
				items.map((prod) =>
					prod.id === item.id ? { ...prod, quantity: prod.quantity + qty } : prod
				)
			);
		} else {
			setItems([
				...items,
				{
					id: item.id,
					name: item.title,
					price: item.price,
					image: item.images[0],
					quantity: qty,
				},
			]);
		}
	};

	const removeItem = (id) => {
		setItems(items.filter((item) => item.id !== id));
	};

	const clear = () => {
		setItems([]);
	};

	const getTotalQty = () =>
		items ? items.reduce((totalQty, item) => totalQty + item.quantity, 0) : 0;

	return (
		<CartContext.Provider value={{ items, canAdd, addItem, removeItem, clear, getTotalQty }}>
			{children}
		</CartContext.Provider>
	);
};
