import './sideNav.css';
import './navElements/navElements'
import NavElement from './navElements/navElements';
import {HiHome} from 'react-icons/hi';
import {FiSearch} from 'react-icons/fi'; 
import {BiLibrary, BiHeartSquare} from 'react-icons/bi';
import {AiFillPlusSquare} from 'react-icons/ai';
import {BsArrowDownCircle} from 'react-icons/bs';


const SideNav = () => {
    const navSet1 = [{name: "Home", icon: <HiHome size="1.5em" className="nav-logo"/>, id: "home"}, 
                    {name: "Search", icon: <FiSearch size="1.5em" className="nav-logo"/>, id: "search"}, 
                    {name: "Your Library", icon: <BiLibrary size="1.5em" className="nav-logo"/>, id: "yourLibrary"}]
    const navSet2 = [{name: "Create Playlist", icon: <AiFillPlusSquare size="1.5em" className="nav-logo"/>, id: "createPlaylist"}, 
                    {name: "Liked Songs", icon: <BiHeartSquare size="1.5em" className="nav-logo"/>, id: "likedSongs"}]
    const navSet3 = [{name: "Playist1", id:"playlist1"},
                    {name: "Playist2", id:"playlist2"}]
    return(
        <div>
            <div className="logo-container">
                <div className="logo">
                </div>
                <div className="logo-text">
                    Spotifi
                </div>
            </div>
            <div className="nav-item set1">
                <ul>
                    {navSet1.map(({name, icon, id})=>{
                        return (<NavElement name={name} key={id}>
                                    {icon}
                                </NavElement>);
                    })}
                </ul>
            </div>
            <div className="nav-item set2">
                <ul>
                    {navSet2.map(({name, icon, id})=>{
                        return (<NavElement name={name} key={id}>
                                    {icon}
                                </NavElement>);
                    })}
                </ul>
            </div>
            <hr />
            <div className="nav-item set3">
                <ul>
                    {navSet3.map(({name, id})=>{
                        return (<NavElement name={name} key={id}>
                                </NavElement>);
                    })}
                </ul>
            </div>
            <div className="nav-item set4">
                <NavElement name="Install App" key="installApp">
                    <BsArrowDownCircle size="1.5em" className="nav-logo"/>
                </NavElement>
            </div>
        </div>
    );
}

export default SideNav;