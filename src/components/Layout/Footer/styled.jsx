import styled from 'styled-components'

export const FootWrapper = styled.footer`
  min-height: 72px;
  line-height: 72px;
  text-align: center;
  &>h2 {
    color: ${props=>props.theme.footerText}
  }
`
