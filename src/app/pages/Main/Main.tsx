import styles from './Main.module.scss'
import Image from 'next/image';
const Main = () => {
    return (
        <div className={styles.main}>
            <div className={styles.photo}>
                <Image
                src="/SK.jpg"
                width={500}
                height={500}
                alt="Picture of the author"
            /></div>
            <div className="photo"></div>
        </div>
    )
}

export default Main