export default function Newletter() {
  return (
    <>
      <div className="load_dk">
        <div className="center-layout">
          <div className="title-dk">
            <span>Đăng ký nhận tin</span>
          </div>
          <div className="slogan-dk">
            Hãy điền thông tin của bạn vào form bên dưới để nhận nhiều ưu đãi từ
            chúng tôi
          </div>
          <form
            className="form-newsletter validation-newsletter"
            id="form-Newletter"
            noValidate=""
            method="post"
            action=""
            encType="multipart/form-data"
          >
            <div className="newsletter-top">
              <div className="form-group">
                <input
                  type="text"
                  className="form-control"
                  id="ten-newsletter"
                  name="dataNewsletter[ten]"
                  placeholder="Họ &amp; tên"
                  required=""
                  fdprocessedid="hz8t2w"
                />
              </div>
              <div className="form-group">
                <input
                  type="email"
                  className="form-control"
                  id="email-newsletter"
                  name="dataNewsletter[email]"
                  placeholder="Email"
                  required=""
                  fdprocessedid="pyn908"
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  className="form-control"
                  id="dienthoai-newsletter"
                  name="dataNewsletter[dienthoai]"
                  placeholder="Điện thoại"
                  required=""
                  fdprocessedid="bfphmp"
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  className="form-control"
                  id="diachi-newsletter"
                  name="dataNewsletter[diachi]"
                  placeholder="Địa chỉ"
                  required=""
                  fdprocessedid="hplzif"
                />
              </div>
            </div>
            <div className="newsletter-bottom">
              <div className="form-group">
                <textarea
                  type="text"
                  className="form-control"
                  id="noidung-newsletter"
                  name="dataNewsletter[noidung]"
                  placeholder="Nội dung..."
                ></textarea>
              </div>
            </div>
            <div className="newsletter-button">
              <input
                type="submit"
                name="submit-newsletter"
                value="Đăng ký"
                fdprocessedid="jdnje"
              />
              <input
                type="hidden"
                name="recaptcha_response_newsletter"
                id="recaptchaResponseNewsletter"
              />
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
