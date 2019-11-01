const initial = {
	boards: [
		{	
			id: 1,
			title: "Test Board 1",
		},
		{	
			id: 2,
			title: "Test Board 2"
		}
	],
	lists: [
		{	
			id: 1,
			board_id: 1,
			title: "To Do",
		},
		{
			id: 2,
			board_id: 1,
			title: "In Progress"

		},
		{	
			id: 3,
			board_id: 1,
			title: 'finished'
		},
		{
			id: 4,
			title: "To Do",
			board_id: 2
		},
		{
			id: 5,
			title: "In Progress",
			board_id: 2
		},
		{
			id: 6,
			title: "Done",
			board_id: 2
		}
	],
	cards: [
		{
			id: 10,
			list_id: 6,
			title: "Create Data Structure",
			content: "A description of what needs to be done."
		}, 
		{
			id: 11,
			list_id: 6,
			title: "Set up React-Redux",
			content: ""

		}, 
		{
			id: 8,
			list_id: 5,
			title: "Basic Styling",
			content: "Looking at basic layout"
		}, 
		{
			id: 9,
			list_id: 5,
			title: "Make it all better",
			content: ""

		}, 
		{
			id: 6,
			list_id: 4,
			title: "Build To-DO List App",
			content: "A description of what needs to be done."
		}, 
		{
			id: 7,
			list_id: 4,
			title: "Make Create Card mechanism",
			content: "How am I going to do this?!!"
		},
		{
			id: 4,
			list_id: 3,
			title: "Create Data Structure",
			content: "A description of what needs to be done."
		}, 
		{
			id: 5,
			list_id: 3,
			title: "Set up React-Redux",
			content: ""

		},
		{
			id: 3,
			list_id: 2,
			title: "Basic Styling",
			content: "Looking at basic layout"
		}, 
		{
			id: 12,
			title: "Make it all better",
			content: ""

		},
		{
			id: 1,
			list_id: 1,
			title: "Build To-DO List App",
			content: "A description of what needs to be done."
		}, 
		{
			id: 2,
			list_id: 1,
			title: "Make Create Card mechanism",
			content: "How am I going to do this?!!"
		}
	]
};

export default initial;



