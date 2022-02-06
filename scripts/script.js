const animate = document.getElementById("team_container");
const team = document.getElementById("team");
const url = "/images/headshots/";

createMembers = (members) => {
    members.forEach(function(value, i) {
      //create card
      createCard = () => {
        divOne = document.createElement("div");
        divOne.className = "col-md-4 col-xs-2";
        
        divTwo = document.createElement("div");
        divTwo.className = "modal-trigger card teamcard";
        img = document.createElement("img");
        img.className = "team";
        img.setAttribute("onClick", "removeAnimate()"); // remove aos animation/styling for modals
        img.setAttribute("alt", members[i].name);
        img.setAttribute("data-toggle", "modal");
        img.setAttribute("src", url + members[i].src);
        img.setAttribute("data-target", "#modal" + i); // the specific modal trigger
        img.setAttribute("loading", "lazy");
        divThree = document.createElement("div");
        divThree.className = "card-body teamcard-body";
        title = document.createElement("h3");
        title.className = "card-text teamcard-title";
        title.textContent = members[i].name;
        desc = document.createElement("h3");
        desc.className = "card-text teamcard-description";
        desc.textContent = members[i].position;
        divThree.appendChild(title);
        divThree.appendChild(desc);
        divTwo.appendChild(img);
        divTwo.appendChild(divThree);
        divOne.appendChild(divTwo);
        return divOne;
      }
      //create modal
      createModal = () => {
        modal = document.createElement("div");
        modal.id = "modal" + i; //the specific modal id
        modal.className = "modal fade";
        modal.setAttribute("tabindex", "-1");
        // modal.setAttribute("role", "dialog");
        modal.setAttribute("data-backdrop", "static");
        modal.setAttribute("data-keyboard", "false");
        modal.setAttribute("aria-labelledby", "Modal-label");
        modal.setAttribute("aria-hidden", "true");
        modalDialog = document.createElement("div");
        modalDialog.className = "modal-dialog modal-dialog-centered";
        // divTwo.setAttribute("role","document");
        modalContent = document.createElement("div");
        modalContent.className = "modal-content";
        modalHeader = document.createElement("div");
        modalHeader.className = "modal-header";
        button = document.createElement("button");
        button.className = "close";
        button.setAttribute("onclick", "addAnimate()"); //add aos animation/styling again after exiting modal
        button.setAttribute("type", "button");
        button.setAttribute("data-dismiss", "modal");
        button.setAttribute("aria-label", "Close");
        span = document.createElement("span");
        span.setAttribute("aria-hidden", "true");
        span.innerHTML = "&times;"
        button.appendChild(span);
        modalHeader.appendChild(button);
        modalBody = document.createElement("div");
        modalBody.className = "modal-body";
        container = document.createElement("div");
        container.className = "container-fluid";
        row = document.createElement("div");
        row.className = "row";
        col1 = document.createElement("div");
        col1.className = "col-md-6 my-auto mx-auto";
        img = document.createElement("img");
        img.className = "img-fluid";
        img.setAttribute("alt", members[i].name);
        img.setAttribute("src", url + members[i].src);
        col1.appendChild(img);
        row.appendChild(col1);
        col2 = document.createElement("div");
        col2.className = "left col-lg-6 my-auto";
        const name = document.createElement("h3");
        name.className = "center name";
        nameText = document.createTextNode(members[i].name);
        name.appendChild(nameText); //create text node + element node for the name
        //add linkedIn
        if (typeof members[i].linkedIn === "string") {
          linkedIn = "<a href=\"https://www.linkedin.com/in/" + members[i].linkedIn + "\" target=\"_blank\"><i class=\"fab fa-linkedin fa-2x\"></i></a>";
          name.innerHTML += linkedIn;
        }
        position = document.createElement("p");
        position.className = "center";
        position.innerHTML = "<strong>" + members[i].position + "</strong>";
        hometown = document.createElement("p");
        hometown.className = "center";
        hometown.innerHTML = "<strong>Hometown:</strong> ";
        home = document.createElement("span");
        home.textContent = members[i].home;
        hometown.appendChild(home);
        bio = document.createElement("p");
        bio.textContent = members[i].bio;
        col2.appendChild(name);
        col2.appendChild(position);
        col2.appendChild(hometown);
        col2.appendChild(bio);
        row.appendChild(col2);
        container.appendChild(row);
        modalBody.appendChild(container);
        modalContent.appendChild(modalHeader);
        modalContent.appendChild(modalBody);
        modalDialog.appendChild(modalContent);
        modal.appendChild(modalDialog);
        return modal;
      }
      team.appendChild(createCard());
      team.appendChild(createModal());
    });
}

//animation on click for the select
loadAnimate = () => {
  animate.style.visibility = "hidden";
  // animate.style.display = "none";
  window.scrollTo(0, 0);
  setTimeout(function() {
    animate.classList.remove("aos-animate");
    // animate.style.display = "block";
    setTimeout(function() {
      animate.style.visibility = "visible";
      animate.classList.add("aos-animate");
    }, 600);
  }, 50);
}

//remove styling/animation onclick modals
removeAnimate = () => {
  animate.removeAttribute("data-aos");
}

//add aos styling/animation after exiting modal
addAnimate = () => {
  setTimeout(function() {
    animate.setAttribute("data-aos", "fade-up");
  }, 200)
}

//add the onload delay
animateOnload = () => {
  animate.setAttribute("data-aos-delay", "800");
  setTimeout(function() {
    animate.removeAttribute("data-aos-delay");
  }, 500);
}

//hide all team members
hide = () => {
  team.innerHTML = "";
}


