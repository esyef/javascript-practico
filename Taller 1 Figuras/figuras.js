// Código del cuadrado

console.group("Cuadrado");
const ladosCuadrado = 25;
console.log(`Todos los lados del cuadrado miden: ${ladosCuadrado} cm`);

const perimetoCuadrado = ladosCuadrado * 4;
console.log(`Perímetro del cuadrado: ${perimetoCuadrado} cm`);

const areaCuadrado = ladosCuadrado * ladosCuadrado;
console.log(`Área cuadrado: ${areaCuadrado} cm^2`);

console.groupEnd();

// Código del triangulo

console.group("Triangulo");
const baseTriangulo = 4;
const ladoTriangulo1 = 6;
const ladoTriangulo2 = 6;
const alturaTriangulo = 5.5;

console.log(`Los lados del triangulo miden 
    Lado 1: ${ladoTriangulo1} cm
    Lado 2 : ${ladoTriangulo2}} cm
    Base : ${baseTriangulo} cm
    Altura: ${alturaTriangulo} cm
`);

console.log(`Perímetro triangulo: ${
  baseTriangulo + ladoTriangulo1 + ladoTriangulo2
} cm
`);

console.log(`Área triangulo ${(baseTriangulo * alturaTriangulo) / 2} cm
`);
console.groupEnd();

//Código circunferencia

console.group("Circulo");

const radioCirculo = 4;

console.log(`Radio circulo: ${radioCirculo}`);

const diametroCirculo = radioCirculo * 2;
console.log(`Diametro circulo: ${diametroCirculo}`);

const PI = Math.PI;
console.log(`PI: ${PI}`);

const circunferenciaCirculo = diametroCirculo * PI;
console.log(`Circunferencia circulo: ${circunferenciaCirculo}`);

const areaCirculo = radioCirculo * 2 * PI;
console.log(`Área circulo: ${areaCirculo}`);

console.groupEnd();
