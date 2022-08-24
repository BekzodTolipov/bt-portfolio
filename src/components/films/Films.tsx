// import Paper from '@mui/material/Paper';
// import Table from '@mui/material/Table';
// import TableBody from '@mui/material/TableBody';
// import TableCell from '@mui/material/TableCell';
// import TableContainer from '@mui/material/TableContainer';
// import TableFooter from '@mui/material/TableFooter';
// import TablePagination from '@mui/material/TablePagination';
// import TableRow from '@mui/material/TableRow';
// import React, { useState } from 'react';
// import usePagination from '../helper/Pagination';

// interface TablePaginationActionsProps {
//     count: number;
//     page: number;
//     rowsPerPage: number;
//     onPageChange: (
//       event: React.MouseEvent<HTMLButtonElement>,
//       newPage: number,
//     ) => void;
//   }

// function Film({films, loading}) {
//     const[page, setPage] = useState(1);
//     const PER_PAGE = 15;
//     const count = Math.ceil(films.length / PER_PAGE);

//     const _DATA = usePagination(films, PER_PAGE);

//     const handleChange = (e, p) => {
//         setPage(p);
//         _DATA.jump(p);
//       };

//     return (
//         <TableContainer component={Paper}>
//         <Table sx={{ minWidth: 500 }} aria-label="custom pagination table">
//         <TableBody>
//             {(rowsPerPage > 0
//             ? rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
//             : rows
//             ).map((row) => (
//             <TableRow key={row.name}>
//                 <TableCell component="th" scope="row">
//                 {row.name}
//                 </TableCell>
//                 <TableCell style={{ width: 160 }} align="right">
//                 {row.calories}
//                 </TableCell>
//                 <TableCell style={{ width: 160 }} align="right">
//                 {row.fat}
//                 </TableCell>
//             </TableRow>
//             ))}
//             {emptyRows > 0 && (
//             <TableRow style={{ height: 53 * emptyRows }}>
//                 <TableCell colSpan={6} />
//             </TableRow>
//             )}
//         </TableBody>
//         <TableFooter>
//             <TableRow>
//             <TablePagination
//                 rowsPerPageOptions={[5, 10, 25, { label: 'All', value: -1 }]}
//                 colSpan={3}
//                 count={rows.length}
//                 rowsPerPage={rowsPerPage}
//                 page={page}
//                 SelectProps={{
//                 inputProps: {
//                     'aria-label': 'rows per page',
//                 },
//                 native: true,
//                 }}
//                 onPageChange={handleChangePage}
//                 onRowsPerPageChange={handleChangeRowsPerPage}
//                 ActionsComponent={TablePaginationActions}
//             />
//             </TableRow>
//         </TableFooter>
//         </Table>
//   </TableContainer>
//     );
// }

// export { Film };

