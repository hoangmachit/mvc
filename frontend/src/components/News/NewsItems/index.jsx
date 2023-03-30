import Link from "next/link";
import Image from "next/image";
export default function NewsItems() {
  return (
    <>
      <div className="news-items">
        <div className="news-items__thumbs">
          <Link href={"/"}>
            <Image
              src="/image/news-01.jpg"
              alt="News 01"
              loading="lazy"
              width={270}
              height={200}
            />
          </Link>
        </div>
        <div className="news-items__info">
          <h3>
            <Link href={"/"}>Nike introduces unique velcro soccer shoes.</Link>
          </h3>
          <div className="news-items__info--content">
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s
            </p>
          </div>
          <div className="news-items__info--view">
            <Link href={"/"}>Read more.</Link>
          </div>
        </div>
      </div>
    </>
  );
}
