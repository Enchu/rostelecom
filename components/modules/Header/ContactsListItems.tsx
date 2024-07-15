import React from 'react';
import Link from "next/link";
import {useLang} from "@/hooks/useLang";

const ContactsListItems = () => {
  const {lang, translations} = useLang()

  return (
    <>
      <li className={'nav-menu__accordion__item'}>
        <a href="tel:+79999999999"
          className={'nav-menu__accordion__item__link nav-menu__accordion__item__title'}>+7 (999) 999 99 99
        </a>
      </li>
      <li className='nav-menu__accordion__item'>
        <a href="mailto:test@gmail.com" className={'nav-menu__accordion__item__link'}>Email</a>
      </li>
      <li className='nav-menu__accordion__item'>
        <Link className={'nav-menu__accordion__item__link'} href={'/shipping'}>
          {translations[lang].main_menu.shipping}
        </Link>
      </li>
      <li className='nav-menu__accordion__item'>
        <Link className={'nav-menu__accordion__item__link'} href={'https:/t.me/123'}>
          {translations[lang].main_menu.tg}
        </Link>
      </li>
      <li className='nav-menu__accordion__item'>
        <Link className={'nav-menu__accordion__item__link'} href={'https:/vk.com/'}>
          {translations[lang].main_menu.vk}
        </Link>
      </li>
    </>
  );
};

export default ContactsListItems;
