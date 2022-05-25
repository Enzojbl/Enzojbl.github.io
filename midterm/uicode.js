window.onload = function() {
        AFRAME.registerComponent('event-listener', {
            init: function () {
                this.audio = document.querySelector("#howl");

                this.el.addEventListener('click', function (e) 
		{
                    let wolf = document.querySelector('#wolf-model')
		    wolf.setAttribute('animation-mixer', "clip: 01_Run; loop: repeat; timeScale: 0.5");
                    this.audio.play();
			
                  console.log(e)
                }.bind(this));
		
                this.el.addEventListener('mouseenter', function (e) {
                    console.log(e)
                }.bind(this));
		    
		 this.el.addEventListener('mouseleave', function (e) {
			 console.log(e)
                }.bind(this));
		 
		
                this.el.addEventListener('touchmove', function (e) {
                    //this.audio.play();
			
                  console.log(e)
                }.bind(this));
                this.el.addEventListener('touchstart', function (e) {
		
                    let wolf = document.querySelector('#wolf-model')
		    wolf.setAttribute('animation-mixer', "clip: 01_Run; loop: repeat; timeScale: 0.5");
                    this.audio.play();
			
			console.log(e)
                }.bind(this));
		    
		 this.el.addEventListener('touchend', function (e) {
			 console.log(e)
                }.bind(this));
		    
		
                this.el.addEventListener('animation-finished', function (e) {
			 console.log(e)
                    let wolf = document.querySelector('#wolf-model')
		    wolf.removeAttribute('animation-mixer');
                }.bind(this));
		
            }
        });
    };

window.onload = function() {
        AFRAME.registerComponent('event-listener', {
            init: function () {
                this.audio = document.querySelector("#howl");

                this.el.addEventListener('click', function (e) 
		{
                    let wolf = document.querySelector('#wolf-model')
		    wolf.setAttribute('animation-mixer', "clip: 01_Run; loop: repeat; timeScale: 0.5");
                    this.audio.play();
			
                  console.log(e)
                }.bind(this));
		
                this.el.addEventListener('mouseenter', function (e) {
                    console.log(e)
                }.bind(this));
		    
		 this.el.addEventListener('mouseleave', function (e) {
			 console.log(e)
                }.bind(this));
		 
		
                this.el.addEventListener('touchmove', function (e) {
                    //this.audio.play();
			
                  console.log(e)
                }.bind(this));
                this.el.addEventListener('touchstart', function (e) {
		
                    let wolf = document.querySelector('#wolf-model')
		    wolf.setAttribute('animation-mixer', "clip: 01_Run; loop: repeat; timeScale: 0.5");
                    this.audio.play();
			
			console.log(e)
                }.bind(this));
		    
		 this.el.addEventListener('touchend', function (e) {
			 console.log(e)
                }.bind(this));
		    
		
                this.el.addEventListener('animation-finished', function (e) {
			 console.log(e)
                    let wolf = document.querySelector('#wolf-model')
		    wolf.removeAttribute('animation-mixer');
                }.bind(this));
		
            }
        });
    };

window.onload = function() {
        AFRAME.registerComponent('event-listener', {
            init: function () {
                this.audio = document.querySelector("#howl");

                this.el.addEventListener('click', function (e) 
		{
                    let wolf = document.querySelector('#wolf-model')
		    wolf.setAttribute('animation-mixer', "clip: 01_Run; loop: repeat; timeScale: 0.5");
                    this.audio.play();
			
                  console.log(e)
                }.bind(this));
		
                this.el.addEventListener('mouseenter', function (e) {
                    console.log(e)
                }.bind(this));
		    
		 this.el.addEventListener('mouseleave', function (e) {
			 console.log(e)
                }.bind(this));
		 
		
                this.el.addEventListener('touchmove', function (e) {
                    //this.audio.play();
			
                  console.log(e)
                }.bind(this));
                this.el.addEventListener('touchstart', function (e) {
		
                    let wolf = document.querySelector('#wolf-model')
		    wolf.setAttribute('animation-mixer', "clip: 01_Run; loop: repeat; timeScale: 0.5");
                    this.audio.play();
			
			console.log(e)
                }.bind(this));
		    
		 this.el.addEventListener('touchend', function (e) {
			 console.log(e)
                }.bind(this));
		    
		
                this.el.addEventListener('animation-finished', function (e) {
			 console.log(e)
                    let wolf = document.querySelector('#wolf-model')
		    wolf.removeAttribute('animation-mixer');
                }.bind(this));
		
            }
        });
    };
