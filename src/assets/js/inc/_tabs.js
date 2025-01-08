
// https://www.javascripttutorial.net/javascript-dom/javascript-siblings/

let getSiblings = function (e) {
    // for collecting siblings
    let siblings = []; 
    // if no parent, return no sibling
    if(!e.parentNode) {
        return siblings;
    }
    // first child of the parent node
    let sibling  = e.parentNode.firstChild;
    // collecting siblings
    while (sibling) {
        if (sibling.nodeType === 1 && sibling !== e) {
            siblings.push(sibling);
        }
        sibling = sibling.nextSibling;
    }
    return siblings;
};


function tabs() {
  const tabs_titles = document.querySelectorAll(".tabs>.tab");
  const tabs_details = document.querySelectorAll(".contents>.content");

  tabs_titles.forEach((e, i) => {

    e.addEventListener("click", (item) => {
      // un activate all tabs
      let tab_siblings = getSiblings(item.target);
      tab_siblings.map(el => el.classList.remove('active'));
      
      // un activate all details
      let details_siblings = getSiblings(tabs_details[i]);
      details_siblings.map(el => el.classList.remove('active'));
      
      // active clicked tab and details
      item.target.classList.add("active");
      tabs_details[i].classList.add("active");

    });
  });
}

exports.tabs = tabs;
