const validateNameLength = (value) => value.length < 3 && "Debe tener al menos 3 letras";

const validateEmail = (value) => {
    let regex =  /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/;
    return !value.match(regex) && "Debe tener un formato de email válido.";
}

const validateEdad = (value) => {
    if(isNaN(value) || 1 > value || value > 99){
        return "Número de al menos 7 dígitos, no aceptar espacios, guiones ni paréntesis.";
    }
}

const validateSexo = (value) => !value && "Debe seleccionar un sexo valido."

const validatePais = (value) => !value && "Debe seleccionar un pais valido."

const validateIntereses = (values) => {

}

export { 
    validateNameLength,
    validateEmail,
    validateEdad,
    validateSexo,
    validatePais,
    validateIntereses
}