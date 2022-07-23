//CODIGO EJERCICIO 1
//CODIGO EJERCICIO 1

const formEjercicio1 = document.querySelector('.ejercicio-1-form');

formEjercicio1.addEventListener('submit', (e) => {
	const response = document.querySelector('.response-ejercicio-1');
	e.preventDefault();

	response.innerText = e.target.weatherInput.value;
	e.target.reset();
});
//CODIGO EJERCICIO 1
//CODIGO EJERCICIO 1

//CODIGO EJERCICIO 2
//CODIGO EJERCICIO 2

const formEjercicio2 = document.querySelector('.ejercicio-2-form');

formEjercicio2.addEventListener('submit', (e) => {
	const response = document.querySelector('.response-ejercicio-2');
	e.preventDefault();

	response.innerHTML = `
    <p>
    area del circulo ${(
			Math.pow(parseInt(e.target.circleRadio.value), 2) * Math.PI
		).toFixed(2)}cm<sup>2</sup>
    </p>
    <hr>
    <p>
    perimetro del circulo ${(
			2 *
			parseInt(e.target.circleRadio.value) *
			Math.PI
		).toFixed(2)}cm
    </p>`;
	response.classList.add('p-3');
	response.classList.add('m-2');
	e.target.reset();
});
//CODIGO EJERCICIO 2
//CODIGO EJERCICIO 2

//CODIGO EJERCICIO 3
//CODIGO EJERCICIO 3
const formEjercicio3 = document.querySelector('.ejercicio-3-form');

formEjercicio3.addEventListener('submit', (e) => {
	const response = document.querySelector('.response-ejercicio-3');
	e.preventDefault();

	response.innerText =
		parseInt(e.target.edadUsuario.value) > 17
			? `${e.target.edadUsuario.value} es mayor de edad `
			: e.target.edadUsuario.value;
	e.target.reset();
});
//CODIGO EJERCICIO 3
//CODIGO EJERCICIO 3

//CODIGO EJERCICIO 4
//CODIGO EJERCICIO 4

const formEjercicio4 = document.querySelector('.ejercicio-4-form');

formEjercicio4.addEventListener('submit', (e) => {
	const response = document.querySelector('.response-ejercicio-4');
	e.preventDefault();

	response.innerText =
		e.target.ej4Input.value.toLowerCase() === 's' ||
		e.target.ej4Input.value.toLowerCase() === 'n'
			? `valor ingresado : ${e.target.ej4Input.value} , correcto `
			: 'valor incorrecto';
	e.target.reset();
});
//CODIGO EJERCICIO 4
//CODIGO EJERCICIO 4

//CODIGO EJERCICIO 5
//CODIGO EJERCICIO 5

const formEjercicio5 = document.querySelector('.ejercicio-5-form');

formEjercicio5.addEventListener('submit', (e) => {
	const response = document.querySelector('.response-ejercicio-5');
	const insertVal = (operation) =>
		(response.innerHTML = `operacion elegida ${operation}`);
	e.preventDefault();
	const valueInput = e.target.ej5Input.value.toLowerCase();
	switch (valueInput) {
		case 's':
			insertVal('suma');
			break;
		case 'r':
			insertVal('resta');
			break;
		case 'd':
			insertVal('division');
			break;
		case 'm':
			insertVal('multiplicacion');
			break;
		default:
			insertVal('operacion no valida');
	}
	e.target.reset();
});
//CODIGO EJERCICIO 5
//CODIGO EJERCICIO 5

//CODIGO EJERCICIO 6
//CODIGO EJERCICIO 6
const formEjercicio6 = document.querySelector('.ejercicio-6-form');

formEjercicio6.addEventListener('submit', (e) => {
	const response = document.querySelector('.response-ejercicio-6');

	e.preventDefault();

	const valueInput = parseInt(e.target.ej6Input.value);

	response.innerText =
		valueInput === 0
			? 'el numero no es par ni impar'
			: valueInput !== 0 && valueInput % 2 === 0
			? `${valueInput} es par`
			: `${valueInput} es impar`;

	e.target.reset();
});
//CODIGO EJERCICIO 6
//CODIGO EJERCICIO 6

