

if ('Accelerometer' in window && 'Gyroscope' in window) {
  document.getElementById('moApi').innerHTML = 'Generic Sensor API';
  
  let accelerometer = new Accelerometer();
  accelerometer.addEventListener('reading', e => accelerationHandler(accelerometer, 'moAccel'));
  accelerometer.start();
  
  let accelerometerWithGravity = new Accelerometer({includeGravity: true});
  accelerometerWithGravity.addEventListener('reading', e => accelerationHandler(accelerometerWithGravity, 'moAccelGrav'));
  accelerometerWithGravity.start();
  
  let gyroscope = new Gyroscope();
  gyroscope.addEventListener('reading', e => rotationHandler({
    alpha: gyroscope.x,
    beta: gyroscope.y,
    gamma: gyroscope.z
  }));
  gyroscope.start();
  
  intervalHandler('Not available in Generic Sensor API');
  
} else if ('DeviceMotionEvent' in window) {
  document.getElementById('alert').style.display = 'none';
  document.getElementById('moApi').innerHTML = 'Device Motion API';
  
  window.addEventListener('devicemotion', function (eventData) {
    accelerationHandler(eventData.acceleration, 'moAccel');
    accelerationHandler(eventData.accelerationIncludingGravity, 'moAccelGrav');
    rotationHandler(eventData.rotationRate);
    intervalHandler(eventData.interval);
  }, false);
} else {
  document.getElementById('alert').style.display = 'none';
  document.getElementById('moApi').innerHTML = 'No Accelerometer & Gyroscope API available';
}

function accelerationHandler(acceleration, targetId) {
  var info, xyz = "[X, Y, Z]";

  info = xyz.replace("X", acceleration.x && acceleration.x.toFixed(3));
  info = info.replace("Y", acceleration.y && acceleration.y.toFixed(3));
  info = info.replace("Z", acceleration.z && acceleration.z.toFixed(3));
  document.getElementById(targetId).innerHTML = info;
}

function rotationHandler(rotation) {
  var info, xyz = "[X, Y, Z]";

  info = xyz.replace("X", rotation.alpha && rotation.alpha.toFixed(3));
  info = info.replace("Y", rotation.beta && rotation.beta.toFixed(3));
  info = info.replace("Z", rotation.gamma && rotation.gamma.toFixed(3));
  document.getElementById("moRotation").innerHTML = info;
}

function intervalHandler(interval) {
  document.getElementById("moInterval").innerHTML = interval;
}

if (location.href.indexOf('debug') !== -1) {
  document.getElementById('alert').style.display = 'none';
}

Rerun
