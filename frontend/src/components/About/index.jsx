import Link from "next/link";
import Image from "next/image";
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
            <Link className="more_about" href={"/pages/gioi-thieu"}>
              <span>Xem thêm</span>
            </Link>
          </div>
          <div className="right">
            <Image
              src={"/image/about.jpg"}
              alt={about.namevi}
              width={600}
              height={300}
              loading={"lazy"}
            />
          </div>
        </div>
      </div>
    </>
  );
}
