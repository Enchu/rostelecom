import React from 'react';
import Link from "next/link";
import {useLang} from "@/hooks/useLang";

const BuyersListItems = () => {
  const {lang, translations} = useLang()

  return (
    <>
      <li className={'nav-menu__accordion__item'}>
        <Link className={'nav-menu__accordion__item__link nav-menu__accordion__item__title'}
              href={'/about'}>
          {translations[lang].main_menu.about}
        </Link>
      </li>
      <li className='nav-menu__accordion__item'>
        <Link className={'nav-menu__accordion__item__link'} href={'/blog'}>
          {translations[lang].main_menu.blog}
        </Link>
      </li>
      <li className='nav-menu__accordion__item'>
        <Link className={'nav-menu__accordion__item__link'} href={'/shipping'}>
          {translations[lang].main_menu.shipping}
        </Link>
      </li>
      <li className='nav-menu__accordion__item'>
        <Link className={'nav-menu__accordion__item__link'} href={'/purchase-returns'}>
          {translations[lang].main_menu.returns}
        </Link>
      </li>
    </>
  );
};

export default BuyersListItems;
