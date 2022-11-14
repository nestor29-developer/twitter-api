import { SideBar } from "../../components/Sidebar";
import styles from '../../styles/Root.module.css';

const Settings = () => {
  return (
    <div className={styles.container}>
    <SideBar />
    <h1
      style={{ display: "flex", justifyContent: "center", marginTop: "4rem" }}
    >
      Sorry, this page hasn't been developed yet.
    </h1>
    </div>
  );
};

export default Settings;
