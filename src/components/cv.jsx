export default function CV({ personalDetail, educations }) {
    return (
        <div id="page">
            <div id='personalDetailsOnPage'>
                <h1>{personalDetail.name}</h1>
                <div id="contactInfo">
                    <span className="email">{personalDetail.email.length > 0 && <i class='bx bxs-envelope' ></i>}  {personalDetail.email}</span>
                    <span className="phoneNum">{personalDetail.phoneNum.length > 0 && <i class='bx bxs-phone'></i>}  {personalDetail.phoneNum}</span>
                    <span className="address">{personalDetail.address.length > 0 && <i class='bx bxs-map'></i>}  {personalDetail.address}</span>
                </div>
            </div>
            <div id="otherDetails">
                {educations.length > 0 &&
                    <div id="educationOnPage">
                        <h2 className="headingOnPage">Education</h2>
                        <div id="allEducation">
                            {educations.map((education,index)=><div key={index} id="educationInfo">
                                <div className="educationInfoGroup">
                                    <p className="dates"><span>{education.startDate}</span> / <span>{education.endDate}</span></p>
                                    <p>{education.location}</p>
                                </div>
                                <div className="educationInfoGroup">
                                    <p className="schoolName"><b>{education.school}</b></p>
                                    <p className="dgreeInfo">{education.degree}</p>
                                </div>
                            </div>)}
                        </div>
                    </div>
                }
            </div>
        </div>

    )
}