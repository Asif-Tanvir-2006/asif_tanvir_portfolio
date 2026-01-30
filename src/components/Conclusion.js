import styles from "./Conclusion.module.css"
function Conclusion() {
    return (
        <div className={styles.wrapper}>
            <div className={styles.connect}>
                <div className={styles.header}>Connect With Me!</div>
                <div className={styles.socials}>
                    <div className={styles.small_icon}>󰌻 </div>
                    <div className={styles.small_icon}>󰊫 </div>
                    <div className={styles.small_icon}>󰊤 </div>
                </div>
                <div className={styles.made}>
                    ❤️ Made with love by Asif
                </div>
            </div>
        </div>
    )
}

export default Conclusion;