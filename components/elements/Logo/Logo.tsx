import React from 'react';
import Link from "next/link";

const Logo = () => {
  return (
    <>
      <Link className={'logo'} href={"/"}>
        <img src="/img/logo.svg" alt="Rostelecom Logo" className="logo__img"/>
      </Link>
    </>
  );
};

export default Logo;
