CREATE DATABASE grupoOptimaExamen;

CREATE TABLE VEHICLE(
    vehicleID int NOT NULL AUTO_INCREMENT,
    vehicleName varchar(255) NOT NULL,
    PRIMARY KEY (vehicleID)
);

CREATE TABLE MODEL(
    modelID int NOT NULL AUTO_INCREMENT,
    modelName varchar(255) NOT NULL,
    vehicleID int NOT NULL,
    PRIMARY KEY (modelID),
    FOREIGN KEY (vehicleID) REFERENCES VEHICLE(vehicleID)
);

CREATE TABLE QUOTATION(
    quotationID int NOT NULL AUTO_INCREMENT,
    personName varchar(255) NOT NULL,
    personLastName varchar(255) NOT NULL,
    personAge int NOT NULL,
    personPhone varchar(30) NOT NULL,
    personMail varchar(255) NOT NULL,
    vehicleID int NOT NULL,    
    modelID int NOT NULL,
    PRIMARY KEY (quotationID),
    FOREIGN KEY (vehicleID) REFERENCES VEHICLE(vehicleID),
    FOREIGN KEY (modelID) REFERENCES MODEL(modelID)
);


INSERT INTO VEHICLE VALUES(1,"Honda"),(2,"KIA"),(3,"Ford"),(4,"Nissan");
INSERT INTO MODEL VALUES(null,"CRV",1),(null,"HRV",1),(null,"BRV",1),(null,"SOUL",2),(null,"RIO",2),(null,"SPORTAGE",2),(null,"MUSTANG",3),(null,"ESCAPE",3),(null,"FIESTA",3),(null,"VERSA",4),(null,"MARCH",4),(null,"SENTRA",4);