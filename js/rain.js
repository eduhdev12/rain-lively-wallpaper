var root = {
  raincolor: {
    r: 125,
    g: 52,
    b: 253
  },
  dropColor: {
    r: 125,
    g: 52,
    b: 253
  },
  rainAmount: 100,
};

var makeItRain = function () {
  //clear out everything
  $('.rain').empty();

  var increment = 0;
  var drops = "";
  var backDrops = "";

  while (increment < root.rainAmount) {
    //couple random numbers to use for various randomizations
    //random number between 98 and 1
    var randoHundo = (Math.floor(Math.random() * (98 - 1 + 1) + 1));
    //random number between 5 and 2
    var randoFiver = (Math.floor(Math.random() * (5 - 2 + 1) + 2));
    //increment
    increment += randoFiver;
    //add in a new raindrop with various randomizations to certain CSS properties
    drops += '<div class="drop" style="left: ' + increment + '%; bottom: ' + (randoFiver + randoFiver - 1 + 100) + '%; animation-delay: 0.' + randoHundo + 's; animation-duration: 0.5' + randoHundo + 's;"><div class="stem" style="animation-delay: 0.' + randoHundo + 's; animation-duration: 0.5' + randoHundo + 's; background: linear-gradient(to bottom, rgba(255, 255, 255, 0), rgba(' + root.raincolor.r + ', ' + root.raincolor.g + ',' + root.raincolor.b + ', 255));"></div><div class="splat" style="animation-delay: 0.' + randoHundo + 's; animation-duration: 0.5' + randoHundo + 's; border-top: 2px dotted rgba(' + root.dropColor.r + ',' + root.dropColor.g + ',' + root.dropColor.b + ', 120);"></div></div>';
    backDrops += '<div class="drop" style="right: ' + increment + '%; bottom: ' + (randoFiver + randoFiver - 1 + 100) + '%; animation-delay: 0.' + randoHundo + 's; animation-duration: 0.5' + randoHundo + 's;"><div class="stem" style="animation-delay: 0.' + randoHundo + 's; animation-duration: 0.5' + randoHundo + 's; background: linear-gradient(to bottom, rgba(255, 255, 255, 0), rgba(' + root.raincolor.r + ', ' + root.raincolor.g + ',' + root.raincolor.b + ', 255));"></div><div class="splat" style="animation-delay: 0.' + randoHundo + 's; animation-duration: 0.5' + randoHundo + 's; border-top: 2px dotted rgba(' + root.dropColor.r + ',' + root.dropColor.g + ',' + root.dropColor.b + ', 120);"></div></div>';
  }

  $('.rain.front-row').append(drops);
  $('.rain.back-row').append(backDrops);
}

$('.splat-toggle.toggle').on('click', function () {
  $('body').toggleClass('splat-toggle');
  $('.splat-toggle.toggle').toggleClass('active');
  makeItRain();
});

$('.back-row-toggle.toggle').on('click', function () {
  $('body').toggleClass('back-row-toggle');
  $('.back-row-toggle.toggle').toggleClass('active');
  makeItRain();
});

$('.single-toggle.toggle').on('click', function () {
  $('body').toggleClass('single-toggle');
  $('.single-toggle.toggle').toggleClass('active');
  makeItRain();
});

function setUniform(name) {
  var u = {};

  for (var _len = arguments.length, value = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      value[_key - 1] = arguments[_key];
  }

  u[name] = value;
  this.setUniforms(u);
}

makeItRain();

//setInterval(makeItRain(), root.matrixspeed);


function livelyPropertyListener(name, val) {
  switch (name) {
    case "rainColor":
      root.raincolor = hexToRgb(val);
      break;
    case "rainAmount":
      root.rainAmount = val;
      break;
    case "dropColor":
      root.dropColor = val;
      break;
  }
}