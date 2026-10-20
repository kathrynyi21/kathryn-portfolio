// QUICK EDIT GUIDE: update project details below. Put image files in /assets and use paths like "assets/my-image.jpg".
const projects = [
  {title:"Project One",category:"3D / VISUAL STORYTELLING",year:"2025",image:"",video:"",description:"Replace this with the project's idea, context, and what you wanted to explore. Show the finished piece, then the sketches, storyboard, layout, and process behind it.",role:"Concept, modeling, lighting, rendering",tools:"Blender · Maya · After Effects",gallery:[]},
  {title:"Project Two",category:"VISUAL DEVELOPMENT / VFX",year:"2025",image:"",video:"",description:"A project description goes here. Explain the creative problem, your decisions, and how the final result developed from the early visual research.",role:"Storyboards, layout, compositing",tools:"Add the tools you used",gallery:[]},
  {title:"Project Three",category:"CREATIVE TECHNOLOGY",year:"2026",image:"",video:"",description:"Document a creative workflow, AI-assisted experiment, automation, or evaluation project you are allowed to share. Focus on the challenge, process, iterations, and result. Do not include confidential company information.",role:"Workflow design, testing, documentation",tools:"Python · AI tools · Production tools",gallery:[]},
  {title:"Project Four",category:"VISUAL DESIGN / PERSONAL WORK",year:"2024",image:"",video:"",description:"Use this project for another strong piece of visual work, a design layout, or a personal experiment.",role:"Add your contribution",tools:"Add tools / materials",gallery:[]}
];

const grid=document.querySelector("#work-grid");
const dialog=document.querySelector("#project-dialog");
function cardFor(p,i){
 const b=document.createElement("button");b.className="project-card";b.type="button";b.setAttribute("aria-label","Open "+p.title);
 const art=document.createElement("div");art.className="project-art";
 if(p.image){const img=document.createElement("img");img.src=p.image;img.alt=p.title+" preview";art.append(img)}else{const ph=document.createElement("div");ph.className="placeholder-art";art.append(ph)}
 const ix=document.createElement("span");ix.className="project-index";ix.textContent=String(i+1).padStart(2,"0");const yr=document.createElement("span");yr.className="project-year";yr.textContent=p.year||"SELECTED WORK";art.append(ix,yr);
 const meta=document.createElement("div");meta.className="project-meta";const title=document.createElement("strong");title.textContent=p.title;const cat=document.createElement("span");cat.textContent=p.category;meta.append(title,cat);b.append(art,meta);b.addEventListener("click",()=>openProject(p));return b;
}
function openProject(p){
 document.querySelector("#dialog-kicker").textContent=p.category+" · "+(p.year||"SELECTED WORK");
 document.querySelector("#dialog-title").textContent=p.title;
 document.querySelector("#dialog-description").textContent=p.description;
 document.querySelector("#dialog-role").textContent=p.role;
 document.querySelector("#dialog-tools").textContent=p.tools;
 const cover=document.querySelector("#dialog-cover");cover.replaceChildren();
 if(p.video){const v=document.createElement("video");v.src=p.video;v.controls=true;v.playsInline=true;cover.append(v)}
 else if(p.image){const im=document.createElement("img");im.src=p.image;im.alt=p.title+" main image";cover.append(im)}
 else{const s=document.createElement("span");s.textContent="ADD A HERO IMAGE OR VIDEO";cover.append(s)}
 const gallery=document.querySelector("#dialog-gallery");gallery.replaceChildren();(p.gallery||[]).forEach(src=>{const im=document.createElement("img");im.src=src;im.alt=p.title+" process image";gallery.append(im)});
 dialog.showModal();
}
projects.forEach((p,i)=>grid.append(cardFor(p,i)));
document.querySelector("#dialog-close").addEventListener("click",()=>dialog.close());
dialog.addEventListener("click",e=>{if(e.target===dialog)dialog.close()});
document.querySelector("#year").textContent=new Date().getFullYear();
document.querySelector("#copy-email").addEventListener("click",async()=>{const email="hello@example.com";try{await navigator.clipboard.writeText(email);document.querySelector("#copy-email").textContent="Copied!"}catch{document.querySelector("#copy-email").textContent=email}});
