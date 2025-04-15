function calcularIMC(peso, altura) {
    const imc = peso / (altura * altura);
    return imc;
}

function clasificarIMC(imc) {
    if (imc < 18.5) {
        return "Peso insuficiente";
    } else if (imc >= 18.5 && imc <= 24.9) {
        return "Peso saludable";
    } else if (imc >= 25 && imc <= 29.9) {
        return "Sobrepeso";
    } else if (imc >= 30 && imc <= 34.9) {
        return "Obesidad (Grado I)";
    } else if (imc >= 35 && imc <= 39.9) {
        return "Obesidad severa (Grado II)";
    } else {
        return "Obesidad extrema (Grado III)";
    }
} 
module.exports.moduloCalcularIMC=calcularIMC;
module.exports.moduloClasificarIMC=clasificarIMC;