import classNames from 'classnames/bind';
import styles from './Header.module.scss';
import images from '../../../../assets';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark, faSearch, faSpinner } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

const Header = () => {
    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                {/* Logo */}
                <div className={cx('logo')}>
                    <img src={images.logo} alt='tiktok'></img>
                </div>

                <div className={cx('search')}>
                    <input type='text' placeholder='Search accounts and videos' spellCheck={false}></input>

                    <button className={cx('clear-btn')}>
                        {/* icon close */}
                        <FontAwesomeIcon icon={faCircleXmark} />
                    </button>

                    {/* Loading */}
                    <FontAwesomeIcon icon={faSpinner} className={cx('loading')} />
                    <button className={cx('search-btn')}>
                        <FontAwesomeIcon icon={faSearch} />
                    </button>
                </div>

                <div className={cx('actions')}>

                </div>
            </div>
        </header >
    )
}

export default Header; 