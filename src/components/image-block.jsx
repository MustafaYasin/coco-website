import Image from "next/image";

const ImageBlock = ({ src, height }) => (
  <div
    style={{
      height,
    }}
    className={`relative w-full`}
  >
    <Image src={src} fill className="object-cover " alt="Customer Photo" />
  </div>
);
export default ImageBlock;
