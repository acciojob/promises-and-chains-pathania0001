//your JS code here. If required.
const inputs = document.querySelectorAll('input')
console.log(inputs);


const button = document.querySelector('button');

function validateInput(formData){
	return new Promise((resolve,reject)=>{
		setTimeout(()=>{
        const {name,age} = formData;

		if(!name || age ==="")
			reject("Please enter valid details.")
		else if(Number(age)<18)
			reject(`Oh sorry ${name}. You aren't old enough.`)

		resolve(`Welcome, ${name}. You can vote.`);
		},4000);
	})
}
button.onclick = async (e)=>{
	e.preventDefault();
	const formData = {};
	inputs.forEach((input)=>{
		const {id,value} = input;
		formData[id] = value.trim();
	});
	let res = "";
	try {
		 res = await validateInput(formData);
	} catch (error) {
		res = error;
	}
	 alert(res);
		
}