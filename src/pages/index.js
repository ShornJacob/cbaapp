import React from "react"
import "./mystyles.scss"

export default () => (
  <section class="hero is-success is-fullheight">
    <div class="hero-body">
      <div class="container has-text-centered">
        <div class="column is-4 is-offset-4">
          <h3 class="title has-text-black">Login</h3>
          <hr class="login-hr"></hr>
          <p class="subtitle has-text-black">Please login to proceed.</p>
          <div class="box">
          <figure class="avatar">
              
          </figure>
          </div>
        </div>
      </div>
    </div>
  </section>
)

//Bulma Login Template
//https://github.com/BulmaTemplates/bulma-templates/blob/master/templates/login.html

// https://bulma.io/documentation/layout/section/
//https://bulma.io/documentation/layout/container/

//Bulma modifiers
//https://bulma.io/documentation/modifiers/syntax/
//Most Bulma elements have alternative styles.
//To apply them, you only need to append one of the modifier classes. They all start with is- or has-.

//https://bulma.io/documentation/modifiers/typography-helpers/#alignment
//alignment helpers
//has-text-centered

//https://bulma.io/documentation/columns/sizes/
//Define the size of each column individually
//https://bulma.io/documentation/columns/sizes/#12-columns-system
//As the grid can be divided into 12 columns, there are size classes for each division -is-4
//modifier class how many columns you want out of 12

//https://bulma.io/documentation/columns/sizes/#offset
//to create horizontal space around .column elements, you can also use offset
//is-offset-x

//https://bulma.io/documentation/elements/title/

//https://bulma.io/documentation/modifiers/color-helpers/
//has-text-black

//https://bulma.io/documentation/elements/box/
//A white box to contain other elements

//https://bulma.io/documentation/elements/image/
//Because images can take a few seconds to load (or not at all),
//use the .image container to specify a precisely sized container so that your layout isn't broken because
// of image loading or image errors.