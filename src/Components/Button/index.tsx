import React from 'react';
import styles from './Button.module.scss';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

interface ButtonProps {
    to?: string;
    href?: string;
    primary?: boolean;
    outline?: boolean;
    small?: boolean;
    medium?: boolean;
    large?: boolean;
    text?: boolean;
    disabled?: boolean;
    rounded?: boolean;
    className?: any;
    leftIcon?: any;
    rightIcon?: any;
    children: React.ReactNode;
    onClick?: React.MouseEventHandler<HTMLButtonElement | HTMLAnchorElement>;
    [key: string]: any;
}

export const Button: React.FC<ButtonProps> = ({
    to,
    href,
    primary,
    outline,
    small,
    medium,
    large,
    text,
    disabled,
    rounded,
    children,
    className,
    leftIcon,
    rightIcon,
    onClick,
    ...passProps
}) => {
    let Comp: any = 'button';

    const classes = cx('wrapper', {
        primary,
        outline,
        small,
        medium,
        large,
        text,
        disabled,
        rounded,
        [className]: className,
    });

    if (to) {
        Comp = Link;
    } else if (href) {
        Comp = 'a';
    }

    if (disabled) {
        onClick = (e: React.MouseEvent) => {
            e.preventDefault();
        };
    }

    return (
        <Comp className={classes} onClick={onClick} {...passProps} {...(to ? { to } : { href })}>
            {leftIcon && <span className={cx('icon')}>{leftIcon}</span>}
            <span className={cx('title')}>{children}</span>
            {rightIcon && <span className={cx('icon')}>{rightIcon}</span>}
        </Comp>
    );
};
