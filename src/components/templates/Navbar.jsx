import SearchBox from "../modules/SearchBox";
import "./css/Navbar.css";

const Navbar = ({ setSearched }) => {
  return (
    <nav className="navbar navbar-expand-lg position-sticky top-0 z-3">
      <div className="container">
        <a className="navbar-brand d-flex text-white" href="/">
          <i className="fab fa-github logo"></i>
          <h5 className="px-3 d-inline-block m-0 align-self-center">
            Github Finder
          </h5>
        </a>
        <SearchBox setSearched={setSearched} />
      </div>
    </nav>
  );
};

export default Navbar;
