import './albumCover.scss'
import { IAlbum } from 'src/api/typings/recommend'
import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'

interface IProps {
  album: IAlbum
}

const AlbumCover = ({ album }: IProps) => {
  return (
    <div className='album_item'>
      <div className='cover_info'>
        <img src={`${album.picUrl}?param=100y100`} alt={album.name} />
        <Link to={`/album?id=${album.id}`} className='mask' title={album.name}></Link>
        <a className='play_icon'></a>
      </div>
      <div className='album_info'>
        <Link to={`/album?id=${album.id}`} title={album.name}>
          {album.name}
        </Link>
      </div>
      <div className='artist_info'>
        {album.artists && album.artists.length > 1 ? (
          album.artists.map((artist, index) => {
            return (
              <>
                <Link key={artist.id} to={`/artist?id=${artist.id}`} title={artist.name}>
                  {artist.name}
                </Link>
                <span> / </span>
              </>
            )
          })
        ) : (
          <Link to={`/artist?id=${album.artist.id}`}>{album.artist.name}</Link>
        )}
      </div>
    </div>
  )
}

export default AlbumCover
