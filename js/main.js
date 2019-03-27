(function($) {

  $('#meal_preference').parent().append('<ul class="list-item" id="newmeal_preference" name="meal_preference"></ul>');
  $('#meal_preference option').each(function(){
      $('#newmeal_preference').append('<li value="' + $(this).val() + '">'+$(this).text()+'</li>');
  });
  $('#meal_preference').remove();
  $('#newmeal_preference').attr('id', 'meal_preference');
  $('#meal_preference li').first().addClass('init');
  $("#meal_preference").on("click", ".init", function() {
      $(this).closest("#meal_preference").children('li:not(.init)').toggle();
  });
  
  var allOptions = $("#meal_preference").children('li:not(.init)');
  $("#meal_preference").on("click", "li:not(.init)", function() {
      allOptions.removeClass('selected');
      $(this).addClass('selected');
      $("#meal_preference").children('.init').html($(this).html());
      allOptions.toggle();
  });

  var marginSlider = document.getElementById('slider-margin');
  if (marginSlider != undefined) {
      noUiSlider.create(marginSlider, {
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
    
    
    var marginSlider = document.getElementById('slider-margin1');
  if (marginSlider != undefined) {
      noUiSlider.create(marginSlider, {
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
    
    
    
  $('#reset').on('click', function(){
      $('#register-form').reset();
  });

  $('#register-form').validate({
    rules : {
        first_name : {
            required: true,
        },
        last_name : {
            required: true,
        },
        company : {
            required: true
        },
        email : {
            required: true,
            email : true
        },
        phone_number : {
            required: true,
        }
    },
    onfocusout: function(element) {
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

    $( "#register-form" ).submit(function( event ) {
       event.preventDefault();

        const url = "http://localhost:8080/playerdetails";
        const Data ={
            name : document.getElementById("first_name").value
        };
       
       // headers.append('Access-Control-Allow-Origin', 'http://localhost:8080');
       // headers.append('Access-Control-Allow-Credentials', 'true');
       
       //"Access-Control-Allow-Methods" : "POST",
       //"Access-Control-Allow-Headers" : "Content-Type, Authorization"    
       
       //"Access-Control-Allow-Origin" : "http://localhost:8080",  
        

        const otherParam={
         headers:{
            "content-type" : "application/json; charset=UTF-8",              
         },
         body:JSON.stringify(Data),
         method:"POST",
         mode: "cors", // no-cors, cors, *same-origin
         cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
         credentials: "same-origin" // include, *same-origin, omit 
        };
    
        fetch(url,otherParam)
        .then(data=>{return JSON.stringify(data)})
        .then(res=>{console.log(res)})
        .then(error=>console.log(error))

      });

   

})(jQuery);