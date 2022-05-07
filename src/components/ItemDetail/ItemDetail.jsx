import { useState } from 'react';
import { Link } from 'react-router-dom';
import ItemCount from '../ItemCount';
import ItemDetailCarousel from './ItemDetailCarousel/ItemDetailCarousel';
import { toast } from 'react-toastify';
import './ItemDetail.scss';

const ItemDetail = ({ item }) => {
	const [addedQty, setAddedQty] = useState(0);

	const onAddHandler = (prodQty) => {
		setAddedQty(prodQty);
		toast.success(
			`${prodQty} producto${prodQty > 1 ? 's' : ''} agregado${prodQty > 1 ? 's' : ''}`,
			{
				autoClose: 2000,
			}
		);
	};

	return (
		<div className="container-xxl container-fluid">
			<div className="row">
				<div className="col-md-6 col-12">
					<ItemDetailCarousel images={item.images} />
				</div>
				<div className="col-md-6 col-12 border-start p-3 ps-4">
					<div className="border-bottom mb-3">
						<p className="item-title h1">{item.title}</p>
						<p className="item-price h3 text-primary mb-5">$ {item.price}</p>
						<p className="item-title h4">DESCRIPCIÓN</p>
						<p className="mb-4">{item.description}</p>
						<p className="my-0">
							<span className="item-stock">Disponibles:</span> {item.stock}
						</p>
						{addedQty > 0 ? (
							<>
								<p className="m-0">
									<span className="item-stock">Cantidad seleccionada:</span> {addedQty}
								</p>
								<Link className="btn btn-primary my-2" to="/cart">
									Finalizar compra
								</Link>
							</>
						) : (
							<ItemCount
								initial={1}
								stock={item.stock}
								onAdd={(prodQty) => onAddHandler(prodQty)}
							></ItemCount>
						)}
					</div>
					<p className="m-0">
						Categoría: <span className="text-muted">{item.category}</span>
					</p>
				</div>
			</div>
		</div>
	);
};

export default ItemDetail;
