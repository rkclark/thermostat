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
});
