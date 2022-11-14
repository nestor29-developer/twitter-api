import { Home } from "../components/Home";
import { SideBar } from "../components/Sidebar";
import styles from "../styles/Root.module.css";

export default function Index() {
  return (
    <div className={styles.container}>
      <SideBar />
      <Home />
    </div>
  );
}
