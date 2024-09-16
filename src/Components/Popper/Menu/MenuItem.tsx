import React from 'react';
import { Button } from '../../Button';
import classNames from 'classnames/bind';
import styles from './Menu.module.scss';

const cx = classNames.bind(styles);

interface MenuItemProps {
    data: any;
}

export const MenuItem: React.FC<MenuItemProps> = ({ data }) => {
    return (
        <Button className={cx('menu-item')} leftIcon={data.icon} to={data.to}>
            {data.title}
        </Button>
    );
};
