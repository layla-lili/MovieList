export const DELETE_MOVIE ="DELETE_MOVIE";
export const WATCHED_MOVIE = "WATCHED_MOVIE";
export const ADD_MOVIE ="ADD_MOVIE";

export const deleteMovie =(movieId)=>{
    return{
        type:DELETE_MOVIE,
        payload:{movieId:movieId},
   
    };
   
};

export const watchedMovie =(watched)=>{
    return{
        type:WATCHED_MOVIE,
        payload:{watched:watched},
   
    };
   
};

export const addMovies =(newMovie)=>{
    return{
        type:ADD_MOVIE,
        payload:{newMovie},
   
    };
   
};

