import { Link } from 'react-router-dom'
import { IType } from 'src/api/typings/recommend'
import './themeTitle.scss'

interface IProps {
  title: string
  playList?: IType[]
}

const ThemeTitle = ({ title, playList }: IProps) => {
  return (
    <div className='title_bg title_wrapper'>
      <div className='title_left'>
        <Link className='f-ff2 title_name' to='/discover/playlist'>
          {title}
        </Link>
        <div className='tab'>
          {playList &&
            playList.slice(0, 5).map((item) => {
              return (
                <Link key={item.id} className='tab_item' to={`/discover/playlist/?cat=${item.name}`}>
                  {item.name}
                </Link>
              )
            })}
        </div>
      </div>
      <div className='title_right'>
        <Link className='more' to='/discover/playlist'>
          更多
        </Link>
        <div className='title_bg right_arrow'></div>
      </div>
    </div>
  )
}

export default ThemeTitle
