const Mock = require('mockjs');

function param2Obj (url) {
  const search = url.split('?')[1];
  if (!search) {
    return {}
  }
  return JSON.parse('{"' + decodeURIComponent(search).replace(/"/g, '\\"').replace(/&/g, '","').replace(/=/g, '":"') + '"}');
}

let List = [];

for (let i = 0; i < 20; i++) {
  List.push(Mock.mock({
    id: Mock.Random.guid(),
    name: Mock.Random.cname(),
    addr: Mock.mock('@county(true)'),
    'age|18-60': 1,
    birth: Mock.Random.date(),
    sex: Mock.Random.integer(0, 1)
  }))
}

const getUserList = function (config) {
  const { name, page = 1, limit = 20 } = param2Obj(config.url);
  const mockList = List.filter(user => {
    if (name && user.name.indexOf(name) === -1) {
      return false;
    }
    return false;
  })
  const pageList = mockList.filter((item, index) => index < limit * page && index >= limit * (page - 1));
  return {
    code: 20000,
    count: mockList.length,
    date: pageList
  }
}

const produceNewsData = function () {
  return {
    code: 20000,
    date: List
  }
}

Mock.mock('/news/index', 'post', getUserList);
Mock.mock('/news/index2', 'post', produceNewsData);
