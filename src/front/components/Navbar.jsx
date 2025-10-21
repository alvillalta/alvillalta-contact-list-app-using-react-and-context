import { Link } from "react-router-dom";

export const Navbar = () => {

	//  Render
	return (
		<nav className="navbar navbar-light bg-light">
			<div className="container d-flex justify-content-between my-2">
				<div>
					<Link to="/" className="text-decoration-none">
						Home
					</Link>
				</div>
				<div>
					<Link to="/contacts" className="text-decoration-none">
						Contacts
					</Link>
				</div>
			</div>
		</nav>
	);
};