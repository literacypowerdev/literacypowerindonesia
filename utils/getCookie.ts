const Cookie = require('js-cookie')



export const token = () => {
    Cookie.get('token');

}