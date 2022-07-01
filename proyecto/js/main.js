'use strict'

$(document).ready(function () {
    loadReport();
    loadVehicle();
});

const loadVehicle = () => {
    let query = "token=" + "25a";
    $.ajax({
        type: "POST",
        url: "http://localhost/proyectoGrupoOptima/proyecto/functions/getVehicles.php",
        data: query,
        success: function (res) {
            eval(res);
        }
    });
}

const loadModel = (vehicleID) => {
    let query = "token=" + "25b" + "&vehicleID=" + vehicleID;
    $.ajax({
        type: "POST",
        url: "http://localhost/proyectoGrupoOptima/proyecto/functions/getModels.php",
        data: query,
        success: function (res) {
            eval(res);
            document.getElementById("model").disabled = false;
        }
    });
}

const loadReport = () => {
    let query = "token=" + "25d";
    $.ajax({
        type: "POST",
        url: "http://localhost/proyectoGrupoOptima/proyecto/functions/quotationReport.php",
        data: query,
        success: function (res) {
            eval(res);
        }
    });
}

const deleteQuotation = (quotationID) => {
    if (confirm('¿Esta seguro de eliminar este registro?')) {
        let query = "token=" + "25d" + "&quotationID=" + quotationID;
        $.ajax({
            type: "POST",
            url: "http://localhost/proyectoGrupoOptima/proyecto/functions/deleteQuotation.php",
            data: query,
            success: function (res) {
                loadReport();
            }
        });
    }
}


var flag = true;

const validateTextField = (value, elementID) => {
    removeErrorMessage(elementID);
    if (value.length > 1) {
        let regEx = /^[a-zA-ZÀ-ÿ\s\u00f1\u00d1]*$/;
        if (!value.match(regEx)) {
            returnErrorMessage("Este campo solo puede contener letras y espacios", elementID);
        }
    } else {
        returnErrorMessage("Favor de completar este campo", elementID);
    }
}

const validateNumberField = (value, elementID) => {
    removeErrorMessage(elementID);
    if (value.length > 0) {
        if (value.match(/^\d+/)) {
            if (elementID == "age" && value < 18) {
                returnErrorMessage("El interesado no puede ser menor de 18 años", elementID);
            }
            if (elementID == "phone" && value.length < 10) {
                returnErrorMessage("Este campo tiene una longitud minima de 10 números", elementID);
            }
        } else {
            returnErrorMessage("Este campo solo puede contener números", elementID);
        }
    } else {
        returnErrorMessage("Favor de completar este campo", elementID);
    }
}

const validateMailField = (value, elementID) => {
    removeErrorMessage(elementID);
    if (value.length > 4) {
        let regEx = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
        if (!value.match(regEx)) {
            returnErrorMessage("Debe ingresar un correo valido", elementID);
        }
    } else {
        returnErrorMessage("Favor de completar este campo", elementID);
    }
}

const validateSelectField = (value, elementID) => {
    removeErrorMessage(elementID);
    if (value < 0) {
        returnErrorMessage("Favor de seleccionar una opción valida", elementID);
    }
}


const validateSubmit = () => {
    flag = true;
    validateSubmitErrorMessage("name");
    validateSubmitErrorMessage("lastName");
    validateSubmitErrorMessage("age");
    validateSubmitErrorMessage("phone");
    validateSubmitErrorMessage("mail");
    validateSubmitErrorMessage("vehicle");
    validateSubmitErrorMessage("model");
    if (flag == true) {
        document.getElementById("form").submit();
    }
}

const returnErrorMessage = (message, elementID) => {
    $("#" + elementID).css("border-color", "red");
    $("<div class='errorMessage' id='errorMessage" + elementID + "'>" + message + "</div>").insertAfter("#" + elementID);
    document.getElementById(elementID).dataset.validate = "false";
}

const removeErrorMessage = (elementID) => {
    $("#" + elementID).css("border-color", "black");
    $("#errorMessage" + elementID).remove();
    document.getElementById(elementID).dataset.validate = "true";
}

const validateSubmitErrorMessage = (elementID) => {
    if (document.getElementById(elementID).dataset.validate == "false") {
        removeErrorMessage(elementID);
        returnErrorMessage("Favor de completar este campo", elementID);
        flag = false;
    }
}
