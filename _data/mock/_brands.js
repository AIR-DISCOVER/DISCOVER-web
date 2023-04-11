import _mock from './_mock';

// ----------------------------------------------------------------------

const BRANDS_NAME = [
  { name: 'anker', image: '/partner_icons/anker.png' },
  { name: 'baidu', image: '/partner_icons/baidu.png' },
  { name: 'dji', image: '/partner_icons/dji.png' },
  { name: 'qianzhi', image: '/partner_icons/qianzhi.png' },
  { name: 'qimeng', image: '/partner_icons/qimeng.png' },
  { name: 'sinovation ventures', image: '/partner_icons/sinovation ventures.png' },
  { name: 'xiaomi', image: '/partner_icons/xiaomi.png' },
  { name: 'tuxingqiyuan', image: '/partner_icons/tuxingqiyuan_icononly.svg' },
  { name: 'sustech', image: '/partner_icons/sustech.svg' },
  { name: 'horizon', image: '/partner_icons/horizon.jpeg' },
  { name: 'daimler', image: '/partner_icons/daimler.png' },
  { name: 'didi', image: '/partner_icons/didi.png' },
];

export const _brands = BRANDS_NAME.map((brand, index) => ({
  id: _mock.id(index),
  name: brand,
  image: `https://zone-assets-api.vercel.app/assets/logos/${brand}.svg`,
}));

export const _brandsColor = BRANDS_NAME.map((brand, index) => ({
  id: _mock.id(index),
  name: brand.name,
  // image: `https://zone-assets-api.vercel.app/assets/logos/${brand}_original.svg`,
  image: brand.image,
}));
