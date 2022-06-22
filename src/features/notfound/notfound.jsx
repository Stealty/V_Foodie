import { Logo, Section } from "@/components";
import styles from "./notfound.module.scss";

const NotFound = () => {
    return <div className={styles.main}>
            <Logo className={styles.Logo} />
            <p className={styles.p}>404 - Page Not Found.</p>
    </div>
}

export default NotFound;