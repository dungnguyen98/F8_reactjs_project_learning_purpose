import clsx from 'clsx'

import styles from './Button.module.css'

function Button() {
    return (
        <>
            <button className={styles.btn}>
                Click me!
            </button>
            {/* Có rất nhiều cách để sử dụng nhiều className. Có thể sử dụng theo cách này, đó là sử dụng join
            <button className={`${styles.btn} ${styles.active}`}>Click me</button> 
            */}
            {/* Có thể sử dụng string expression
            <button className={`${styles.btn} ${styles.active}`}>
                Click me!
            </button> */}

            <button className={clsx(styles.btn, {
                [styles.active]: true
                })}>
                Click me
            </button>
        </>
    )
}

export default Button