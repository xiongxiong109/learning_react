// 配置页面的store
import { createStore } from 'redux'
import reducers from '../reducer'
import { fetchLocalState, saveLocalState } from '../../service/localStorage'
import { throttle } from 'lodash'

/*
	这里的store形成了独立的作用域, configStore函数在调用的时候, 内部的throttleSave函数已经生成，并作用到了
	应用中, 然后函数暴露出store方法，供外部调用
*/
const configStore = () => {

	// 创建程序默认状态值, 读取localStorage的值
	const initialState = fetchLocalState();

	// createStore可以传入第二个参数, 以便给程序添加默认值
	const store = createStore(reducers, initialState)

	/*
		每次程序状态发生改变时, 将数据持久化到localStorage中, 并通过lodash或underscore提供的节流阀函数，减少
		性能消耗大的JSON.stringify方法的执行次数, throttle函数用于保证某个函数1s内最多执行一次
		debounce函数则用于保证短时间内多次调用某一个函数时只触发一次
		两者类似但是不同, 具体可以参考文章: https://css-tricks.com/debouncing-throttling-explained-examples/
	*/
	const throttleSave = throttle(() => {

			saveLocalState({
				Items: store.getState().Items // 可以选择只把列表进行存储，而不存储默认筛选项
			});
			console.log(store.getState())

		}, 1000)

	store.subscribe(() => {

		throttleSave();

	})

	return store;

}

export default configStore