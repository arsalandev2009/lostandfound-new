
//   let detail = document.getElementById("detail");
// let lostitem = document.getElementById("lost");
// let founditem = document.getElementById("found");

// lostitem.style.backgroundColor = "white";
// detail.innerHTML = `
//         <h3 class="container-headings">Item Name *</h3>
//         <input type="text" placeholder="e.g. ID card , Mobile, wallet" id="lost-title"/>

//         <h3 class="container-headings">Description *</h3>
//         <textarea placeholder="Provide a detailed description of the item including color, brand, features" style="height: 100px;" id="lost-description"></textarea>

//         <h3 class="container-headings">Category *</h3>
//         <select>
//           <option value="select">Select a category</option>
//           <option value="Electronics">Electronics</option>
//           <option value="Wallet">Wallet</option>
//           <option value="Documents">Documents</option>
//           <option value="Other">Other</option>
//         </select>

//         <div class="content1">

//           <div class="content1-1">
//             <h3 class="container-headings">Location Last Seen *</h3>
//             <input type="text" placeholder="e.g. Library 2nd floor, Studemt Union"/>
//           </div>

//           <div class="content1-2">
//             <h3 class="container-headings">Date Lost *</h3>
//             <input type="date" name="" id="" />
//           </div>

//         </div>

//         <h3 class="container-headings">Upload Image (Optional)</h3>
//         <input type="file" style="height:60px;"/>

//         <div class="content2">
//           <h3 class="container-headings">Contact Information</h3>

//           <div class="content2-inner">
//             <div class="content2-inner-1">
//               <h3 class="container-headings">Your Name *</h3>
//               <input type="text" placeholder="e.g. john"/>
//             </div>

//             <div class="content2-inner-2">
//               <h3 class="container-headings">Email address *</h3>
//               <input type="email" placeholder="e.g. abc123@gmail.com" />
//             </div>
//           </div>
//         </div>
//       </div>

// <button class="content3" onclick="lostcard()" >
//   <img src="/assets/send-logo.png" alt="" width="25px">
  
//   Submit lost Item report
// </button>
// `;

// function lost() {
//   lostitem.style.backgroundColor = "white";
//   founditem.style.backgroundColor = "";
//   // founditem.style.fontSize = "23px";
//   // lostitem.style.fontSize = "23px";

//   // founditem.style.fontSize = "22px";

//   detail.innerHTML = `      
// <h3 class="container-headings">Item Name *</h3>
//         <input type="text" placeholder="e.g. ID card , Mobile, wallet" id="lost-title"/>

//         <h3 class="container-headings">Description *</h3>
//         <textarea placeholder="Provide a detailed description of the item including color, brand, features" style="height: 100px;" id="lost-title"></textarea>

//         <h3 class="container-headings">Category *</h3>
//         <select>
//           <option value="select">Select a category</option>

//            <option value="Electronics">Electronics</option>
//    <option value="Wallet">Wallet</option>
//    <option value="Documents">Documents</option>
//    <option value="Other">Other</option>
//         </select>

//         <div class="content1">

//           <div class="content1-1">
//             <h3 class="container-headings">Location Last Seen *</h3>
//             <input type="text" placeholder="e.g. Library 2nd floor, Studemt Union"/>
//           </div>

//           <div class="content1-2">
//             <h3 class="container-headings">Date Lost *</h3>
//             <input type="date" name="" id="" />
//           </div>

//         </div>

//         <h3 class="container-headings">Upload Image (Optional)</h3>
//         <input type="file" style="height:60px;"/>

//         <div class="content2">
//           <h3 class="container-headings">Contact Information</h3>

//           <div class="content2-inner">
//             <div class="content2-inner-1">
//               <h3 class="container-headings">Your Name *</h3>
//               <input type="text" placeholder="e.g. john"/>
//             </div>

