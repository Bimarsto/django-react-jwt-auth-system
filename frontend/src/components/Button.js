export default function Button(props) {

    const {type, text, version} = props;
    
    return (
        <>
            <button className={'button button-'+version} type={type}>{text}</button>
        </>
    )
}