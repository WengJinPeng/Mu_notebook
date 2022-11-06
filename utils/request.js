// import Request from '@/js_sdk/luch-request/luch-request/index.js'

// const { data } = require("uview-ui/libs/mixin/mixin")
import config from '@/utils/baseURL.js'

let $request = (url, data, header, method = 'GET') => {
	return new Promise((resolve, reject) => {
		//show loading animation
		uni.showLoading({
			title: "Loading",
			mask: true
		})
		uni.request({
			url: config.baseURL + url,
			method,
			data,
			header,
			//request succes
			success: ({
				data
			}) => {
				resolve(data)
			},
			fail: (res) => {
				reject(res)
			},
			//request complete
			complete: () => {
				uni.hideLoading()
			}
		})
	})
}

let $get = (url, data, header) => {
	return $request(url, data, header, 'GET')
}

let $post = (url, data, header) => {
	return $request(url, data, header, 'POST')
}

uni.$request = $request
uni.$get = $get
uni.$post = $post
