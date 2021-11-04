import './mainArea.css';
import { AiOutlineLeft, AiOutlineRight } from 'react-icons/ai';
import Home from './home/home';

const MainArea = () => {
    return (
        <div className="main-area">
            <div className="header">
                <div className="header-section1">
                    <button className="left-arrow">
                        <AiOutlineLeft size="1.5em"/>
                    </button>
                    <button className="right-arrow">
                        <AiOutlineRight size="1.5em"/>
                    </button>
                </div>
            </div>
            <div className="container">
                <Home />
            </div>
        </div>
    )
}

export default MainArea;