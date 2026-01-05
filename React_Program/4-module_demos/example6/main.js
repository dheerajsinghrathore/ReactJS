import { greet as salaam, PI, arr } from "./welcome.js";
function greet(name) {
	console.log(`Good Evening ${name}`);
}
greet("Sachin");
salaam("Nitin");
console.log("Pi is", PI);
arr.forEach((x) => {
	console.log(x);
});
