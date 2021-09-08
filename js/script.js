// theme changer
		var two=document.getElementById('two');
		two.addEventListener('click',function(){
			var body=document.querySelector('body');
      var sayingHead = document.getElementById('sayingHead').innerHTML="Hope is a waking dream.";
      var sayingQuote =document.getElementById('sayingQuote').innerHTML="its is being able to see that there is light despite all of the darkness.";
			body.classList.add('active1');
			body.classList.remove('active2');
		})
		var one=document.getElementById('one');
		one.addEventListener('click',function(){
			var body=document.querySelector('body');
      var sayingHead = document.getElementById('sayingHead').innerHTML="Never lose your faith.";
      var sayingQuote =document.getElementById('sayingQuote').innerHTML="its's often in the darkest moments where you find motivation to overcome.";
			body.classList.remove('active1');
			body.classList.remove('active2');

		})
		var three=document.getElementById('three');
		three.addEventListener('click',function(){
			var body=document.querySelector('body');
      var sayingHead = document.getElementById('sayingHead').innerHTML="Love keeps you alive.";
      var sayingQuote =document.getElementById('sayingQuote').innerHTML="there is  only one happiness in life to love or to be loved.";
			body.classList.add('active2');
			body.classList.remove('active1'); 

		})

//mobile menu
function toggleMenu() {
  var x = document.getElementById("myDIV");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}