// Define classes
class Audio {
    name: string;
    url: string;
    ratings: number[];

    constructor(name: string, url: string) {
        this.name = name;
        this.url = url;
        this.ratings = [];
    }

    getAverageRating(): number {
        if (this.ratings.length === 0) {
            return 0;
        }

        const sum = this.ratings.reduce((acc, rating) => acc + rating, 0);
        return sum / this.ratings.length;
    }
}

class Playlist {
    name: string;
    audios: Audio[];
    ratings: number[];

    constructor(name: string) {
        this.name = name;
        this.audios = [];
        this.ratings = [];
    }

    addAudio(audio: Audio): void {
        this.audios.push(audio);
    }

    removeAudio(audio: Audio): void {
        const index = this.audios.indexOf(audio);
        if (index !== -1) {
            this.audios.splice(index, 1);
        }
    }

    getAverageRating(): number {
        if (this.ratings.length === 0) {
            return 0;
        }

        const sum = this.ratings.reduce((acc, rating) => acc + rating, 0);
        return sum / this.ratings.length;
    }
}

// Create instances and handle events
document.addEventListener('DOMContentLoaded', () => {
    const app = document.getElementById('app');

    // Create header
    const header = document.createElement('header');
    header.classList.add('text-center', 'mt-5');
    const title = document.createElement('h1');
    title.textContent = 'Music Player';
    header.appendChild(title);
    app.appendChild(header);

    // Create main container
    const mainContainer = document.createElement('div');
    mainContainer.classList.add('container', 'mt-5');
    app.appendChild(mainContainer);

    // Create playlists section
    const playlistsSection = document.createElement('section');
    playlistsSection.classList.add('mb-5');
    const playlistsContainer = document.createElement('div');
    playlistsContainer.classList.add('row');
    const playlistsCol = document.createElement('div');
    playlistsCol.classList.add('col');
    const playlistsHeader = document.createElement('h2');
    playlistsHeader.textContent = 'Playlists';
    const playlistNameInput = document.createElement('input');
    playlistNameInput.type = 'text';
    playlistNameInput.id = 'playlistNameInput';
    playlistNameInput.placeholder = 'Enter playlist name';
    const createPlaylistBtn = document.createElement('button');
    createPlaylistBtn.id = 'createPlaylistBtn';
    createPlaylistBtn.textContent = 'Create Playlist';
    const searchPlaylistInput = document.createElement('input');
    searchPlaylistInput.type = 'text';
    searchPlaylistInput.id = 'searchPlaylistInput';
    searchPlaylistInput.placeholder = 'Search playlist';
    const playlistList = document.createElement('ul');
    playlistList.id = 'playlistList';
    playlistsCol.appendChild(playlistsHeader);
   
