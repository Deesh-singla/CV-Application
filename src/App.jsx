import PersonalDetails from "./components/personalDetail";
import CV from "./components/cv";
import Education from "./components/education";
import { useState } from "react";
export default function App() {
    const [educations, setEducation] = useState([]);
    function addEducation(obj) {
        setEducation([...educations,obj])
    }
    const [personalDetail, setPersonalDetail] = useState({ fullName: '', email: '', phoneNum: '', address: '' })
    function handleOnChangeInPersonalDetail(e) {
        setPersonalDetail({ ...personalDetail, [e.target.name]: e.target.value })
    }
    function deleteEducation(i) {
        setEducation(educations.filter((x, index) => i !== index));
    }
    return (
        <div id="app">
            <h1 id="heading">CV Application</h1>
            <div id="center">
                <div id="left">
                    <PersonalDetails handleOnChange={handleOnChangeInPersonalDetail} personalDetail={personalDetail} />
                    <Education addEducation={addEducation} educations={educations} deleteEducation={deleteEducation} />
                </div>
                <div id="right">
                    <CV personalDetail={personalDetail} educations={educations}/>
                </div>
            </div>
        </div>
    )
}