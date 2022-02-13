import axios from 'axios';
import qs from 'qs';

let r = (Math.random() + 1).toString(36).substring(7);

var data = qs.stringify({
    'code': r,
    'discount_type': 'percentage',
    'discount_percentage': '10',
    'discount_amount': '0',
    'effective_on': 'cart',
    'expire_limit': '1',
    'discount_application_method': "2",
    'expire_never': "true",
});
var config = {
  method: 'post',
  url: 'https://plugin.tebex.io/coupons',
  headers: { 
    'X-Tebex-Secret': 'Tebex-Server-Secret-Code', 
    'Content-Type': 'application/x-www-form-urlencoded'
  },
  data : data
};

axios(config)
.then(function (response) {
  console.log(response.data);
})
.catch(function (error) {
  console.log(error);
});
