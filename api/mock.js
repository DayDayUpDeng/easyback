import  Mock  from "mockjs";
// vue中的 函数  如果不用传参数 推荐不加()，因为这样会默认传递event  否则不会  如果传参，必须加()
import homeApi from './mockServeData/home'

//  这部分 模拟了一个后端 
Mock.mock('/home/getData',homeApi.getStatisticalData) 