function toggleNav() {
    const outerGrid = document.querySelector(".outer-grid");
    outerGrid.classList.toggle("outer-grid-expanded");

    const navbar = document.querySelector("nav");
    navbar.classList.toggle("hide-nav");
}

// using JS because arithmetic operations on variables don't work in CSS
function updateGridStyles()
{
    if (window.innerWidth >= 1400) 
    {
        // Grab the root element because our CSS variables are global
        const rootElem = document.documentElement;

        // Get the required values from these variables
        const navbarWidth = parseInt(getComputedStyle(rootElem).getPropertyValue('--navbar-width'));
        const mainMaxWidth = parseInt(getComputedStyle(rootElem).getPropertyValue('--mainContainer-maxWidth'));
        const sidebarMaxWidth = parseInt(getComputedStyle(rootElem).getPropertyValue('--sidebar-maxWidth'));

        // extra variables for readability
        const fullContentWidth = navbarWidth + mainMaxWidth + sidebarMaxWidth;
        const mainContentWidth = mainMaxWidth + sidebarMaxWidth;
        const emptySpacing = (window.innerWidth - fullContentWidth) / 2;

        // Calculate the grid-template-columns value dynamically
        const outerGrid_gridTemplateColumns = `${emptySpacing}px ${navbarWidth}px ${mainContentWidth}px ${emptySpacing}px`;
        const header_gridTemplateColumns = `${emptySpacing}px ${fullContentWidth / 2}px ${fullContentWidth / 2}px ${emptySpacing}px`;
        const innerGrid_gridTemplateColumns = `${mainMaxWidth}px ${sidebarMaxWidth}px ${emptySpacing}px`;

        // Apply styles to the target elements
        document.querySelector('.outer-grid').style.gridTemplateColumns = outerGrid_gridTemplateColumns;
        document.querySelector('header').style.gridTemplateColumns = header_gridTemplateColumns;
        document.querySelector('.inner-grid').style.gridTemplateColumns = innerGrid_gridTemplateColumns;
    }
    else 
    {
        // Reset styles for smaller screens
        document.querySelector('.outer-grid').style.gridTemplateColumns = '';
        document.querySelector('header').style.gridTemplateColumns = '';
        document.querySelector('.inner-grid').style.gridTemplateColumns = '';
    }
}

// Call the function initially and later check on window resize
updateGridStyles();
window.addEventListener('resize', updateGridStyles);