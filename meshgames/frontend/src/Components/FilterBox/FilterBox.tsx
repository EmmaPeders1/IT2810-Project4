import { DocumentNode, OperationVariables, TypedDocumentNode, useQuery } from '@apollo/client';
import { faFilter, faSpinner } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import Button from '../../Components/Button/Button';
import getPlatformData from '../../GraphQL/Queries/getPlatformData';
import getPublisherData from '../../GraphQL/Queries/getPublisherData';
import getGenreData from '../../GraphQL/Queries/getGenreData';
import './FilterBox.css';

let platforms: { platformId: String; }[] = [];
let publishers: { publisherId: String; }[] = [];
let genres: { genreId: String; }[] = [];

function PopulatePlatforms(){
    const { loading, error, data } = useQuery(getPlatformData);

    if(data){
        platforms = data.platforms;
    }
    if(loading) return <p>Loading...</p>;
    if(error) return <p>Error: {error.message}</p>;
}

function PopulatePublishers(){
    const { loading, error, data } = useQuery(getPublisherData);

    if(data){
        publishers = data.publishers;
    }
    if(loading) return <p><FontAwesomeIcon icon={faSpinner} />Loading...</p>;
    if(error) return <p>Error: {error.message}</p>;
}

function PopulateGenres(){
    const { loading, error, data } = useQuery(getGenreData);

    if(data){
        genres = data.genres;
    }
    if(loading) return <p><FontAwesomeIcon icon={faSpinner} />Loading...</p>;
    if(error) return <p>Error: {error.message}</p>;
}

const sortOptions = ['ASC', 'DESC'];

interface filterBoxProps {
    handleFilter: (platformInput: string, publisherInput: string, genreInput: string, sortInput: string) => void;
}

function FilterBox(props: filterBoxProps) {

    PopulatePlatforms();
    PopulatePublishers();
    PopulateGenres();

    function handleFilter() {
        let platformInput = document.getElementById("choose-platform") as HTMLInputElement;
        let publisherInput = document.getElementById("choose-publisher") as HTMLInputElement;
        let genreInput = document.getElementById("choose-genre") as HTMLInputElement;
        let sortInput = document.getElementById("choose-sort") as HTMLInputElement;
        props.handleFilter(platformInput.value, publisherInput.value, genreInput.value, sortInput.value)
    }

    return (
        <div id="filterbox">
            <div id="searchBarContainer">
                <Autocomplete
                    id="choose-publisher"
                    sx={{ width: '250px', padding: '2px', margin: '3px', bgcolor: 'white'}}
                    options={publishers.map((publisher: { publisherId: String }) => publisher.publisherId)}
                    renderInput={(params) => <TextField {...params} label="Publisher" />}
                />
                <Autocomplete
                    id="choose-platform"
                    sx={{ width: '150px', padding: '2px', margin: '3px', bgcolor: 'white' }}
                    options={platforms.map((platform: { platformId: String; }) => platform.platformId)}
                    renderInput={(params) => <TextField {...params} label="Platform" />}
                />
                <Autocomplete
                    id="choose-genre"
                    sx={{ width: '150px', padding: '2px', margin: '3px', bgcolor: 'white' }}
                    options={genres.map((genre: { genreId: String; }) => genre.genreId)}
                    renderInput={(params) => <TextField {...params} label="Genre" />}
                />
                <Autocomplete
                    id="choose-sort"
                    sx={{ width: '250px', padding: '2px', margin: '3px', bgcolor: 'white'}}
                    options={sortOptions}
                    renderInput={(params) => <TextField {...params} label="Sort by" />}
                />
                <div id="innerButtonContainer">
                    <Button
                        onClick={handleFilter}
                        icon={faFilter}
                        label=" FILTER "
                        className="filter-button"
                        onKeyDown={() => console.log("filter!")}
                    />
                </div>
            </div>
        </div>
    );
}

export default FilterBox;