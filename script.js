window.promises = [];

// Do not change the code above this
// add your promises to the array `promises`
var promise1=new Promise((resolve)=>{
	const randomTime = Math.floor(Math.random() * 4000) + 1000;
	setTimeout(()=>{
		resolve("hello1");
	},randomTime)
});
var promise2=new Promise((resolve)=>{
	const randomTime = Math.floor(Math.random() * 4000) + 1000;
	setTimeout(()=>{
		resolve("hello2");
	},randomTime)
});
var promise3=new Promise((resolve)=>{
	const randomTime = Math.floor(Math.random() * 4000) + 1000;
	setTimeout(()=>{
		resolve("hello3");
	},randomTime)
});
var promise4=new Promise((resolve)=>{
	const randomTime = Math.floor(Math.random() * 4000) + 1000;
	setTimeout(()=>{
		resolve("hello4");
	},randomTime)
});
var promise5=new Promise((resolve)=>{
	const randomTime = Math.floor(Math.random() * 4000) + 1000;
	setTimeout(()=>{
		resolve("hello5");
	},randomTime)
});
var d=document.getElementById('output');

promises=[promise1,promise2,promise3,promise4,promise5];
Promise.any(promises).then((data)=>{
	d.innerText=data;
})