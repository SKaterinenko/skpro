import styles from './Header.module.scss'

const Header = () => {
    return (
        <header className={styles.header}>
            <div className={styles.logo}>
                <h1>@SKaterinenko</h1>
            </div>
            <div className={styles.links}>
                <ul>
                    <li>Скиллы</li>
                    <li>Портфолио</li>
                    <li>Контакты</li>
                </ul>
            </div>
        </header>
    )
}

export default Header