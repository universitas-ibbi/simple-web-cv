import { Link } from 'react-router-dom';

export default function App(){
    return (
        <ul>
            <li><Link to="profile">Profile</Link></li>
            <li><Link to="expertise">Expertises</Link></li>
            <li><Link to="skill">Skills</Link></li>
        </ul>
    )
}