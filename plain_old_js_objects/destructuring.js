const user = {
	name: {
		first: "Reginald",
		last: "Braithwaite"
	},
	occupation: {
		title: "Author",
		responsibilities: [
			"JavaScript Allonge",
			"JavaScript Spessore",
			"CoffeeScript Ristretto"
		]
	}
}

const { name: { first: given, last: surname }, occupation: { title: title } } = user;

console.log(surname)
console.log(title)

// destructuring parameters also works
const description = ({ name: { first: given, last: surname }, occupation: { title: title } }) =>
	`${given} is a ${title}`;

console.log(description(user))

const abbrev = ({ name: { first, last }, occupation: { title } }) =>
	({ first, last, title });

console.log(abbrev(user))