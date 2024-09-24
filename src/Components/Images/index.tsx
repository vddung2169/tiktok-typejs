import { forwardRef, useState } from 'react';
import images from '../../assets/images';
import styles from './Images.module.scss';
import classNames from 'classnames';

const Image = (
    {
        src,
        alt,
        className,
        fallBack: customeFallback = images.noImage,
        ...props
    }: { src: string; alt: string; fallBack?: string; className: any },
    ref: any,
) => {
    const [fallBack, setFallBack] = useState('');

    const handleError = () => {
        setFallBack(customeFallback);
    };

    return (
        <img
            className={classNames(className, styles.wrapper)}
            src={fallBack || src}
            alt={alt}
            {...props}
            ref={ref}
            onError={handleError}
        ></img>
    );
};

export default forwardRef(Image);