//CODIGO EJERCICIO 7
//CODIGO EJERCICIO 7
const formEjercicio7 = document.querySelector('.ejercicio-7-form');
let limitNumberInserted = false;
let limitNumVal;
let numsArrayEj7 = [];
const sum = (array) => array.reduce((a, b) => a + b, 0);
formEjercicio7.addEventListener('submit', (e) => {
	e.preventDefault();
	const response = document.querySelector('.response-ejercicio-7');
	const maxNumMsg = document.querySelector('.insertMaxNumMsg');
	const limitNum = document.querySelector('.limitNum');
	const numsArrayParagraph = document.querySelector('.numsArray');

	const valueInput = parseInt(e.target.ej7Input.value);

	limitNumberInserted === false
		? ((limitNumVal = valueInput),
		  (limitNum.innerText = `valor limite ingresado ${limitNumVal}`),
		  (maxNumMsg.innerText =
				'numero limite insertado ingrese array de numeros hasta llegar al valor limite'))
		: (numsArrayEj7 = [...numsArrayEj7, valueInput]),
		(numsArrayParagraph.innerText = `arreglo de numeros actual ${numsArrayEj7} , suma arreglo actual ${sum(
			numsArrayEj7
		)}`);
	sum(numsArrayEj7) > limitNumVal &&
		(document.querySelector('.btn-ejericio-7').setAttribute('disabled', 'true'),
		response.insertAdjacentText(
			'beforeend',
			'la suma del arreglo es mayor al numero limite'
		));
	limitNumberInserted = true;

	e.target.reset();
});
//CODIGO EJERCICIO 7
//CODIGO EJERCICIO 7

//CODIGO EJERCICIO 8
//CODIGO EJERCICIO 8
const formEjercicio8 = document.querySelector('.ejercicio-8-form');
let ej8array = [];
formEjercicio8.addEventListener('submit', (e) => {
	const response = document.querySelector('.response-ejercicio-8');
	e.preventDefault();
	let inputValue = parseInt(e.target.ej8Input.value);
	while (inputValue !== 0) {
		ej8array = [...ej8array, inputValue];
		document.querySelector(
			'.ejercicio-8-array'
		).innerText = `numeros del array ${ej8array}`;

		break;
	}

	inputValue === 0 &&
		(document.querySelector('.btn-ejercicio-8').setAttribute('disabled', true),
		(document.querySelector(
			'.response-ejercicio-8'
		).innerText = `promedio de numeros ingresados ${
			sum(ej8array) / ej8array.length
		}
		 numero menor en el arreglo ${Math.min(...ej8array)} 
		numero mayor en el arreglo ${Math.max(...ej8array)}
		`));

	e.target.reset();
});
//CODIGO EJERCICIO 8
//CODIGO EJERCICIO 8

//CODIGO EJERCICIO 9
//CODIGO EJERCICIO 9
const formEjercicio9 = document.querySelector('.ejercicio-9-form');

formEjercicio9.addEventListener('submit', (e) => {
	const response = document.querySelector('.response-ejercicio-9');
	e.preventDefault();

	const inptName = `ej-9-Input`;
	response.innerText = e.target[inptName].value
		.split('')
		.map((l) => (l += ' '))
		.join()
		.replace(/,/g, ' ');

	e.target.reset();
});

//CODIGO EJERCICIO 9
//CODIGO EJERCICIO 9

//CODIGO EJERCICIO 10
//CODIGO EJERCICIO 10
const formEjercicio10 = document.querySelector('.ejercicio-10-form');

formEjercicio10.addEventListener('submit', (e) => {
	const response = document.querySelector('.response-ejercicio-10');
	e.preventDefault();

	const inptName = `ej-10-Input`;
	response.innerText = e.target[inptName].value
		.split('')
		.reverse()
		.join()
		.replace(/,/g, '');

	e.target.reset();
});

//CODIGO EJERCICIO 11
//CODIGO EJERCICIO 11

const formEjercicio11 = document.querySelector('.ejercicio-11-form');
const getLongestWord = (phrase) => {
	return phrase
		.split(' ')
		.reduce(
			(long, current) => (long.length > current.length ? long : current),
			' '
		);
};

formEjercicio11.addEventListener('submit', (e) => {
	const response = document.querySelector('.response-ejercicio-11');
	e.preventDefault();

	const inptName = `ej-11-Input`;
	response.innerText = getLongestWord(e.target[inptName].value);

	e.target.reset();
});
//CODIGO EJERCICIO 11
//CODIGO EJERCICIO 11

//CODIGO EJERCICIO 12
//CODIGO EJERCICIO 12
const formEjercicio12 = document.querySelector('.ejercicio-12-form');

