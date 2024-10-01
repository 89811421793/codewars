// return; or return without semicolon  - here it meant exit and stopping the function originally

function getStatus(isBusy) {
  var msg = isBusy ? "busy" : "available";
  return (
   {
    status: msg,
  }
);
}

/* or like this:
  function getStatus(isBusy) {
    var msg = (isBusy ? "busy" : "available");
    return {
      status: msg
    }
  }
  */
