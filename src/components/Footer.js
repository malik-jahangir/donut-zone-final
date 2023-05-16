import React from "react";
import Image from "next/image";
import Link from "next/link";
const Footer = () => {
  return (
    <footer>
      <div className="width footer">
        <div className="left">
          <Image
            width={326}
            height={52}
            src="/images/logo-white.png"
            alt="logo"
          />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc nec
            euismod arcu, sodales vulputate dolor.
          </p>
        </div>
        <div className="right">
          <div className="user-links">
            <h4>USER LINKS</h4>
            <ul>
              <li>
                <Link href="#">HOME</Link>
              </li>
              <li>
                <Link href="#">ABOUT US</Link>
              </li>
              <li>
                <Link href="#">PRODUCTS</Link>
              </li>
              <li>
                <Link href="#">REVIEWS</Link>
              </li>
              <li>
                <Link href="#">LOCATIONS</Link>
              </li>
            </ul>
          </div>
          <div className="other-links">
            <h4>OTHER LINKS</h4>
            <ul>
              <li>
                <Link href="#">CONTACT US</Link>
              </li>
              <li>
                <Link href="#">PRIVACY POLICY</Link>
              </li>
              <li>
                <Link href="#">TERMS AND CONDITIONS</Link>
              </li>
              <li>
                <Link href="#">OTHER LOCATIONS</Link>
              </li>
            </ul>
          </div>
          <div className="follow-us">
            <h4>Follow Us</h4>
            <div className="footer-social-icons">
              <Image
                width={36}
                height={36}
                src="/images/social-icon1-white.png"
                alt="facebook"
              />
              <Image
                width={36}
                height={36}
                src="/images/social-icon2-white.png"
                alt="instagram"
              />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
