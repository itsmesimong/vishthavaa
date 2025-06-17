import React from 'react';
import Link from 'next/link';
import { ArrowRightLong } from '@/svg';
import banner_bg_1 from '@assets/img/banner/4/banner-1.jpg';
import banner_bg_2 from '@assets/img/banner/4/banner-2.jpg';
import banner_bg_3 from '@assets/img/banner/4/banner-3.jpg';
import banner_bg_4 from '@assets/img/banner/4/banner-4.jpg';

// BannerItem Component
function BannerItem({ cls, bg_clr, bg, content, title, isBtn = false }) {
  return (
    <div
      className={`tp-banner-item-4 tp-banner-height-4 fix p-relative z-index-1 ${cls} banner-gradient-box`}
      data-bg-color={`#${bg_clr}`}
      style={{ backgroundImage: `url(${bg.src})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
    >
      {/* Gradient Overlay */}
      <div className="banner-gradient-overlay" />

      {/* Content */}
      <div className="tp-banner-content-4 gradient-content">
        <span>{content}</span>
        <h3 className="tp-banner-title-4">
          <Link href="/shop">{title}</Link>
        </h3>
        {isBtn && (
          <div className="tp-banner-btn-4">
            <Link href="/shop" className="tp-btn tp-btn-border">
              Shop Now <ArrowRightLong />
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}

const JewelryShopBanner = () => {
  return (
    <>
      <section className="tp-banner-area">
        <div className="container">
          <div className="row">
            <div className="col-xl-6 col-lg-7">
              <div className="row">
                <div className="col-xl-12">
                  <BannerItem
                    cls="mb-25"
                    bg_clr="F3F7FF"
                    bg={banner_bg_1}
                    content="Collection"
                    title={
                      <>
                        Ardeco pearl <br /> Rings style 2025
                      </>
                    }
                    isBtn={true}
                  />
                </div>
                <div className="col-md-6 col-sm-6">
                  <BannerItem
                    cls="has-green sm-banner"
                    bg_clr="F0F6EF"
                    bg={banner_bg_2}
                    content="Trending"
                    title="Tropical Set"
                  />
                </div>
                <div className="col-md-6 col-sm-6">
                  <BannerItem
                    cls="has-brown sm-banner"
                    bg_clr="F8F1E6"
                    bg={banner_bg_3}
                    content="New Arrival"
                    title="Gold Jewelry"
                  />
                </div>
              </div>
            </div>
            <div className="col-xl-6 col-lg-5">
              <div
                className="tp-banner-full tp-banner-full-height fix p-relative z-index-1 banner-gradient-box"
                style={{ backgroundImage: `url(${banner_bg_4.src})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
              >
                <div className="banner-gradient-overlay" />

                <div className="tp-banner-full-content gradient-content">
                  <span>Collection</span>
                  <h3 className="tp-banner-full-title">
                    <Link href="/shop">
                      Ring gold with <br /> diamonds
                    </Link>
                  </h3>
                  <div className="tp-banner-full-btn">
                    <Link href="/shop" className="tp-btn tp-btn-border">
                      Shop Now <ArrowRightLong />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Styled JSX */}
        <style jsx>{`
          .banner-gradient-box {
            position: relative;
            overflow: hidden;
            background-repeat: no-repeat;
            background-size: cover;
            background-position: center;
          }

          .banner-gradient-overlay {
            content: '';
            position: absolute;
            bottom: 0;
            left: 0;
            width: 100%;
            height: 25%;
            background: linear-gradient(to top, #007bff, transparent);
            z-index: 1;
            pointer-events: none;
          }

          .gradient-content {
            position: relative;
            z-index: 2;
            padding: 20px;
          }

          .tp-banner-title-4,
          .tp-banner-full-title {
            margin-top: 60px;
          }
        `}</style>
      </section>
    </>
  );
};

export default JewelryShopBanner;
