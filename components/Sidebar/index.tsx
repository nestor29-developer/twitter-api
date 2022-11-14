import styles from "./Sidebar.module.css";
import TwitterIcon from "@mui/icons-material/Twitter";
import TagIcon from "@mui/icons-material/Tag";
import SettingsIcon from "@mui/icons-material/Settings";
import { Icon } from "../UI/Icon";

export const SideBar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.icon__twitter}>
      <TwitterIcon fontSize="large" color="primary" />
      </div>
    

      <Icon Icon={TagIcon} text="Explore" size="medium" path="/" />
      <Icon Icon={SettingsIcon} text="Settings" size="medium" path="/settings"/>
    </div>
  );
};
