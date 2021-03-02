/*
 * @Author: tosei
 * @Date: 2021-03-01 14:53:40
 * @LastEditors: tosei
 * @LastEditTime: 2021-03-02 16:34:27
 * @Description: 子目录导航组件
 */

import { useCallback, useEffect, useState } from 'react'
import { INav, subNavs } from 'src/router/route'
import SubNavItem from './subNavItem'
import './subNav.scss'

const SubNav = () => {
  const [subNavList, setSubNavList] = useState<INav[]>(subNavs)

  /**
   * @description: 处理点击nav之后得css样式
   * @param {number} id
   * @return {*}
   */
  const changeSelected = useCallback((id: number) => {
    const listData = [...subNavList]
    // 如果本来就已经被点击过了就不处理
    listData.map((item) => (item.id === id ? (item.isSelected = true) : (item.isSelected = false)))
    setSubNavList(listData)
  }, [])

  return (
    <div className='sub_nav_wrapper'>
      <div className='m_center'>
        <div className='items'>
          {subNavList.map((item, i) => (
            <SubNavItem key={i} item={item} changeSelected={changeSelected} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default SubNav
