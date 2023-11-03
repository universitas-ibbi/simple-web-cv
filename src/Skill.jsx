import skills from './data/skill.json'

import { useNavigate } from 'react-router-dom'

export default function Skill(){
    const navigate = useNavigate();
    return (
        <>
            <button onClick={() => navigate(-1)}>Kembali</button>
             {skills.map((skill,index) => (
                <div key={index}>
                    <h1>{skill.title}</h1>
                    <p>{skill.level}</p>
                </div>
            ))}
        </>
    )
}