import images from '../constants/images';

export interface WorkItem {
  title: string;
  description: string;
  category: string;
  image: string;
  tags: string[];
  codeLink: string;
  visit: string;
  id: number;
}

export const workData: WorkItem[] = [
  {
    title: 'CryptoNews',
    description: 'Updates on Crypto News',
    category: 'React',
    image: `${images.portfolio1}`,
    tags: ['React, AntDesign'],
    codeLink: 'https://github.com/muhammedtijani/cryptonews',
    visit: 'https://cryptoverse.muhats.com',
    id: 0,
  },
  {
    title: 'Realtor',
    description: 'Buy & Sell RealEstate',
    category: 'Next',
    image: `${images.portfolio2}`,
    tags: ['NextJS, ChakraUI'],
    codeLink: 'https://github.com/muhammedtijani/realtor',
    visit: 'https://realtor-muhammedtijani.vercel.app',
    id: 1,
  },
  {
    title: 'Startup Template',
    description: 'Startup',
    category: 'React',
    image: `${images.portfolio3}`,
    tags: ['React, TailwindCSS'],
    codeLink: 'https://github.com/coolzyte/startup',
    visit: 'https://startup.muhammedtijani.com/',
    id: 2,
  },
  {
    title: 'Restaurant',
    description: 'RestaurantApp',
    category: 'React',
    image: `${images.portfolio4}`,
    tags: ['React, CSS'],
    codeLink: 'https://github.com/muhammedtijani/restaurant',
    visit: 'https://restaurant.muhammedtijani.com/',
    id: 3,
  },
  {
    title: 'Entrepreneur',
    description: 'Network Marketing',
    category: 'HTML/CSS',
    image: `${images.portfolio6}`,
    tags: ['HTML, CSS, JavaScript'],
    codeLink: 'https://github.com/muhammedtijani',
    visit: 'https://projectunlimitedaccess.com/',
    id: 4,
  },
  {
    title: 'Delta App',
    description: 'Delta App Built with React',
    category: 'React',
    image: `${images.portfolio5}`,
    tags: ['React, Styled-Component'],
    codeLink: 'https://github.com/coolzyte/delta',
    visit: 'https://delta.muhats.com/',
    id: 5,
  },
];
