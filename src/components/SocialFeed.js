import React from "react";
import Image from "next/image";
import Link from "next/link";
const SocialFeed = () => {
  return (
    <div className="width social-feed">
      <div className="social-feed-text">
        <h6>FOLLOW US</h6>
        <h2>
          SOCIAL <span>FEED</span>
        </h2>
        <div className="social-icons">
          <Image
            width={36}
            height={36}
            src="/images/social-icon1.png"
            alt="facebook"
          />
          <Image
            width={36}
            height={36}
            src="/images/social-icon2.png"
            alt="instagram"
          />
        </div>
        <Link className="btn-primary" href="#">
          Order Now
        </Link>
      </div>
      <div className="social-feed-img">
        <Image
          width={320}
          height={320}
          src="/images/social-1.png"
          alt="donut"
        />
        <Image
          width={320}
          height={320}
          src="/images/social-2.png"
          alt="donut"
        />
        <Image
          width={320}
          height={320}
          src="/images/social-3.png"
          alt="donut"
        />
        <Image
          width={320}
          height={320}
          src="/images/social-4.png"
          alt="donut"
        />
        <Image
          width={320}
          height={320}
          src="/images/social-5.png"
          alt="donut"
        />
        <Image
          width={320}
          height={320}
          src="/images/social-6.png"
          alt="donut"
        />
      </div>
    </div>
  );
};

export default SocialFeed;
