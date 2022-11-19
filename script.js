// THIS IS MY SOLUTION:
const boxes = document.querySelectorAll(".box");

window.addEventListener("scroll", checkBoxes);

function checkBoxes() {
  //   console.log((window.innerHeight / 5) * 4);

  boxes.forEach((box) => {
    // the method we used below is a special method to detect where the top of our content boxes are at that moment. Check for getBoundingClientReact on W3Schools.
    const boxTop = box.getBoundingClientRect().top;
    // console.log(boxTop);
    if (boxTop < (window.innerHeight / 5) * 4) {
      box.classList.add("show");
    } else {
      box.classList.remove("show");
    }
  });
}

checkBoxes();

//#####################################################################
//#####################################################################
//#####################################################################
//#####################################################################
//#####################################################################
//#####################################################################

// THIS IS UDEMY'S SOLUTION:

// const boxes = document.querySelectorAll('.box')

// window.addEventListener('scroll', checkBoxes)

// checkBoxes()

// function checkBoxes() {
//     const triggerBottom = window.innerHeight / 5 * 4

//     boxes.forEach(box => {
//         const boxTop = box.getBoundingClientRect().top

//         if(boxTop < triggerBottom) {
//             box.classList.add('show')
//         } else {
//             box.classList.remove('show')
//         }
//     })
// }
