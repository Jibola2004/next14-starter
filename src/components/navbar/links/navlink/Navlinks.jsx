"use client"

import { usePathname } from 'next/navigation';
import styles from './navlinks.module.css'
import Link from 'next/link';
const Navlinks = ({item,index}) => {
  const pathName = usePathname()
 return  (
    <Link href={item.path} key={index} className={`${styles.container} ${pathName===item.path &&
     styles.active}`}>

                     {item.title}
                 </Link>
 )
};

export default Navlinks;
