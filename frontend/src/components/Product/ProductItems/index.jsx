import Link from "next/link";
import Image from "next/image";
import ProductAddToCart from "@/components/Product/ProductAddToCart";
export default function ProductItems({ product }) {
  return (
    <>
      <div className="product-items">
        <div className="img">
          <Link
            className="zoom_hinh"
            title={product.namevi}
            href={`/product/${product.slugvi}`}
          >
            <Image
              src={`https://shopbetet.vn/thumbs/255x255x1/upload/product/xe-tap-di-fisher-price-new-98-cday-du-phu-kien-8803.jpg`}
              loading={"lazy"}
              height={255}
              width={255}
              alt={product.namevi}
            />
          </Link>
        </div>
        <div className="product_noidung">
          <h3 className="product-items__name">
            <Link
              className="zoom_hinh"
              title={product.namevi}
              href={`/product/${product.slugvi}`}
            >
              {product.namevi}
            </Link>
          </h3>
          <div className="product-items__price">
            <div className="product-items__price--new">
              <span>{product.sale_price}</span>
            </div>
            <div className="product-items__price--old">
              <span>{product.regular_price}</span>
            </div>
          </div>
        </div>
        <ProductAddToCart product={product} />
      </div>
    </>
  );
}
