import classNames from 'classnames';
import { FC } from 'react';
import { NavLink } from 'react-router-dom';
import { useDeviceType } from '../../../hooks/useDeviceType';

import { Image } from '../../foundation/Image';

import * as styles from './Footer.styles';

const FOOTER_LINK_ITEMS = ['利用規約', 'お問い合わせ', 'Q&A', '運営会社', 'オーガニックとは'] as const;

export const Footer: FC = () => {
  const { isDesktop } = useDeviceType();

  return (
    <footer className={styles.container()}>
      <ul
        className={classNames(styles.itemList(), {
          [styles.itemList__desktop()]: isDesktop,
          [styles.itemList__mobile()]: !isDesktop,
        })}
      >
        {FOOTER_LINK_ITEMS.map((item) => (
          <li key={item} className={styles.item()}>
            {item}
          </li>
        ))}
      </ul>
      <NavLink to="/">
        <Image src="/icons/logo.svg" />
      </NavLink>
    </footer>
  );
};
