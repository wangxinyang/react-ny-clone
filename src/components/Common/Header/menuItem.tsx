import { Link } from 'react-router-dom'
import { INav } from 'src/router/route'
import './menuItem.scss'

interface IProps {
  menu: INav
  handleMenuClick(id: number): void
}

const MenuItem = ({ menu, handleMenuClick }: IProps) => {
  return (
    <div className='nav_menu'>
      <Link to={menu.path} className={menu.isSelected ? 'z-slt' : ''} onClick={() => handleMenuClick(menu.id)}>
        {menu.name}
        {menu.isSelected && <span className='menu_point'></span>}
      </Link>
    </div>
  )
}

export default MenuItem
