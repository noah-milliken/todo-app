const model = () => {
    let todos = [
        {
            "category": "home",
            "title": "Organize closet",
            "description": "Sort and declutter clothes",
            "dueDate": "2023-06-20",
            "priority": "high",
            "completed": false
        },
        {
            "category": "work",
            "title": "Prepare presentation",
            "description": "Gather materials and create slides",
            "dueDate": "2023-06-20",
            "priority": "high",
            "completed": false
        },

        {
            "category": "personal",
            "title": "Exercise for 30 minutes",
            "description": "Go for a jog or do a workout at home",
            "dueDate": "2023-06-20",
            "priority": "high",
            "completed": false
        },

        {
            "category": "home",
            "title": "Pay bills",
            "description": "Settle utility and credit card bills",
            "dueDate": "2023-06-20",
            "priority": "high",
            "completed": false
        },

        {
            "category": "personal",
            "title": "Read a book",
            "description": "Choose a book and dedicate some time to reading",
            "dueDate": "2023-06-20",
            "priority": "medium",
            "completed": false
        },

        {
            "category": "work",
            "title": "Schedule meetings",
            "description": "Coordinate with colleagues and set up upcoming meetings",
            "dueDate": "2023-06-20",
            "priority": "high",
            "completed": false
        },

        {
            "category": "home",
            "title": "Clean the kitchen",
            "description": "Wash dishes, wipe countertops, and organize pantry",
            "dueDate": "2023-06-20",
            "priority": "medium",
            "completed": false
        },

        {
            "category": "personal",
            "title": "Practice meditation",
            "description": "Set aside time for mindfulness and relaxation",
            "dueDate": "2023-06-20",
            "priority": "medium",
            "completed": false
        },

        {
            "category": "work",
            "title": "Reply to emails",
            "description": "Check and respond to pending emails in the inbox",
            "dueDate": "2023-06-20",
            "priority": "high",
            "completed": false
        },

        {
            "category": "home",
            "title": "Water plants",
            "description": "Give the indoor and outdoor plants a good watering",
            "dueDate": "2023-06-20",
            "priority": "low",
            "completed": false
        },

        {
            "category": "personal",
            "title": "Write in journal",
            "description": "Reflect on the day and jot down thoughts in a journal",
            "dueDate": "2023-06-20",
            "priority": "low",
            "completed": false
        },

        {
            "category": "work",
            "title": "Brainstorm ideas",
            "description": "Generate creative ideas for an upcoming project",
            "dueDate": "2023-06-20",
            "priority": "medium",
            "completed": false
        },

        {
            "category": "home",
            "title": "Do laundry",
            "description": "Wash, dry, and fold the laundry",
            "dueDate": "2023-06-20",
            "priority": "medium",
            "completed": false
        },

        {
            "category": "personal",
            "title": "Call a friend or family member",
            "description": "Reach out and have a conversation with a loved one",
            "dueDate": "2023-06-20",
            "priority": "low",
            "completed": false
        },

        {
            "category": "work",
            "title": "Update project documentation",
            "description": "Review and update project documentation for accuracy",
            "dueDate": "2023-06-20",
            "priority": "high",
            "completed": false
        },
    ];

    const todoFactory = (category, title, description, dueDate, priority, completed = false) => {
        return { category, title, description, dueDate, priority, completed };
    };

    const addTodo = (category, title, description, dueDate, priority, completed = false) => {
        const newTodo = todoFactory(category, title, description, dueDate, priority, false);
        todos.push(newTodo);
    };

    const deleteTodo = (index) => {
        todos.splice(index, 1);
    };

    const createCategoryList = () => {
        const categoryArray = new Set(todos.map(todo => todo.category));
        return categoryArray;
    };

    const groupBy = (array, key) => {
        return array.reduce((result, currentValue) => {
            const groupKey = currentValue[key];
            result[groupKey] = result[groupKey] || [];
            result[groupKey].push({ ...currentValue });
            return result;
        }, {});
    };

    const result = groupBy(todos, "category");
    console.log(result);

    const toggleCompleted = (index) => {
        return todos[index - 1].completed = !todos[index - 1].completed;
    };

    return {
        todos,
        addTodo,
        deleteTodo,
        createCategoryList,
        toggleCompleted,
    };
};
export default model