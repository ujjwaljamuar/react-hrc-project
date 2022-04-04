import { useEffect, useState } from "react";
import { getData } from "../services/data";

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Button, Checkbox } from "@mui/material";

import { DataGrid } from '@mui/x-data-grid';

function MyGrid() {
    const [data, setData] = useState([]);

    useEffect(async () => {
        setData(await getData())
    }, []);

    return <>

        <TableContainer component={Paper} >
            <Table sx={{ minWidth: 250 }} aria-label="simple table">
                <TableHead>
                    <TableRow>

                        <TableCell align="left">Select</TableCell>
                        <TableCell align="left">Serial No.</TableCell>
                        <TableCell align="left">Customer No.</TableCell>
                        <TableCell align="left">Business Code</TableCell>
                        <TableCell align="left">Doument ID</TableCell>
                        <TableCell align="left">Invoice Currency</TableCell>
                        <TableCell align="left">Total Open Amount</TableCell>
                        <TableCell align="left">Customer Payment Term</TableCell>
                        <TableCell align="left">Invoice ID</TableCell>

                    </TableRow>
                </TableHead>
                <TableBody>
                    {data.map((info => (
                        <TableRow key={info.sl_no}>

                            <TableCell component="th" scope="info">
                                <Checkbox />
                            </TableCell>

                            <TableCell component="th" scope="info">{info.sl_no}</TableCell>
                            <TableCell component="th" scope="info">{info.cust_number}</TableCell>
                            <TableCell >{info.business_code}</TableCell>
                            <TableCell >{info.doc_id}</TableCell>
                            <TableCell >{info.invoice_currency}</TableCell>
                            <TableCell >{info.total_open_amount}</TableCell>
                            <TableCell >{info.cust_payment_terms}</TableCell>
                            <TableCell >{info.invoice_id}</TableCell>


                        </TableRow>
                    )))}
                </TableBody>
            </Table>
        </TableContainer>
    </>

}

export default MyGrid;