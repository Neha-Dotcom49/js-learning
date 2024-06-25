function monthOfYear(month){
    switch (month) {
        case 1:
            console.log("january");
            break;
        case 2:
            console.log("February");
            break;
        case 3:
            console.log("March");
            break;
        case 4:
            console.log("April");
            break;
        case 5:
            console.log("May");
            break;
        case 6:
            console.log("June");
            break;
            case 7:
                console.log("July");
                break;
            case 8:
                console.log("August");
                break;
            case 9:
                console.log("September");
                break;
            case 10:
                console.log("October");
                break;
            case 11:
                console.log("November");
                break;
            case 12:
                console.log("December");
                break;
            default:
                console.log("Invalid month plz enter Month between 1 to 12");
        }
    }
    monthOfYear(0); // Output: january
    monthOfYear(2); // Output: february
    monthOfYear(5); // Output: march
    monthOfYear(12); // Output: May
    monthOfYear(15); // Output: December
    monthOfYear(100); // Output: Invalid month
    monthOfYear(100); // Output: Invalid month
    monthOfYear(null); // Output: Invalid month
    monthOfYear(undefined); // Output: Invalid month
    
    
    
