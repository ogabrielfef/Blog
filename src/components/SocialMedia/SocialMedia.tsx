import { NavItemTypes } from '@/types';

import { List, ListItem } from '@/components/List';

import * as S from './styles';

type SocialMediaProps = {
  items: NavItemTypes[];
};

export const SocialMedia = ({ items }: SocialMediaProps) => {
  return (
    <List className="flex-col">
      {items.map((item) => (
        <ListItem key={item.title}>
          <S.Link href={item.href}>
            {item?.icon}
            <S.Text>{item.title}</S.Text>
          </S.Link>
        </ListItem>
      ))}
    </List>
  );
};
