import Link from "next/link";
export default function Navigation() {
  return (
    <>
      <div className="menu">
        <div className="center-layout">
          <ul className="d-flex align-items-center justify-content-between">
            <li>
              <Link href={"/"} className="active transition" title="Home">
                Home
              </Link>
            </li>
            <li>
              <Link
                href={"/pages/gioi-thieu"}
                className="active transition"
                title="About us"
              >
                About us
              </Link>
            </li>
            <li>
              <Link
                className="has-child  transition"
                href={"/collections"}
                title="Collections"
              >
                Collections
              </Link>
              <ul>
                <li>
                  <a
                    className="has-child transition"
                    title="Bình bú"
                    href="binh-bu"
                  >
                    Bình bú
                  </a>

                  <ul>
                    <li>
                      <a
                        className="has-child transition"
                        title="Giày tây đế cao"
                        href="giay-tay-de-cao"
                      >
                        Giày tây đế cao
                      </a>
                      <ul>
                        <li>
                          <a
                            className="has-child transition"
                            title="Giày tây nike"
                            href="giay-tay-nike"
                          >
                            Giày tây nike
                          </a>
                          <ul>
                            <li>
                              <a
                                className="transition"
                                title="Giày ultraboost"
                                href="giay-ultraboost"
                              >
                                Giày ultraboost
                              </a>
                            </li>
                          </ul>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </li>
                <li>
                  <a
                    className="has-child transition"
                    title="Núm vú"
                    href="num-vu"
                  >
                    Núm vú
                  </a>
                  <ul>
                    <li>
                      <a
                        className="has-child transition"
                        title="Giày cao gót"
                        href="giay-cao-got"
                      >
                        Giày cao gót
                      </a>
                      <ul>
                        <li>
                          <a
                            className="has-child transition"
                            title="Xăng đan nữ"
                            href="xang-dan-nu"
                          >
                            Xăng đan nữ
                          </a>
                          <ul>
                            <li>
                              <a
                                className="transition"
                                title="Giày Adilette Shower"
                                href="giay-adilette-shower"
                              >
                                Giày Adilette Shower
                              </a>
                            </li>
                          </ul>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </li>
                <li>
                  <a
                    className="has-child transition"
                    title="Áo cọc tay"
                    href="ao-coc-tay"
                  >
                    Áo cọc tay
                  </a>
                </li>
                <li>
                  <a
                    className="has-child transition"
                    title="Giỏ đựng đồ"
                    href="gio-dung-do"
                  >
                    Giỏ đựng đồ
                  </a>
                </li>
                <li>
                  <a className="has-child transition" title="Tả" href="ta">
                    Tả
                  </a>
                </li>
                <li>
                  <a
                    className="has-child transition"
                    title="Bình giữ nhiệt"
                    href="binh-giu-nhiet"
                  >
                    Bình giữ nhiệt
                  </a>
                </li>
                <li>
                  <a
                    className="has-child transition"
                    title="Xe tập đi"
                    href="xe-tap-di"
                  >
                    Xe tập đi
                  </a>
                </li>
                <li>
                  <a
                    className="has-child transition"
                    title="Đồ chơi"
                    href="do-choi"
                  >
                    Đồ chơi
                  </a>
                </li>
              </ul>
            </li>
            <li>
              <Link className="transition" href={"/news"} title="News">
                News
              </Link>
            </li>
            <li>
              <Link
                className="transition"
                href={"/recruitment"}
                title="Recruitment"
              >
                Recruitment
              </Link>
            </li>
            <li>
              <Link className="transition" href={"/gallery"} title="Gallery">
                Gallery
              </Link>
            </li>
            <li>
              <Link className="transition" href={"/video"} title="Video">
                Video
              </Link>
            </li>
            <li>
              <Link className="transition" href={"/contact"} title="Contact">
                Contact
              </Link>
            </li>
            <li className="ml-auto">
              <div className="search w-clear">
                <input
                  type="text"
                  id="keyword"
                  placeholder="Nhập từ khóa cần tìm..."
                />
                <p>
                  <i className="fas fa-search"></i>
                </p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
