import { HashLoader } from "react-spinners";

export function Loader () {

    return (    
        <div style={{"display": "flex", "justifyContent": "center", "alignItems": "center", "height": "100%"}}>
            <HashLoader
                color="rgb(5, 91, 5)"
                size={50}
                speedMultiplier={1}
            />
        </div>
    );
}