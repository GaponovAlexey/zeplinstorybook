import pt from 'prop-types'
export const Button = ({
  backgroundColor = '#0f0',
  label = 'Primary',
  url = 'https://www.figma.com/file/APEIbjDToVzYVy1SdRkhVt/Untitled?node-id=11%3A18',
}: any) => {
  const style = {
    backgroundColor,
    label,
    width: '50px',
    display: 'block',
  }
  return <img alt='ddd' src={url} >
    {label}</img>
}

Button.pt = {
  backgroundColor: pt.string,
  label: pt.string,
}
