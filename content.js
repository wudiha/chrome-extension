
//if script already loaded?



console.log('Cook Vault Groups');
var timer = setInterval(autoSubmit, 1000);

function autoSubmit() {
  var d = new Date();
  var minutes = d.getMinutes();
  var seconds = d.getSeconds();

  var now = minutes * 60 +seconds;
  var droptime = 60 * 60; // Minutes * 60 
  var diff = droptime - now;

  console.log(diff);
  console.log('seconds left');


  if (diff <= 1) {
    document.getElementsByClassName('button-submit')[0].click()
  }

  if (diff < 0) {
    console.log('Invalid droptime comapre to local time');
    stop();
  }

};

function stop() {
  clearInterval(timer);
}

