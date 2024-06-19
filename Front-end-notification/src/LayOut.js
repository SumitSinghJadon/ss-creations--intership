import { Link,Outlet } from "react-router-dom";

const LayOut=()=>{
    return(
        <>
        <div style={{width:"700px",display:"flex",justifyContent:"space-around"}}>
        <Link to={'Notification'}>Notification</Link>
        <Link to={'ApplyLeave'}>ApplyLeave</Link>
        <Link to={'WebSocketComponent'}>WebSocketComponent</Link>
        <Link to={'ChartComponent'}>ChartComponent</Link>
        <Link to={'ChartStudent'}>ChartStudent</Link>
        </div>
        <Outlet/>

        </>
    );
}

export default LayOut;