import NewsItems from "@/components/News/NewsItems";
export default function News() {
  return (
    <>
      <section id="section-news">
        <div className="center-layout d-flex justify-content-between">
          <div className="title_news">
            <span>Tin tức nổi bật</span>
          </div>
          <div className="wrapper-news">
            <div className="grid-news">
              <NewsItems />
              <NewsItems />
              <NewsItems />
              <NewsItems />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
