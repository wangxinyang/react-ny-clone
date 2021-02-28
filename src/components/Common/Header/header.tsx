import { menus } from 'src/router/route'
import './header.scss'

const Header = () => {
  return (
    <div className='m_top'>
      <div className='m_center header_wrapper'>
        <div className='logo'>
          <a href='/'>网易云音乐</a>
        </div>
        <div className='m_nav'>
          <div className='nav_menu'>
            {menus.map((menu, i) => (
              <a key={i} href={menu.path}>
                {menu.name}
              </a>
            ))}
          </div>
          <div className='nav_hot'></div>
        </div>
        <div className='header_right'>
          <div className='search'>
            <div className='search_logo'>
              <input type='text' placeholder='音乐/视频/电台/用户' />
            </div>
          </div>
          <div className='create_center'>
            <a href='/'>创作者中心</a>
          </div>
          <div className='user_login'>
            <a href='/'>登录</a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header
