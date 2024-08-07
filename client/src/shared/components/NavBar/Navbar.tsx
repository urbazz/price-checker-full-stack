import { Button } from 'antd';
import { useNavigate } from 'react-router-dom';
import { routesEnum } from '../../../app/AppRouter';
import store from '../../store';
import imgSrc from '../../assets/img/back-icon.png';
import './Navbar.scss';

export const Navbar = () => {
    const navigate = useNavigate();

    return (
        <div className='navbar'>
            <Button 
                type='primary'
                className='navbar-btn'
                onClick={() => {
                    store.setManualInput(false);
                    navigate(routesEnum.SEARCH);
                }}
            >
                <img src={imgSrc}/>
            </Button>
        </div>
    );
};