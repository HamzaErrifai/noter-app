import React from "react";

function Profile() {
    return (
        <div className="container">
            <div className="d-flex justify-content-center">
                <img
                    src={`/storage/${window.Laravel.user.photo}`}
                    className="rounded-circle bg-white"
                    width="100px"
                    height="100px"
                />
            </div>
            <h2 className="d-flex justify-content-center">
                {window.Laravel.user.name}
            </h2>

            <p className="d-flex justify-content-center">
                {window.Laravel.user.email}
            </p>

            <div className="d-flex justify-content-center">
                <a className="logout-btn" href="/logout">
                    Log out
                </a>
            </div>
        </div>
    );
}

export default Profile;
