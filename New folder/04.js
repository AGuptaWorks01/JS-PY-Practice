// const changeBgRed = () => {
//     document.body.firstElementChild.style.background = "red";
// }
// let b = document.body;
// console.log("first childd of b is", b.firstChild);
// console.log("first childd of b is", b.firstElementChild);




// const alertPlaceholder = document.getElementById('liveAlertPlaceholder')
// const appendAlert = (message, type) => {
//     const wrapper = document.createElement('div')
//     wrapper.innerHTML = [
//         `<div class="alert alert-${type} alert-dismissible" role="alert">`,
//         `   <div>${message}</div>`,
//         '   <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>',
//         '</div>'
//     ].join('')

//     alertPlaceholder.append(wrapper)
// }

// const alertTrigger = document.getElementById('liveAlertBtn')
// if (alertTrigger) {
//     alertTrigger.addEventListener('click', () => {
//         appendAlert('Nice, you triggered this alert message!', 'success')
//     })
// }



let id1 = document.getElementById('id1')
console.log(id1.matches(".box"));
console.log(id1.closest(".box"));