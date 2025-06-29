import React from 'react'

const UserCard = ({user}) => {
    const {firstName, lastName, about, imageUrl, age, gender} = user;

    return (
    <div>
        <div className="card bg-base-300 w-60 shadow-sm">
        <figure>
            <img
            src={user.imageUrl}
            alt="photo" />
        </figure>
        <div className="card-body">
            <h2 className="card-title">{firstName + " " + lastName}</h2>
            {age && gender && <p>{age + ", " + gender}</p>}
            <p>{about}</p>
            <div className="card-actions justify-center my-4">
                <button className="btn btn-secondary">Ignore</button>
                <button className="btn btn-primary">Interested</button>
            </div>
        </div>
        </div>
    </div>
    )
}

export default UserCard
