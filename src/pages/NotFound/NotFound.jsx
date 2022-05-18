import { useNavigate } from 'react-router-dom';

import notFoundImg from '../../assets/img/404.png';

const NotFound = () => {
	const navigate = useNavigate();

	return (
		<div className="container-fluid bg-body py-2">
			<div className="container py-2 my-2">
				<div className="d-flex flex-column align-items-center">
					<img src={notFoundImg} className="img-fluid" alt="Página no encontrada" />
					<div className="col-12 text-center mb-3">
						<h2 className="text-title p-2">Oops 404!</h2>
						<p className="h5">
							Al parecer intentas visitar una página que no existe o escribiste mal la dirección.
						</p>
					</div>
					<div className="col-12 text-center">
						<button className="btn btn-outline-primary fw-bold" onClick={() => navigate('/')}>
							Volver al catálogo
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default NotFound;
