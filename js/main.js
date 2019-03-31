
(function ($) {
    "use strict";
    let registerForm =  $('#register-form');
    $('#jerseySize').parent().append('<ul class="list-item" id="newjerseySize" name="jerseySize"></ul>');
    $('#jerseySize option').each(function () {
        $('#newjerseySize').append('<li value="' + $(this).val() + '">' + $(this).text() + '</li>');
    });
    $('#jerseySize').remove();
    $('#newjerseySize').attr('id', 'jerseySize');
    $('#jerseySize li').first().addClass('init');
    $('#jerseySize').on("click", ".init", function () {
        $(this).closest("#jerseySize").children('li:not(.init)').toggle();
    });

    let allOptions = $('#jerseySize').children('li:not(.init)');
    $('#jerseySize').on("click", "li:not(.init)", function () {
        allOptions.removeClass('selected');
        $(this).addClass('selected');
        $("#jerseySize").children('.init').html($(this).html());
        allOptions.toggle();
    });

//    var range_all_sliders = {
//	'min': [     0 ],
//	'10%': [   50,  50 ],
//	'50%': [  400, 100 ],
//	'max': [ 1000 ]
//}
    
    
    
    
    
    
    let battingSlider = document.getElementById('slider-margin');
    if (battingSlider !== undefined) {
        noUiSlider.create(battingSlider, {
            start: [5],
            step: 1,
            connect: [true,false],
            tooltips: [true],
            range: {
                'min': 0,
//                '10%':['best'],
//                '20%':[2,'worst'],
                'max': [10]
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

    function checkForValidations() {
        //check validations over here, and make this function as Promise
    }

    registerForm.submit(function (event) {
        event.preventDefault();
        //const url1 = "http://apl2019.us-east-2.elasticbeanstalk.com/playerdetails";
       const url = "http://aplreg2019.us-east-2.elasticbeanstalk.com/webapi/player/playerDetails";


       checkForValidations();

        const Data = {
            firstName: document.getElementById("first_name").value.trim(),
            lastName: document.getElementById("last_name").value.trim(),
            email: document.getElementById("email").value.trim(),
            mobileNumber : parseInt(document.getElementById("phone_number").value.trim().replace(/-/g,'')),   // this line will remove dash in string and convert it to integer
            streetAddress: document.getElementById("street_number").value.trim() + document.getElementById("route").value.trim(),
            city: document.getElementById("locality").value.trim(),
            state: document.getElementById("administrative_area_level_1").value.trim(),
            zipCode: document.getElementById("postal_code").value.trim(),
            country: document.getElementById("country").value.trim(),
            jerseyNumber: parseInt(document.getElementById("chequeno").value.trim() === undefined ? 0 : document.getElementById("chequeno").value.trim()),
            sevaCollector:document.getElementById("locality").value.trim(),
            jerseySize :document.getElementById("jerseySize").value ===  undefined ? "medium" : document.getElementById("jerseySize").value.trim(),
            isPaid: false,
            photo :"document.getElementByIdfgn.value",
            battingRating :parseInt(battingSlider.noUiSlider.get().trim()), // getter syntax for the value of slider
            bowlingRating :parseInt(bowlingSlider.noUiSlider.get().trim()),
            fieldingRating :parseInt(fieldingSlider.noUiSlider.get().trim()),
            battingComment :document.getElementById("battingComments").value.trim(),
            bowlingComment :document.getElementById("bowlingComments").value.trim(),
            fieldingComment : document.getElementById("fieldingComments").value.trim()
        };


        const otherParam = {
            headers:{
                "content-type":"application/json"
            },
            body:  JSON.stringify(Data),
            method: "POST",
           // mode: "cors" // no-cors, cors, *same-origin
        };

        // const otherParam1 = {
        //     mode: "no-cors" // no-cors, cors, *same-origin
        // };
        // fetch('http://localhost:8080/hello',otherParam1)
        //     .then(function(myJson) {
        //         console.log(JSON.stringify(myJson));
        //     });


        fetch(url, otherParam)
            .then(res => {
                alert("Successfully submitted! voila! " + res)
            }).then(error => console.log(error))

        // var data = JSON.stringify({
        //     "firstName": "xasddddddddddddddddddddasd asd ASFJKSDKHJFJKLAS HJDJKDFSHJK"
        // });
        //
        // var xhr = new XMLHttpRequest();
        // xhr.withCredentials = true;
        //
        // xhr.addEventListener("readystatechange", function () {
        //     if (this.readyState === 4) {
        //         console.log(this.responseText);
        //     }
        // });
        //
        // xhr.open("GET", "http://localhost:8080/cloud/webapi/player/playerDetails");
        // xhr.setRequestHeader("Content-Type", "application/json");
        // xhr.setRequestHeader("cache-control", "no-cache");
        // xhr.setRequestHeader("Postman-Token", "df5523d1-ec84-4f7d-87c2-0d61796c2954");
        //
        // xhr.send(data);
    });


})(jQuery);