// TODO: Write code to define and export the Manager class. HINT: This class should inherit from Employee.
const Employee = require('./Employee');

class Manager extends Employee{

    constructor(name, id, email, officeNo){
        super(name, id, email);
        this.officeNo = officeNo;
    }

    getOfficeNo(){
       return this.officeNo;
    } 

    getRoll(){
        return "Manager";
    }
}

module.exports = Manager;
