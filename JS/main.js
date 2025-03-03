// Preparation Phase

// select the dom nodes

const cardContainerEl = document.querySelector(".row")
const selectedCardContainerEl = document.querySelector(".selected_card_container")
const selectedCardEl = document.querySelector(".selected_card div img")
console.log(selectedCardEl.src);

// make an ajax request to the boolean endpoint and render the cards on page

const booleanEndPoint = "https://lanciweb.github.io/demo/api/pictures/"

fetch(booleanEndPoint)
  .then(response => response.json())
  .then(data => {
    // cycle through the data and save the needed variables to fill the cards
    renderCards(data)
    const cardImgEl = document.querySelectorAll(".card_body img:last-child")
    cardImgEl.forEach((img, index, arr) => {
      let imgSrc = img.src
      console.log(imgSrc);
      img.addEventListener("click", function () {
        console.log(`i clicked ${index} ${imgSrc}`);
        console.log(selectedCardEl.src);
        selectedCardEl.src = `${imgSrc}`
        console.log(selectedCardEl);
        selectedCardContainerEl.classList.remove("d-none")
      })
    })

  }).catch(err => console.error(err))







// FUNCTIONS


/**
 * 
 * @param {object value} title 
 * @param {object value} date 
 * @param {object value} imgUrl 
 * @returns {string} - The markup for the HTML Cards
 */
function markup(title, date, imgUrl) {
  return ` <div class="col d-flex justify-content-center">
                        <div class="photo_card">
                          <div class="card_body">
                            <img class="pin" src="./assets/img/pin.svg" alt="" />
                            <img
                              src="${imgUrl}"
                              alt=""
                            />
                          </div>
                          <div class="card_footer">
                            <div class="date">${date}</div>
                            <div class="card_title">${title}</div>
                          </div>
                        </div>
                      </div>`
}

/**
 * 
 * @param {Object Array} data 
 * forEach Object in the given array it saves title,date,imgUrl Key values into variables
 * and pushesh them to the html by calling the markup () function
 * 
 */
function renderCards(data) {
  data.forEach(thisObject => {
    const title = thisObject.title
    const date = thisObject.date
    const imgUrl = thisObject.url

    cardContainerEl.insertAdjacentHTML('beforeend', markup(title, date, imgUrl))
  })
}

