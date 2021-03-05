import { IRcommendList } from 'src/api/typings/recommend'
import ThemeTitle from 'src/components/Common/ThemeTitle/themeTitle'

interface IProps {
  recommendLists: IRcommendList[]
}

const RplayList = ({ recommendLists }: IProps) => {
  return <div>{/* <ThemeTitle title={'热门推荐'} /> */}</div>
}

export default RplayList
