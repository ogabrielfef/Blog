import { allPosts } from 'contentlayer/generated';

import { formatPosts } from '@/functions';

export const PostService = {
  getAll: () => {
    const formatedPosts = formatPosts(allPosts);
    return {
      posts: formatedPosts
    };
  }
};
