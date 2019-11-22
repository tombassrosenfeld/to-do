const initial = [
	[	"boards", 
			[[ 1, {	
					id: 1,
					title: "Test Board 1",
				}
			],
			[ 2, {
					id: 2,
					title: "Test Board 2"
				}
			]
		]
	],
	[	"lists", 
		[
			[	
				1, {
					id: 1,
					board_id: 1,
					title: "To Do",
				}
			],
			[
				2, {
					id: 2,
					board_id: 1,
					title: "In Progress"
				}

			],
			[	
				3, {
					id: 3,
					board_id: 1,
					title: 'finished'
				}
			],
			[
				4, {
					id: 4,
					title: "To Do",
					board_id: 2
				}
			],
			[
				5, {
					id: 5,
					title: "In Progress",
					board_id: 2
				}
			],
			[
				6, {
					id: 6,
					title: "Done",
					board_id: 2
				}
			]
		]
	],
	[	"cards",
		[

			[
				1, {
					id: 10,
					list_id: 6,
					title: "Create Data Structure",
					content: "A description of what needs to be done."
				}
			], 
			[
				1, {
					id: 11,
					list_id: 6,
					title: "Set up React-Redux",
					content: ""
				}
	
			], 
			[
				8, {
					id: 8,
					list_id: 5,
					title: "Basic Styling",
					content: "Looking at basic layout"
				}
			], 
			[
				9, {
					id: 9,
					list_id: 5,
					title: "Make it all better",
					content: ""
				}
			], 
			[
				6, {
					id: 6,
					list_id: 4,
					title: "Build To-DO List App",
					content: "A description of what needs to be done."
				}
			], 
			[
				7, {
					id: 7,
					list_id: 4,
					title: "Make Create Card mechanism",
					content: "How am I going to do this?!!"
				}
			],
			[
				4, {
					id: 4,
					list_id: 3,
					title: "Create Data Structure",
					content: "A description of what needs to be done."
				}
			], 
			[
				5, {
					id: 5,
					list_id: 3,
					title: "Set up React-Redux",
					content: ""
				}
			],
			[
				3, {
					id: 3,
					list_id: 2,
					title: "Basic Styling",
					content: "Looking at basic layout"
				}
			], 
			[
				1, {
					id: 12,
					title: "Make it all better",
					content: ""
				}
			],
			[
				1, {
					id: 1,
					list_id: 1,
					title: "Build To-DO List App",
					content: "A description of what needs to be done."
				}
			], 
			[
				2, {
					id: 2,
					list_id: 1,
					title: "Make Create Card mechanism",
					content: "How am I going to do this?!!"
				}
			]
		]
	]
];

export default initial;



