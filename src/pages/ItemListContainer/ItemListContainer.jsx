import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ItemList from '../../components/ItemList';
import ItemListSkeleton from '../../components/ItemListSkeleton';
import { getProducts, getProductsByCategory } from '../../services/getProducts';

const ItemListContainer = () => {
	const [products, setProducts] = useState([]);
	const [isLoading, setIsLoading] = useState(true);
	const { categoryId } = useParams();

	useEffect(() => {
		const getProductsList = categoryId
			? () => getProductsByCategory(categoryId)
			: () => getProducts();

		setIsLoading(true);

		getProductsList().then((productsRes) => {
			setIsLoading(false);
			setProducts(productsRes);
		});
	}, [categoryId]);

	return (
		<div className="container p-2">
			<div className="row row-cols-1 row-cols-md-3 g-4">
				{isLoading ? <ItemListSkeleton itemsQty={6} /> : <ItemList items={products}></ItemList>}
			</div>
		</div>
	);
};

export default ItemListContainer;
