import footerStyles from "../styles/Footer.module.css";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <>
      <div className={footerStyles.footer}>
        <Image src="/favicon.ico" alt="logo" width={50} height={50} />
        <p>
          <Link href="/">Home</Link>
        </p>
        <br />
        <p>
          <Link href="/about">About</Link>
        </p>
      </div>
    </>
  );
};

export default Footer;
