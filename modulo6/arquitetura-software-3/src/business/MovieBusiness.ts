import { MovieDatabase } from "../data/MovieDatabase";
import { v4 as generateId } from "uuid";
import { Movie } from "../model/Movie";
import { createMovieDTO } from "../model/MovieDTO";
import { CustomError } from "../error/CustomError";
import { InvalidRequest } from "../error/InvalidRequest";
import { ShortRequest } from "../error/ShortRequest";


export class MovieBusiness {
    async create({ title, description, duration_in_minutes, year_of_release } :createMovieDTO): Promise<void> {
        try {
            if (!title || !description || !duration_in_minutes || !year_of_release) {
                throw new InvalidRequest()
            }
    
            const id = generateId();
    
            const movieDatabase = new MovieDatabase();
            await movieDatabase.create({
                id, 
                title,
                description,
                duration_in_minutes,
                year_of_release
            })
        
        } catch (error: any) {
            throw new CustomError (error.statusCode, error.message || error.sqlMessage)
        }
        
    }
    
}