import { Flex } from 'antd';
import { useEffect, useState} from 'react';
import { Navbar } from '../shared/components';
import { useNavigate, useParams } from 'react-router-dom';
import { routesEnum } from '../app/AppRouter';
import { api } from '../shared/api';
import { Loader, ProductInfo, ProductModal } from '../widgets';
import store from '../shared/store';

export const Product = () => {

    const [open, setOpen] = useState(false);
    const navigate = useNavigate();
    const params = useParams();
    const [isLoaded, setIsLoaded] = useState(false)
    const [title, setTitle] = useState('');
    const [price, setPrice] = useState('');
    const [description, setDescription] = useState('')
    const [img, setImg] = useState('')

    useEffect(() => {
        const responce = api(params.id!, () => navigate(routesEnum.ERROR));
        responce.then(item => {
            setTitle(item.name);
            setPrice(item.price);
            setDescription(item.description);
            setImg(item.images[0].src);
            setIsLoaded(true);
        });
    }, [navigate, params])

    return (
        <Flex 
            className='full-screen'
            justify='center'
            align='center'
        >
            {
                isLoaded?
                <>
                    <Navbar/>
                    <ProductInfo img={img} title={title} price={price} onClick={() => setOpen(true)}/>
                    <ProductModal description={description} onCancel={() => setOpen(false)} open={open}/>
                </>:
                <Loader/>

            }
        </Flex>
    );
};