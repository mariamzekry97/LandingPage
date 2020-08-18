const randomText =
  "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like)., sometimes on purpose (injected humour and the like)., sometimes on purpose (injected humour and the like)., sometimes on purpose (injected humour and the like)., sometimes on purpose (injected humour and the like)., sometimes on purpose (injected humour and the like)., sometimes on purpose (injected humour and the like)., sometimes on purpose (injected humour and the like)., sometimes on purpose (injected humour and the like)., sometimes on purpose (injected humour and the like)., sometimes on purpose (injected humour and the like)., sometimes on purpose (injected humour and the like)., sometimes on purpose (injected humour and the like)., sometimes on purpose (injected humour and the like)., sometimes on purpose (injected humour and the like)., sometimes on purpose (injected humour and the like)., sometimes on purpose (injected humour and the like)., sometimes on purpose (injected humour and the like)., sometimes on purpose (injected humour and the like)., sometimes on purpose (injected humour and the like)., sometimes on purpose (injected humour and the like)., sometimes on purpose (injected humour and the like)., sometimes on purpose (injected humour and the like)., sometimes on purpose (injected humour and the like)., sometimes on purpose (injected humour and the like)., sometimes on purpose (injected humour and the like)., sometimes on purpose (injected humour and the like)., sometimes on purpose (injected humour and the like)., sometimes on purpose (injected humour and the like)., sometimes on purpose (injected humour and the like).";
const items = [
  { name: "Item1", content: randomText },
  { name: "Item2", content: randomText },
  { name: "Item3", content: randomText },
  { name: "Item4", content: randomText }
];
const fragment = document.createDocumentFragment();
const nav = document.querySelector(".nav");
let index = 1;


nav.addEventListener('click', (event) => {
    const targetId = event.target.id.split('_')[1];
    document.getElementById(`section_${targetId}`).scrollIntoView();
    for(let i = 1; i < index; i++)
    {
        const curId = `item_${i}`;
        if(i == targetId)
        {
            document.getElementById(curId).classList.add('active');
            document.getElementById(`section_${i}`).classList.add('active');

            console.log('curId = ', curId);
        }
        else
        {
            document.getElementById(curId).classList.remove('active');
            document.getElementById(`section_${i}`).classList.remove('active');

        }
    }
})

function getPageContent(){
    for (let item of items) {
        const navItem = document.createElement("li");
        navItem.setAttribute("id", `item_${index}`);

        const link = document.createElement("a");
        link.innerText = item.name;
        link.setAttribute("id", `link_${index}`);
        link.classList.add("nav-link");
    
      
        navItem.appendChild(link);
        nav.appendChild(navItem);
        navItem.classList.add("nav-item");
      
        const content = document.createElement("div");
        content.setAttribute("id", `section_${index}`);
        content.classList.add("content");

        const h = document.createElement("h3");
        h.innerText = item.name;
      
        const p = document.createElement("p");
        p.innerText = item.content;
        content.appendChild(h);
        content.appendChild(p);
        fragment.appendChild(content);
      
        index++;
      }
      
      document.body.appendChild(fragment);
}

getPageContent();