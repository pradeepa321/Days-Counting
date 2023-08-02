
	let counting = document.getElementById("count");

        function diff() {
            let today = new Date();
            let afterdate = new Date('May 01 2024');
            let time = afterdate.getTime() - today.getTime();
            let days = Math.floor(time / (1000 * 60 * 60 * 24));
            let hours = Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            let mins = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));
            let secs = Math.floor((time % (1000 * 60)) / 1000);
			
			counting.innerHTML=`${days} Days, ${hours} hours, ${mins} minutes, ${secs} second`
        }
		

        setInterval(diff, 1000);