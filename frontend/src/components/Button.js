import { useNavigate } from 'react-router-dom';

export default function Button(props) {
    
    const navigate = useNavigate()

    const {type, text, version, onclick_path} = props;

    const routeChange = () =>{ 
        navigate(onclick_path);
      }
    
    if (onclick_path != '') {
        return (
            <>
                <button 
                    className={'button button-'+version} 
                    type={type} 
                    onClick={routeChange}>{text}</button>
            </>
        )
    } else {
        return (
            <>
                <button className={'button button-'+version} type={type}>{text}</button>
            </>
        )
    }
}