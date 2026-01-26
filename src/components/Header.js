import styles from './Header.module.css';

function Header() {
    return (
        <div className={styles.wrapper}>
            <div className={styles.left}>
                <div className={styles.desktop}>
                    <button>Asif Tanvir</button>
                    {/* <button>Projects</button> */}
                    {/* <button>CP Profile</button> */}
                </div>

                
            </div>

            <div className={styles.right}>
                <button>󱪙  <span style={{marginLeft:"5px"}}>Resume</span></button>
            </div>
        </div>
    );
}

export default Header;
