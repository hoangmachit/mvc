"use client";
export default function ProductAddToCart({ product }) {
  return (
    <div className="add-to-cart">
      <button
        className="btn btn-success"
        onClick={(e) => {
          console.log("Product =", product);
        }}
      >
        Add to Cart
      </button>
    </div>
  );
}
