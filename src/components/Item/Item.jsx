import { Link } from 'react-router-dom';
import './Item.scss';

const Item = ({ item }) => {
	return (
		<div className="col">
			<div className="card h-100">
				<img src={item.images[0]} className="card-img-top" alt={item.title} />
				<div className="card-body">
					<h5 className="card-title h4 text-uppercase">{item.title}</h5>
					<p className="card-text">{item.description}</p>
					<div className="d-flex align-items-stretch justify-content-between">
						<p className="card-text fw-bold stock">
							{item.stock ? `Disponibles: ${item.stock}` : 'SIN STOCK'}{' '}
						</p>
						<p className="card-text price h4 text-primary">${item.price}</p>
					</div>
				</div>
				<div className="card-body text-center">
					<Link className="btn btn-primary" to={`/Item/${item.id}`}>
						Ver detalle
					</Link>
				</div>
			</div>
		</div>
	);
};

export default Item;
