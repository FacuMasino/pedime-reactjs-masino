import { useState, useEffect } from 'react';
/* import { toast } from 'react-toastify'; */
import ItemList from '../ItemList';
import ItemsSkeleton from '../ItemsSkeleton';
import getProducts from '../../services/getProducts';

const ItemListContainer = ({ greeting }) => {
	const [products, setProducts] = useState([]);
	const [isLoading, setIsLoading] = useState(true);
	// Mostrar un mensaje al agregar producto
	/* const onAddFn = (n) =>
		toast.success(`${n} producto${n > 1 ? 's' : ''} agregado${n > 1 ? 's' : ''}`, {
			autoClose: 2000,
		}); */

	useEffect(() => {
		getProducts().then((productsRes) => {
			setIsLoading(false);
			setProducts(productsRes);
		});
	}, []);

	return (
		<div className="container p-2">
			<p className="h2 text-center">{greeting}</p>
			{/* <ItemCount stock={5} initial={1} onAdd={(n) => onAddFn(n)} />
				<ItemCount stock={0} initial={1} onAdd={(n) => onAddFn(n)} /> */}
			<div className="row row-cols-1 row-cols-md-3 g-4">
				<ItemsSkeleton itemsQty={6} isLoading={isLoading} />
				<ItemList items={products}></ItemList>
			</div>
		</div>
	);
};

export default ItemListContainer;
