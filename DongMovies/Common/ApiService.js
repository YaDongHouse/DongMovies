/**
 * 基地址
 */
var BaseURL = "http://192.168.6.194:8088/";

var Dong_APIS = {

    /**
     * 分页查询，page后面跟页码，每页30条数据
     */
    movie_list:BaseURL+"movie/all?page=",


    /**
     * 根据电影名称搜索电影名字
     */
    movie_search:BaseURL+"movie/search?title=",


}
module.exports = Dong_APIS
