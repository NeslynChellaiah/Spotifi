import './navElements.css';


const NavElement = ({name, children}) => {
    return (
        <li>
            <a href="#">{children}{name}</a>
        </li>
    );
}

export default NavElement;