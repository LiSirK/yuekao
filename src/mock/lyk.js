//抛出数据
var homeData = require("../data/lyk.json")
var mockApi = {
    "/api/get_home_data": homeData
};
module.exports = function(url) {
    return mockApi[url];
}