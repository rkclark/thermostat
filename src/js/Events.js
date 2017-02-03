$( document ).ready(function() {
    var thermostat = new Thermostat();
    changeValue(20);

    function changeValue(num) {
      $( "#progress-bar" ).attr('value', num);
      $( "#temp-display" ).text(num);
    }

    function changeUsageText(usage) {
      $("#usage-indicator").attr('class', "usage-text "+usage+"-usage").text(usage);
    }

    $( "#temp-up" ).click(function() {
      thermostat.up(1);
      changeValue(thermostat.getDegrees());
      changeUsageText(thermostat.seeEnergyUsage());
    });

    $( "#temp-down" ).click(function() {
      thermostat.down(1);
      changeValue(thermostat.getDegrees());
      changeUsageText(thermostat.seeEnergyUsage());
    });

    $( "#temp-reset" ).click(function() {
      thermostat.reset();
      changeValue(thermostat.getDegrees());
      changeUsageText(thermostat.seeEnergyUsage());
    });

    $( "#switch-mode" ).click(function() {
      thermostat.switchPowerSaving();
      $("#power-savings-indicator").toggleClass("indicator-bkgrnd");
      if ((thermostat.getDegrees() > 25) && thermostat.getInPoweringSaving()) {
        thermostat.up(1);
        changeValue(thermostat.getDegrees());
        changeUsageText(thermostat.seeEnergyUsage());
      }
    });

    $("#enter-city").submit(function(){
      event.preventDefault();
      var city = $("#user-location").val();
      $("#enter-city").addClass("hidden");
      $.get("http://api.openweathermap.org/data/2.5/weather?q="+city+",uk&appid=9414ea80d47c1479b6d06ffc6e002d0f&units=metric", function(data){
        $("#local-temp").text(data.name+": "+data.main.temp).parent().toggleClass("hidden");
      });
    });
});
