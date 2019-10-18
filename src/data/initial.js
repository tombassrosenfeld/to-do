const initial = {
	boards: [
		{	
			id: 1,
			title: "Test Board 1",
			lists: [
				{	
					id: 1,
					title: "To Do",
					cards: [{
						id: 1,
						title: "Build To-DO List App",
						content: "A description of what needs to be done.",
					}, {
						id: 2,
						title: "Make Create Card mechanism",
						content: "How am I going to do this?!!",
					}],
				},
				{
					id: 2,
					title: "In Progress",
					cards: [{
						id: 3,
						title: "Basic Styling",
						content: "Looking at basic layout",
					}, {
						id: 12,
						title: "Make it all better",
						content: "",

					}],
				},
				{	
					id: 3,
					title: "Done",
					cards: [{
						id: 4,
						title: "Create Data Structure",
						content: "A description of what needs to be done.",
					}, {
						id: 5,
						title: "Set up React-Redux",
						content: "",

					}],
				},
			],
		},
		{	
			id: 2,
			title: "Test Board 2",
			lists: [
				{
					id: 4,
					title: "To Do",
					cards: [{
						id: 6,
						title: "Build To-DO List App",
						content: "A description of what needs to be done.",
					}, {
						id: 7,
						title: "Make Create Card mechanism",
						content: "How am I going to do this?!!",
					}],
				},
				{
					id: 5,
					title: "In Progress",
					cards: [{
						id: 8,
						title: "Basic Styling",
						content: "Looking at basic layout",
					}, {
						id: 9,
						title: "Make it all better",
						content: "",

					}],
				},
				{
					id: 6,
					title: "Done",
					cards: [{
						id: 10,
						title: "Create Data Structure",
						content: "A description of what needs to be done.",
					}, {
						id: 11,
						title: "Set up React-Redux",
						content: "",

					}],
				},
			],
		},
	],
};

export default initial;



