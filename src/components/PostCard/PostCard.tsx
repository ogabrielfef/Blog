import Image from 'next/image';
import Link from 'next/link';

import { formatDate } from '@/functions';
import { BlogPost } from '@/types';

import { Tag } from '@/components/Tag';

import * as S from './styles';

type PostCardProps = {
  post: BlogPost;
};

export const PostCard = ({ post }: PostCardProps) => {
  const { frontmatter, readingTime, slug } = post;
  const { title, description, date, image, tags } = frontmatter;

  return (
    <>
      <Link href={slug}>
        <S.ImageContainer>
          <Image
            src={image}
            fill
            alt="title"
            priority
            className="rounded-xl object-cover object-center"
          />
        </S.ImageContainer>

        <S.Content>
          <S.TagsContainer>
            {tags?.map((tag) => <Tag key={tag}>{tag}</Tag>)}
          </S.TagsContainer>

          <S.Time>
            {formatDate(date)} • {readingTime} minutos de leitura
          </S.Time>

          <S.Title>{title}</S.Title>

          <S.Description>{description}</S.Description>
        </S.Content>
      </Link>
    </>
  );
};
