import { Post } from 'contentlayer/generated';

import { slugfy } from '@/functions';

export const formatPosts = (posts: Post[]) => {
  const formatedPosts = posts.map((post) => {
    return {
      slug: slugfy(post.slug),
      body: post.body,
      readingTime: Math.ceil(post.readingTime.minutes),
      frontmatter: {
        title: post.title,
        description: post.description,
        date: post.date,
        tags: post.tags,
        image: post.image
      }
    };
  });

  return formatedPosts.sort((a, b) =>
    a.frontmatter.date < b.frontmatter.date ? 1 : -1
  );
};
