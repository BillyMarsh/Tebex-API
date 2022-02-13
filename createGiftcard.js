import axios from 'axios';
import qs from 'qs';
var data = qs.stringify({
  'amount': '10' 
});
var config = {
  method: 'post',
  url: 'https://plugin.tebex.io/gift-cards',
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
