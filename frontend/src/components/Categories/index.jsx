import ProductItems from "@/components/Product/ProductItems";
export default function Categories({ product_list }) {
  return (
    <>
      <div className="load-list">
        {product_list &&
          product_list.length > 0 &&
          product_list.map((list, index_list) => {
            return (
              <div key={index_list} className="center-layout wrap-product">
                <div className="title-main">
                  <span>{list.namevi}</span>
                </div>
                <div
                  className="paging-product-category paging-product-category-1"
                  data-list="1"
                >
                  <div className="product__grid">
                    {list.products &&
                      list.products.length > 0 &&
                      list.products.map((product, key_product) => {
                        return (
                          <ProductItems key={key_product} product={product} />
                        );
                      })}
                  </div>
                  <div className="pagination-ajax"></div>
                </div>
              </div>
            );
          })}
      </div>
    </>
  );
}
