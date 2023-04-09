import Link from "next/link";
import Image from "next/image";
import styles from "../styles/Navbar.module.css";
export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <Link href="/" legacyBehavior>
        <a>
          <div className={styles.logo}>
            <Image
              src="/images/pokeball.png"
              alt="Imagem de uma pokebola"
              width="30"
              height="30"
            />
            <h1>PokeNext</h1>
          </div>
        </a>
      </Link>
      <ul className={styles.link_items}>
        <li>
          <Link legacyBehavior href="/">
            <a>Home</a>
          </Link>
        </li>
        <li>
          <Link legacyBehavior href="/about">
            <a>Sobre</a>
          </Link>
        </li>
      </ul>
    </nav>
  );
}
