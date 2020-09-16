export const Toast = (type, content, config) => {

	console.log(type, content, config)

	let base = {
		html: false || config.html,
		time: 5000 || config.time
	}

	const create = () => {
		const element = document.createElement('DIV')

		element.id = 'toast'
		element.className = 'toast'
		element.className = type

		if (base.html) element.innerHTML = content
		else element.innerText = content

		return element
	}


	const init = () => {
		const t = document.querySelector('#toast');
		if (!t) {
			document.querySelector('#app').appendChild(create())
		}
	}
	const remove = () => document.querySelector('#toast').remove()


	init()
	setTimeout(() => {
		remove()
	}, base.time)

}
