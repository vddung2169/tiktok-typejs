import classNames from 'classnames/bind';
import styles from './Header.module.scss';
import images from '../../../../assets';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark, faSearch, faSpinner } from '@fortawesome/free-solid-svg-icons';
import Tippy from '@tippyjs/react/headless';
import { useEffect, useState } from 'react';
import { Wrapper as PopperWrapper } from '../../../Popper'
import { AccountItem } from '../../../AccountItem';

const cx = classNames.bind(styles);

const Header = () => {
    const [searchResult, setSearchResult] = useState<any[]>([]);

    useEffect(() => {
        setTimeout(() => {
            setSearchResult([]);
        }, 0);
    }, []);

    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                {/* Logo */}
                <div className={cx('logo')}>
                    <img src={images.logo} alt='tiktok'></img>
                </div>
                <Tippy
                    interactive={true}
                    visible={searchResult.length > 0}
                    render={attrs => (
                        <div className={cx("search-result")} tabIndex={-1} {...attrs}>
                            <PopperWrapper>
                                <h4 className={cx('search-title')}>
                                    Accounts
                                </h4>
                                <AccountItem />
                                <AccountItem />
                                <AccountItem />
                                <AccountItem />
                            </PopperWrapper>
                        </div>
                    )}  >

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
                </Tippy>

                <div className={cx('actions')}>

                </div>
            </div>
        </header >
    )
}

export default Header; 