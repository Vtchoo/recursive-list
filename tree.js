export default function Tree(items, root, parent = null){

    // Creates an unordered list
    const ul = document.createElement('ul')

    // Get all children of parent item
    const listItems = items.filter(item => item.parent == parent)
    
    // Iterate through all children
    listItems.forEach(item => {

        // Creates child display element and show name
        const div = document.createElement('div')
        div.innerText = item.name
        
        // Render child as list item
        const li = document.createElement('li')
        ul.classList.add('collapsed')

        // Inserts display element into list item and then into parent list
        li.append(div)
        ul.append(li)

        // Get all children of child
        const subItems = items.filter(subItem => item.id === subItem.parent)
        if(subItems.length){

            // Creates new list from children of child
            const subList = Tree(items, li, item.id)

            // Add event listener to collapse all children when clicking on display element
            div.addEventListener('click', () => subList.classList.toggle('collapsed'))
        }
    })

    // Appends child list to parent list element
    root.append(ul)

    return ul
}