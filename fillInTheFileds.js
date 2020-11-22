javascript: (function() {

    var name = generateRandomString(10);
    var surname = generateRandomString(10);
    var phoneNumber = generateRandomPhoneNumber();
    var email = getDateTime() + "@test.com";
    var message = "Hi! I would like to start working on the project on " + getStartDate();
    var dynamicSelectId = document.getElementsByTagName("select")[1].id;
    var selectId = document.getElementById(dynamicSelectId);

    var FORM_LOCATOR = "//div[@id='something-else']//form[contains(@id, 'hsForm_')]";
    var NAME_INPUT_LOCATOR = FORM_LOCATOR + "//input[contains(@id,'firstname-')]";
    var SURNAME_INPUT_LOCATOR = FORM_LOCATOR + "//input[contains(@id,'lastname-')]";
    var EMAIL_INPUT_LOCATOR = FORM_LOCATOR + "//input[contains(@id,'email-')]";
    var PHONE_INPUT_LOCATOR = FORM_LOCATOR + "//input[contains(@id,'phone-')]";
    var MESSAGE_INPUT_LOCATOR = FORM_LOCATOR + "//textarea[contains(@id,'notes__')]";

    function typeValueInTheField(elem, val) {
        var input = getElementByXpath(elem);
        input.value = val;
        input.dispatchEvent(new Event('input'));
    }

    function getElementByXpath(path) {
        return document.evaluate(path, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
    }

function getDateTime() {
    var now = new Date();
    var day = now.getDate();
    var month = now.getMonth() + 1;
    var year = now.getFullYear();
    var hour = now.getHours();
    var minute = now.getMinutes();
    var second = now.getSeconds();

    if (day < 10) {
        day = '0' + day;
    }

    if (month < 10) {
        month = '0' + month;
    }

    if (hour < 10) {
        hour = '0' + hour;
    }

    if (minute < 10) {
        minute = '0' + minute;
    }

    if (second < 10) {
        second = '0' + second;
    }

    return [day, month, year, hour, minute, second].join('');
}

    function getStartDate() {
        var now = new Date();
        now.setDate(now.getDate() + 3); //+3 days from the current date

        var day = now.getDate();
        var month = now.getMonth() + 1;
        var year = now.getFullYear();

        var startDate = day + "/" + month + "/" + year;
        return startDate;
    }

    function generateRandomString(length) {
        var text = "";
        var possible = "abcdefghijklmnopqrstuvwxyz";

        for (var i = 0; i < length; i++) {
            text += possible.charAt(Math.floor(Math.random() * possible.length));
        }

        return text[0].toUpperCase() + text.slice(1);
    }

    function generateRandomPhoneNumber() {
        var length = 10;
        var phone = "";
        var possible = "0123456789";

        for (var i = 0; i < length; i++)
            phone += possible.charAt(Math.floor(Math.random() * possible.length));

        return "+7" + phone;
    }

    function selectItemByValue(elem, value) {
        for (var i = 0; i < elem.options.length; i++) {
            if (elem.options[i].value == value)
                elem.selectedIndex = i;
        }
    }

    selectItemByValue(selectId, "A career with Omada");
    typeValueInTheField(NAME_INPUT_LOCATOR, name);
    typeValueInTheField(SURNAME_INPUT_LOCATOR, surname);
    typeValueInTheField(EMAIL_INPUT_LOCATOR, email);
    typeValueInTheField(PHONE_INPUT_LOCATOR, phoneNumber);
    typeValueInTheField(MESSAGE_INPUT_LOCATOR, message);
})();
