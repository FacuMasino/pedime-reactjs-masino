import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Footer.scss';

const Footer = () => {
	const workDays = [
		{
			dayName: 'Lunes',
			openHour: '11:00',
			closeHour: '00:00',
		},
		{
			dayName: 'Martes',
			openHour: '11:00',
			closeHour: '00:00',
		},
		{
			dayName: 'Miércoles',
			openHour: '11:00',
			closeHour: '00:00',
		},
		{
			dayName: 'Jueves',
			openHour: '11:00',
			closeHour: '02:00',
		},
		{
			dayName: 'Viernes',
			openHour: '11:00',
			closeHour: '02:00',
		},
		{
			dayName: 'Sábado',
			openHour: '11:00',
			closeHour: '02:00',
		},
		{
			dayName: 'Domingo',
			openHour: '11:00',
			closeHour: '23:00',
		},
	];
	return (
		<footer className="container-fluid bg-light p-2">
			<div className="container my-3">
				<div className="d-flex flex-wrap justify-content-between">
					<div className="col-md-3 col-12">
						<p className="footer-title mb-1">Contacto</p>
						<p>Puedes contactarnos a través de nuestras redes sociales o vía email</p>
						<p>contact@pedimeapp.com</p>
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
