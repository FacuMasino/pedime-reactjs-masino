import { createContext, useState } from 'react';

export const CartContext = createContext({
	items: [],
	canAdd: (id, stock, qty) => {},
	addItem: (item, qty) => {},
	removeItem: (id) => {},
	clear: () => {},
	getTotalQty: () => {},
	getTotalPrice: () => {},
	getTotalById: (id) => {},
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
					prod.id === item.id
						? {
								...prod,
								subtotal: prod.price * (prod.quantity + qty),
								quantity: prod.quantity + qty,
						  }
						: prod
				)
			);
		} else {
			setItems([
				...items,
				{
					id: item.id,
					title: item.title,
					price: item.price,
					subtotal: item.price * qty,
					image: item.images[0],
					categoryId: item.categoryId,
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

	const getTotalPrice = () =>
		items ? items.reduce((totalPrice, item) => totalPrice + item.price * item.quantity, 0) : 0;

	const getTotalById = (id) => (isInCart(id) ? items.find((item) => item.id === id).quantity : 0);

	return (
		<CartContext.Provider
			value={{
				items,
				canAdd,
				addItem,
				removeItem,
				clear,
				getTotalQty,
				getTotalPrice,
				getTotalById,
			}}
		>
			{children}
		</CartContext.Provider>
	);
};
