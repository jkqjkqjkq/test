// 取 主题相关数据
// 引入 axios 模块（封装的 ajax）
import axios from 'axios';

var $http = axios.create({
	// 基本的url
  baseURL: 'https://cnodejs.org/api/v1',
  headers: {'X-Custom-Header': 'foobar'}
});

// 请求主题列表的方法
function getTopics(options){
	// 默认参数
	var newsOpitons = Object.assign({
		tab:'all',
		limit:10,
		page:1,
	},options);

	return $http({
		url:'/topics',
		// 参数
		params:newsOpitons,
	});
}
//请求主题详细信息
function getTopicData(id){
	return $http.get('/topic/'+id);
}
function getTime(downTime){
	 var date=new Date();  //获取当前时间戳
			var t1=date.getTime(); //获取1970 1 1 到现在的毫秒数
			
			var date2 = new Date(downTime);  //YYYY-MM-DD   hh:ff:mm
			var t2=date2.getTime();
			
			var t3=t1-t2;   //t3代表  date2到date之间的时间差
			//1s==1000ms
			var t=t3/1000;  
			//具体的秒数   60s=1m  60m=1h   24h=1D
			
			var day = parseInt(t/60/60/24);  
			var hour = parseInt(t/60/60%24); 
			var minutes=parseInt(t/60%60);
			var seconds=parseInt(t%60);
			
			if(day){
				return `${day}天前`
			}else if(hour){
				return `${hour}小时前`
			}
			else if(minutes){
				return `${minutes}分钟前`
			}else{
				return `刚刚发布`
			}
}


// 暴露取数据的
export {getTopics,getTopicData,getTime}