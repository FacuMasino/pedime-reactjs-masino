import './Header.scss';

const Header = () => {
	return (
		<div className="container-fluid vh-50 banner">
			<div className="container h-100">
				<div className="row align-items-center justify-content-start h-100">
					<div className="col-8">
						<p className="banner-brand h1 text-white text-uppercase">
							Pedi<span className="text-secondary">Me!</span>
						</p>
						<p className="banner-title h1 text-white text-uppercase">
							Elegí el menú que más te guste, y te lo llevamos a tu casa.
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Header;
