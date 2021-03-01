import Tree from './tree.js'

const items = [
    { id: 1, name: 'Electronics', parent: null },
    { id: 2, name: 'Kitchen', parent: null },
    { id: 3, name: 'Computer', parent: 1 },
    { id: 4, name: 'Mobile', parent: 1 },
    { id: 5, name: 'Smartphones', parent: 4 },
    { id: 6, name: 'Tablets', parent: 4 },
    { id: 7, name: 'Stoves', parent: 2 },
    { id: 8, name: 'Fridges', parent: 2 }
]

const root = document.querySelector('nav-tree')

Tree(items, root, null)