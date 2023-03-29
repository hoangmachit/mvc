export default function About({ about }) {
  return (
    <>
      <div className="load-about">
        <div className="center-layout flex_tc">
          <div className="left">
            <div className="slogan_about">Welcome to</div>
            <div className="title_about">{about.namevi}</div>
            <div
              className="desc_about"
              dangerouslySetInnerHTML={{ __html: about.contenten }}
            ></div>
            <a href="gioi-thieu" className="more_about">
              <span>Xem thêm</span>
            </a>
          </div>
          <div className="right">
            <img
              className="lazy w-100 loaded"
              data-src="http://localhost/source/thumbs/470x350x1/upload/news/news-2-1467-6233.jpg.webp"
              alt="Về chúng tôi"
              src="http://localhost/source/thumbs/470x350x1/upload/news/news-2-1467-6233.jpg.webp"
              data-was-processed="true"
            />{" "}
          </div>
        </div>
      </div>
    </>
  );
}
