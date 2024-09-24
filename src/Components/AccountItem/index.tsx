import classNames from 'classnames/bind';
import styles from './AccountItem.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import Image from '../Images';

const cx = classNames.bind(styles);

export const AccountItem = () => {
    return (
        <div className={cx('wrapper')}>
            <Image
                src="https://p16-sign-useast2a.tiktokcdn.com/tos-useast2a-avt-0068-giso/cb3ccfc1559e319be407d1bb9665f214~c5_720x720.jpeg?lk3s=a5d48078&nonce=29313&refresh_token=e82f35ceb9b11cd9d135dfb2679f25df&x-expires=1726632000&x-signature=Dgtv1W4KESsBWe0ZdNp3aSJVGC0%3D&shp=a5d48078&shcp=81f88b70"
                alt="profile"
                className={cx('avatar')}
            />
            <div className={cx('info')}>
                <h4 className={cx('name')}>
                    <span>Nguyen Van B</span>
                    <FontAwesomeIcon icon={faCheckCircle} className={cx('verified')} />
                </h4>
                <span className={cx('username')}>@username</span>
            </div>
        </div>
    );
};
