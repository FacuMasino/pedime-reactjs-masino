import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

import { getProductById } from '../../services';

import ItemDetail from '../../components/ItemDetail';
import ItemDetailSkeleton from '../../components/ItemDetailSkeleton';

const ItemDetailContainer = () => {
	const [product, setProduct] = useState({});
	const [isLoading, setIsLoading] = useState(true);
	const { itemId } = useParams();

	const navigate = useNavigate();

	useEffect(() => {
		setIsLoading(true);
		getProductById(itemId).then((product) => {
			setProduct(product);
			setIsLoading(false);
		});
	}, [itemId]);

	return (
		<div className="container-fluid p-0 bg-body py-md-4 py-2">
			{isLoading ? (
				<ItemDetailSkeleton />
			) : product ? (
				<ItemDetail item={product}></ItemDetail>
			) : (
				navigate('/404')
			)}
		</div>
	);
};

export default ItemDetailContainer;
