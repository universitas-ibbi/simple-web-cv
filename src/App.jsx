import { Link, Outlet } from 'react-router-dom';

export default function App(){
    return (
        <>
            <ul style={{ listStyleType: "none" }}>
                <li style={{ display:"inline", margin: "10px" }}><Link to="profile">Profile</Link></li>
                <li style={{ display:"inline", margin: "10px" }}><Link to="expertise">Expertises</Link></li>
                <li style={{ display:"inline", margin: "10px" }}><Link to="skill">Skills</Link></li>
            </ul>
            <Outlet />
        </>
    )
}