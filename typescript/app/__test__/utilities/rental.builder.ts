import {Rental} from "../../source/domain/rental";
import {MovieConfiguration} from "../../source/domain/movie/movieConfiguration";

export class RentalBuilder {
    public Build(){
        return new Rental(1, MovieConfiguration.NewReleaseWithTitle("A_NEW_RELEASE_TITLE"));
    }
}