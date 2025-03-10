import { Image, HTMLChakraProps } from '@chakra-ui/react'

export const Logo: React.FC<HTMLChakraProps<'img'>> = (props) => {
  return (
    <Image
      src="/static/images/logo.png"
      alt="Logo"
      height="62px"
      {...props}
    />
  )
}
