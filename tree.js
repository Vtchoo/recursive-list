export default function Tree(items, root, parent = null){

    const ul = document.createElement('ul')

    const listItems = items.filter(item => item.parent == parent)
    
    listItems.forEach(item => {

        const li = document.createElement('li')
        li.innerText = item.name

        ul.append(li)

        const subItems = items.filter(subItem => item.id === subItem.parent)
        if(subItems.length)
            Tree(items, li, item.id)
    })

    root.append(ul)
}