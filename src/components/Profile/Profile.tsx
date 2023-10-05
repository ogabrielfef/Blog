import Image from 'next/image';

import { SiteTypes } from '@/types';

import * as S from './styles';

type ProfileProps = {
  items: SiteTypes;
};

export const Profile = ({ items }: ProfileProps) => {
  return (
    <div>
      <Image
        src="/assets/images/profile.jpeg"
        alt="Profile image"
        width={80}
        height={80}
        title="Profile image"
        priority
        className="rounded-full"
      />

      <S.Title>{items.title}</S.Title>
      <S.Subtitle>{items.subtitle}</S.Subtitle>
    </div>
  );
};