formEjercicio12.addEventListener('submit', (e) => {
	const response = document.querySelector('.response-ejercicio-12');
	e.preventDefault();

	const inptName = `ej-12-Input`;
	const inptValue = e.target[inptName].value;

	let typeOfValue;

	isNaN(inptValue) && typeof inptValue !== 'number'
		? (typeOfValue = typeof e.target[inptName].value)
		: (typeOfValue = typeof parseInt(e.target[inptName].value));

	response.innerText = `  El tipo de dato es : ${JSON.stringify(typeOfValue)}`;

	e.target.reset();
});

//CODIGO EJERCICIO 12
//CODIGO EJERCICIO 12

//CODIGO EJERCICIO 13
//CODIGO EJERCICIO 13
const formEjercicio13 = document.querySelector('.ejercicio-13-form');

const loopThroughData = (formData) => {
	return Object.entries(formData).map((field) => {
		return `<li>${field[0].split('E')[0]} ${field[1]}</li>`;
	});
};
formEjercicio13.addEventListener('submit', (e) => {
	const response = document.querySelector('.response-ejercicio-13');
	const inputsFormEjercicio13 = document.querySelectorAll(
		'.ejercicio-13-form input'
	);
	const selectFormEjercicio13 = document.querySelectorAll(
		'.ejercicio-13-form select'
	);
	e.preventDefault();
	let formData = {};
	for (const input of inputsFormEjercicio13) {
		let inptName = input.name;

		formData = { ...formData, [inptName]: e.target[inptName].value };
	}
	for (const select of selectFormEjercicio13) {
		let selectName = select.name;

		formData = { ...formData, [selectName]: e.target[selectName].value };
	}

	response.innerHTML = `informacion formulario
					<ul>${loopThroughData(formData).join().replace(/,/g, ' ')}</ul>`;

	e.target.reset();
});

//CODIGO EJERCICIO 13
//CODIGO EJERCICIO 13

const formEjercicio14 = document.querySelector('.ejercicio-14-form');

formEjercicio14.addEventListener('submit', (e) => {
	const response = document.querySelector('.response-ejercicio-14');
	const inputsFormEjercicio14 = document.querySelectorAll(
		'.ejercicio-14-form input'
	);
	const selectFormEjercicio14 = document.querySelectorAll(
		'.ejercicio-14-form select'
	);
	e.preventDefault();
	let formData = {};
	for (const input of inputsFormEjercicio14) {
		let inptName = input.name;

		formData = { ...formData, [inptName]: e.target[inptName].value };
	}
	for (const select of selectFormEjercicio14) {
		let selectName = select.name;

		formData = { ...formData, [selectName]: e.target[selectName].value };
	}

	response.innerHTML = `informacion formulario
					<ul>${loopThroughData(formData).join().replace(/,/g, ' ')}</ul>`;

	e.target.reset();
});

//CODIGO EJERCICIO 14
//CODIGO EJERCICIO 14

//CODIGO EJERCICIO 15
//CODIGO EJERCICIO 15

const formEjercicio15 = document.querySelector('.ejercicio-15-form');
const caclArea = (radio) => Math.pow(radio, 2) * Math.PI;
const caclPerimeter = (radio) => 2 * Math.PI * radio;
formEjercicio15.addEventListener('submit', (e) => {
	const response = document.querySelector('.response-ejercicio-15');
	e.preventDefault();

	response.innerHTML = `
    <p>
    area del circulo ${caclArea(parseInt(e.target.circleRadio.value)).toFixed(
			2
		)}cm<sup>2</sup>
    </p>
    <hr>
    <p>
    perimetro del circulo ${caclPerimeter(
			parseInt(e.target.circleRadio.value)
		).toFixed(2)}cm
    </p>`;
	response.classList.add('p-3');
	response.classList.add('m-2');
	e.target.reset();
});
//CODIGO EJERCICIO 15
//CODIGO EJERCICIO 15

//CODIGO EJERCICIO 16
//CODIGO EJERCICIO 16

const fillArrays = () => {
	let array1 = [];
	let array2 = [];
	for (let index = 0; index < 5; index++) {
		array1 = [...array1, Math.round(Math.random() * 10)];
		array2 = [...array2, Math.round(Math.random() * 10)];
	}
	document.querySelector('.ej16Title').classList.remove('d-none');
	document.querySelector('.array-1-Ej16').innerText = array1;
	document.querySelector('.array-2-Ej16').innerText = array2;
};

document.querySelector('.ej16Btn').addEventListener('click', fillArrays);
//CODIGO EJERCICIO 16
//CODIGO EJERCICIO 16

