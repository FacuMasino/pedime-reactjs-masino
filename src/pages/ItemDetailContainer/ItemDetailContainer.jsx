import { useState, useEffect, useContext } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

import { getProductById } from '../../services';

import ItemDetail from '../../components/ItemDetail';
import ItemDetailSkeleton from '../../components/ItemDetailSkeleton';

import { BannerContext } from '../../contexts/BannerContext';

const ItemDetailContainer = () => {
	const [product, setProduct] = useState({});
	const [isLoading, setIsLoading] = useState(true);
	const { itemId } = useParams();

	const { changeCategory } = useContext(BannerContext);

	const navigate = useNavigate();

	useEffect(() => {
		setIsLoading(true);
		getProductById(itemId).then((product) => {
			setProduct(product);
			setIsLoading(false);
			changeCategory(product.categoryId);
		});
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [itemId]);

	return (
		<div className="container-fluid p-0 bg-light py-md-4 py-2">
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
