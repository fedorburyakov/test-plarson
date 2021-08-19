const getLoadingPage = (status) => {
	if (status === 'complete') {
		console.log('Страница полностью загружена!');
	}
	if (status === 'loading') {
		console.log('Страница загружается');
	}
	if (status === 'interactive') {
		console.log('Страница загружена, подгружаются рисунки и прочее');
	}
}

document.addEventListener('readystatechange', () => getLoadingPage(document.readyState));