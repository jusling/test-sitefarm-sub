// Add custom jQuery or Javascript here
// https://www.drupal.org/docs/8/api/javascript-api/javascript-api-overview
(function ($, Drupal) {
  "use strict";

  Drupal.behaviors.customBehavior = {
    attach: function (context, settings) {
      // perform jQuery as normal in here
      var spreadsheetID = "1qtECa0vvLPAC3jlhmeL3U0D6TgscsFwziC1Tc5KOtHA";

   // Make sure it is public or set to Anyone with link can view
   var url = "https://spreadsheets.google.com/feeds/list/" + spreadsheetID + "/od6/public/values?alt=json";

   var content = '<table class="u_tables_gold" style="width:75%" summary="Gender inclusive restrooms"><th>Building</th><th>Room</th><th>Notes</th>';
   jQuery.getJSON(url, function(data) {

    var entry = data.feed.entry;

    jQuery(entry).each(function(){
      content += '<tr><td>'+this.gsx$building.$t+ '</td> <td>' +this.gsx$room.$t+ '</td> <td>' +this.gsx$notes.$t+ '</td></tr>';
    });
    content +='</table>';
    jQuery('.results').append(content);
   });
    }
  };

})(jQuery, Drupal);
