import './footer.scss'

const Footer = () => {
  return (
    <div className='footer_wrapper'>
      <div className='m_footer_center'>
        <div className='footer_left'>
          <p className='link' id='music-link'>
            <a href='#' className='item s-fc4'>
              服务条款
            </a>
            <span className='line'>|</span>
            <a href='#' className='item s-fc4'>
              隐私政策
            </a>
            <span className='line'>|</span>
            <a href='#' className='item s-fc4'>
              儿童隐私政策
            </a>
            <span className='line'>|</span>
            <a href='#' className='item s-fc4'>
              版权投诉指引
            </a>
            <span className='line'>|</span>
            <a href='#' className='item s-fc4'>
              意见反馈
            </a>
            <span className='line'>|</span>
          </p>
          <p className='right'>
            <span className='sep span s-fc3'>网易公司版权所有©1997-2021</span>
            <span className='span s-fc3'>杭州乐读科技有限公司运营：</span>
            <a href='#' className='alink s-fc3'>
              浙网文[2018]3506-263号
            </a>
          </p>
          <p className='contact'>
            <span className='sep span  s-fc3'>违法和不良信息举报电话：0571-89853516</span>
            <span className='span s-fc3'>举报邮箱：</span>
            <a className='alink' href='#'>
              ncm5990@163.com
            </a>
          </p>
          <p className='link'>
            <a href='#' className='alink s-fc3'>
              粤B2-20090191-18&nbsp;&nbsp;工业和信息化部备案管理系统网站
            </a>
            <a href='#' className='alink s-fc3 police-link'>
              <span className='police-logo'></span>
              <span className='police-text'>浙公网安备 33010902002564号</span>
            </a>
          </p>
        </div>
        <div className='footer_right'>
          <div className='unit'>
            <a className='logo studio_logo' href='#'></a>
            <div className='tt studio_words'></div>
          </div>
          <div className='unit'>
            <a className='logo auth_logo' href='#'></a>
            <div className='tt auth_words'></div>
          </div>
          <div className='unit'>
            <a className='logo musician_logo' href='#'></a>
            <div className='tt musician_words'></div>
          </div>
          <div className='unit'>
            <a className='logo reward_logo' href='#'></a>
            <div className='tt reward_words'></div>
          </div>
          <div className='unit'>
            <a className='logo cash_logo' href='#'></a>
            <div className='tt cash_words'></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
