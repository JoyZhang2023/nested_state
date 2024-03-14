import {useState} from 'react';

function UserProfile() {
    const [UserProfile, setUserProfile] = useState({
        name:'John',email:'abc@123.com',
        address: {street:'5550 street',city:'Seattle',country:'US'}
    });

    const updateAddress = () => {
        const streetUpdate = document.getElementById("streetInput").value;
        const cityUpdate = document.getElementById("cityInput").value;
        const countryUpdate = document.getElementById("countryInput").value;
        setUserProfile({
            ...UserProfile,
            address: {street: streetUpdate, city: cityUpdate, country: countryUpdate}
        }); //updating nested object
    };

    return (
        <div>
        <p>
            {UserProfile.name} lives in {UserProfile.address.street},{UserProfile.address.city} in {UserProfile.address.country}
        </p>
        <input type='text' id="streetInput" placeholder='Enter street here'></input> <br></br>
        <input type='text' id="cityInput" placeholder='Enter city here'></input> <br></br>
        <input type='text' id="countryInput" placeholder='Enter country here'></input> <br></br>
        <button onClick={updateAddress}>
            Update Address</button>
        </div>
    )
}

export default UserProfile;


