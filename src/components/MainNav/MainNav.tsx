import Link from 'next/link';

import { MainNavTypes } from '@/types';

import * as S from './styles';

type MainNavProps = {
  items: MainNavTypes;
};

export const MainNav = ({ items }: MainNavProps) => {
  return (
    <>
      <S.Nav>
        <S.List>
          {items.mainNav.map((menu) => (
            <S.ListItem key={menu.title}>
              <Link href={menu.href}>{menu.title}</Link>
            </S.ListItem>
          ))}
        </S.List>
      </S.Nav>
    </>
  );
};
