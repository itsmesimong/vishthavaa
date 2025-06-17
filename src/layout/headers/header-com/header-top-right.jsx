import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { userLoggedOut } from "@/redux/features/auth/authSlice";

// language
function Language({active,handleActive}) {
  return (
    <div className="tp-header-top-menu-item tp-header-lang">
      
        English
     
    </div>
  );
}

// currency
function Currency({active,handleActive}) {
  return (
    <div className="tp-header-top-menu-item tp-header-currency">
     
        INR
    
    </div>
  );
}



const HeaderTopRight = () => {
  const [active, setIsActive] = useState('');
  // handle active
  const handleActive = (type) => {
    if(type === active){
      setIsActive('')
    }
    else {
      setIsActive(type)
    }
  }
  return (
    <div className="tp-header-top-menu d-flex align-items-center justify-content-end">
      <Language active={active} handleActive={handleActive} />
      <Currency active={active} handleActive={handleActive} />
    </div>
  );
};

export default HeaderTopRight;
