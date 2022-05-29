import pt from 'prop-types'
export const Button = ({ backgroundColor = '#0f0', label = 'Primary' }: any) => {
  const style = {
    backgroundColor,
    label,
    width: '50px',
    display: 'block',
  }
  return <div style={style}>Primary</div>
}

Button.pt = {
  backgroundColor: pt.string,
  label: pt.string,
}
