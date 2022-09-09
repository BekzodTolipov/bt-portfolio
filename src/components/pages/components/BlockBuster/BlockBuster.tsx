// import axios from 'axios';
// import React, { useEffect, useState } from 'react';
// import { Film } from '../../films/Films';
// import { getStorageValue, setToStorage } from '../../helper/LocalStorage';

// const apiLink = 'http://localhost:3333/api/blockbuster';

// export default function BlockBuster() {
//     const[films, setFilms] = useState(() => {
//         return getStorageValue('films', {});
//     });
//     const[loading, setLoading] = useState(true);

//     useEffect(() => {
//         const fetchFilms = async () => {
//             setLoading(true);
//             const storedFilms = getStorageValue('films', null);

//             if(storedFilms === null) {
//                 const filmsFetched = await axios.get(apiLink + '/films');
//                 setToStorage('films', JSON.stringify(filmsFetched.data));
//                 setFilms(filmsFetched.data);
//             }
//             setLoading(false);
//         }
        
//         fetchFilms();
//     }, [])

//     return <>
//         <Film films={films} loading={loading} />
//     </>
// }