$(document).ready(function(){

  var the_msg = function(name, email){
    return name + 
          " ("  + 
          email +
          ")"   +
          " would like to join our Slack. Can you please send an invite?";
  }

  $("#slack-invite-form").submit(function(e){
    e.preventDefault();

    var name = $("#slack_invite_name").val();
    var email = $("#slack_invite_email").val();
    var req = the_msg(name, email);

    var url = $(this).data("url");
    var payload = JSON.stringify({ "text": req });

    $.post(url, payload, function(){
      $("#thank-you").show();
    });

    return 0;
  });
});