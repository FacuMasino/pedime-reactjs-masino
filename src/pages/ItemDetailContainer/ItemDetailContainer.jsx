import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getProductById } from '../../services/getProducts';
import ItemDetail from '../../components/ItemDetail';
import ItemDetailSkeleton from '../../components/ItemDetailSkeleton';

const ItemDetailContainer = () => {
	const [product, setProduct] = useState({});
	const { itemId } = useParams();

	useEffect(() => {
		getProductById(itemId).then((product) => {
			setProduct(product);
		});
	}, [itemId]);

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
