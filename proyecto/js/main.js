'use strict'

$(document).ready(function () {
    resetFields();
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

const loadModel = (vehicleID, type, model = 0) => {
    let query = "token=" + "25b" + "&vehicleID=" + vehicleID + "&type=" + type + "&model=" + model;
    $.ajax({
        type: "POST",
        url: "http://localhost/proyectoGrupoOptima/proyecto/functions/getModels.php",
        data: query,
        success: function (res) {
            eval(res);
            if (type == "edit") {
                document.getElementById("modelEdit").disabled = false;
                
            } else {
                document.getElementById("model").disabled = false;
            }
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

const detailQuotation = (quotationID) => {
    let query = "token=" + "25f" + "&quotationID=" + quotationID;
    $.ajax({
        type: "POST",
        url: "http://localhost/proyectoGrupoOptima/proyecto/functions/getQuotationDetail.php",
        data: query,
        success: function (res) {
            eval(res);
        }
    });
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


const validateSubmit = (type) => {
    flag = true;
    if (type == "edit") {
        validateSubmitErrorMessage("nameEdit");
        validateSubmitErrorMessage("lastNameEdit");
        validateSubmitErrorMessage("ageEdit");
        validateSubmitErrorMessage("phoneEdit");
        validateSubmitErrorMessage("mailEdit");
        validateSubmitErrorMessage("vehicleEdit");
        validateSubmitErrorMessage("modelEdit");
        if (flag == true) {
            document.getElementById("editForm").submit();
        }
    } else {
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

const resetFields = () => {
    document.getElementById("name").value = "";
    document.getElementById("lastName").value = "";
    document.getElementById("age").value = "";
    document.getElementById("phone").value = "";
    document.getElementById("mail").value = "";
    document.getElementById("vehicle").value = "-1";
    document.getElementById("model").value = "-1";
    document.getElementById("model").disabled = true;
}