import { useEffect, useState } from 'react'
import './sidebar.css'
import AxiosService from '../../utils/AxiosService'
import ApiRoutes from '../../utils/ApiRoutes'

function Sidebar() {
    const [category, setCategory] = useState([])
    //console.log(category);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await AxiosService.get(ApiRoutes.GET_ALL_CATEGORY.path);
                //console.log(response);
                setCategory(response.data.allCat);
                //console.log(response.data.allCat);
            } catch (error) {
                console.error(error);
            }
        };
        fetchData();
    }, []);

    return (
        <div className="sidebar">
            <div className="sidebarItem">
                <span className="sidebarTitle">ABOUT ME</span>
                <img
                    className='sidebarImg'
                    src="https://images.unsplash.com/photo-1493612276216-ee3925520721?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cmFuZG9tfGVufDB8fDB8fHww"
                    alt=""
                />
                <p className='sidebarPara'>
                    Laboris sunt aute cupidatat velit magna velit ullamco dolore mollit
                    amet ex esse.Sunt eu ut nostrud id quis proident.
                </p>
            </div>
            <div className="sidebarItem">
                <span className="sidebarTitle">CATEGORIES</span>
                <ul className="sidebarList">
                    {category.map((cat) => (<li className="sidebarListItem" key={cat._id}>
                        {cat.name.charAt(0).toUpperCase()}{cat.name.slice(1)}
                    </li>))}


                </ul>
            </div>
            <div className="sidebarItem">
                <span className="sidebarTitle">FOLLOW US</span>
                <div className="sidebarSocial">
                    <a href="https://www.linkedin.com/in/priyadharshini-thirunavukkarasu-b1b615b4/" target="_blank" rel="noopener noreferrer">
                        <i className="fa-brands fa-square-facebook topIcon" onClick="window.location.href='https://www.linkedin.com/in/priyadharshini-thirunavukkarasu-b1b615b4/'"></i>
                    </a>
                    <a href="https://www.linkedin.com/in/priyadharshini-thirunavukkarasu-b1b615b4/" target="_blank" rel="noopener noreferrer">
                        <i className="fa-brands fa-square-instagram topIcon" onClick="window.location.href='https://www.linkedin.com/in/priyadharshini-thirunavukkarasu-b1b615b4/'"></i>
                    </a>
                    <a href="https://www.linkedin.com/in/priyadharshini-thirunavukkarasu-b1b615b4/" target="_blank" rel="noopener noreferrer">
                        <i className="fa-brands fa-square-pinterest topIcon" onClick="window.location.href='https://www.linkedin.com/in/priyadharshini-thirunavukkarasu-b1b615b4/'"></i>
                    </a>
                    <a href="https://www.linkedin.com/in/priyadharshini-thirunavukkarasu-b1b615b4/" target="_blank" rel="noopener noreferrer">
                        <i className="fa-brands fa-square-twitter topIcon" onClick="window.location.href='https://www.linkedin.com/in/priyadharshini-thirunavukkarasu-b1b615b4/'"></i>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Sidebar