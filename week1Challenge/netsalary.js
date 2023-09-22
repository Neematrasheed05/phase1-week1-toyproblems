//function to calculate net salary
function calculateNetSalary(basicSalary, benefits){
    //const for KRA.NHIF,NSSF values
    const KRA_VALUE =0.3;
    const NHIF_VALUE = 500;
    const NSSF_VALUE = 0.05;
    //calculate payee(tax)
    const payee = basicSalary * KRA_VALUE;
    //calculate NHIF deductions
    const nhifDeductions = NHIF_VALUE;
    //calculate NSSF deductions
    const nssfDeductions = basicSalary * NSSF_VALUE;
    //calculate gross salary
    const grossSalary = basicSalary + benefits;
    //calculate net salary
    const netSalary = grossSalary - payee - nhifDeductions - nssfDeductions;
    //return net Salary 
    return netSalary;
}