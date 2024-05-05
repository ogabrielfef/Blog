import { MainNavTypes } from '@/types';

import { LinkedinIcon, GithubIcon } from '@/components/Icons';

export const socialLiksConfig: MainNavTypes = {
  mainNav: [
    {
      title: 'Linkedin',
      href: 'https://www.linkedin.com/in/gabrielferreiraf/',
      icon: <LinkedinIcon size={28} />
    },
    {
      title: 'GitHub',
      href: 'www.github.com/gabrielfef',
      icon: <GithubIcon size={28} />
    }
  ]
};
