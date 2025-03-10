import { Fragment, useState } from "react";
export default function Education({ addEducation, educations, deleteEducation }) {
    const defaultEducation = { school: '', degree: '', startDate: '', endDate: '', location: '' };
    const [education, SetEducation] = useState(defaultEducation)
    const [show, setShow] = useState(false);
    const [showForm, setShowForm] = useState(false);
    function handleClick() {
        if (show) setShow(false)
        else setShow(true)
    }
    function handleshowForm() {
        if (showForm) setShowForm(false)
        else {
            setShowForm(true)
            SetEducation(defaultEducation)
        }
    }
    function onChangeInput(e) {
        SetEducation({ ...education, [e.target.name]: e.target.value })
    }
    function handleClickSubmit(e) {
        e.preventDefault();
        setShowForm(false)
        addEducation(education);
    }
    function editEducation(i) {
        setShowForm(true)
        SetEducation({ ...educations[i] });
    }
    function deleteInfo(e, i) {
        e.stopPropagation();
        deleteEducation(i);
        SetEducation(defaultEducation)
    }
    return (
        <div id="education" className="detail">
            <h1 className="formHeading" onClick={handleClick}><span>Education</span><span><i className={show ? "bx bx-chevron-up" : "bx bx-chevron-down"}></i></span></h1>
            {show && !showForm && <div className="addData">
                <div className="prevData">
                    {educations.map((x, index) => <Fragment key={index}><hr /><h2 onClick={() => editEducation(index)}>{x.school}<span><i className='bx bxs-trash' onClick={(e) => deleteInfo(e, index)}></i></span></h2></Fragment>)}
                </div>
                <button className="addBtn" onClick={handleshowForm}>Add Education</button>
            </div>}
            {show && showForm &&
                <form id="educationForm" className="detailsForm" onSubmit={handleClickSubmit}>
                    <label htmlFor="school">School</label>
                    <input type="text" id="school" name="school" value={education.school} placeholder="Enter School/University" onChange={onChangeInput} required/>
                    <label htmlFor="degree">Degree</label>
                    <input type="text" id="degree" value={education.degree} name="degree" placeholder="Enter Degree/Field Of Study" onChange={onChangeInput} required/>
                    <label htmlFor="startDate">Start Date</label>
                    <input type="date" id="startDate" name="startDate" onChange={onChangeInput} value={education.startDate} required/>
                    <label htmlFor="endDate">End Date</label>
                    <input type="date" id="endDate" name="endDate" onChange={onChangeInput} value={education.endDate} required/>
                    <label htmlFor="location">Location</label>
                    <input type="text" id="location" name="location" placeholder="Enter Location" onChange={onChangeInput} value={education.location} required/>
                    <button type="submit">Save</button>
                </form>
            }
        </div>
    )
}