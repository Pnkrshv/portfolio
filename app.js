gsap.registerPlugin(ScrollSmoother, ScrollTrigger);

if(ScrollTrigger.isTouch !== 1){
	ScrollSmoother.create({
		wrapper: ".wrapper",
		content: ".content",
		smooth: 1.5,
		effects: true
	});

	gsap.fromTo(".header__top", {opacity:1}, {
		opacity: 0,
		scrollTrigger:{
			trigger: ".header__top",
			start: "top",
			end: "bottom",
			scrub: true
		}
	});

	let itemsL = gsap.utils.toArray(".left__side .item");
	itemsL.forEach(item =>{
		gsap.fromTo(item, {x: -75, opacity: 0}, {
			opacity: 1,
			x: 0,
			scrollTrigger:{
				trigger: item,
				scrub: true
			}
		})
	});

	let itemsR = gsap.utils.toArray(".right__side .item");
	itemsR.forEach(item =>{
		gsap.fromTo(item, {x: 75, opacity: 0}, {
			opacity: 1,
			x: 0,
			scrollTrigger:{
				trigger: item,
				scrub: true
			}
		})
	});
		
	}