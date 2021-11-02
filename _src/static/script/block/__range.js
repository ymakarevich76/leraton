
if (document.getElementById('slider-snap')) {
  const snapSlider = document.getElementById('slider-snap');

  noUiSlider.create(snapSlider, {
    range: {
      min: 50,
      max: 50000,
    },
    start: [50, 50000],
    step: 50,
    connect: true,
  });

  var snapValues = [
    document.getElementById('slider-snap-value-lower'),
    document.getElementById('slider-snap-value-upper')
  ];

  snapSlider.noUiSlider.on('update', function (values, handle) {
    snapValues[handle].innerHTML = values[handle].split('.')[0] + ' руб.';
  });
}
