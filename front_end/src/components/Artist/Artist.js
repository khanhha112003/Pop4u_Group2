import "./Artist.css"
import "./bootstrap/dist/css/bootstrap-grid.min.css"
import { ArtistPic } from './img/b5d47b7be6a10edef21b0c0fd540070a.png';


function Artist() {
  return (
    <div>
        <div className = "artist-img">
            <ArtistPic/>
        </div>
    </div>
  )
}

export { Artist };
