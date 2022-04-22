import CartWidget from '../CartWidget';

function NavBar() {
	return (
		<nav className="navbar navbar-expand-lg navbar-dark bg-primary">
			<div className="container">
				<a className="navbar-brand fw-bold" href="/">Pedi<span className="text-secondary">Me</span></a>
				<button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
					<span className="navbar-toggler-icon"></span>
				</button>
				<div className="collapse navbar-collapse" id="navbarNavAltMarkup">
					<div className="navbar-nav">
						<a className="nav-link active" aria-current="page" href="/">Inicio</a>
						<a className="nav-link" href="/">Burguers</a>
						<a className="nav-link" href="/">Pizzas</a>
						<a className="nav-link" href="/">Picadas</a>
					</div>
				</div>
				<CartWidget className="d-inline-flex pe-lg-0 pb-lg-0 pb-1 pe-1">0</CartWidget>
			</div>	
		</nav>
	);
}

export default NavBar;