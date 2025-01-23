'use client'
import {useState} from 'react';
import Banner from '../../public/banner.jpg';
import Logo from '../../public/barbearia.png';
import { FaRegMoon } from "react-icons/fa";
import { FaRegSun } from "react-icons/fa";
import Image from 'next/image';

import styles from "./page.module.css";

export default function Home() {
  const [tema, setTema] = useState(false);

  function alterarTema (){
    setTema(!tema);
  }

  return (
    <div className={tema ? styles.darkMode : styles.lightMode}>

      <header className={styles.topo}>
        <Image className={styles.logo} src={Logo} alt='logotipo'/>
        <button onClick={alterarTema}>
          {tema ? <FaRegSun /> : <FaRegMoon/> }</button>
      </header>

      <main>
        <section className={styles.banner}>
          <Image className={styles.fotoBanner} src={Banner} alt='Banner'/>
        </section>

        <section className={styles.containerTextos}>
          <h1>Bem-vindo a Barber Shop</h1>

          <p className={styles.textBolder}>Nossa barbearia sempre oferece profissionais de qualidade e estamos prontos para lidar com suas maiores expectativas.</p>

          <p>Nossos serviços são dedicados ao seu sucesso pessoal. Aqui temos uma equipe premiada que demonstrou o talento de mestres barbeiros em vários concursos de estilo. Deixe nosso barbeiro ser seu estilista pessoal e você nunca ficará desapontado.</p>

          <p className={styles.assinatura}>S. Kelly</p>

        </section>
      </main>
    </div>
  );
}
