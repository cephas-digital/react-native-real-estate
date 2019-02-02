const fetch = require('node-fetch');

const url = (path) => (process.env.URL || ('http://laravel-task.herokuapp.com/api/')) + path;

function buildParamsQuery(params) {
  const esc = encodeURIComponent;
  return Object.keys(params)
    .map(k => esc(k) + '=' + esc(params[k]))
    .join('&');
}

module.exports = class RealEstateApi {
  static getList() {
    return fetch(url('lists'))
      .then(res => res.json());
  }

  static getCities() {
    return fetch(url('cities'))
      .then(res => res.json());
  }

  static getDevelopers() {
    return fetch(url('developers'))
      .then(res => res.json());
  }

  static filterByType(data) {
    console.log(url('estate/filter?' + buildParamsQuery(data)))
    return fetch(url('estate/filter?' + buildParamsQuery(data)))
      .then(res => res.json())
  }

  static getById(id) {
    return fetch(url(`estate/${id}`))
      .then(res => res.json())
  }

  static addListItem(data) {
    return fetch(url(`estate/add`), {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      method: 'post',
      body: JSON.stringify({
        cityId: data.cityId,
        developerId: data.developerId,
        name: data.name,
        onSale: data.onSale,
        price: data.lessThen
      })
    })
    .then(res => res.json())
  }
}