/**
 * Create By  邱亚东
 * Email jasonof2011@sina.com
 * Date: 2018-08-02
 * Time: 18:13
 */
import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    FlatList,
    View
} from 'react-native';
import SearchBar from './../Common/DSearchBar'
import Util from './../Common/Utils'
import ServiceURL from './../Common/ApiService'
import MyListItem from './MyListItem'
import DongLoading from "../Common/DongLoading";

export default class MovieList extends React.PureComponent {

    constructor() {
        super();
        //当前页
        this.page = 1;
        this.state={
            show:true,
            movieTitle:'港囧',
            movieData : [],
            // 下拉刷新
            isRefresh:false,
            // 加载更多
            isLoadMore:false
        };
        this._changeText = this._changeText.bind(this)
        this._searchPress = this._searchPress.bind(this)
    }

    getData(){
        if(this.page !==1){
            console.log("加载更多")
            this.setState({
                show:true
            })
        };
        var that = this;
        var url = ServiceURL.movie_list+this.page;
        Util.getRequest(url,function (data) {
            /**
             * ！可将变量转换成boolean类型，null、undefined和空字符串取反都为false，其余都为true。
             * 1 !null=true
             * 3 !undefined=true
             * 5 !''=true
             * 7 !100=false
             * 9 !'abc'=false
             */
            if(that.page ===1){
                console.log("重新加载")
                that.setState({
                    movieData:data,
                    show:false
                })
            }else {
                console.log("加载更多")
                that.setState({
                    isLoadMore:false,
                    show:false,
                    movieData:that.state.movieData.concat(data)
                })
            }
        },function (error) {
            alert(error);
        })
    };

    /**
     * 这个方法的首个参数必须是item
     * @param movie
     * @returns {*}
     * @private
     */
    _renderItem = ({item:movie}) => (
        <MyListItem
            id = {movie.id}
            dMovie = {movie}
            onPressItem={this._onPressItem}
            title={movie.title}
        />);

    _onPressItem = (id:string) =>{
        console.log(id)
    };

    // 空布局
    _renderEmptyView = () => (<View><Text>EmptyView</Text></View>);


    _keyExtractor = (item,index) => item.id.toString();

    _changeText(text){
        this.setState({
            movieTitle:text,

        });
    }
    _searchPress(){
        console.log(this.state.movieTitle)
    }

    componentDidMount() {
        //请求数据
        this.getData();
    }

    _onRefresh = ()=>{
        if (!this.state.isRefresh){
            this.page = 1
            this.getData()
        }
    }

    _onLoadMore = () =>{
        //不处于正在加载更多&&有下拉刷新过，因为没数据的时候会触发加载
        if (!this.state.isLoadMore&&this.state.movieData.length>0){
            this.page = this.page+1
            this.setState({
                isLoadMore:true
            })
            this.getData()
        }
    }

    /**
     * 创建头部布局
     */
    _createListHeader = ()=>
       (
            <View style={styles.headView}>
                <Text style={{color:'white'}}>
                    头部布局
                </Text>
            </View>
        );


    /**
     * 创建头部布局
     */
    _createListFooter = ()=>(
            <View style={styles.footerView}>
                <Text style={{color:'white'}}>
                    底部底部
                </Text>
            </View>
        );



    render() {
        let height = Util.WindowSize.height;
        let width = Util.WindowSize.width;
        return (
            <View>
                <SearchBar
                    placeholder="请输入电影名称"
                    onChangeText={this._changeText}
                    onPress={this._searchPress}/>
                <FlatList
                    data={this.state.movieData}
                    renderItem={this._renderItem}
                    keyExtractor={this._keyExtractor}
                    extraData={this.state}
                    ListEmptyComponent={ this._renderEmptyView }
                    //添加头尾布局
                    // ListHeaderComponent={this._createListHeader}
                    // ListFooterComponent={this._createListFooter}
                    //下拉刷新相关
                    onRefresh={this._onRefresh}
                    refreshing={this.state.isRefresh}
                    //加载更多
                    onEndReached={this._onLoadMore}
                    onEndReachedThreshold={0.1}/>
                {
                    this.state.show? <DongLoading height = {height} width = {width}/> :null
                }
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
    },
    headView:{
        flex:1,
        height:100,
        backgroundColor:'red',
        justifyContent:'center',
        alignItems:'center'
    },
    footerView:{
        flex:1,
        height:100,
        backgroundColor:'yellow',
        justifyContent:'center',
        alignItems:'center'
    }
});
