import Image from "next/image";
import styles from "../styles/About.module.css";

export default function About() {
  return (
    <>
      <div className={styles.about}>
        <h1>Sobre o projeto</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
          rutrum risus a orci congue gravida. Etiam aliquet, lacus et tincidunt
          vestibulum, mauris ex tristique dui, id convallis nibh lorem quis
          velit. Morbi varius eget lorem at pretium. Pellentesque blandit
          tincidunt venenatis. Aliquam placerat, risus ac ornare vulputate,
          magna enim facilisis eros, eu mollis mauris ipsum ac nulla. Nam quis
          feugiat libero, quis pellentesque nulla. Sed fermentum hendrerit
          vehicula. Sed tempus ipsum id commodo scelerisque.
        </p>
        <Image
          src="/images/charizard.png"
          height={300}
          width={300}
          alt="Foto de um charizard"
        />
      </div>
    </>
  );
}
