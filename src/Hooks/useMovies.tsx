import { SelectChangeEvent } from "@mui/material";
import { useEffect, useState } from "react";
import { movies } from "../types";
import APICall from "./APICall";

const useMovies = () =>{
    const [page, setPage] = useState(1);
    const [Loading, setLoading] = useState(false);
    const [Order, setOrder] = useState('desc');
    const [Sort, setSort] = useState('popularity');
    // const [Genre, setGenre] = useState('');
    const [Movies, setMovies] = useState<movies[]>([]);
    const handleOrderChange = (_event: React.ChangeEvent<unknown>) => {
        if (Order == 'desc') {
            setOrder('asc')
        } else {
            setOrder('desc')
        }
    };
    const handleSortChange = (event: SelectChangeEvent) => {
        setSort(event.target.value as string);
    };
    const handlePageChange = (_event: React.ChangeEvent<unknown>, value: number) => {
        console.log(value);
        setPage(value);
    };
    const GetMovies = async () => {
        setLoading(true)
        const movies = await APICall.get(`/discover/movie?include_adult=false&include_video=false&language=en-US&page=${page}&sort_by=${Sort}.${Order}`)
        if (movies) {
            console.log(movies.data.results);

            setMovies(movies.data.results);
            setLoading(false)
        } else {
            setLoading(false)
        }
    }
    useEffect(() => {
        GetMovies()
    }, [page, Sort, Order])
    return {Movies,Loading, handleOrderChange,handleSortChange,handlePageChange , Sort,Order,page}
}
export default useMovies