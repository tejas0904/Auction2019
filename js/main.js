
(function ($) {
    console.log("hello")
    "use strict";
    let jerseySize = $('#jerseySize');
    let registerForm =  $('#register-form');
    jerseySize.parent().append('<ul class="list-item" id="newjerseySize" name="jerseySize"></ul>');
    $('#jerseySize option').each(function () {
        $('#newjerseySize').append('<li value="' + $(this).val() + '">' + $(this).text() + '</li>');
    });
    jerseySize.remove();
    $('#newjerseySize').attr('id', 'jerseySize');
    $('#jerseySize li').first().addClass('init');
    jerseySize.on("click", ".init", function () {
        $(this).closest("#jerseySize").children('li:not(.init)').toggle();
    });

    let allOptions = jerseySize.children('li:not(.init)');
    jerseySize.on("click", "li:not(.init)", function () {
        allOptions.removeClass('selected');
        $(this).addClass('selected');
        $("#jerseySize").children('.init').html($(this).html());
        allOptions.toggle();
    });

    let battingSlider = document.getElementById('slider-margin');
    if (battingSlider !== undefined) {
        noUiSlider.create(battingSlider, {
            start: [5],
            step: 1,
            connect: [true, false],
            tooltips: [true],
            range: {
                'min': 0,
                'max': 10
            },
            format: wNumb({
                decimals: 0,
                thousand: ',',
                prefix: ' ',
            })
        });
    }


    let bowlingSlider = document.getElementById('slider-margin1');
    if (bowlingSlider !== undefined) {
        noUiSlider.create(bowlingSlider, {
            start: [5],
            step: 1,
            connect: [true, false],
            tooltips: [true],
            range: {
                'min': 0,
                'max': 10
            },
            format: wNumb({
                decimals: 0,
                thousand: ',',
                prefix: ' ',
            })
        });
    }

    let fieldingSlider = document.getElementById('slider-margin2');
    if (fieldingSlider !== undefined) {
        noUiSlider.create(fieldingSlider, {
            start: [5],
            step: 1,
            connect: [true, false],
            tooltips: [true],
            range: {
                'min': 0,
                'max': 10
            },
            format: wNumb({
                decimals: 0,
                thousand: ',',
                prefix: ' ',
            })
        });
    }

    $('#reset').on('click', function () {
        $('#register-form').reset();
    });

    registerForm.validate({
        rules: {
            first_name: {
                required: true,
            },
            last_name: {
                required: true,
            },
            email: {
                required: true,
                email: true
            },
            phone_number: {
                required: true,
            }
        },
        onfocusout: function (element) {
            $(element).valid();
        },
    });

    jQuery.extend(jQuery.validator.messages, {
        required: "",
        remote: "",
        email: "",
        url: "",
        date: "",
        dateISO: "",
        number: "",
        digits: "",
        creditcard: "",
        equalTo: ""
    });
    registerForm.submit(function (event) {
        console.log(battingSlider.noUiSlider.get());
        event.preventDefault();

        const url = "http://localhost:8080/playerdetails";
        const Data = {
            firstName: document.getElementById("first_name").value,
            lastName: document.getElementById("last_name").value,
            email: document.getElementById("email").value,
            mobileNumber : parseInt(document.getElementById("phone_number").value.replace(/-/g,'')),   // this line will remove dash in string and convert it to integer
            streetAddress: document.getElementById("street_number").value + document.getElementById("route").value,
            city: document.getElementById("locality").value,
            state: document.getElementById("administrative_area_level_1").value,
            zipCode: document.getElementById("postal_code").value,
            country: document.getElementById("country").value,
            jerseyNumber: document.getElementById("chequeno").value,
            sevaCollector:document.getElementById("locality").value,
            jerseySize :document.getElementById("locality").value,
            isPaid: false,
            // photo :document.getElementById("locality").value,
            battingRating :battingSlider.noUiSlider.get(), // getter syntax for the value of slider
            bowlingRating :bowlingSlider.noUiSlider.get(),
            fieldingRating :fieldingSlider.noUiSlider.get(),
            //  battingComment :document.getElementById("locality").value,
            // bowlingComment :document.getElementById("locality").value,
            //  fieldingComment : document.getElementById("locality").value
        };


        const otherParam = {
            headers: {
                "content-type": "application/json; charset=UTF-8",
            },
            body: JSON.stringify(Data),
            method: "POST",
            mode: "cors", // no-cors, cors, *same-origin
            cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
            credentials: "same-origin" // include, *same-origin, omit
        };

        fetch(url, otherParam)
            .then(data => {
                return JSON.stringify(data)
            })
            .then(res => {
                alert("Successfully submitted! voila! " + res)
            })
            .then(error => console.log(error))

    });


})(jQuery);