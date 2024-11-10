import React from "react";
import { MDBContainer, MDBNavbar, MDBNavbarBrand, MDBBtn } from "mdb-react-ui-kit";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

export default function Navbar() {
  const totalQuantity = useSelector((state) => state.cart.totalQuantity);

  return (
    <MDBNavbar light bgColor="light">
      <MDBContainer fluid>
        <MDBNavbarBrand>Product Store</MDBNavbarBrand>
        <Link to="/" className="me-3">All Products</Link>
        <Link to="/cart">
          <MDBBtn color="dark">Cart ({totalQuantity})</MDBBtn>
        </Link>
      </MDBContainer>
    </MDBNavbar>
  );
}
