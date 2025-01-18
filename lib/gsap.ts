import gsap from 'gsap';
import { Flip } from 'gsap/Flip';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

/* The following plugin is a Club GSAP perk */
import { GSDevTools } from 'gsap/GSDevTools';

gsap.registerPlugin(Flip, ScrollTrigger, GSDevTools);

export default gsap;
export { Flip, ScrollTrigger, GSDevTools };
