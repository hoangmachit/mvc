export default function Header({ data }) {
  const { config } = data;
  return (
    <>
      <div className="header">
        <div className="header-top">
          <div className="center-layout wrap-content d-flex align-items-center justify-content-between">
            <p className="info-header">
              Giày tốt nhất cho những người tốt nhất
            </p>
            <p className="info-header">
              <i className="fas fa-envelope"></i>Email:{" "}
              {config.setting.options.email}
            </p>
            <p className="info-header">
              <i className="fas fa-phone-square-alt"></i>Hotline:{" "}
              {config.setting.options.hotline}
            </p>
            <ul className="social social-header list-unstyled p-0 m-0">
              <li className="d-inline-block align-top mr-1">
                <a href="https://www.google.com/" target="_blank">
                  <img
                    className="lazy loaded"
                    data-src="http://localhost/source/thumbs/30x30x2/upload/photo/mxh1-1-1957-80510.png.webp"
                    alt="Thiết kế website Hoàng Anh Ads"
                    src="http://localhost/source/thumbs/30x30x2/upload/photo/mxh1-1-1957-80510.png.webp"
                    data-was-processed="true"
                  />{" "}
                </a>
              </li>
              <li className="d-inline-block align-top mr-1">
                <a href="https://www.google.com/" target="_blank">
                  <img
                    className="lazy loaded"
                    data-src="http://localhost/source/thumbs/30x30x2/upload/photo/mxh1-2-1178-74341.png.webp"
                    alt="Thiết kế website Hoàng Anh Ads"
                    src="http://localhost/source/thumbs/30x30x2/upload/photo/mxh1-2-1178-74341.png.webp"
                    data-was-processed="true"
                  />{" "}
                </a>
              </li>
              <li className="d-inline-block align-top mr-1">
                <a href="https://www.google.com/" target="_blank">
                  <img
                    className="lazy loaded"
                    data-src="http://localhost/source/thumbs/30x30x2/upload/photo/mxh1-3-4655-85900.png.webp"
                    alt="Thiết kế website Hoàng Anh Ads"
                    src="http://localhost/source/thumbs/30x30x2/upload/photo/mxh1-3-4655-85900.png.webp"
                    data-was-processed="true"
                  />{" "}
                </a>
              </li>
              <li className="d-inline-block align-top mr-1">
                <a href="https://www.google.com/" target="_blank">
                  <img
                    className="lazy loaded"
                    data-src="http://localhost/source/thumbs/30x30x2/upload/photo/mxh1-4-6766-68891.png.webp"
                    alt="Thiết kế website Hoàng Anh Ads"
                    src="http://localhost/source/thumbs/30x30x2/upload/photo/mxh1-4-6766-68891.png.webp"
                    data-was-processed="true"
                  />{" "}
                </a>
              </li>
            </ul>
            <div className="lang-header">
              <a href="ngon-ngu/vi/">
                <img
                  className="lazy loaded"
                  data-src="http://localhost/source/assets/images/vi.jpg.webp"
                  alt="Tiếng Việt"
                  src="http://localhost/source/assets/images/vi.jpg.webp"
                  data-was-processed="true"
                />
              </a>
              <a href="ngon-ngu/en/">
                <img
                  className="lazy loaded"
                  data-src="http://localhost/source/assets/images/en.jpg.webp"
                  alt="Tiếng Anh"
                  src="http://localhost/source/assets/images/en.jpg.webp"
                  data-was-processed="true"
                />
              </a>
            </div>
            <div className="user-header">
              <a href="account/dang-nhap">
                <i className="fas fa-sign-in-alt"></i>
                <span>Đăng nhập</span>
              </a>
              <a href="account/dang-ky">
                <i className="fas fa-user-plus"></i>
                <span>Đăng ký</span>
              </a>
            </div>
          </div>
        </div>
        <div className="header-bottom">
          <div className="center-layout wrap-content d-flex align-items-center justify-content-between">
            <div className="logo-header">
              <a href="http://localhost/source/" title="Logo">
                <img
                  className="lazy loaded"
                  data-src="http://localhost/source/thumbs/120x100x2/upload/photo/logo-8180-7565.jpg.webp"
                  alt="Thiết kế website Hoàng Anh Ads"
                  src="http://localhost/source/thumbs/120x100x2/upload/photo/logo-8180-7565.jpg.webp"
                  data-was-processed="true"
                />
              </a>
            </div>
            <div className="banner-header">
              <a href="http://localhost/source/" title="Banner">
                <img
                  className="lazy loaded"
                  data-src="http://localhost/source/thumbs/730x120x2/upload/photo/banner-5151-3538.jpg.webp"
                  alt="Thiết kế website Hoàng Anh Ads"
                  src="http://localhost/source/thumbs/730x120x2/upload/photo/banner-5151-3538.jpg.webp"
                  data-was-processed="true"
                />{" "}
              </a>
            </div>
            <div className="hotline-header">
              <a title="Hotline" href="#">
                <p>Hotline hỗ trợ:</p>
                <span>{config.setting.options.hotline}</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
