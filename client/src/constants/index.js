import { MdDashboard, MdCampaign, MdAccountCircle, MdPayment, MdExitToApp } from 'react-icons/md';

export const navlinks = [
  {
    name: 'dashboard',
    iconLight: MdDashboard,
    iconDark: MdDashboard,
    link: '/',
  },
  {
    name: 'campaign',
    iconLight: MdCampaign,
    iconDark: MdCampaign,
    link: '/create-campaign',
  },
  {
    name: 'payment',
    iconLight: MdPayment,
    iconDark: MdPayment,
    link: '/Withdraw',
  },
 
  {
    name: 'profile',
    iconLight: MdAccountCircle,
    iconDark: MdAccountCircle,
    link: '/profile',
  },
  // {
  //   name: 'logout',
  //   iconLight: MdExitToApp,
  //   iconDark: MdExitToApp,
  //   link: '/',
  //   disabled: true,
  // },
];
