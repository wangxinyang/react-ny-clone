import { Link } from 'react-router-dom'
import { INav } from 'src/router/route'
import './subNavItem.scss'

interface IProps {
  item: INav
  changeSelected(id: number): void
}

const SubNavItem = ({ item, changeSelected }: IProps) => {
  return (
    <div className='sub_item'>
      <Link to={item.path} className={item.isSelected ? 'z_slt' : ''} onClick={() => changeSelected(item.id)}>
        <em>{item.name}</em>
      </Link>
    </div>
  )
}

export default SubNavItem