//             <div class="content2-inner-2">
//               <h3 class="container-headings">Email address *</h3>
//               <input type="email" placeholder="e.g. abc123@gmail.com"/>
//             </div>
//           </div>
//         </div>
//       </div>

// <button class="content3" onclick="lostcard()">
//     <img src="/assets/send-logo.png" alt="" width="25px">
//   Submit lost Item report
// </button>
// `;
// }

// function found() {
//   lostitem.style.backgroundColor = "";
//   founditem.style.backgroundColor = "white";

//   detail.innerHTML = `      
// <h3 class="container-headings">Item Name *</h3>
//         <input type="text" placeholder="e.g. ID card , Mobile, wallet" id="found-title"/>

//         <h3 class="container-headings">Description *</h3>
//         <textarea placeholder="Provide a detailed description of the item including color, brand, features" style="height: 100px;" id="found-description"></textarea>

//         <h3 class="container-headings">Category *</h3>
//         <select>
//           <option value="select">Select a category</option>

//        <option value="Electronics">Electronics</option>
//    <option value="Wallet">Wallet</option>
//    <option value="Documents">Documents</option>
//    <option value="Other">Other</option>
//         </select>

//         <div class="content1">

//           <div class="content1-1">
//             <h3 class="container-headings">Location found *</h3>
//             <input type="text" placeholder="e.g. Library 2nd floor, Studemt Union"/>
//           </div>

//           <div class="content1-2">
//             <h3 class="container-headings">Date Found *</h3>
//             <input type="date" name="" id="" />
//           </div>

//         </div>

//         <h3 class="container-headings">Upload Image (Optional)</h3>
//         <input type="file" style="height:60px;"/>

//         <div class="content2">
//           <h3 class="container-headings">Contact Information</h3>

//           <div class="content2-inner">
//             <div class="content2-inner-1">
//               <h3 class="container-headings">Your Name *</h3>
//               <input type="text" placeholder="e.g. john"/>
//             </div>

//             <div class="content2-inner-2">
//               <h3 class="container-headings">Email address *</h3>
//               <input type="email" placeholder="e.g. abc123@gmail.com"/>
//             </div>
//           </div>
//         </div>
//       </div>

// <button class="content3" onclick="foundcard()">
//     <img src="/assets/send-logo.png" alt="" width="25px">
//   Submit Found Item report
// </button>
//         `;
// }


// let itemscontainer = document.getElementById("items-container");

// function lostcard() {


//   let losttitle = document.getElementById("lost-title").value;
//   let lostdescription = document.getElementById("lost-description").value;  
// console.log(losttitle);

//  itemscontainer.innerHTML +=  `
//     <div class="boxes">
//         <div class="image">
//           <div class="lostORfound" style="background-color: red;">Lost</div>
//           <img src="/assets/bag.png" alt="" />
//         </div>

//         <div class="title">
//           <p>${losttitle}</p>
//         </div>

//         <div class="description">
//           <p>
//             ${lostdescription}
//           </p>
//         </div>

//         <div class="button">
//           <button>Click for more details</button>
//         </div>
//      </div>
// `;

//  window.location.href = "items.html";
// }

// function foundcard() {
//   let foundtitle = document.getElementById("found-title").value;
//   let founddescription = document.getElementById("found-description").value;

//   itemscontainer.innerHTML += `
//     <div class="boxes">
//         <div class="image">
//           <div class="lostORfound" style="background-color: green;">Found</div>
//           <img src="/assets/bag.png" alt="" />
//         </div>

//         <div class="title">
//           <p>${foundtitle}</p>
//         </div>

//         <div class="description">
//           <p>
//             ${founddescription}
//           </p>
//         </div>

//         <div class="button">
//           <button>Click for more details</button>
//         </div>
//      </div>
// `;
//  window.location.href = "items.html";
// }












































// =============================
// GLOBAL CHECK
// =============================

let detail = document.getElementById("detail");
let lostitem = document.getElementById("lost");
let founditem = document.getElementById("found");
let itemscontainer = document.getElementById("items-container");

