const initialBlogPosts = [
    {
        id: 1,
        title: "Welcome to your new blog!",
        content: "Have fun! Become the next big blogger!"
    }
]

const blogReducer = (previousState, instructions) => {
    let stateEditable = null

    switch (instructions.type){
        case "create":
            //Making a copy of the previous state. Must be done
            stateEditable = [...previousState]

            // Checking the new title length in instructions if its too small.
            if (instructions.newData.title.length <= 1){
                console.log("New post title is too short.")
                return previousState
            }

            // Same check as before with title but with content
            if (instructions.newData.content.length <= 1){
                console.log("New post content is too short")
                return previousState
            }
            
            // Assigning id using the length of the copies array stateEditable.
            instructions.newData.id = stateEditable.length + 1
            // Assigning the title, also capitalising the first letter
            instructions.newData.title = instructions.newData.title.charAt(0).toUpperCase() + instructions.newData.title.slice(1);
            // Doing the same as title but with content
            instructions.newData.content = instructions.newData.content.charAt(0).toUpperCase() + instructions.newData.content.slice(1);

            // Modifying the state by pushing the new data into the array of the copied state
            stateEditable.push(instructions.newData)

            // Now just returning the state with the new blog post
            return stateEditable

        case "delete":
            // Making a copy of the previous state again, must be done for every case.
            stateEditable = [...previousState]

            // returning a new state without the id specified, using filter function.
            return stateEditable.filter(post => post.id !== instructions.newData.id)

            default:
                //returning previous state when invalid instructions provided.
                return previousState
    }
}

module.exports = {
    blogReducer, initialBlogPosts
}