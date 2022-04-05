import React from 'react'
import profile from '../../Images/Male User.png'
const Answer = () => {
    return (
        <div>
            <hr />
            <div className="d-md-flex">
                <div className="d-flex flex-md-column">
                    <img
                        className="avatar"
                        src={profile}
                        alt="User Avatar"
                    />
                    <h6 className="align-self-center ms-2 ms-md-0">USER NAME</h6>
                </div>
                <div className="ms-md-5">
                    <p>
                        Answer descriptions... Lorem ipsum dolor sit amet consectetur
                        adipisicing elit. Sapiente amet nemo laudantium, quos velit
                        reiciendis. Possimus, quod fuga modi cumque eaque in dolores error
                        animi totam vel maxime expedita adipisci labore doloremque, aut
                        minima eos quibusdam, atque consectetur necessitatibus illum ea
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Answer