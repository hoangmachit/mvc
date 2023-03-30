import Image from "next/image";
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
                <a href="https://www.facebook.com/" target="_blank">
                  <Image
                    height={35}
                    width={35}
                    src="/image/facebook.png"
                    loading="lazy"
                    alt="Facebook"
                  />
                </a>
              </li>
              <li className="d-inline-block align-top mr-1">
                <a href="https://www.twitter.com/" target="_blank">
                  <Image
                    height={35}
                    width={35}
                    src="/image/twitter.png"
                    loading="lazy"
                    alt="Twitter"
                  />
                </a>
              </li>
              <li className="d-inline-block align-top mr-1">
                <a href="https://www.google.com/" target="_blank">
                  <Image
                    height={35}
                    width={35}
                    src="/image/google.png"
                    loading="lazy"
                    alt="Google"
                  />
                </a>
              </li>
              <li className="d-inline-block align-top mr-1">
                <a href="https://www.printes.com/" target="_blank">
                  <Image
                    height={35}
                    width={35}
                    src="/image/printess.png"
                    loading="lazy"
                    alt="printess"
                  />
                </a>
              </li>
            </ul>
            <div className="lang-header">
              <a href="ngon-ngu/vi/">
                <Image
                  height={35}
                  width={25}
                  src="/image/vi.jpg"
                  loading="lazy"
                  alt="Google"
                />
              </a>
              <a href="ngon-ngu/en/">
                <Image
                  height={35}
                  width={25}
                  src="/image/en.jpg"
                  loading="lazy"
                  alt="Google"
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
              <a href="/" title="Logo">
                <img
                  className="lazy loaded"
                  data-src="/image/logo.jpg"
                  alt="Thiết kế website Hoàng Anh Ads"
                  src="/image/logo.jpg"
                  data-was-processed="true"
                />
              </a>
            </div>
            <div className="banner-header">
              <a href="" title="Banner">
                <img
                  className="lazy loaded"
                  data-src="/image/banner.jpg"
                  alt="Thiết kế website Hoàng Anh Ads"
                  src="/image/banner.jpg"
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
