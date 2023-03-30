import ProductItems from "@/components/Product/ProductItems";
export default function Product({ products }) {
  return (
    <>
      <div className="load-nb">
        <div className="center-layout">
          <div className="title-main">
            <span>Sản phẩm nổi bật</span>
          </div>
          <div className="paging-product">
            <div className="product__grid">
              {products &&
                products.length > 0 &&
                products.map((item, index) => {
                  return <ProductItems key={index} product={item} />
                })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
