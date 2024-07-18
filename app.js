
function userDOB() {
    var date = parseInt(document.getElementById('userDate').value);
    var monthName = document.getElementById('userMonth').value;
    var year = parseInt(document.getElementById('userYear').value);
    monthName = String(monthName).toLowerCase()
    
    const monthNames = ["january", "february", "march", "april", "may", "june", "july", "august", "september", "october", "november", "december",
                        "jan", "feb", "aug", "sep", "oct", "nov", "dec" 
    ];
    let month = monthNames.indexOf(monthName);

    if (isNaN(date) || month === -1 || isNaN(year)) {
        alert("Please enter valid date, month, and year.");
        return;
    }

    
    

    const dob = new Date(year, month, date);
    const today = new Date();
    const age = calculateAge(dob, today);

    month = monthNames[month];
    month = month[0].toUpperCase() + month.slice(1)
    console.log(month);

    document.getElementById('ageYears').textContent = age.years;
    document.getElementById('ageMonths').textContent = age.months;
    document.getElementById('ageDays').textContent = age.days;

    document.getElementById('dobDayOfWeek').textContent = dob.toLocaleString('default', { weekday: 'long' });
    document.getElementById('dobMonth').textContent = month;
    document.getElementById('dobDate').textContent = date;
    document.getElementById('dobYear').textContent = year;

    document.getElementById('livedYears').textContent = age.years;
    document.getElementById('livedMonths').textContent = (age.years * 12) + age.months;
    document.getElementById('livedWeeks').textContent = Math.floor((today - dob) / (1000 * 60 * 60 * 24 * 7));
    document.getElementById('livedDays').textContent = Math.floor((today - dob) / (1000 * 60 * 60 * 24));
    document.getElementById('livedHours').textContent = Math.floor((today - dob) / (1000 * 60 * 60));
}

function calculateAge(dob, today) {
    let years = today.getFullYear() - dob.getFullYear();
    let months = today.getMonth() - dob.getMonth();
    let days = today.getDate() - dob.getDate();

    if (days < 0) {
        months -= 1;
        days += new Date(today.getFullYear(), today.getMonth(), 0).getDate();
    }

    if (months < 0) {
        years -= 1;
        months += 12;
    }

    return { years, months, days };
}
