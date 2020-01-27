/*jslint devel: true */

var one, two, three, stop;
var spin = "◐◓◑◒";
var i = 0;
var today = new Date();
var lst = ['0', '0', '0', '0', '0', '0', '0', '939', '674', '461', '832', '083', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '234', '345', '0', '0', '0'];
//var lst = ['665', '564', '152', '638', '363', '869', '573', '939', '674', '461', '832', '083', '170', '042', '482', '995', '492', '516', '193', '579', '351', '471', '354', '381', '005', '123', '234', '345', '543', '333', '445'];

function submit() {
    'use strict';
    var pw = lst[10 - 1];//today.getDate() - 1];
    if (pw === '0') {
        alert('Today is not the day :(');
    } else {
        document.getElementById('submit').style.display = 'none';
        one = setInterval(function () {
            document.getElementById('mainText').innerHTML = spin[i] + spin[i] + spin[i];
            i += 1;
            if (i === 4) {
                i = 0;
            }
        }, 100);
        setTimeout(function () {
            clearInterval(one);
            two = setInterval(function () {
                document.getElementById('mainText').innerHTML = pw[0] + spin[i] + spin[i];
                i += 1;
                if (i === 4) {
                    i = 0;
                }
            }, 100);
        }, 500);
        setTimeout(function () {
            clearInterval(two);
            three = setInterval(function () {
                document.getElementById('mainText').innerHTML = pw[0] + pw[1] + spin[i];
                i += 1;
                if (i === 4) {
                    i = 0;
                }
            }, 100);
        }, 1250);
        setTimeout(function () {
            clearInterval(three);
            document.getElementById('mainText').innerHTML = pw;
        }, 2000);
    }
}
