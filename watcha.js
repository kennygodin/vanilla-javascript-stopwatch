var timeEl = $(".time");
var startBtn = $("#start");
var stopBtn = $("#stop");
var resetBtn = $("#reset");
var msEl = $("#ms");
var secsEl = $("#secs");
var minsEl = $("#mins");
var hrsEl = $("#hrs");

var ms = 0;
var sec = 0;
var min = 0;
var hr = 0;
var startTimer;

startBtn.click(function() {
  startTimer = setInterval(function() {
    ms++;
    if (ms < 10) ms = "0" + ms;
    if (ms == 100) {
      ms = "0" + 0;
      sec++;
      if (sec < 10) sec = "0" + sec;
      if (sec == 60) {
        min++;
        sec = "0" + 0;
        if (min < 10) min = "0" + min;
        if (min == 60) {
          hr++;
          if (hr < 10) hr = "0" + hr;
          hrsEl.text(hr);
        }
        minsEl.text(min);
      }
      secsEl.text(sec);
    }
    msEl.text(ms);
  }, 10);
});

stopBtn.click(function() {
  clearInterval(startTimer);
});

resetBtn.click(function() {
  clearInterval(startTimer);
  ms = sec = min = "0" + 0;
  msEl.text(ms);
  secsEl.text(sec);
  minsEl.text(min);
  hrsEl.text(hr);
});
