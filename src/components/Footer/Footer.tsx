import Link from 'next/link';

import { siteConfig } from '@/config';
import { NavItemTypes } from '@/types';

import { Logo } from '../Logo';
import * as S from './styles';

type FooterProps = {
  items: NavItemTypes[];
};

export const Footer = ({ items }: FooterProps) => {
  return (
    <S.Container>
      <S.Content>
        <S.Section role="contentinfo">
          <Logo />
          <S.Title>{siteConfig.title}</S.Title>
        </S.Section>
        <S.Section role="contentinfo">
          <S.Title>Redes</S.Title>
        </S.Section>
        <S.Section>
          <S.Title>Sitemap</S.Title>
          <ul>
            {items.map((item) => (
              <li key={item.title}>
                <Link href={item.href}>{item.title}</Link>
              </li>
            ))}
          </ul>
        </S.Section>
      </S.Content>
      <S.CopyrightContainer>
        <S.Copyright>Make by ogabrielfef</S.Copyright>
      </S.CopyrightContainer>
    </S.Container>
  );
};
