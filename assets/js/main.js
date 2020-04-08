function toggleSidebar(){

  document.getElementById("sidebar").classList.toggle('active');
}


// var wavesurfer = WaveSurfer.create({
//     container: '#waveform',
//     waveColor: 'violet',
//     progressColor: 'purple'
// });
//
// wavesurfer.on('ready', function () {
//     wavesurfer.play();
// });
//
// wavesurfer.load('example/media/demo.wav');
if ('addEventListener' in document) {
	document.addEventListener('DOMContentLoaded', function() {
		FastClick.attach(document.body);
	}, false);
}
