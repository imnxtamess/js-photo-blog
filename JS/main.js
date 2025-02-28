// Preparation Phase

// select the dom nodes

const cardContainerEl = document.querySelector(".row")

// make an ajax request to the boolean endpoint 

const booleanEndPoint = "https://lanciweb.github.io/demo/api/pictures/"

fetch(booleanEndPoint)
  .then(response => response.json())
  .then(data => {
    // cycle through the data and save the needed variables to fill the cards
    data.forEach(thisObject => {
      const title = thisObject.title
      const date = thisObject.date
      const imgUrl = thisObject.url

      const markup = ` <div class="col d-flex justify-content-center">
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
      console.log(markup);



    });


  })

// title date imgUrl