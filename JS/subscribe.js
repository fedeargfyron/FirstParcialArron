import { 
    validateNameLength,
    validateEmail,
    validateEdad,
    validateSexo,
    validatePais,
    validateIntereses
} from './validations.js';

const fieldsValidations = {
    "name": (value) => validateNameLength(value),
    "apellido": (value) => validateNameLength(value),
    "email": (value) => validateEmail(value),
    "sexo": (value) => validateSexo(value),
    "edad": (value) => validateEdad(value),
    "pais": (value) => validatePais(value),
    "intereses": (values) => validateIntereses(values)
}

const validations = (e) => {
    let alertValue = fieldsValidations[e.id](e.value);
    if(alertValue){
        let label = document.getElementById(`lbl${e.id}`);
        label.innerHTML = alertValue;
        label.classList.add("visible");
        e.classList.add("error");
    }
}

const validationsListener = (e) => {
    validations(e.target);
}

const removeLabel = (e) => {
    let element = document.getElementById(e.target.id);
    element.classList.remove("error");

    let label = document.getElementById(`lbl${e.target.id}`);
    label.classList.remove("visible");
}

const validateAll = () => {
    let inputs = document.querySelectorAll("input[type=text]");
    inputs.forEach(x => validations(x));
}

const submit = (e) => {
    e.preventDefault();
    validateAll();
    if(document.getElementsByClassName("error").length > 0){
        return alert("Error en al menos 1 campo");
    }
    e.submit();
}

window.onload = () => {
    document.getElementById("submitBtn").addEventListener("click", submit)
    let inputs = document.querySelectorAll("input[type=text]");
    inputs.forEach(x => x.addEventListener("blur", validationsListener))
    inputs.forEach(x => x.addEventListener("focus", removeLabel))
}