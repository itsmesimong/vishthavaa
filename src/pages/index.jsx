import React, { useState, useEffect } from 'react';
import SEO from "@/components/seo";
import Wrapper from "@/layout/wrapper";
import HeaderFour from '@/layout/headers/header-4';
import JewelryBanner from '@/components/banner/jewelry-banner';
import JewelryShopBanner from '@/components/shop-banner/jewelry-shop-banner';
import JewelryAbout from '@/components/about/jewelry-about';
import PopularProducts from '@/components/products/jewelry/popular-products';
import ProductArea from '@/components/products/jewelry/product-area';
import JewelryCollectionBanner from '@/components/shop-banner/jewelry-collection-banner';
import BestSellerPrd from '@/components/products/jewelry/best-seller-prd';
import JewelryBrands from '@/components/brand/jewelry-brands';
import InstagramAreaFour from '@/components/instagram/instagram-area-4';
import FeatureAreaThree from '@/components/features/feature-area-3';
import FooterTwo from '@/layout/footers/footer-2';

export default function Home() {
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowModal(true);
    }, 2000); // popup after 2 seconds

    return () => clearTimeout(timer);
  }, []);

  return (
    <Wrapper>
      <SEO pageTitle='Vishthavaa Jewellery - Home' />
      <HeaderFour />
      <JewelryBanner />
      <FeatureAreaThree />
      <JewelryShopBanner />
      <JewelryAbout />
      <PopularProducts />
      <ProductArea />
      <JewelryCollectionBanner />
      <BestSellerPrd />
      <JewelryBrands />
      <InstagramAreaFour />
      <FooterTwo />

      {/* Popup Modal */}
      {showModal && (
        <div style={overlayStyle}>
          <div style={modalStyle}>
            <button style={closeButtonStyle} onClick={() => setShowModal(false)}>×</button>
            <img
              src="https://res.cloudinary.com/dg7kljtzd/image/upload/vishthavaa_nbtcmp.png"
              alt="Promotional Offer"
              style={{ width: '100%', height: 'auto', borderRadius: '8px' }}
            />
          </div>
        </div>
      )}
    </Wrapper>
  );
}

// Inline CSS styles for the popup
const overlayStyle = {
  position: 'fixed',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  backgroundColor: 'rgba(0, 0, 0, 0.7)',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  zIndex: 9999,
};

const modalStyle = {
  backgroundColor: '#fff',
  padding: '10px',
  borderRadius: '12px',
  position: 'relative',
  boxShadow: '0 10px 25px rgba(0,0,0,0.3)',
  maxWidth: '90%',
  maxHeight: '90%',
};

const closeButtonStyle = {
  position: 'absolute',
  top: '-10px',
  right: '-10px',
  background: '#000',
  color: '#fff',
  border: 'none',
  borderRadius: '50%',
  width: '32px',
  height: '32px',
  fontSize: '20px',
  cursor: 'pointer',
};