// =============================
// LOAD DEFAULT LOST FORM (only if report page exists)
// =============================

if (detail && lostitem && founditem) {
  lostitem.style.backgroundColor = "white";

  detail.innerHTML = `
         <h3 class="container-headings">Item Name *</h3>
         <input type="text" placeholder="e.g. ID card , Mobile, wallet" id="lost-title" required="required" />
         <h3 class="container-headings">Description *</h3>
         <textarea placeholder="Provide a detailed description of the item including color, brand, features" style="height: 100px;" id="lost-description" required="required"></textarea>
         <h3 class="container-headings">Category *</h3>
         <select>
           <option value="select">Select a category</option>
           <option value="Electronics">Electronics</option>
           <option value="Wallet">Wallet</option>
           <option value="Documents">Documents</option>
           <option value="Other">Other</option>
         </select>
         <div class="content1">
           <div class="content1-1">
             <h3 class="container-headings">Location Last Seen *</h3>
             <input type="text" placeholder="e.g. Library 2nd floor, Studemt Union"/>
           </div>
           <div class="content1-2">
             <h3 class="container-headings">Date Lost *</h3>
             <input type="date" name="" id="" />
           </div>
         </div>
         <h3 class="container-headings">Upload Image (Optional)</h3>
         <input type="file" style="height:60px;"/>
         <div class="content2">
           <h3 class="container-headings">Contact Information</h3>
           <div class="content2-inner">
             <div class="content2-inner-1">
               <h3 class="container-headings">Your Name *</h3>
               <input type="text" placeholder="e.g. john"/>
             </div>
             <div class="content2-inner-2">
               <h3 class="container-headings">Email address *</h3>
               <input type="email" placeholder="e.g. abc123@gmail.com" />
             </div>
           </div>
         </div>
      
 <button class="content3" onclick="lostcard()" >
   <img src="/assets/send-logo.png" alt="" width="25px">
   Submit lost Item report
 </button>
 `;
}

// =============================
// SWITCH TO LOST FORM
// =============================

function lost() {
  if (!detail) return;

  lostitem.style.backgroundColor = "white";
  founditem.style.backgroundColor = "";

  detail.innerHTML = `
<h3 class="container-headings">Item Name *</h3>
         <input type="text" placeholder="e.g. ID card , Mobile, wallet" id="lost-title" required="required"/>
         <h3 class="container-headings">Description *</h3>
         <textarea placeholder="Provide a detailed description of the item including color, brand, features" style="height: 100px;" id="lost-description" required="required"></textarea>
         <h3 class="container-headings">Category *</h3>
         <select>
           <option value="select">Select a category</option>
           <option value="Electronics">Electronics</option>
           <option value="Wallet">Wallet</option>
           <option value="Documents">Documents</option>
           <option value="Other">Other</option>
         </select>
         <div class="content1">
           <div class="content1-1">
             <h3 class="container-headings">Location Last Seen *</h3>
             <input type="text" placeholder="e.g. Library 2nd floor, Studemt Union"/>
           </div>
           <div class="content1-2">
             <h3 class="container-headings">Date Lost *</h3>
             <input type="date" name="" id="" />
           </div>
         </div>
         <h3 class="container-headings">Upload Image (Optional)</h3>
         <input type="file" style="height:60px;"/>
         <div class="content2">
           <h3 class="container-headings">Contact Information</h3>
           <div class="content2-inner">
             <div class="content2-inner-1">
               <h3 class="container-headings">Your Name *</h3>
               <input type="text" placeholder="e.g. john"/>
             </div>
             <div class="content2-inner-2">
               <h3 class="container-headings">Email address *</h3>
               <input type="email" placeholder="e.g. abc123@gmail.com" />
             </div>
           </div>
         </div>
      
 <button class="content3" onclick="lostcard()" >
   <img src="/assets/send-logo.png" alt="" width="25px">
   Submit lost Item report
 </button>
  `;
}

