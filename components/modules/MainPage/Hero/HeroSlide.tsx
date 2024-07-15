import {IHeroSlide} from "@/types/main-page";
import Link from "next/link";
import styles from "@/styles/main-page/index.module.scss"
import Image from "next/image";
import HeroSlideTooltip from "@/components/modules/MainPage/Hero/HeroSlideTooltip";

const HeroSlide = ({slide}: {slide: IHeroSlide}) => {
  return (
    <>
      <Link href={'/catalog'} className='hero-slide-plus'/>
      <Image src={slide.image} alt={slide.title} className={styles.hero__slider__slide__img} loading='eager'/>
      <HeroSlideTooltip image={slide.image} title={slide.title}/>
    </>
  );
};

export default HeroSlide;
