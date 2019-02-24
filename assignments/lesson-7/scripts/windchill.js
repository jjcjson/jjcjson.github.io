var t = parseFloat(document.getElementById('temperature1').innerHTML);
var s = parseFloat(document.getElementById('speed1').innerHTML);
var f = 35.74 + (0.6215 * t) - (35.75 * Math.pow(s, 0.16)) + (0.4275 * t * Math.pow(s, 0.16));
document.getElementById('chill1').innerHTML = Math.round(f) + "&deg; <small>wind chill</small>";

var t2 = parseFloat(document.getElementById('temperature2').innerHTML);
var s2 = parseFloat(document.getElementById('speed2').innerHTML);
var f2 = 35.74 + (0.6215 * t2) - (35.75 * Math.pow(s2, 0.16)) + (0.4275 * t2 * Math.pow(s2, 0.16));
document.getElementById('chill2').innerHTML = Math.round(f2) + "&deg; <small>wind chill</small>";

var t3 = parseInt(document.getElementById('temperature3').innerHTML);
var s3 = parseInt(document.getElementById('speed3').innerHTML);
var f3 = 35.74 + (0.6215 * t3) - (35.75 * Math.pow(s3, 0.16)) + (0.4275 * t3 * Math.pow(s3, 0.16));
document.getElementById('chill3').innerHTML = Math.round(f3) + "&deg; <small>wind chill</small>";

var t4 = parseFloat(document.getElementById('temperature4').innerHTML);
var s4 = parseFloat(document.getElementById('speed4').innerHTML);
var f4 = 35.74 + (0.6215 * t4) - (35.75 * Math.pow(s4, 0.16)) + (0.4275 * t4 * Math.pow(s4, 0.16));
document.getElementById('chill4').innerHTML = Math.round(f4) + "&deg; <small>wind chill</small>";

var t5 = parseFloat(document.getElementById('temperature5').innerHTML);
var s5 = parseFloat(document.getElementById('speed5').innerHTML);
var f5 = 35.74 + (0.6215 * t5) - (35.75 * Math.pow(s5, 0.16)) + (0.4275 * t5 * Math.pow(s5, 0.16));
document.getElementById('chill5').innerHTML = Math.round(f5) + "&deg; <small>wind chill</small>";