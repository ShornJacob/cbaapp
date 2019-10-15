import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faUser } from "@fortawesome/free-solid-svg-icons"
import "./mystyles.scss"

export default () => {
  return (
    <section class="hero is-fullheight">
      <div class="hero-body">
        <div class="container has-text-centered">
          <div class="column is-4 is-offset-4">
            <h3 class="title has-text-black">Login</h3>
            <hr class="login-hr"></hr>
            <p class="subtitle has-text-black">Please login to proceed.</p>

            <span class="icon is-large">
              <FontAwesomeIcon icon={faUser} className="fas fa-2x" />
            </span>

            <form>
              <div class="field">
                <div class="control">
                  <input
                    class="input is-normal"
                    type="email"
                    placeholder="Your Email"
                    autofocus=""
                  />
                </div>
              </div>

              <div class="field">
                <div class="control">
                  <input
                    class="input is-normal"
                    type="password"
                    placeholder="Your Password"
                  />
                </div>
              </div>

              <button class="button is-block is-info is-normal is-fullwidth">
                Login
              </button>

            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

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
//The .box element is simply a container with a shadow, a border, a radius, and some padding.

//https://bulma.io/documentation/elements/icon/
//The icon element is a container for any type of icon font.
//is-large container class fas fa-3x fa class
//className="fas fa-3x" react style

//https://bulma.io/documentation/form/general/
//each control classses should be inside control container
//When combining several controls in a form, use the .field class as a container, to keep the spacing consistent.


//https://bulma.io/documentation/modifiers/responsive-helpers/
//Show/hide content depending on the width of the viewport
//dislay classes

//https://bulma.io/documentation/elements/button/
//The classic button, in different colors, sizes, and states
//https://bulma.io/documentation/elements/button/#sizes
//is-fullwidth