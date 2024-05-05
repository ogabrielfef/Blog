import tw from 'tailwind-styled-components';

export const ImageContainer = tw.div`
  relative
  h-80
  w-full
`;

export const Content = tw.div`
  pt-3
`;

export const TagsContainer = tw.div`
  mb-3
  flex
  flex-wrap
  gap-2
`;

export const Time = tw.time`
  text-gray-400
`;

export const Title = tw.p`
  mt-2
  max-w-md
  text-ellipsis
  text-2xl
  font-medium
  text-gray-50
`;

export const Description = tw.p`
  mr-3
  text-gray-400
`;