//CODIGO EJERCICIO17
//CODIGO EJERCICIO17
let arrayEj17 = [1, 2, 3, 4, 5, 6, 7];
const setTextEj17 = (array) =>
	(document.querySelector('.array-ej17').innerText = array);

setTextEj17(arrayEj17);
const slicedArray = (arrayEj17 = arrayEj17.slice(
	0,
	arrayEj17.length - arrayEj17.length - 2
));
document
	.querySelector('.ej17Btn')
	.addEventListener('click', () => setTextEj17(slicedArray));

//CODIGO EJERCICIO17
//CODIGO EJERCICIO17

//CODIGO EJERCICIO18
//CODIGO EJERCICIO18
let arrayEj18 = [true, 5, false, 'holas', 'adios', 2];
document
	.querySelector('.arrayEj18')
	.insertAdjacentText(
		'beforeend',
		`array ejercicio 18 : ${JSON.stringify(arrayEj18)} `
	);
document.querySelector('.responseEj18').insertAdjacentHTML(
	'beforeend',
	`a) obteniendo palabra mas larga en elementos del array ${arrayEj18
		.filter((val) => typeof val === 'string')
		.reduce((a, b) => (a.length > b.length ? a : b))} 
			<br>`
);
document.querySelector('.responseEj18').insertAdjacentHTML(
	'beforeend',
	`b) obteniendo valor "false" con elementos del array ${arrayEj18
		.filter((val) => typeof val === 'boolean')
		.reduce((a, b) => a && b)} 
			<br>`
);
document.querySelector('.responseEj18').insertAdjacentHTML(
	'beforeend',
	`b) obteniendo valor "true" con elementos del array ${arrayEj18
		.filter((val) => typeof val === 'boolean')
		.reduce((a, b) => a || b)}
		<br>	`
);
document.querySelector('.responseEj18').insertAdjacentHTML(
	'beforeend',
	`c) obteniendo suma de elementos del array ${arrayEj18
		.filter((val) => typeof val === 'number')
		.reduce((a, b) => a + b)}
		<br>	`
);
document.querySelector('.responseEj18').insertAdjacentHTML(
	'beforeend',
	`c) obteniendo resta de elementos del array ${arrayEj18
		.filter((val) => typeof val === 'number')
		.reduce((a, b) => a - b)}
		<br>	`
);
document.querySelector('.responseEj18').insertAdjacentHTML(
	'beforeend',
	`c) obteniendo division de elementos del array ${arrayEj18
		.filter((val) => typeof val === 'number')
		.reduce((a, b) => a / b)}
		<br>	`
);
document.querySelector('.responseEj18').insertAdjacentHTML(
	'beforeend',
	`c) obteniendo multiplicacion de elementos del array ${arrayEj18
		.filter((val) => typeof val === 'number')
		.reduce((a, b) => a * b)}
		<br>	`
);
//CODIGO EJERCICIO18
//CODIGO EJERCICIO18

//CODIGO EJERCICIO19
//CODIGO EJERCICIO19
const randomNum = () => Math.floor(Math.random() * (1000 - 1 + 1)) + 1;

const createArraysEj19 = () => {
	let array50 = [];
	let array20 = [];
	for (let index = 0; index < 50; index++) {
		array50 = [...array50, randomNum()];
	}
	array50 = array50.sort((a, b) => (a > b ? 1 : a === b ? 0 : -1));
	// OR
	array50 = array50.sort((a, b) => a - b);
	for (let index = 0; index < 20; index++) {
		index < 11
			? (array20 = [...array20, array50[index]])
			: (array20 = [...array20, 0.5]);
	}
	const response = document.querySelector('.ej19response');
	response.insertAdjacentHTML(
		'beforeend',
		`<ul>array 1 : 
	${array50
		.map((n) => `<li>${n}</li>`)
		.join()
		.replace(/,/g, ' ')}</ul> 
		<ul>array 2 : 
	${array20
		.map((n) => `<li>${n}</li>`)
		.join()
		.replace(/,/g, ' ')}</ul> 
	 <br> `
	);
};

const btnEj19 = document.querySelector('.ej19Btn');
btnEj19.addEventListener('click', createArraysEj19);

//CODIGO EJERCICIO19
//CODIGO EJERCICIO19

//CODIGO EJERCICIO20
//CODIGO EJERCICIO20
const arrayEjercicio20 = [[3], [6], [9], [12], [15]];
const btnEj20 = document.querySelector('.ej20Btn');
const responseEj20 = document.querySelector('.response-ejercicio-20');
btnEj20.addEventListener(
	'click',
	() =>
		(responseEj20.innerText = `respuesta ${arrayEjercicio20.flatMap(
			(n) => parseInt(n) + 3
		)}`)
);

