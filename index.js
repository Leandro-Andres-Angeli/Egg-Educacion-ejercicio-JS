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
    area del circulo ${(parseInt(e.target.circleRadio.value) * Math.PI).toFixed(
			2
		)}cm<sup>2</sup>
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

//CODIGO EJERCICIO 10
//CODIGO EJERCICIO 10
