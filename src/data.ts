// Nav type
export type navLinkType = {
  label: string;
  url: string;
};

// Nav
const navLinks = [
  {
    label: 'Services',
    url: '#services',
  },
  {
    label: 'Projects',
    url: '#works',
  },
  {
    label: 'About',
    url: '#about-me-section',
  },
  {
    label: 'Testimonials',
    url: '#testimonials-section',
  },
  {
    label: 'Contact',
    url: '#contact-section',
  },
];
const navbarLinks = [
  {
    label: 'Home',
    url: '#app',
  },
  ...navLinks,
];

const socialLinks = [
  {
    label: 'X',
    url: 'https://x.com/rishii.xyz',
  },
  {
    label: 'Telegram',
    url: 'https://t.me/rishiination',
  },
  {
    label: 'GitHub',
    url: 'https://github.com/',
  },
  {
    label: 'LinkedIn',
    url: 'https://www.linkedin.com/company/fornixai/',
  },
];

const resourceLinks = [
  {
    label: 'Pillarstack',
    url: 'https://www.pillarstack.com',
  },
  {
    label: 'Figma Template',
    url: 'https://www.figma.com/',
  },
];

const heroText =
  'Bring your Ideas to Reality.';

const locationPlace = `12°58'13.2"N 77°35'12.5"E`;
const locationCountry = 'Bangalore, India';

// cal.com
const dataCalNamespace = '30min';
const dataCalLink = 'rishii.xyz/30min';
const dataCalConfig =
  '{"layout":"month_view", "theme": "dark", "brand": "#8C8C73"}';

export {
  socialLinks,
  resourceLinks,
  heroText,
  locationPlace,
  locationCountry,
  navLinks,
  navbarLinks,
  dataCalNamespace,
  dataCalLink,
  dataCalConfig,
};
