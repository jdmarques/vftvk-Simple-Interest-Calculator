function populateYearsDropdownList()
{
    let yearDropdown = document.getElementById('years');

    for (var i = 1; i < 100; i++) {
        let yearOption = document.createElement('option');
        yearOption.text = i;
        yearOption.value = i;
        yearDropdown.add(yearOption);
    }
}

function sliderRangeUpdate() {
    var rangeslider = document.getElementById("sliderRange");
    var output = document.getElementById("sliderValue");
    output.innerHTML = rangeslider.value;

    rangeslider.oninput = function() {
        Rate = this.value;
        output.innerHTML = this.value;
    }
}

function compute()
{
    if (!document.getElementById("amount").value)
    {
        alert("Amount must be defined");
        return;
    }

    let amount = document.getElementById("amount").value;
    let rate = document.getElementById("sliderRange").value;
    let years = document.getElementById("years").value;
    const d = new Date()
    let currentYear = parseInt(d.getFullYear()) + parseInt(years)

    document.getElementById("computeOut1").innerHTML = "If you deposit " + amount + ","
    document.getElementById("computeOut2").innerHTML = "at an interest rate of " + rate + "%,"
    document.getElementById("computeOut3").innerHTML = "you'll receive " + (amount * rate * years / 100) + ","
    document.getElementById("computeOut4").innerHTML = "In the year " + currentYear
}

function validateAmount(node)
{
    if (document.getElementById("amount").value < 1 )
    {
        alert("Amount must be bigger than 0");
        node.focus();
    }
}