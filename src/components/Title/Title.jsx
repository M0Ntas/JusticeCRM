import './styles.scss'

const Title = ({ title, subtitle }) => {
  // props.title
  // const { title } = props

  return (
    <div className="title">
      <div className="main-title">{title}</div>
      <div className="sub-title">{subtitle}</div>
    </div>
  )
}

export default Title;