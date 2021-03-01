/*
 * @Author: tosei
 * @Date: 2021-03-01 14:53:40
 * @LastEditors: tosei
 * @LastEditTime: 2021-03-01 21:31:58
 * @Description: 子目录导航组件
 */

import { Link } from 'react-router-dom'
import './subNav.scss'

const SubNav = () => {
  return (
    <div className='sub_nav_wrapper'>
      <div className='m_center'>
        <div className='items'>
          <div className='item'>
            <Link to='/discover/recommend'>
              <em>推荐</em>
            </Link>
          </div>
          <div className='item'>
            <Link to='/discover/toplist'>
              <em>排行榜</em>
            </Link>
          </div>
          <div className='item'>
            <Link to='/discover/playlist'>
              <em>歌单</em>
            </Link>
          </div>
          <div className='item'>
            <Link to='/discover/djradio'>
              <em>主播电台</em>
            </Link>
          </div>
          <div className='item'>
            <Link to='/discover/artist'>
              <em>歌手</em>
            </Link>
          </div>
          <div className='item'>
            <Link to='/discover/album'>
              <em>新碟上架</em>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SubNav
