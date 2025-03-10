export default function CV({ personalDetail, educations ,experiences}) {
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
                {   experiences.length>0 && 
                        <div id="experienceOnPage">
                        <h2 className="headingOnPage">Experience</h2>
                        <div id="allExperience">
                            {experiences.map((experience,index)=><div key={index} id="educationInfo">
                                <div className="infoGroupLeft infoGroup" >
                                    <p className="dates"><span>{experience.startDate}</span> / <span>{experience.endDate}</span></p>
                                    <p>{experience.location}</p>
                                </div>
                                <div className="infoGroupRight infoGroup">
                                    <p className="companyName"><b>{experience.companyName}</b></p>
                                    <p className="positionTitle">{experience.positionTitle}</p>
                                    <p className="description">{experience.description}</p>
                                </div>
                            </div>)}
                        </div>
                    </div>
                }
            </div>
        </div>

    )
}