import React, { useEffect } from "react";
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardImage,
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
} from "mdb-react-ui-kit";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts, addToCart, removeFromCart } from "../features/cartSlice";

export default function ProductCart() {
  const dispatch = useDispatch();
  const { products, cart, totalPrice } = useSelector((state) => state.cart);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  return (
    <MDBContainer className="mt-4">
      <h2 className="text-center mb-4">Product List</h2>
      <MDBRow>
        {products.map((product) => (
          <MDBCol key={product.id} md="4" className="mb-4">
            <MDBCard className="product-card">
              <MDBCardImage src={product.image} position="top" alt={product.title} style={{ height: '250px', objectFit: 'contain' }} />
              <MDBCardBody>
                <MDBCardTitle>{product.title}</MDBCardTitle>
                <MDBCardText>${product.price}</MDBCardText>
                <MDBBtn onClick={() => dispatch(addToCart(product))} color="primary" className="me-2">
                  +
                </MDBBtn>
                <MDBBtn color="danger" onClick={() => dispatch(removeFromCart(product))}>
                  -
                </MDBBtn>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        ))}
      </MDBRow>

      <div className="cart-section">
        <h4>Cart</h4>
        {cart.length > 0 ? (
          <div>
            {cart.map((item) => (
              <div key={item.id} className="cart-item">
                <span>
                  {item.title} (x{item.quantity})
                </span>
                <MDBBtn
                  color="danger"
                  size="sm"
                  onClick={() => dispatch(removeFromCart(item))}
                >
                  Remove
                </MDBBtn>
              </div>
            ))}
            <div className="cart-total">Total Price: ${totalPrice.toFixed(2)}</div>
          </div>
        ) : (
          <p>Your cart is empty</p>
        )}
      </div>
    </MDBContainer>
  );
}