//CODIGO EJERCICIO20
//CODIGO EJERCICIO20

//CODIGO EJERCICIO21
//CODIGO EJERCICIO21
const formEjercicio21 = document.querySelector('.ejercicio-21-form');

formEjercicio21.addEventListener('submit', (e) => {
	const response = document.querySelector('.response-ejercicio-21');
	const inputsFormEjercicio21 = document.querySelectorAll(
		'.ejercicio-21-form input'
	);
	const selectFormEjercicio21 = document.querySelectorAll(
		'.ejercicio-21-form select'
	);
	e.preventDefault();
	let formData = [];
	for (const input of inputsFormEjercicio21) {
		let inptName = input.name;

		formData = [...formData, e.target[inptName].value];
	}
	for (const select of selectFormEjercicio21) {
		let selectName = select.name;

		formData = [...formData, e.target[selectName].value];
	}
	// ${loopThroughData(formData).join().replace(/,/g, ' ')}
	response.innerHTML = `informacion formulario
					<ul>
						${formData
							.map((value) => `<li>${value}</li>`)
							.join()
							.replace(/,/g, ' ')}
					</ul>`;

	e.target.reset();
});

//CODIGO EJERCICIO21
//CODIGO EJERCICIO21

//CODIGO EJERCICIO22
//CODIGO EJERCICIO22
const colorBS = 'var(--bs-teal)';
const msgEj22 = document.querySelector('.msgEj22');

const setMsg = (e) => {
	e.preventDefault();

	msg = e.target.msgEj22Input.value || 'default message';
	(msgEj22.style.backgroundColor = colorBS), (msgEj22.innerText = msg);
};
document.querySelector('.ejercicio-22-form').addEventListener('submit', setMsg);
//CODIGO EJERCICIO22
//CODIGO EJERCICIO22

//CODIGO EJERCICIO23
//CODIGO EJERCICIO23
let ej23Txt = document.querySelector('.ej23Text').innerText;
let responseEj23 = ej23Txt
	.split(' ')
	.map((word) => (word.length > 7 ? (word = `<mark>${word}</mark>`) : word))
	.join()
	.replace(/,/g, ' ');
document.querySelector('.ej23response').innerHTML = 'respuesta = '.concat(
	responseEj23
);
//CODIGO EJERCICIO23
//CODIGO EJERCICIO23

//CODIGO EJERCICIO24
//CODIGO EJERCICIO24
const formEjercicio24 = document.querySelector('.ejercicio-24-form');
const range = document.querySelector('.form-range');

// range.ondrag = (e) => {
// 	return console.log(e.target.value);
// };
// range.oninput = () => {
// 	return console.log(this.value);
// };
// range.onchange = (e) => {
// 	return console.log(e.target.value);
// };
const circle = document.querySelector('.circle');
const handleRange = (e) => {
	const val = e.target.value;
	let response = '';
	switch (val) {
		case '1':
			response = 'aqua';
			break;
		case '2':
			response = 'gold';
			break;
		case '3':
			response = 'lightgrey';
			break;
		case '4':
			response = 'black';
			break;
		case '5':
			response = 'salmon';
			break;
	}

	circle.style.backgroundColor = response;
};
['input', ' change', ' drag'].map((e) =>
	range.addEventListener(e, handleRange)
);

// range.addEventListener('change', handleRange);
// range.addEventListener('drag', handleRange);

formEjercicio24.addEventListener('submit', (e) => {
	const response = document.querySelector('.response-ejercicio-24');
	e.preventDefault();
	formVal = e.target.radioEj24Input.value;
	response.innerText = `radio del circulo ${formVal} cm`;

	circle.style.height = `${formVal}px`;
	circle.style.width = `${formVal}px`;

	e.target.reset();
});

//CODIGO EJERCICIO24
//CODIGO EJERCICIO24

//CODIGO EJERCICIO25
//CODIGO EJERCICIO25
const formEjercicio25 = document.querySelector('.formEj25');
const handleFormEj25 = (e) => {
	e.preventDefault();
	const inputs = formEjercicio25.querySelectorAll('input');
	let formData = '';
	inputs.forEach((input) => {
		formData += `<li> ${input.name} : ${input.value}</li>`;
	});
	document.querySelector('.formEj25Data').innerHTML = formData;
};
formEjercicio25.addEventListener('submit', handleFormEj25);

//CODIGO EJERCICIO25
//CODIGO EJERCICIO25
