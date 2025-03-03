// Preparation Phase

// select the dom nodes

const cardContainerEl = document.querySelector(".row")
const selectedCardContainerEl = document.querySelector(".selected_card_container")
const selectedCardEl = document.querySelector(".selected_card div img")
const closeBtnEl = document.querySelector(".btn")

// make an ajax request to the boolean endpoint and render the cards on page

const booleanEndPoint = "https://lanciweb.github.io/demo/api/pictures/"

fetch(booleanEndPoint)
  .then(response => response.json())
  .then(data => {
    // cycle through the data and save the needed variables to fill the cards
    renderCards(data)

    // call a function to change the imgSrc of the selectedCardEl and remove the d-none class from it
    changeImgSrc()

  }).catch(err => console.error(err))



closeBtnEl.addEventListener("click", function () {
  selectedCardContainerEl.classList.add("d-none")
})








// FUNCTIONS 📌


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
 * @description forEach Object in the given array it saves title,date,imgUrl Key values into variables
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

/**
 * @description forEach img changes the "selectedCard" src to the clicked image's one
 */
function changeImgSrc() {
  const cardImgEl = document.querySelectorAll(".card_body img:last-child")
  cardImgEl.forEach((img) => {
    let imgSrc = img.src // Create a variable for the selected img src attribute
    img.addEventListener("click", function () {
      selectedCardEl.src = `${imgSrc}` // Change the selected img src to the clicked img src
      selectedCardContainerEl.classList.remove("d-none")
    })
  })
}