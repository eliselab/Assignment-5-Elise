console.log ('connected')


$('#submit-btn').click(function(){
    console.log($('#city-type').val())
    event.preventDefault();
    $('body').removeClass();
    var city = $('#city-type').val();
    
    if (city === 'NYC'|| $('#city-type').val() ==='New York City' || $('#city-type').val() ==='New York'){
        $('body').addClass('nyc')
    }
    if (city === 'SF'|| $('#city-type').val() === 'San Francisco'|| $('#city-type').val() === 'Bay Area') {
        $('body').addClass('sf')
    }
    if (city === 'LA'|| $('#city-type').val() === 'LAX'|| $('#city-type').val() === 'Los Angeles') {
            $('body').addClass('la')
    }
     if (city === 'austin' || $('#city-type').val() === 'ATX') {
            $('body').addClass('austin')
    } 
    if (city === 'sydney' || $('#city-type').val() === 'SYD') {
        $('body').addClass('sydney')
    } 
    });



