import { useState, useEffect } from 'react';
import React, { useRef } from 'react'

function NavBat() {
    const options = ['Home', 'Sobre Nós', 'Serviços', 'Parcerias', 'Contatos'];
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false)

        const handleScroll = () => {
            const scrolled = window.scrollY > 90;
            setIsScrolled(scrolled); 
        };
        useEffect(() => {
            window.addEventListener('scroll', handleScroll);
            return () => {
                window.removeEventListener('scroll', handleScroll);
            };
        },[]);
    console.log(isOpen)
        const toggleDropdown = () => {
            setIsOpen(!setIsScrolled)
        }

    return(
        <div>
            <header className={`fun ${isScrolled ? 'scrolled' : ''}`}>
                <img title="Acesso" className="image" src="/src/images/download.png"></img>
                <ul className="list">  
                <li title="Home" className="item1">Home</li>
                <li title="Sobre Nós" className="item2">Sobre Nós</li>
                <li title="Serviços" className="item3">Serviços</li>
                <li title="Parcerias" className="item4">Parcerias</li>
                <li title="Contatos" className="item5">Contatos</li>
                <li title="Fale com a gente" className="btn">Fale com a gente</li>
                </ul>
                <div className="all">
                    <div onClick={toggleDropdown} className="header"></div>
                    {isOpen && (
                        <>
                            {/* <div onClick={toggleDropdown} className="Xcontainer">
                                <ul className="list"> 
                                <li title="Home" className="item">Home</li>
                                <li title="Sobre Nós" className="item">Sobre Nós</li>
                                <li title="Serviços" className="item">Serviços</li>
                                <li title="Parcerias" className="item">Parcerias</li>
                                <li title="Contatos" className="item">Contatos</li>
                                <li title="Fale com a gente" className="btn1">Fale com a gente</li>
                                </ul>
                            </div> */}
                            {options.map((option) => (
                                <div className="drop">
                                    {option}
                                </div>
                            ))}
                        </>
                        // <div onClick={toggleDropdown}> 
                        //     <ul className={styles.list}>  
                        //         <li title="Home" className={styles.item1}>Home</li> 
                        //         <li title="Sobre Nós" className={styles.item2}>Sobre Nós</li> 
                        //         <li title="Serviços" className={styles.item3}>Serviços</li> 
                        //         <li title="Parcerias" className={styles.item4}>Parcerias</li> 
                        //         <li title="Contatos" className={styles.item5}>Contatos</li> 
                        //         <li title="Fale com a gente" className={styles.btn}>Fale com a gente</li> 
                        //     </ul> 
                        //  </div> 
                    )}
                </div>
            </header>
        </div>
    )
}
export default NavBat