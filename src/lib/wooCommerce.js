import WooCommerceRestApi from '@woocommerce/woocommerce-rest-api';

const api = new WooCommerceRestApi({
  url: 'http://telagoods.com',
  consumerKey: process.env.WP_KEY,
  consumerSecret: process.env.WP_SECRET,
  version: 'wc/v3',
});

export default api;
