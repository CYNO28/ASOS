import React, {useState} from 'react'
import Join from '../Join/Join'
import styles from "./joinpage.module.css"
import SingIn from '../SignIn/SingIn'
import { useLocation } from 'react-router-dom'

const JoinPage = () => {
   
    const [show, setShow] = useState(true)
  return (
    <div>
        <div className={styles.pageDiv}>
            <h1 className={styles.title}>asos</h1>
            <div className={styles.joinSection}>
                <div className={styles.topButtonsDiv}>
                    <button onClick={() => setShow(true)} className={styles.topButton}>
                        JOIN
                    </button>
                    <div className={styles.vl}></div>
                    <button onClick={() => setShow(false)} className={styles.topButton}>
                        SIGN IN
                    </button>
                </div>
            </div>
            <div>
                {show ? <Join setShow={setShow}/> : <SingIn/>}
            </div>
        </div>
    </div>
  )
}

export default JoinPage