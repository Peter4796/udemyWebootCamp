let input= prompt("What would you like to do?")
const todos= ['Eat', 'Gym','Code']
while (input!=='quit'&& input!=='q') {
    if (input==='list') {
        for (let i = 0; i < todos.length; i++) {
            console.log(`${i}:${todos[i]}`)
        }
    }
    else if (input=== 'new') {
    const newTodo= prompt('Enter your newtodo')
    todos.push(newTodo)
    console.log(`${newTodo} added to the list`)
}
else if (input=== 'delete') {
  const deleteIndex= parseInt(prompt('Enter the index of item you want to delete'))
  if (!Number.isNaN(deleteIndex)) {
    const deleted= todos.splice(deleteIndex, 1)
  console.log(`${deleted} has been deleted successfully` )
  }
  else{
    console.log('index not valid')
  }
}
    input= prompt("What would you like to do?")
}


console.log("OK QUIT THE APP")