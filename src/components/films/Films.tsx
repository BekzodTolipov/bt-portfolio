import Pagination from '@mui/material/Pagination';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableRow from '@mui/material/TableRow';
import React, { useState } from 'react';
import usePagination from '../helper/Pagination';

function Film({films, loading}) {
    const[page, setPage] = useState(1);
    const PER_PAGE = 15;
    const count = Math.ceil(films.length / PER_PAGE);

    const _DATA = usePagination(films, PER_PAGE);

    const handleChange = (e, p) => {
        setPage(p);
        _DATA.jump(p);
      };

    return <>
    
        <TableContainer  component={Paper}>
            <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
                <TableBody>
                {_DATA.currentData().map((film) => (
                    <TableRow
                    key={film._id}
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                    >
                    <TableCell component="th" scope="row">
                        {film.title}
                    </TableCell>
                    <TableCell align="right">{film.description}</TableCell>
                    <TableCell align="right">{film.rating}</TableCell>
                    <TableCell align="right">{film.rental_rate}</TableCell>
                    <TableCell align="right">{film.release_year}</TableCell>
                    </TableRow>
                ))}
                </TableBody>
            </Table>
        </TableContainer>
        
        <Pagination
            count={count}
            size="large"
            page={page}
            variant="outlined"
            shape="rounded"
            onChange={handleChange}
        />
    </>
}

export { Film };

