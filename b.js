const { currentScript } = document;
const hasScriptA = document.querySelector('script[src="http://localhost:8080/a.js"]');
console.log('hasScriptA', hasScriptA);

const hasDomContentC = document.querySelector('#c');
console.log('hasDomContentC', hasDomContentC);