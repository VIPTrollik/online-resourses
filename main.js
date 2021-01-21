function ConvertForm(form) {
    var UserValue;

    for (var loop = 1; loop <= form.count; loop++)
        if (form[loop].value.length != 0) {
            UserValue = form[loop].value / form[loop].factor;
            break;
        }
    document.getElementById("info").innerHTML = UserValue.toString() + "   "+ form[loop].value;
    for (var loop = 1; loop <= form.count; loop++)
        form[loop].value = (UserValue * form[loop].factor).toPrecision(4);
}

function ClearForm(form) {
    for (var loop = 1; loop <= form.count; loop++)
        form[loop].value = "";
}