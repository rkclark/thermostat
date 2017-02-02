$( document ).ready(function() {
    // if temp-up is clicked, call up method, reload value
    var thermostat = new Thermostat();

    function changeValue(num) {
      $( "#progress-bar" ).attr('value', num);
    }

    console.log("Document loaded");

    $( "#temp-up" ).click(function() {
      thermostat.up(1);
      changeValue(thermostat.getDegrees());
    });

    $( "#temp-down" ).click(function() {
      thermostat.down(1);
      changeValue(thermostat.getDegrees());
    });

    $( "#temp-reset" ).click(function() {
      thermostat.reset();
      changeValue(thermostat.getDegrees());
    });
});
