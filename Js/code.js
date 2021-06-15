// owl carousel
$(document).ready(function(){
    $(".owl-carousel").owlCarousel();
});
$('.owl-carousel').owlCarousel({
    autoPlay: 3000,
    loop:true,
    margin:20,
    nav: true,
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
            nav:true
        },
        600:{
            items:2,
            nav:true
        },
        992:{
            items:3,
            nav:true
        },
    }   
})
// stories
const stories = [
    {
        image: "Images/1st-tab.jpg",
        text: "Please do not re-distribute our template ZIP file on your template collection sites. You can make a screenshot and a link back to our website. This template can be used for personal or commercial purposes by end-users.",
        date: "2008 - 2014",
    },
    {
        image: "Images/2nd-tab.jpg",
        text: "Aliquam eu ultrices risus, sed condimentum diam. Duis risus nulla, elementum vitae nisi a, ornare maximus nisl. Morbi et vehicula est. Cras at vulputate justo. Cras eu nulla metus. Ut et pretium velit. Pellentesque at neque tristique dui tempor venenatis.",
        date: "2014 - 2016",
    },
    {
        image: "Images/3rd-tab.jpg",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed lacinia ligula est, at venenatis ex iaculis quis. Morbi sollicitudin nulla eget odio pellentesque, sed cursus diam iaculis.",
        date: "2016 - 2019",
    },
    {
        image: "Images/4th-tab.jpg",
        text: "Duis risus nulla, elementum vitae nisi a, ornare maximus nisl. Morbi et vehicula est. Cras at vulputate justo. Cras eu nulla metus. Ut et pretium velit. Pellentesque at neque tristique.",
        date: "2019 - Now",
    },
];
stories.forEach((story)=>{
    const storyDiv = document.createElement("div");
    const storyImg = document.createElement("img");
    const storyText = document.createElement("p");
    storyContainer.appendChild(storyDiv);
    storyDiv.classList.add("storyDiv" , "n");
    storyDiv.appendChild(storyImg);
    storyImg.classList.add("storyImg");
    storyImg.src = story.image;
    storyDiv.appendChild(storyText);
    storyText.classList.add("storyText");
    storyText.innerHTML = story.text;
// ============================================
// console.log(storyIndex)
const storyDivs = document.querySelectorAll(".storyDiv");
const spanDate = document.createElement("span");
spanDate.classList.add("spanDate");
date.appendChild(spanDate);
spanDate.innerHTML = `<span class="spnaA">${story.date}</span>`;
const spnaAs = document.querySelectorAll(".spnaA");
storyDivs[0].classList.remove("n");
spnaAs[0].classList.add("active");
const spansDate = document.querySelectorAll(".spanDate");
spansDate.forEach((spanDate , spanDateIndex)=>{
    spanDate.onclick = _=>{
            console.log(spanDateIndex);
            storyDivs.forEach((storyDiv)=>storyDiv.classList.add("n"));
            storyDivs[spanDateIndex].classList.remove("n")
            
            spnaAs.forEach((spnaA)=>{
                spnaA.classList.remove("active")
            });
            // console.log(storyDivs[spanDateIndex]);
            spnaAs[spanDateIndex].classList.add("active")
        }
    })
})
toTop.onclick = ()=>{
    scrollTo(0 , 0)
}