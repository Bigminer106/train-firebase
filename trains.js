$(document).ready(() => {
  var currentTime = moment();

  var tFrequency1 = 3;
  var firstTime = '03:30';
  var firstTimeConvert = moment(firstTime, "HH:mm").subtract(1, 'years');

  var tFrequency2 = 20;
  var secondTime = '04:00';
  var secondConvert = moment(secondTime, 'HH:mm').subtract(1, 'years');

  var tFrequency3 = 500;
  var thirdTime = '06:00';
  var thirdConvert = moment(thirdTime, 'HH:mm').subtract(1, 'years');

  var diffTime1 = moment().diff(moment(firstTimeConvert), 'minutes');
  var diffTime1 = moment().diff(moment(secondConvert), 'minutes');
  var diffTime1 = moment().diff(moment(thirdConvert), 'minutes');

  var tRemainder1 = diffTime1 % tFrequency1;
  var tRemainder2 =  diffTime2 % tFrequency2;
  var tRemainder3 = diffTime3 % tFrequency3;

  var tMinutes1 = tFrequency1 - tRemainder1;
  var tMinutes2 = tFrequency2 - tRemainder2;
  var tMinutes3 = tFrequency3 - tRemainder3;

  var nextTrain1 = moment().add(tMinutes1, 'minutes');
  var nextTrain2 = moment().add(tMinutes2, 'minutes');
  var nextTrain3 = moment().add(tMinutes3, 'minutes');

  $('.schedule').append('Current Time: ' + moment(currentTime).format('hh:mm'));

  $('.train1 .destination').append('Destination: Boston');
  $('.train1').append(`First Train: ${firstTimeConvert}`);
  $('.train1').append(`Next Arrival: ${nextTrain1}`);
  $('.train1').append(`Frequency: ${tFrequency1}`);

  $('.train2 .destination').append('Destination: New York City');
  $('.train2').append(`First Train: ${secondConvert}`);
  $('.train2').append(`Next Arrival: ${nextTrain2}`);
  $('.train2').append(`Frequency: ${tFrequency2}`);

  $('.train3 .destination').append('Destination: Istanbul');
  $('.train3').append(`First Train: ${thirdConvert}`);
  $('.train3').append(`Next Arrival: ${nextTrain3}`);
  $('.train3').append(`Frequency: ${tFrequency3}`);
});