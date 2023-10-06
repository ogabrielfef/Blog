'use client';

import Link from 'next/link';

import { MainNavTypes } from '@/types';

import { ToggleButton } from './components';
import { useMainNav } from './hooks';
import * as S from './styles';

type MainNavProps = {
  items: MainNavTypes;
};

export const MainNav = ({ items }: MainNavProps) => {
  const { isOpenMenu, handleToggleMenu } = useMainNav();

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

      <S.Content>
        <ToggleButton
          isOpenMenu={isOpenMenu}
          handleToggleMenu={handleToggleMenu}
        />
      </S.Content>

      {isOpenMenu && (
        <S.ContainerMobile>
          <S.NavMobile>
            <S.ListMobile>
              {items.mainNav.map((menu) => (
                <S.ListItemMobile key={menu.title}>
                  <Link href={menu.href}>{menu.title}</Link>
                </S.ListItemMobile>
              ))}
            </S.ListMobile>
          </S.NavMobile>
        </S.ContainerMobile>
      )}
    </>
  );
};
