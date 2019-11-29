const initial = {
	boards: {
        byID: {
            1: {	
                id: 1,
                title: "Test Board 1",
                lists: [1,2,3]
            },
            2: {	
                id: 2,
                title: "Test Board 2",
                lists: [4,5,6]
            }
		},
		allIDs: [1,2]
    },
	lists: {
        byID: {
            1: {	
                id: 1,
                title: "To Do",
                cards: [1,2]
            },
            2: {
                id: 2,
                title: "In Progress",
                cards: [3,4]
            },
            3: {	
                id: 3,
                title: 'finished',
                cards: [5,6]
            },
            4: {
                id: 4,
                title: "To Do",
                cards: [7,8]
            },
            5: {
                id: 5,
                title: "In Progress",
                cards: [9,10]
            },
            6: {
                id: 6,
                title: "Done",
                cards: [11,12]
            }
        },
        allIDS: [1,2,3,4,5,6]
    },
	cards: {
        byID: {
            10: {
                id: 10,
                title: "Create Data Structure",
                content: "A description of what needs to be done."
            }, 
            11: {
                id: 11,
                title: "Set up React-Redux",
                content: ""
            }, 
            8: {
                id: 8,
                title: "Basic Styling",
                content: "Looking at basic layout"
            }, 
            9: {
                id: 9,
                title: "Make it all better",
                content: ""
            }, 
            6: {
                id: 6,
                title: "Build To-DO List App",
                content: "A description of what needs to be done."
            }, 
            7: {
                id: 7,
                title: "Make Create Card mechanism",
                content: "How am I going to do this?!!"
            },
            4: {
                id: 4,
                title: "Create Data Structure",
                content: "A description of what needs to be done."
            }, 
            5: {
                id: 5,
                title: "Set up React-Redux",
                content: ""

            },
            3: {
                id: 3,
                title: "Basic Styling",
                content: "Looking at basic layout"
            }, 
            12 : {
                id: 12,
                title: "Make it all better",
                content: ""

            },
            1: {
                id: 1,
                title: "Build To-DO List App",
                content: "A description of what needs to be done."
            }, 
            2: {
                id: 2,
                title: "Make Create Card mechanism",
                content: "How am I going to do this?!!"
            }
        }
    }
};

export default initial;



