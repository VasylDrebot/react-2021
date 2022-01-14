

const Detail = ({props: item}) => {
    return (
        <div className={'info'}>
            <div>
            <h3>{item.mission_name}</h3>
             <div>{item.launch_year}</div>
            </div>
            <div><img src={item.links.mission_patch} alt="mission_patch"/></div>
        </div>
    );
};

export default Detail;