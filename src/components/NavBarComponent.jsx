import { ShoppingCart } from "@mui/icons-material";
import { Badge } from "@mui/material";
import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { CartContext } from "../context/CartContext";

export const NavBarComponent = () => {

  const {shoppingList} = useContext(CartContext)
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <NavLink to={'/'} className="navbar-brand" >
            Navbar
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink to={'/'} className="nav-link " aria-current="page">
                  Tienda
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to={'/carrito'} className="nav-link">
                  Carrito
                </NavLink>
              </li>
            </ul>
            <NavLink to={'/carrito'}>
              <Badge badgeContent={shoppingList.length} color="primary">
                <ShoppingCart color="action" />
              </Badge>
            </NavLink>
            <form className="d-flex" role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-outline-success" type="submit">
                Search
              </button>
            </form>
      
          </div>
        </div>
      </nav>
    </>
  );
};
