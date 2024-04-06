// turn pages when click next ir prev button
const pageTurunBtn = document.querySelectorAll('.nextprev-btn');

pageTurunBtn.forEach((el,index)=>{
    el.onclick = () => {
        const pageTurnId = el.getAttribute('data-page');
        const pageTurn = document.getElementById(pageTurnId);

        if(pageTurn.classList.contains('turn'))
        {
            pageTurn.classList.remove('turn');
            setTimeout(()=>{
                pageTurn.style.zIndex = 20-index;
            },500)
        }
        else{
            // 
            pageTurn.classList.add('turn');
            setTimeout(()=>{
                pageTurn.style.zIndex = 20+index;
            },500)
        }
    }
})

// contact me button when click

const pages = document.querySelectorAll('.book-page.page-right');
const contactMeBtn = document.querySelector('.btn.contact-me');

contactMeBtn.onclick = () =>{
    pages.forEach((page,index) => {
        setTimeout(()=>{
            page.classList.add('turn');

            setTimeout(()=>{
                page.style.zIndex = 20 + index;
            },500)
        },(index+1)*200+100)
    })  
}

// create reverse index function
let totalPages = pages.length;
let pageNumber = 0;

function reverseIndex()
{
    pageNumber--;
    if(pageNumber<0)
    {
        pageNumber = totalPages-1;
    }
}

// back profile button when click
const backProfileBtn = document.querySelector('.back-profile');

backProfileBtn.onclick = () => {
    pages.forEach((_, index) => {
        setTimeout(()=>{
            reverseIndex();
            pages[pageNumber].classList.remove('turn');
            
            setTimeout(()=>{
                reverseIndex();
                pages[pageNumber].style.zIndex = 10+index;
            },500)

        },(index+1)*200+100);
    })
}

// opening animation
const coverRight = document.querySelector('.cover.cover-right');
const pageLeft = document.querySelector('.book-page.page-left');

// opening animation (cover right animation)
setTimeout(()=>{
    coverRight.classList.add('turn');
},2100)

setTimeout(()=>{
    coverRight.style.zIndex= -1;
},2800)

// opening animation (page Left or profiole page animation)
setTimeout(()=>{
    pageLeft.style.zIndex= 20;
},3200)



// opening animation (all page right animation)
pages.forEach((_, index) => {
    setTimeout(()=>{
        reverseIndex();
        pages[pageNumber].classList.remove('turn');
        
        setTimeout(()=>{
            reverseIndex();
            pages[pageNumber].style.zIndex = 10+index;
        },500)

    },(index+1)*200+2100);
})

// zoom out 
// document.addEventListener("DOMContentLoaded", function() {
    
    
//     adjustZoom();
    
//     // Adjust on window resize
//     window.onresize = adjustZoom;
// });

// function adjustZoom() {
//     // Assuming you want to scale down to 30% as an example
//     if (window.innerWidth < 875) {
//         document.body.style.zoom = "30%";
//     }
// }


// document.addEventListener("DOMContentLoaded", function() {
//     // Check if the screen width is less than or equal to 768 pixels
//     if (window.innerWidth <= 875) {
//         // Apply zoom only for mobile view
//         document.body.style.zoom = "30%"; // Adjust the zoom level as needed
//     }
    
    // Optionally, adjust on window resize
    // window.onresize = function() {
    //     if (window.innerWidth <= 875) {
    //         document.body.style.zoom = "30%";
    //     } else {
    //         // Reset to default for screens wider than 768 pixels
    //         document.body.style.zoom = "100%";
    //     }
    // };
// });