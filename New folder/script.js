// script.js

document.addEventListener('DOMContentLoaded', function () {
    const navbar = [
        { name: 'Home', id: 'home' },
        { name: 'About', id: 'about' },
        {
            name: 'Our Products',
            id: 'product',
            child: [
                { name: 'Product 1', id: 'p1' },
                { name: 'Product 2', id: 'p2' },
                { name: 'Product 3', id: 'p3' },
                { name: 'Product 4', id: 'p4' },
            ],
        },
        { name: 'Contact Us', id: 'contact' },
    ];

    const topMenu = document.getElementById('top-menu');

    function createMenuItem(item) {
        const li = document.createElement('li');
        const a = document.createElement('a');
        a.textContent = item.name;
        a.href = `#${item.id}`;
        li.appendChild(a);

        if (item.child) {
            const subMenu = createSubMenu(item.child);
            li.appendChild(subMenu);

            // Add event listener to toggle submenu visibility
            li.addEventListener('click', function (e) {
                e.preventDefault(); // Prevent parent item from navigating
                subMenu.style.display = subMenu.style.display === 'block' ? 'none' : 'block';
            });
        }

        return li;
    }

    function createSubMenu(submenuItems) {
        const ul = document.createElement('ul');
        ul.className = 'sub-menu';
        submenuItems.forEach((subitem) => {
            const li = createMenuItem(subitem);
            ul.appendChild(li);
        });
        return ul;
    }

    function createMenu(menuItems, parent) {
        menuItems.forEach((item) => {
            const li = createMenuItem(item);
            parent.appendChild(li);
        });
    }

    createMenu(navbar, topMenu);
});
