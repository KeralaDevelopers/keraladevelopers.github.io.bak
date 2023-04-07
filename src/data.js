import { getPermalink, getBlogPermalink, getAsset } from './utils/permalinks';

export const headerData = {
  links: [
    {
      text: 'About us',
      href:getPermalink('/about')
   },
 
    {
      text: 'Products',
      links: [
        {
          text: '#Product 1',
          href: '#',
        },
        {
          text: '#Product 2',
          href: '#',
        }
      ],
    },
       {
      text: 'Contact us',
      href:getPermalink('/contact')
   },
    {
      text: 'Blog',
      href: getBlogPermalink(),
    },
  ],

};
  
export const footerData = {
  links: [
    {
      title: 'Quick Nav',
      links: [
        { text: 'home', href: '/' },
        { text: 'about', href: '/about' },
        { text: 'contact', href: '/contact' },
        { text: 'blog', href: '/blog' },

      ],
    },       
  ],
  secondaryLinks: [
    { text: 'Terms', href: getPermalink('/terms') },
    { text: 'Privacy Policy', href: getPermalink('/privacy') },
  ],
  socialLinks: [
    { ariaLabel: 'Twitter', icon: 'tabler:brand-twitter', href: '#' },
    { ariaLabel: 'Instagram', icon: 'tabler:brand-instagram', href: '#' },
    { ariaLabel: 'Facebook', icon: 'tabler:brand-facebook', href: '#' },
    { ariaLabel: 'RSS', icon: 'tabler:rss', href: getAsset('/rss.xml') },
    { ariaLabel: 'Github', icon: 'tabler:brand-github', href: 'https://github.com/kerala-developers' },
  ],
  footNote: `
    <span class="w-5 h-5 md:w-6 md:h-6 md:-mt-0.5 bg-cover mr-1.5 float-left rounded-sm bg-[url(https://onwidget.com/favicon/favicon-32x32.png)]"></span>
    Made by Kerala Developers community based on <a class="text-blue-600 hover:underline dark:text-gray-200" href="https://github.com/onwidget/astrowind"> Astrowind</a> template
  `,
};
