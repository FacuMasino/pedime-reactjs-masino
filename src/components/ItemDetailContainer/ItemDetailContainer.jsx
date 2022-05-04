import { useState, useEffect } from 'react';
import getProducts from '../../services/getProducts';
import ItemDetail from '../ItemDetail';
import ItemDetailSkeleton from '../ItemDetailSkeleton';

const ItemDetailContainer = () => {
	const [product, setProduct] = useState({});

	useEffect(() => {
		getProducts().then((products) => setProduct(products[0]));
	}, []);

	return (
		<div className="container-fluid p-0 bg-white">
			{Object.keys(product).length > 0 ? (
				<ItemDetail item={product}></ItemDetail>
			) : (
				<ItemDetailSkeleton />
			)}
		</div>
	);
};

export default ItemDetailContainer;
