import React from 'react'
import profile from "../../Images/Male User.png"
import Ans from "../Answer/Ans"
const SingleQuestion = () => {
  return (
      <div class="container">
          <div>
              <h3>Random Question</h3>
              <p>
                  Question description .... Lorem ipsum dolor sit amet consectetur
                  adipisicing elit. Quos similique consequuntur quae omnis deserunt
                  dolor, praesentium ab quasi unde at!
              </p>
          </div>
          <hr />

          <div>
              <h3>Answers</h3>
          </div>

          <hr />
          <div class="d-md-flex">
              <div class="d-flex flex-md-column">
                  <img
                      class="avatar"
                      src={profile}
                      alt="User Avatar"
                  />
                  <h6 className="align-self-center">USER NAME</h6>
              </div>
              <div class="ms-md-5">
                  <p>
                      Answer descriptions... Lorem ipsum dolor sit amet consectetur
                      adipisicing elit. Sapiente amet nemo laudantium, quos velit
                      reiciendis. Possimus, quod fuga modi cumque eaque in dolores error
                      animi totam vel maxime expedita adipisci labore doloremque, aut
                      minima eos quibusdam, atque consectetur necessitatibus illum ea
                  </p>
                  <p>
                      commodi nostrum impedit? Accusamus sint veniam repellat odio
                      architecto hic odit consequatur labore quis fugiat maiores, natus
                      voluptatibus minus harum incidunt quae, ut amet dolor suscipit illum
                      adipisci, distinctio temporibus accusantium? Dolore dolorum
                      similique tenetur minus id maxime earum eos rerum perspiciatis
                      aspernatur aliquid soluta autem, pariatur magnam sed ex at itaque,
                      sapiente recusandae ea esse nobis ipsam rem.
                  </p>
              </div>
          </div>
              <Ans/>
      </div>
  )
}

export default SingleQuestion