const fetchDate = () => {
	return new Promise((resolve) => {
		setTimeout(() => resolve("hello world"), 3000)
	})
}

let str = null

const fn1 = async () => {
	const res = await fetchDate()
	str = res
}

const fn2 = () => {
	fetchDate().then((res) => {
		str = res
	})
}

const fn3 = async () => {
	// await fn1()  // str 为 hello world, 因为 async 会返回一个 promise 对象
	await fn2() // str 为 null
	console.log(str)
}

fn3()
