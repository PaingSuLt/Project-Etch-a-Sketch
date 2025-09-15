///generate random colors///
function getRandomColor(opacity) {
        let red = Math.floor(Math.random() * 256);
        let green = Math.floor(Math.random() * 256);
        let blue = Math.floor(Math.random() * 256);
        return `rgba(${red}, ${green}, ${blue}, ${opacity})`;
}

///reset function///
function reset() {
        const divs = document.querySelectorAll(".divs");
        divs.forEach(div => {
                div.style.backgroundColor = "";
                div.opacity = 0.1;
        });
}

const clear = document.querySelector(".clear");
const size = document.querySelector(".size");
const container = document.getElementById("container");

///to reset the small divs color when pressed Clear button///

clear.addEventListener('click', () => {

       reset();
        
});

///ask user for the amount of divs to fill in the container///

size.addEventListener('click', () => {

        divsSize = +prompt('Enter the size. Must not be over 100');
        if(divsSize > 100) {
                alert('Your input is Over 100. Press "size" button again');
                return;
        }
        
        container.innerHTML = "";

        ///generate new grid filled with divs///
        for (let i = 1; i <= divsSize*divsSize; i++) {
        let percentageForFlex = 100/divsSize;
        const div = document.createElement("div");
        div.classList.add("divs");
        div.opacity = 0.5;
        div.style.flexBasis = `${percentageForFlex}%`;
        div.style.height = `${percentageForFlex}%`;
        div.style.border = '0.1px solid #D3D3D3';
        div.style.boxSizing = 'border-box';
        container.appendChild(div);
}
///generate random colors when pointer hovers over the small divs///
        const allDivs = document.querySelectorAll(".divs");

        allDivs.forEach((div) => {
                div.addEventListener("mouseover", () => {
                        if (div.opacity < 1) {
                                div.opacity += 0.1;
                        }
                        getRandomColor();
                        div.style.backgroundColor = getRandomColor(div.opacity);
                });
        });


});
