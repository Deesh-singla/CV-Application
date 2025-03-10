import { Fragment,useState } from "react";

export default function Experience({addExperience,experiences,deleteExperience}) {
    const defaultExperience = { companyName: "", positionTitle: '', startDate: "", endDate: "", location: "", description: "" }
    const [experience, setExperience] = useState(defaultExperience);
    const [show, setShow] = useState(false);
    const [showForm, setShowForm] = useState(false);
    function handleClick() {
        if (show) setShow(false)
        else setShow(true)
    }
    function onChangeInput(e) {
        setExperience({ ...experience, [e.target.name]: e.target.value })
    }
    function handleshowForm() {
        if (showForm) setShowForm(false)
        else {
            setShowForm(true)
            setExperience(defaultExperience)
        }
    }
    function handleClickSubmit(e) {
        e.preventDefault();
        setShowForm(false)
        addExperience(experience)
    }
    function editExperience(i){
        setShowForm(true)
        setExperience({ ...experiences[i] });
    }
    function deleteInfo(e,i){
        e.stopPropagation();
        deleteExperience(i);
        setExperience(defaultExperience)
    }
    return (
        <div id="experience" className="detail">
            <h1 className="formHeading" onClick={handleClick}><span>Experience</span><span><i className={show ? "bx bx-chevron-up" : "bx bx-chevron-down"}></i></span></h1>
            {show && !showForm && <div className="addData">
                <div className="prevData">
                    {experiences.map((x, index) => <Fragment key={index}><hr /><h2 onClick={() => editExperience(index)}>{x.companyName}<span><i className='bx bxs-trash' onClick={(e) => deleteInfo(e, index)}></i></span></h2></Fragment>)}
                </div>
                <button className="addBtn" onClick={handleshowForm}>Add Experience</button>
            </div>}
            {show && showForm &&
                <form id="experienceForm" className="detailsForm" onSubmit={handleClickSubmit}>
                    <label htmlFor="companyName">Company Name</label>
                    <input type="text" id="companyName" name="companyName" value={experience.companyName} placeholder="Enter Company Name" onChange={onChangeInput} required />
                    <label htmlFor="positionTitle">Position Title</label>
                    <input type="text" id="positionTitle" value={experience.positionTitle} name="positionTitle" placeholder="Enter Degree/Field Of Study" onChange={onChangeInput} required />
                    <label htmlFor="startDate">Start Date</label>
                    <input type="date" id="startDate" name="startDate" onChange={onChangeInput} value={experience.startDate} required />
                    <label htmlFor="endDate">End Date</label>
                    <input type="date" id="endDate" name="endDate" onChange={onChangeInput} value={experience.endDate} required />
                    <label htmlFor="location">Location</label>
                    <input type="text" id="location" name="location" placeholder="Enter Location" onChange={onChangeInput} value={experience.location} required />
                    <label htmlFor="description">Description</label>
                    <textarea id="description" name="description" rows={5} cols={5} placeholder="Enter Description" onChange={onChangeInput}/>
                    <button type="submit">Save</button>
                </form>
            }
        </div>
    )
}