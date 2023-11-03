import skills from './data/skill.json'

export default function Skill(){
    return (
        <>
             {skills.map((skill,index) => (
                <div key={index}>
                    <h1>{skill.title}</h1>
                    <p>{skill.level}</p>
                </div>
            ))}
        </>
    )
}