"use client"

import Link from "next/link";
import styles from './links.module.css'
import Navlinks from "./navlink/Navlinks";
import { useState } from "react";
import Image from "next/image";

const Links = () => {
    const [isOpen,setIsOpen]= useState(false);

    const linksArray = [
        { title: "Home", path: '/' },
        { title: "About", path: '/about' },
        { title: "Contact", path: '/contact' },
        { title: "Blog", path: '/blog' },
    ];
    const session =true;
    const isAdmin = true;

    return (
       <div className={styles.container}>
         <div className={styles.links}>
            {linksArray.map((link, index) => (
                <Navlinks item={link} key={index}/>
                
            ))}{
                session ? (
                    <>
                    {
                        isAdmin && 
                        (<Navlinks item={{title:"Admin",path:'/admin'}}/>)
                    }
                    <button className={styles.logout}>Logout</button>
                    </>
                ):(
                   <Navlinks item={{title:"login",path:'/login'}}/>
                )

            }
        </div>
        
        <Image  src='/menu.png' alt="menu" className={styles.menuButton}
         width={30} height={30} onClick={()=>setIsOpen((prev)=>!prev)} />
        {
            isOpen && ( <div className={styles.mobile}>
                  {linksArray.map((link, index) => (
                  <Navlinks item={link} key={index} />
                      ))
                        }
            </div> )
        }
       </div>
    );
};

export default Links;
