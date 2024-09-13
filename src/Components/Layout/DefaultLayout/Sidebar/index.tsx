import styles from './Sidebar.module.scss'
import classNames from 'classnames/bind'

const cx = classNames.bind(styles)

export const Sidebar = () => {
    return (
        <aside className={cx('wrapper')}>
            <h2 >
                Sidebar
            </h2>
        </aside>
    )
}
