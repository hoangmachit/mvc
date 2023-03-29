export default function Footer({ data }) {
  const { config } = data;
  return (
    <>
      <div className="footer">
        <div className="footer-article">
          <div className="center-layout">
            <div className="col_footer">
              <div className="footer-col">
                <h2 className="footer-title">Sneaker Shoes VI</h2>
                <div
                  className="footer-info"
                  dangerouslySetInnerHTML={{ __html: config.footer.contentvi }}
                ></div>
              </div>
              <div className="footer-col">
                <h2 className="footer-title">Chính sách hỗ trợ</h2>
                <ul className="footer-ul">
                  <li>
                    <a href="chinh-sach-tra-hang" title="Chính sách trả hàng">
                      Chính sách trả hàng
                    </a>
                  </li>
                  <li>
                    <a href="chinh-sach-bao-hanh" title="Chính sách bảo hành">
                      Chính sách bảo hành
                    </a>
                  </li>
                  <li>
                    <a href="chinh-sach-mua-hang" title="Chính sách mua hàng">
                      Chính sách mua hàng
                    </a>
                  </li>
                  <li>
                    <a
                      href="chinh-sach-nguoi-dung"
                      title="Chính sách người dùng"
                    >
                      Chính sách người dùng
                    </a>
                  </li>
                </ul>
              </div>
              <div className="footer-col">
                <h2 className="footer-title">Đăng ký nhận tin</h2>
                <p className="newsletter-slogan">
                  Để lại thông tin để nhận tin tức mới nhất từ chúng tôi
                </p>
                <form
                  className="validation-newsletter"
                  noValidate=""
                  method="post"
                  action=""
                  encType="multipart/form-data"
                >
                  <div className="newsletter-input">
                    <input
                      type="email"
                      className="form-control text-sm"
                      id="email-newsletter"
                      name="dataNewsletter[email]"
                      placeholder="Nhập địa chỉ email của bạn"
                      required=""
                      fdprocessedid="t9qx89"
                    />
                    <div className="invalid-feedback">
                      Vui lòng nhập địa chỉ email
                    </div>
                  </div>
                  <div className="newsletter-button">
                    <input
                      type="submit"
                      className="btn btn-sm btn-danger w-100"
                      name="submit-newsletter"
                      value="Gửi"
                      fdprocessedid="vinmiw"
                    />
                    <input
                      type="hidden"
                      className="btn btn-sm btn-danger w-100"
                      name="recaptcha_response_newsletter"
                      id="recaptchaResponseNewsletter"
                    />
                  </div>
                </form>
              </div>
              <div className="footer-col">
                <h2 className="footer-title">Fanpage facebook</h2>
                <div id="fanpage-facebook"></div>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-powered">
          <div className="center-layout d-flex justify-content-between align-items-center">
            <div className="coppyright_left">
              2022 Copyright Sneaker Shoes. Design by Haweb.vn
            </div>
            <div className="coppyright_right">
              <div>Đang online: 1</div>
              <div>Hôm nay: 1</div>
              <div>Tuần: 1</div>
              <div>Tháng: 4</div>
              <div>Tổng truy cập: 10315</div>
            </div>
          </div>
        </div>
        <div id="footer-map">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.4481760094527!2d106.68480041483649!3d10.776945462130913!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752f3b27d8a7fd%3A0xdb0d92470911a699!2sThe%20Box%20Market!5e0!3m2!1svi!2s!4v1589339784678!5m2!1svi!2s"
            width="600"
            height="450"
            frameBorder="0"
            allowFullScreen=""
            aria-hidden="false"
            tabIndex="0"
          ></iframe>
        </div>
      </div>
    </>
  );
}
