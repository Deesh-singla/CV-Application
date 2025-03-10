import Experience from './components/experience'
import PersonalDetails from "./components/personalDetail";
import CV from "./components/cv";
import Education from "./components/education";
import { useState } from "react";
export default function App() {
    const [educations, setEducation] = useState([]);
    const [experiences,setExperience]=useState([]);
    const [personalDetail, setPersonalDetail] = useState({ fullName: '', email: '', phoneNum: '', address: '' })
    function addExperience(obj){
        setExperience([...experiences,obj]);
    }
    function addEducation(obj) {
        setEducation([...educations,obj])
    }
    function handleOnChangeInPersonalDetail(e) {
        setPersonalDetail({ ...personalDetail, [e.target.name]: e.target.value })
    }
    function deleteEducation(i) {
        setEducation(educations.filter((x, index) => i !== index));
    }
    function deleteExperience(i){
        setExperience(experiences.filter((x, index) => i !== index));
    }
    return (
        <div id="app">
            <h1 id="heading">CV Application</h1>
            <div id="center">
                <div id="left">
                    <PersonalDetails handleOnChange={handleOnChangeInPersonalDetail} personalDetail={personalDetail} />
                    <Education addEducation={addEducation} educations={educations} deleteEducation={deleteEducation} />
                    <Experience addExperience={addExperience} experiences={experiences} deleteExperience={deleteExperience}/>
                </div>
                <div id="right">
                    <CV personalDetail={personalDetail} educations={educations} experiences={experiences}/>
                </div>
            </div>
        </div>
    )
}