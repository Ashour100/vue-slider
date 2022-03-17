/**
 *
 *
 *
Riprendiamo l'esercizio carosello e rifacciamolo, questa volta usando gli oggetti, prendendo come riferimento il codice scritto oggi insieme a lezione, che troverete direttamente nella mia repository di github a questo link: [link github]

Modifichiamo il codice dell'esercizio per renderlo funzionante con un array di oggetti al posto dei tre array separati, con una sola regola: non è possibile modificare l'HTML ma solamente JS e CSS.
Ricordiamo sempre l'importanza dell'integrità del dato.

Bonus 1:
Sperimentiamo attraverso l'uso delle timing functions anche una funzionalità di scorrimento al nostro carosello:
al click di un bottone o già dall'inizio possiamo far partire, ad intervalli di tempo a piacere, lo scorrimento delle immagini disponibili nel carosello stesso.

Bonus 2:
E se volessi un bottone per invertire la "direzione" del carosello?

 *
 */
const app= new Vue({
    el:'#app',
    data:{
        content: [
            {
                Name:'Svezia',
                text:'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis, magnam dolores dolorum corporis.',
                img:'https://picsum.photos/1255/540?random=1'
            },
            {
                Name:'Svizzera',
                text:'Lorem ipsum',
                img:'https://picsum.photos/1255/540?random=2'
            },
            {
                Name:'Gran Bretagna',
                text:'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
                img:'https://picsum.photos/1255/540?random=3'
            },
            {
                Name:'Germania',
                text:'Lorem ipsum',
                img:'https://picsum.photos/1255/540?random=4'
            },
            {
                Name:'Paradise',
                text:'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,',
                img:'https://picsum.photos/1255/540?random=5'
            }],
        activeElement:'0',
        counter:'0',

    },
    mounted(){
        const autoplay=()=>{
            if(this.counter%2==0)
            this.nextFunction();
            else
            this.prevFunction();
        }
        setInterval(autoplay,3000);  
    },
    methods:{
        nextFunction: function(){
            if(this.activeElement<this.content.length-1)
                this.activeElement++;
            else
                this.activeElement=0;
        },
        prevFunction: function(){
        if(this.activeElement>=1)
            this.activeElement--;
        else
            this.activeElement=this.content.length-1;
        },
        counterpiu: function(){
            this.counter++;
            console.log(this.counter);
        },
        stopAutoPlay:()=>clearInterval(this.autoplay),
        resumeAutoPlay:()=>setInterval(this.autoplay,3000),
        changeActiveElement:function(index){
            this.activeElement=index;
        }
    },
    
})

// let banner= document.querySelector(".banner");
// // const content= [
    // {
    //     Name:'Svezia',
    //     text:'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis, magnam dolores dolorum corporis.',
    //     img:'https://picsum.photos/1255/540?random=1'
    // },
    // {
    //     Name:'Svizzera',
    //     text:'Lorem ipsum',
    //     img:'https://picsum.photos/1255/540?random=2'
    // },
    // {
    //     Name:'Gran Bretagna',
    //     text:'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
    //     img:'https://picsum.photos/1255/540?random=3'
    // },
    // {
    //     Name:'Germania',
    //     text:'Lorem ipsum',
    //     img:'https://picsum.photos/1255/540?random=4'
    // },
    // {
    //     Name:'Paradise',
    //     text:'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,',
    //     img:'https://picsum.photos/1255/540?random=5'
    // }];

// let thumbnailContent = '';
// let bannerContent='';

// for (let i = 0 ; i < content.length ; i++){
//     thumbnailContent += `
    // <div class="thumbnail-element position-relative">
    //     <img class="w-100" src="${content[i].img}" alt="Random pic">
    //     <div class="effect overlay position-absolute w-100 h-100"></div>
    // </div>`;
//     bannerContent += `
//     <div class="banner-element d-none position-relative">
//         <img class="w-100 h-100" src="${content[i].img}" alt="Random pic">
//         <div class="position-absolute bottom-0 end-0 text-white p-3 text-end">
//         <h5>${content[i].Name}</h5>
//         <span>${content[i].text}</span>
//         </div>
//     </div>`
// }

// let thumbnailWrapper=document.querySelector(".my-thumbnails");
// let bannerWrapper= document.querySelector(".my-carousel-images");

// thumbnailWrapper.innerHTML += thumbnailContent;
// bannerWrapper.innerHTML+=bannerContent;

// const thumbnailElements = document.getElementsByClassName('thumbnail-element');

// const bannerElements = document.getElementsByClassName('banner-element');

// thumbnailElements[0].classList.add('active');
// bannerElements[0].classList.remove('d-none');
// bannerElements[0].classList.add('d-block');

// const next = document.querySelector('.my-next');
// const reverse = document.querySelector('.reverse');
// let counter=0;

// let activeElement = 0;
// const nextFunction= function(){
//         bannerElements[activeElement].classList.remove('d-block');
//         bannerElements[activeElement].classList.add('d-none');
//         thumbnailElements[activeElement].classList.remove('active');
//         if(activeElement<bannerElements.length-1)
//             activeElement++;
//         else
//             activeElement=0;
//         bannerElements[activeElement].classList.remove('d-none');
//         bannerElements[activeElement].classList.add('d-block');
//         thumbnailElements[activeElement].classList.add('active');
// }
// next.addEventListener('click', function() {
//     nextFunction();
// });

// const previous = document.querySelector('.my-previous');

// activeElement = 0;

// const prevFunction= function(){
    
//         bannerElements[activeElement].classList.remove('d-block');
//         bannerElements[activeElement].classList.add('d-none');
//         thumbnailElements[activeElement].classList.remove('active');
//         if(activeElement>=1)
//             activeElement--;
//         else
//         activeElement=bannerElements.length-1;
//         bannerElements[activeElement].classList.remove('d-none');
//         bannerElements[activeElement].classList.add('d-block');
//         thumbnailElements[activeElement].classList.add('active');
// }
// previous.addEventListener('click', function() {
//     prevFunction();
// });

// reverse.addEventListener("click", function(){
//     counter++;
// })
// const slideShow =function(){
//     if(counter%2==0)
//         nextFunction();
//     else
//         prevFunction();
// }
// setInterval(slideShow,3000);