import Image from "next/image";

const ImageBlock = ({ src, classes }) => (
  <div className={`relative w-full ${classes ? classes : ""}`}>
    <Image src={src} fill className="object-cover " alt="Customer Photo" />
  </div>
);
export default ImageBlock;
