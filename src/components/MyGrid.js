import { useEffect, useState } from "react";
import { getData } from "../services/data";


function MyGrid(){
    const[data,setData] = useState([]);

    useEffect(async () =>{
        setData(await getData())
    },[]);

    return <>
        <table>
            <thead>
                <tr>
                    <th>Serial No.</th>
                    <th>Customer No.</th>
                    <th>Business Code</th>
                </tr>
            </thead>
            <tbody>
                {data.map(info => (
                    <tr>
                        <td>{info.sl_no}</td>
                        <td>{info.cust_number}</td>
                        <td>{info.business_code}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    </>

}

export default MyGrid;