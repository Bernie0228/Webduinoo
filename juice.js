var rgbled;


boardReady({board: 'Smart', device: 'wvGYe', transport: 'mqtt'}, function (board) {
  board.samplingInterval = 50;
  rgbled = getRGBLedCathode(board, 15, 12, 13);
  rgbled.setColor('#ffff00');
  document.getElementById('demo-area-04-area').style.background = '#ffff00';
  document.getElementById('demo-area-04-color').oninput = function (_color) {
  _color = this.value;
    document.getElementById('demo-area-04-area').style.background = _color;
    rgbled.setColor(_color);
  };
});
