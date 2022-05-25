window.onload = function() {
        AFRAME.registerComponent('wolf-event', {
            init: function () {
                this.audio = document.querySelector("#howl");
		  let wolf = document.querySelector('#wolf-model')
		    wolf.setAttribute('animation-mixer', "clip: Static Pose;");
                
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
		    
                this.el.addEventListener('touchstart', function (e) 
		{
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
        AFRAME.registerComponent('hellwolf-event', {
            init: function () {
                this.audio = document.querySelector("#howling");
		let hellwolf = document.querySelector('#hellwolf-model')
		hellwolf.setAttribute('animation-mixer', "clip: Take 001; loop: repeat; timeScale: 0.1");
                this.el.addEventListener('click', function (e) 
		{
                    let hellwolf = document.querySelector('#hellwolf-model')
		    hellwolf.setAttribute('animation-mixer', "clip: Take 001; loop: repeat; timeScale: 0.1");
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
			let hellwolf = document.querySelector('#hellwolf-model')
		    deer.setAttribute('animation-mixer', "clip: Take 001; loop: repeat; timeScale: 0.1");
                    this.audio.play();
			
			console.log(e)
                }.bind(this));
		    
		 this.el.addEventListener('touchend', function (e) {
			 console.log(e)
                }.bind(this));
		    
		
                this.el.addEventListener('animation-finished', function (e) {
			 console.log(e)
                    let hellwolf = document.querySelector('#hellwolf-model')
		    hellwolf.removeAttribute('animation-mixer');
                }.bind(this));
		
            }
        });
    };

window.onload = function() {
        AFRAME.registerComponent('deer-event', {
            init: function () {
                this.audio = document.querySelector("#sdeer");
		let deer = document.querySelector('#deer-model')
		deer.setAttribute('animation-mixer', "clip: idlewalkjumpeat_cyclescomplate; loop: once;");
                this.el.addEventListener('click', function (e) 
		{
                    let deer = document.querySelector('#deer-model')
		    deer.setAttribute('animation-mixer', "clip: idlewalkjumpeat_cyclescomplate; loop: once;");
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
		
                    let deer = document.querySelector('#deer-model')
		    deer.setAttribute('animation-mixer', "clip: idlewalkjumpeat_cyclescomplate; loop: once;");
                    this.audio.play();
			
			console.log(e)
                }.bind(this));
		    
		 this.el.addEventListener('touchend', function (e) {
			 console.log(e)
                }.bind(this));
		    
		
                this.el.addEventListener('animation-finished', function (e) {
			 console.log(e)
                    let deer = document.querySelector('#deer-model')
		    deer.removeAttribute('animation-mixer');
                }.bind(this));
		
            }
        });
    };
