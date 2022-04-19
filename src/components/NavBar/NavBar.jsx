import CartWidget from '../CartWidget';

function NavBar() {
	return (
		<nav className="navbar navbar-expand-lg navbar-dark bg-dark">
			<div className="container-fluid">
				<a className="navbar-brand" href="/">PediMe</a>
				<button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
					<span className="navbar-toggler-icon"></span>
				</button>
				<div className="collapse navbar-collapse" id="navbarNavAltMarkup">
					<div className="navbar-nav m-auto">
						<a className="nav-link active" aria-current="page" href="/">Inicio</a>
						<a className="nav-link" href="/">Burguers</a>
						<a className="nav-link" href="/">Pizzas</a>
						<a className="nav-link" href="/">Picadas</a>
					</div>
				</div>
				<CartWidget className="d-inline-flex pb-md-0 pb-2 px-3">0</CartWidget>
			</div>	
		</nav>
	);
}

export default NavBar;