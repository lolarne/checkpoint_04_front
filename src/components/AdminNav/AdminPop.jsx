import styled from 'styled-components';
import {Link} from 'react-router-dom';

const UL = styled.ul`
    list-style: none;
    display: flex;
    flex-flow: row nowrap;
    justify-content: center;
    
    .liLinks{
        text-decoration: none;
        color: var(--dark);
        font-family: var(--third-font);
        padding: 18px 10px;
        transition: 0.5s;
    }
    .liLinks:hover{
        background-color: var(--dark-second);
        border-radius: 16px;
        cursor: pointer;
        color: var(--light);
    }
    li {
        margin: 0px 40px;
        font-size: 20px;
        
    }
    @media screen and (min-width: 768px) and (max-width: 800px){
        flex-flow: column nowrap;
        background-color: var(--secondary-color);
        position: fixed;
        transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(100%)'};
        top: 0;
        right: 0;
        width: 40%;
        transition: transform 0.3s ease-in-out;
        margin-top: 84px;
        border-top: solid 3px var(--dark-second);
        
        li {
             color: var(--secondary-color);
             margin-bottom: var(--spacing-large);
             margin: 24px;
        }
    }
    @media screen and (max-width: 767px) {
        align-items: center;
        flex-flow: column nowrap;
        background-color: var(--secondary-color);
        position: fixed;
        transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(100%)'};
        bottom: 0;
        right: 0;
        width: 100%;
        transition: transform 0.3s ease-in-out;
        margin-bottom: 54px;
        border-bottom: solid 1px var(--dark-second);
        li {
             color: var(--secondary-color);
             margin: 24px;
             
        }
    }
`;

const AdminPop = ({ open }) => {
    return (
        <UL open={open}>
            <li><Link to="/admin/add" className="liLinks">Ajouter</Link></li>
            <li><Link to="/admin/accept" className="liLinks">Accepter / Refuser</Link></li>
            <li><Link to="/admin/manage" className="liLinks">Gestion</Link></li>
        </UL>
    )
}

export default AdminPop;