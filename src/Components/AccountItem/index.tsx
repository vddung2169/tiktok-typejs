import classNames from 'classnames/bind';
import styles from './AccountItem.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import Image from '../Images';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

export const AccountItem = ({ data }: { data: any }) => {
    return (
        <Link to={`/:@${data.nickname}`} className={cx('wrapper')}>
            <Image src={data.avatar} alt="profile" className={cx('avatar')} />
            <div className={cx('info')}>
                <h4 className={cx('name')}>
                    <span>{data.full_name}</span>
                    {data.tick && <FontAwesomeIcon icon={faCheckCircle} className={cx('verified')} />}
                </h4>
                <span className={cx('username')}>{data.nickname}</span>
            </div>
        </Link>
    );
};
