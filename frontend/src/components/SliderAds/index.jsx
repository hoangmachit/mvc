export default function SliderAds() {
  return (
    <>
      <div className="load-ads">
        <div id="owl_ads" className="owl-carousel owl-loaded owl-drag">
          <div className="owl-stage-outer">
            <div className="owl-stage">
              <div className="owl-item active">
                <div className="img">
                  <a href="">
                    <img
                      className="lazy w-100 loaded"
                      data-src="http://localhost/source/thumbs/1366x350x1/upload/photo/pexels-garvin-st-villier-3972755-3925-53880.jpg.webp"
                      alt="Thiết kế website Hoàng Anh Ads"
                      src="http://localhost/source/thumbs/1366x350x1/upload/photo/pexels-garvin-st-villier-3972755-3925-53880.jpg.webp"
                      data-was-processed="true"
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="owl-nav disabled">
            <button type="button" role="presentation" className="owl-prev">
              <span aria-label="Previous">‹</span>
            </button>
            <button type="button" role="presentation" className="owl-next">
              <span aria-label="Next">›</span>
            </button>
          </div>
          <div className="owl-dots disabled"></div>
        </div>
      </div>
    </>
  );
}
