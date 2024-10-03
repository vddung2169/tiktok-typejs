import Tippy from '@tippyjs/react/headless';
import classNames from 'classnames/bind';
import { Wrapper as PopperWrapper } from '../../Popper';
import styles from './Menu.module.scss';
import { MenuItem } from './MenuItem';
import { HeaderMenu } from './Header';
import { useState } from 'react';

const cx = classNames.bind(styles);

interface MenuProps {
    items?: any[];
    children: any;
    hideOnClick?: boolean;
    onChange?: (item: any) => void;
}

export const Menu: React.FC<MenuProps> = ({
    children,
    items,
    hideOnClick = false,
    onChange = () => {},
    ...passProps
}) => {
    const [history, setHistory] = useState([{ data: items }]);

    const current = history[history.length - 1];

    const nextItem = (isParent: boolean, item: any) => {
        if (isParent) {
            setHistory([...history, item.children]);
        }
        if (onChange) {
            onChange(item);
        }
    };

    const renderItems = () => {
        return current.data?.map((item, index) => {
            const isParent = !!item.children;
            return <MenuItem key={index} data={item} onClick={() => nextItem(isParent, item)} />;
        });
    };

    return (
        <Tippy
            {...passProps}
            hideOnClick={hideOnClick}
            interactive
            delay={[0, 300]}
            offset={[12, 10]}
            placement="bottom-end"
            render={(attrs) => (
                <div className={cx('menu-list')} tabIndex={-1} {...attrs}>
                    <PopperWrapper className={cx('menu-popper')}>
                        {history.length > 1 && (
                            <HeaderMenu
                                title={'Language'}
                                onBack={() => {
                                    setHistory(history.slice(0, history.length - 1));
                                }}
                            />
                        )}
                        <div className={cx('menu-body')}> {renderItems()}</div>
                    </PopperWrapper>
                </div>
            )}
            onHide={() => {
                setHistory([{ data: items }]);
            }}
        >
            {children}
        </Tippy>
    );
};
