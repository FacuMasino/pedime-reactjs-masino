import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { workDays } from '../../helpers';
import './Footer.scss';

const Footer = () => {
	return (
		<footer className="container-fluid bg-white p-2 border-top">
			<div className="container my-3">
				<div className="d-flex flex-wrap justify-content-between">
					<div className="col-md-3 col-12">
						<p className="footer-title mb-1">Contacto</p>
						<p>Puedes contactarnos a través de nuestras redes sociales o vía email</p>
						<p>contacto@pedimeapp.com</p>
					</div>
					<div className="col-md-3 col-12">
						<p className="footer-title mb-1">Horarios</p>
						<ul className="list-unstyled">
							{workDays.map((day, index) => (
								<li key={index}>
									- {day.dayName}: {day.openHour}-{day.closeHour}
								</li>
							))}
						</ul>
					</div>
					<div className="col-md-3 col-12">
						<p className="footer-title mb-1">Redes sociales</p>
						<FontAwesomeIcon className="pe-2" icon="fab fa-whatsapp-square" size="2x" />
						<FontAwesomeIcon className="px-2" icon="fab fa-facebook-square" size="2x" />
						<FontAwesomeIcon className="px-2" icon="fab fa-instagram-square" size="2x" />
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
