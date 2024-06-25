function Bank(bankName, location, ifscCode, branchCode){
    this.bankName= bankName;
    this.location = location;
    this.ifscCode = ifscCode;
    this.branchCode = branchCode;
}
const yesBank = new Bank("Yes Bank", "baner", "YES000899", 7600);
console.log(`Yes Bank Details: ${yesBank.bankName}, ${yesBank.location}, ${yesBank.ifscCode}, ${yesBank.branchCode}`);

const sbiBank = new Bank("Sbi Bank", "surat", "sbi000778", 8600);
console.log(`Sbi Bank Details: ${sbiBank.bankName}, ${sbiBank.location}, ${sbiBank.ifscCode}, ${sbiBank.branchCode}`);

const mahBank = new Bank("mah Bank", "pimpri", "mah000566", 4600);
console.log(`Mah Bank Details: ${mahBank.bankName}, ${mahBank.location}, ${mahBank.ifscCode}, ${mahBank.branchCode}`);

const axisBank = new Bank("Axis Bank", "mumbai", "axis000899", 3600);
console.log(`Axis Bank Details: ${axisBank.bankName}, ${axisBank.location}, ${axisBank.ifscCode}, ${axisBank.branchCode}`);

Bank.prototype.openTime = "9 AM IST";
Bank.prototype.closeTime = "6 PM IST";

console.log(`Sbi Bank Open time ${sbiBank.openTime}, And close time ${sbiBank.closeTime}`);
console.log(`Axis Bank Open time ${axisBank.openTime}, And close time ${axisBank.closeTime}`);
console.log(`Bank Name : ${yesBank.bankName}, Branch Code: ${yesBank.branchCode}, Open Time: ${yesBank.openTime}`);