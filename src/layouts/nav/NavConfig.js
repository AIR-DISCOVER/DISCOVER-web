// routes
import Routes from '../../routes';
// _data

// ----------------------------------------------------------------------

export const PageLinks = [
  {
    order: '1',
    subheader: 'AIR-SUN',
    cover: 'https://zone-assets-api.vercel.app/assets/images/menu/menu_marketing.jpg',
    items: [
      { title: 'Landing', path: Routes.sun.landing },
      { title: 'Blog Posts', path: Routes.sun.posts },
      { title: 'Blog Post', path: Routes.sun.post('post-01') },
    ],
  },
  {
    order: '2',
    subheader: 'HCI',
    cover: 'https://zone-assets-api.vercel.app/assets/images/menu/menu_career.jpg',
    items: [
      { title: 'Landing', path: Routes.hci.landing },
      { title: 'Blog Posts', path: Routes.hci.posts },
      { title: 'Blog Post', path: Routes.hci.post('post-01') },
    ],
  },
  {
    order: '3',
    subheader: 'Mechanics',
    cover: 'https://zone-assets-api.vercel.app/assets/images/menu/menu_career.jpg',
    items: [
      { title: 'Landing', path: Routes.mechanic.landing },
      { title: 'Blog Posts', path: Routes.mechanic.posts },
      { title: 'Blog Post', path: Routes.mechanic.post('post-01') },
    ],
  },
  {
    order: '4',
    subheader: 'Common',
    items: [
      { title: 'Item1', path: '' },
      { title: 'Item2', path: '' },
    ],
  },
];

export const navConfig = [
  { title: 'Home', path: '/' },
  {
    title: 'Research',
    path: Routes.pages,
    children: [PageLinks[0], PageLinks[1], PageLinks[2], PageLinks[3]]
  },
];
