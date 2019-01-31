const express = require("express");
const router = express.Router();
const reflectionController = require("../controllers/reflection");
const Timer = require('easytimer.js').Timer;

router.get("/:id", reflectionController.show);

const timerInstance = new Timer();


// const Timer = new Timer();
// $('#chronoExample .startButton').click(function () {
//     timer.start();
// });
// $('#chronoExample .pauseButton').click(function () {
//     timer.pause();
// });
// $('#chronoExample .stopButton').click(function () {
//     timer.stop();
// });
// $('#chronoExample .resetButton').click(function () {
//     timer.reset();
// });
// timer.addEventListener('secondsUpdated', function (e) {
//     $('#chronoExample .values').html(timer.getTimeValues().toString());
// });
// timer.addEventListener('started', function (e) {
//     $('#chronoExample .values').html(timer.getTimeValues().toString());
// });
// timer.addEventListener('reset', function (e) {
//     $('#chronoExample .values').html(timer.getTimeValues().toString());
// });

module.exports = router;