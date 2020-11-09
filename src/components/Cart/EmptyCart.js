/** @format */

import React from "react";
import { Link } from "react-router-dom";
export default function CartItem() {
  return (
    <section className="empty-cart section">
      <h2>empty cart</h2>
      <Link to="/products" className="btn btn-primary">
        Fill it
      </Link>
    </section>
  );
}
