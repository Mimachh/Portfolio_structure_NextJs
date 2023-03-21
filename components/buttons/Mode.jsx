import styles from '../buttons/Mode.module.css'
function Mode ({toggleTheme, theme}){
  return (
    <div >
        <div className={styles.mid}>

          <label className={styles.rocker}>
            <input type="checkbox" onChange={() => toggleTheme()}/>
            <span className={styles.switchleft}>On</span>
            <span className={styles.switchright}>Off</span>
          </label>
        </div>
    </div>
  );
};

export default Mode;