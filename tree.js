export default function Tree(items, root, parent = null){

    const ul = document.createElement('ul')

    const listItems = items.filter(item => item.parent == parent)
    
    listItems.forEach(item => {

        const div = document.createElement('div')
        div.innerText = item.name
        
        const li = document.createElement('li')
        li.append(div)

        ul.append(li)

        const subItems = items.filter(subItem => item.id === subItem.parent)
        if(subItems.length){

            const subList = Tree(items, li, item.id)

            div.addEventListener('click', () => subList.classList.toggle('collapsed'))
        }
    })

    root.append(ul)

    return ul
}