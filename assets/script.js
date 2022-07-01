var timeDisplayEl = $('#time-display');
var projectDisplayEl = $('#project-display');
var projectModalEl = $('#project-modal');
var projectFormEl = $('#project-form');
var projectNameInputEl = $('#project-name-input');
var projectTypeInputEl = $('#project-type-input');
var hourlyRateInputEl = $('#hourly-rate-input');
var dueDateInputEl = $('#due-date-input');


function displayTime() {
    var rightNow = moment().format('MMM DD, YYYY hh:mm:ss')
    timeDisplayEl.text(rightNow);
}

function addProjectData(name, type, rate, date) {
    var rowEl = $('<tr>');

    var nameEl = $('<td>').text(name);

    var typeEl = $('<td>').text(type)

    var rateEl = $('<td>').text(rate);

    var dateEl = $('<td>').text(date);

    var daystoDate = moment(date, 'MM/DD/YYYY').diff(moment(), 'days');

    var daysToEl = $('<td>').text(daystoDate);

    var totalEarnings = (rate * 8) * daystoDate

    var earningsEl = $('<td>').text(totalEarnings)

    var deleteBtn = $('<td>').addClass('delete-btn').text('X')



    rowEl.append(
        nameEl,
        typeEl,
        rateEl,
        dateEl,
        daysToEl,
        earningsEl,
        deleteBtn
    )

    projectDisplayEl.append(rowEl);

    projectModalEl.modal('hide')

}

function deleteBtn (event) {
    var clickedBtn = $(event.target);

    clickedBtn.parent('tr').remove()

}


function submitProject(event) {
    event.preventDefault();

    var projectName = projectNameInputEl.val().trim();
    var projectType = projectTypeInputEl.val().trim();
    var hourlyRate = hourlyRateInputEl.val().trim();
    var dueDate = dueDateInputEl.val().trim();

    addProjectData(projectName, projectType, hourlyRate, dueDate)
}

projectFormEl.on('submit', submitProject)
dueDateInputEl.datepicker({minDate: 1})
projectDisplayEl.on('click', '.delete-btn', deleteBtn)

setInterval(displayTime, 1000)