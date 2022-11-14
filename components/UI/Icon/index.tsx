import Link from "next/link";
import styles from "./Icon.module.css";

interface Icon {
  Icon: any;
  text: string;
  size: string;
  color?: string
  path: string;
}

export const Icon = ({ Icon, text, size, color, path }: Icon) => {
  return (
    <div className={`${styles.container} ${styles.background__shape}`}>
      <Icon fontSize={size} color={color}/>
      <Link href={path}><h2 className={styles.text}>{text}</h2></Link>
    </div>
  );
};
