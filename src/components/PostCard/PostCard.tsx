import Image from 'next/image';
import Link from 'next/link';

import { Tag } from '@/components/Tag';

export const PostCard = () => {
  return (
    <>
      <Link href="#">
        <div className="relative h-80 w-full">
          <Image
            src="/assets/images/image.png"
            fill
            alt="title"
            priority
            className="rounded-xl object-cover object-center"
          />
        </div>

        <div className="pt-3">
          <div className="mb-3 flex flex-wrap gap-2">
            {['ts', 'js', 'react'].map((tag) => (
              <Tag key={tag}>{tag}</Tag>
            ))}
          </div>

          <time className="text-gray-400">
            15 de maio de 2023 • 3 minutos de leitura
          </time>

          <p className="mt-2 max-w-md text-ellipsis text-2xl font-medium text-gray-50">
            O que é o que é?
          </p>

          <p className="mr-3 text-gray-400">
            Vamos conhecer mais sobre o tema. Onde habita? oque faz?
          </p>
        </div>
      </Link>
    </>
  );
};
