import { useState, useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';

import ItemList from '../../components/ItemList';
import ItemListSkeleton from '../../components/ItemListSkeleton';
import { getProducts, getProductsByCategory } from '../../services/getProducts';

import { BannerContext } from '../../contexts/BannerContext';

const ItemListContainer = () => {
	const [products, setProducts] = useState([]);
	const [isLoading, setIsLoading] = useState(true);
	const { categoryId } = useParams();
	const { changeCategory } = useContext(BannerContext);

	useEffect(() => {
		const getProductsList = categoryId
			? () => getProductsByCategory(categoryId)
			: () => getProducts();

		changeCategory(categoryId);

		setIsLoading(true);

		getProductsList().then((productsRes) => {
			setIsLoading(false);
			setProducts(productsRes);
		});
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [categoryId]);

	return (
		<div className="container-fluid bg-body py-md-4 py-2">
			<div className="container p-2 my-2">
				<div className="row row-cols-1 row-cols-md-3 g-4">
					{isLoading ? <ItemListSkeleton itemsQty={6} /> : <ItemList items={products}></ItemList>}
				</div>
			</div>
		</div>
	);
};

export default ItemListContainer;
