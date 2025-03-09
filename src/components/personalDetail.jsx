import { useState } from "react"

export default function PersonalDetails({ handleOnChange ,personalDetail}) {
    const [show, setShow] = useState(false);
    function handleClick() {
        if (show) setShow(false)
        else setShow(true)
    }
    return (
        <div id="personalDetails" className='detail' style={{ height: show && '100%' }}>
            <h1 onClick={handleClick} className='formHeading'><span>Personal Details</span><span><i className={show ? "bx bx-chevron-up" : "bx bx-chevron-down"}></i></span></h1>
            {show &&
                <form id="personalDetailsForm" className="detailsForm">
                    <label htmlFor="name">Full Name</label>
                    <input type="text" id="name" placeholder="First and Last name" value={personalDetail.name} name='name' onChange={handleOnChange} />
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" placeholder="Enter Email" name="email" onChange={handleOnChange} value={personalDetail.email}/>
                    <label htmlFor='phoneNum'>Phone Number</label>
                    <input type="number" id="phoneNum" placeholder="Enter Phone number" name="phoneNum" onChange={handleOnChange} value={personalDetail.phoneNum}/>
                    <label htmlFor="address">Address</label>
                    <input type="text" id="addresss" placeholder="City,Country" name="address" onChange={handleOnChange} value={personalDetail.address}/>
                </form>
            }
        </div>
    )
}