//@ts-nocheck
import axios from "axios";

let experts = [
	{
		id: 1,
		name: "Biruk Ayalew",
		address: "5kilo Campuse, Addis Ababa Ethiopia",
		bio: "A hardworking and tech enthusiast who is currently pursuing his software engineering bachelor's degree at Addis Ababa University. ",
		rating: "4.5",
		tags: ["JavaScript", "React", "Node.js", "HTML", "CSS"],
	},
	{
		id: 2,
		name: "Daniel Geremew",
		address: "5kilo Campuse, Addis Ababa Ethiopia",
		bio: "Nulla facilisi. Mauris non nisi non sem venenatis consequat vel at mauris. ",
		rating: "4.2",
		tags: ["Python", "Django", "Flask", "SQL", "Git"],
	},
	{
		id: 3,
		name: "Jane Smith",
		address: "5kilo Campuse, Addis Ababa Ethiopia",
		bio: "Nulla facilisi. Mauris non nisi non sem venenatis consequat vel at mauris. ",
		rating: "4.2",
		tags: ["Python", "Django", "Flask", "SQL", "Git"],
	},
	{
		id: 4,
		name: "Jane Smith",
		address: "5kilo Campuse, Addis Ababa Ethiopia",
		bio: "Nulla facilisi. Mauris non nisi non sem venenatis consequat vel at mauris. ",
		rating: "4.2",
		tags: ["Python", "Django", "Flask", "SQL", "Git"],
	},
	// Add more experts here as needed
];

const searchResult = async (keywords) => {
	// const res = await axios.get(keywords);
	return experts;
};

export { searchResult };
