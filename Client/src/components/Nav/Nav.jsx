
import SearchBar from "../SearchBar/SearchBar";
import { Link } from "react-router-dom";
import Logo from "../../assets/logo.png";
import styles from './Nav.module.css';
import { useLocation } from "react-router-dom";
import { FaHome, FaHeart, FaFileExport, FaFile } from "react-icons/fa";
export default function Nav(props) {
    const ishome = useLocation().pathname === '/home';
    return (<div className={styles.container}>
        <div><img src={Logo} alt='Rick_And_Morty' className={styles.logo} /></div>
        {ishome ? <div className={styles.onsearch}><SearchBar onSearch={props.onSearch} /></div> : null}
        <div className={styles.containerlink}>
            <div className={styles.backgroundlink1}>
                <Link to={"/home"} className={styles.link}>
                    <div style={{ position: "relative" }}>
                        <FaHome style={{ position: "absolute", left: "0px", top: "1px" }} /> Home</div>
                </Link>
            </div>
            <div className={styles.backgroundlink2}>
                <Link to={"/about"} className={styles.link}> <div style={{ position: "relative" }}>
                    <FaFile style={{ position: "absolute", left: "0px", top: "1px" }} /> About</div>
                </Link>
            </div>
            <div className={styles.backgroundlink3}>
                <Link to={"/favorites"} className={styles.link}>
                    <div style={{ position: "relative" }}>
                        <FaHeart style={{ position: "absolute", left: "0px", top: "1px" }} /> Favorite</div>
                </Link> </div> <div className={styles.backgroundlink4}>
                <Link to={"/"} className={styles.link}>
                    <div style={{ position: "relative" }}>
                        <FaFileExport style={{ position: "absolute", left: "0px", top: "1px" }} /> Logout</div>
                </Link>
            </div>
        </div>
    </div>);
}