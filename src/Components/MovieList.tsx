import { FormControlLabel, MenuItem, Pagination, PaletteMode, Paper, Select, Switch, Tooltip } from "@mui/material";
import PlayCircleIcon from '@mui/icons-material/PlayCircle';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import { ScaleLoader } from "react-spinners";
import useMovies from "../Hooks/useMovies";

interface props {
    Theme: PaletteMode
}
export default function MovieList(props: props) {
    const { Theme } = props;
    const { Movies, Loading, handleOrderChange, handleSortChange, handlePageChange, Sort, Order, page } = useMovies()

    if (Loading) {
        return (
            <div className="w-100 flex-grow-1 d-flex flex-column justify-content-center align-items-center">
                <ScaleLoader color={Theme == 'dark' ? 'white' : '#1976d2'} />
            </div>
        )
    } else {
        return (
            <div className="w-100 d-flex flex-column align-items-center">
                <div className="container">
                    <Paper className="alert text-start" sx={{ backgroundColor: 'grey-900' }}>
                        <div className="d-flex align-items-center justify-content-around flex-wrap">
                            <div className="d-flex align-items-center">
                                <p className="mb-0 me-2">Sort by:</p>
                                <Select
                                    labelId="sort-select"
                                    id="sort-select"
                                    value={Sort}
                                    label="Age"
                                    onChange={handleSortChange}
                                >
                                    <MenuItem value={'popularity'}>Popularity</MenuItem>
                                    <MenuItem value={'original_title'}>Name</MenuItem>
                                    <MenuItem value={'primary_release_date'}>Release date</MenuItem>
                                    <MenuItem value={'vote_average'}>Ratings</MenuItem>
                                </Select>
                            </div>
                            <FormControlLabel control={<Switch color="secondary" checked={Order == 'asc' ? false : true}/>} onChange={handleOrderChange} label={Order == 'desc' ? 'Descending' : 'Ascending'} />

                        </div>
                    </Paper>
                    <div className="row gy-3">
                        {Movies?.filter((movie) => movie.poster_path !== null).map((movie => (
                            <div className="col-6 col-sm-4 col-md-3 col-lg-2" key={movie.id}>
                                <div className=" movie-item pointer">
                                    <img className="w-100" src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt={movie.title} />
                                    <div className="movie-overlay d-flex align-items-center justify-content-center">
                                        <PlayCircleIcon sx={{ fontSize: '3rem' }} />
                                    </div>
                                </div>
                                <div className="d-flex justify-content-between">
                                    <Tooltip title={movie.title} followCursor className="pointer">
                                        <p className="m-0 truncate-text">{movie.title}</p>
                                    </Tooltip>
                                </div>
                                <div className="d-flex justify-content-between align-items-end">
                                    <p className="m-0">{movie.release_date.slice(0, 4)}</p>
                                    <div className="d-flex">
                                        <p className="m-0 me-1">{movie.vote_average.toFixed(1)} </p><StarBorderIcon />
                                    </div>

                                </div>
                            </div>
                        )))}
                    </div>
                </div>


                <Pagination count={255} onChange={handlePageChange} page={page} />
            </div>
        )
    }

}
