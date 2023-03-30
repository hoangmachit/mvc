async function getDataIndex() {
  const data = await fetch("http://localhost/mvc/api/index");
  return data.json();
}
import Slider from "@/components/Slider";
import About from "@/components/About";
import Product from "@/components/Product";
import News from "@/components/News";
import Why from "@/components/Why";
import Newletter from "@/components/Newletter";
import Partner from "@/components/Partner";
import Categories from "@/components/Categories";
import SliderAds from "@/components/SliderAds";
import SEO from "@/components/Seo";
export default async function Home() {
  const data = await getDataIndex();
  const data_seo = {
    title: "Home Page",
    keyword: "My keyword",
    description: "Lorem Ipsum chỉ đơn giản là một đoạn văn bản giả, được dùng vào việc trình bày và dàn trang phục vụ cho in ấn"
  };
  return (
    <>
      <SEO seo={data_seo} />
      <Slider />
      <div className="wrap-main">
        <About about={data.about} />
        <Product products={data.products} />
        <SliderAds />
        <Categories product_list={data.product_list} />
        <Why why={data.why} />
        <News />
        <Newletter />
        <Partner />
      </div>
    </>
  );
}
