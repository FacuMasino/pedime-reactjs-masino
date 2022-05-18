import CartItem from './CartItem';

const CartItemList = ({ items }) => {
	return (
		<>
			<h2 className="text-start text-title border-bottom">Resumen del pedido</h2>
			{items.map((item) => (
				<CartItem key={item.id} item={item} />
			))}
		</>
	);
};

export default CartItemList;