// =============================
// SWITCH TO FOUND FORM
// =============================

function found() {
  if (!detail) return;

  lostitem.style.backgroundColor = "";
  founditem.style.backgroundColor = "white";

  detail.innerHTML = `
 <h3 class="container-headings">Item Name *</h3>
         <input type="text" placeholder="e.g. ID card , Mobile, wallet" id="found-title" required="required"/>
         <h3 class="container-headings">Description *</h3>
         <textarea placeholder="Provide a detailed description of the item including color, brand, features" style="height: 100px;" id="found-description" required="required"></textarea>
         <h3 class="container-headings">Category *</h3>
         <select>
           <option value="select">Select a category</option>
        <option value="Electronics">Electronics</option>
    <option value="Wallet">Wallet</option>
    <option value="Documents">Documents</option>
    <option value="Other">Other</option>
         </select>
         <div class="content1">
           <div class="content1-1">
             <h3 class="container-headings">Location found *</h3>
             <input type="text" placeholder="e.g. Library 2nd floor, Studemt Union"/>
           </div>
           <div class="content1-2">
             <h3 class="container-headings">Date Found *</h3>
             <input type="date" name="" id="" />
           </div>
         </div>
         <h3 class="container-headings">Upload Image (Optional)</h3>
         <input type="file" style="height:60px;"/>
         <div class="content2">
           <h3 class="container-headings">Contact Information</h3>
           <div class="content2-inner">
             <div class="content2-inner-1">
               <h3 class="container-headings">Your Name *</h3>
               <input type="text" placeholder="e.g. john"/>
             </div>
             <div class="content2-inner-2">
               <h3 class="container-headings">Email address *</h3>
               <input type="email" placeholder="e.g. abc123@gmail.com"/>
             </div>
           </div>
         </div>
      
 <button class="content3" onclick="foundcard()">
     <img src="/assets/send-logo.png" alt="" width="25px">
   Submit Found Item report
 </button>
  `;
}

// =============================
// SAVE LOST ITEM
// =============================

function lostcard() {
  let losttitle = document.getElementById("lost-title").value;
  let lostdescription = document.getElementById("lost-description").value;

    if (losttitle.trim() === "" || lostdescription.trim() === "") {
    alert("Please fill all fields");
    return;
  }

  let items = JSON.parse(localStorage.getItem("items")) || [];

  items.push({
    title: losttitle,
    desc: lostdescription,
    type: "Lost"
  });

  localStorage.setItem("items", JSON.stringify(items));

  window.location.href = "items.html";
}

// =============================
// SAVE FOUND ITEM
// =============================

function foundcard() {
  let foundtitle = document.getElementById("found-title").value;
  let founddescription = document.getElementById("found-description").value;

  if (foundtitle.trim() === "" || founddescription.trim() === "") {
    alert("Please fill all fields");
    return;
  }

  let items = JSON.parse(localStorage.getItem("items")) || [];

  items.push({
    title: foundtitle,
    desc: founddescription,
    type: "Found"
  });

  localStorage.setItem("items", JSON.stringify(items));

  window.location.href = "items.html";
}

// =============================
// RENDER ITEMS PAGE
// =============================

if (itemscontainer) {
  let items = JSON.parse(localStorage.getItem("items")) || [];

  items.forEach(item => {
    itemscontainer.innerHTML += `
      <div class="boxes">
          <div class="image">
            <div class="lostORfound" style="background-color:${item.type === "Lost" ? "red" : "green"};">
              ${item.type}
            </div>
            <img src="./assets/bag.png" alt="" />
          </div>

          <div class="title">
            <p>${item.title}</p>
          </div>

          <div class="description">
            <p>${item.desc}</p>
          </div>

          <div class="button">
            <button>Click for more details</button>
          </div>
       </div>
    `;
  });
}
