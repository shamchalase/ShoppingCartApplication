import React, { useEffect } from "react";
import { MDBBtn, MDBContainer } from "mdb-react-ui-kit";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts, addToCart, removeFromCart } from "../features/cartSlice";

export default function CartPage() {
  const dispatch = useDispatch();
  const { products, cart, totalPrice } = useSelector((state) => state.cart);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  return (
    <MDBContainer className="mt-4">

      {/* Cart Section */}
      <div style={{ marginTop: "2rem" }}>
        <h4>Your Cart</h4>
        {cart.length > 0 ? (
          <div>
            {cart.map((item) => (
              <div
                key={item.id}
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  padding: "10px 0",
                  borderBottom: "1px solid #e0e0e0",
                }}
              >
                <img
                  src={item.image}
                  alt={item.title}
                  style={{
                    width: "60px",
                    height: "60px",
                    objectFit: "cover",
                    marginRight: "10px",
                  }}
                />
                <div style={{ flexGrow: 1, marginRight: "15px" }}>
                  <strong>{item.title}</strong>{" "}
                  <span style={{ color: "#6c757d" }}> (x{item.quantity})</span> - ${item.price.toFixed(2)}
                </div>
                <div style={{ display: "flex", alignItems: "center" }}>
                  <MDBBtn
                    color="primary"
                    size="sm"
                    onClick={() => dispatch(addToCart(item))}
                    style={{ marginRight: "5px" }}
                  >
                    +
                  </MDBBtn>
                  <MDBBtn color="danger" size="sm" onClick={() => dispatch(removeFromCart(item))}>
                    -
                  </MDBBtn>
                </div>
              </div>
            ))}
            <div style={{ textAlign: "end", marginTop: "1rem" }}>
              <strong>Total Price: ${totalPrice.toFixed(2)}</strong>
            </div>
          </div>
        ) : (
          <p>Your cart is empty</p>
        )}
      </div>
    </MDBContainer>
  );
}
