import {useParams} from 'react-router-dom';

function AppContent(props){

    const {id} = useParams();

    console.log(props.nearestCarpark);

    const {nearestCarpark, favoriteCarpark} = props;

    function DisplayCarpark(carpark){
        return(
            <div key={carpark.Agency+carpark.CarParkID+carpark.Location+carpark.LotType}>
                {carpark.CarParkID+", "+carpark.Area+", "+carpark.Development+", "+carpark.Location+", "+carpark.AvailableLots+", "+carpark.LotType+", "+carpark.Agency}
            </div>
        )
    }


    function DisplayList(){
        let carparkList;

        if (id==="nearest"){
            console.log("nearest selected");
            console.log(nearestCarpark);
            if (nearestCarpark.length !== 0){
                carparkList = nearestCarpark.map(DisplayCarpark);
            } else{
                carparkList = <div>No carpark found within 1km</div>;
            }
        } else if (id==="favorites"){
            console.log("favorites selected");
            console.log(favoriteCarpark);
            if (favoriteCarpark.length !== 0){
                carparkList = favoriteCarpark.map(DisplayCarpark);
            }else{
                carparkList = <div>No favaourite carpark saved</div>;                
            }
        }

        return carparkList;
    }

    return(
        <>
            {DisplayList()}
        </>
    )

}

export default AppContent;