
const GetDate = () => {
    let result = [];
    let newDate = new Date();

    let currDay = newDate.getDate().toString();
    let currMonth = (newDate.getMonth() + 1).toString();
    let currYear = newDate.getFullYear().toString();
    let currDateString = `${currYear}-${currMonth}-${currDay}`;

    let yesterday =  newDate.setDate(newDate.getDate() - 1);
    let yesterdayDate = new Date(yesterday);
    let lastDay = yesterdayDate.getDate().toString();
    let lastMonth = (yesterdayDate.getMonth() + 1).toString();
    let lastYear = yesterdayDate.getFullYear().toString();
    let yesterdayDateString = `${lastYear}-${lastMonth}-${lastDay}`;

    result.push(yesterdayDateString);
    result.push(currDateString);

    return (result);
}

// GetDate()
export default GetDate;

