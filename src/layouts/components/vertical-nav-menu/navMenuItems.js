/*=========================================================================================
  File Name: sidebarItems.js
  Description: Sidebar Items list. Add / Remove menu items from here.
  ----------------------------------------------------------------------------------------
  Item Name: Vuexy - Vuejs, HTML & Laravel Admin Dashboard Template
  Author: Pixinvent
  Author URL: http://www.themeforest.net/user/pixinvent
==========================================================================================*/


export default [
  {
    url: "/",
    name: "Home",
    slug: "home",
    icon: "HomeIcon",
  },
  // Custom Routes For Sellers Starts From Here
  {
    url: null,
    name: 'Manage Products',
    icon: 'GiftIcon',
    i18n: 'ManageProducts',
    submenu: [
      {
        url: '/seller/add-product',
        name: 'Add Product',
        slug: 'sellers-requests',
        i18n: 'AddProduct'
      },
    ]
  },
]
