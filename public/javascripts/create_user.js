$(() => $("#createButton").click(createUser));

function createUser() {
  const phoneVal = $("input[name=phone]")
    .val()
    .trim();
  const phone = parseInt(phoneVal, 10);

  const user = {
    name: $("input[name=name]")
      .val()
      .trim(),
    email: $("textarea[name=email]")
      .val()
      .trim(),
    phone
  };

  const request = $.ajax({
    type: "post",
    contentType: "application/json",
    dataType: "json",
    data: JSON.stringify(user)
  });

  request.done(function(data) {
    console.log("creation done", data);
  });

  request.fail(function(jqXHR, textStatus, errorThrown) {
    console.log(jqXHR, textStatus, errorThrown);
  });
}