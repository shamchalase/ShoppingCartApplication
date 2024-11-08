import React from "react";
import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarBrand,
  MDBBtn,
} from "mdb-react-ui-kit";
import { useSelector } from "react-redux";

export default function Navbar() {
  const totalQuantity = useSelector((state) => state.cart.totalQuantity);

  return (
    <MDBNavbar light bgColor="light">
      <MDBContainer fluid>
        <MDBNavbarBrand>Product Store</MDBNavbarBrand>
        <span>All Products</span>
        <MDBBtn color="dark">Cart ({totalQuantity})</MDBBtn>
      </MDBContainer>
    </MDBNavbar>
  );
}
