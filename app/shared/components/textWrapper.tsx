import styles from "./textWrapper.module.css";
import { clsx } from "clsx";

export const Heading1 = (props: any) => {
  return <h1 className={clsx(styles.heading1, props.isMobile ? "text-[32px] leading-[36px]" : "")} />;
};

export const Heading2 = (props: any) => {
    return <h2 className={styles.heading2}/>
}

export const Heading3 = (props: any) => {
    return <h3 className={styles.heading3}/>
}

export const Paragraph = (props:any) =>{
    return <p className={clsx(styles.heading1, props.isMobile ? "text-[16px] leading-[28px]" : "")} />;
}

export const SubParagraph = (props: any) => {
    return <span className={styles.sub}/>
}

export const AltText = (props: any) => {
    return <SubParagraph className={styles.alt}/>
}

export const List = (props: any) => {
    return <li className={styles.list}/>
}

export const UnorderedList = (props: any) => {
    return <ul className={styles['list-unordered']}/>
}

//harusnya NextLink
export const Link = (props:any) => {
    return <a className={styles.link}/>
}




