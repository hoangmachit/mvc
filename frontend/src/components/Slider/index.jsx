import Link from "next/link";
import Image from "next/image";
export default function Slider() {
  return (
    <>
      <div className="slideshow">
        <div className="slideshow-item">
          <Link href={`/`}>
            <Image
              src={"/image/slider-01.jpg"}
              loading="lazy"
              alt="Slider 01"
              width={1366}
              height={600}
            />
          </Link>
        </div>
      </div>
    </>
  );
}
