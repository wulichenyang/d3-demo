import styled from 'styled-components'

export const AppWrapper = styled.div`

.fade-enter,.fade-appear {
  animation-duration: .2s;
  animation-fill-mode: both;
  animation-play-state: paused
}

.fade-leave {
  animation-duration: .2s;
  animation-fill-mode: both;
  animation-play-state: paused
}

.fade-enter.fade-enter-active,.fade-appear.fade-appear-active {
  animation-name: antFadeIn;
  animation-play-state: running
}

.fade-leave.fade-leave-active {
  animation-name: antFadeOut;
  animation-play-state: running;
  pointer-events: none
}

.fade-enter,.fade-appear {
  opacity: 0;
  animation-timing-function: linear
}

.fade-leave {
  animation-timing-function: linear
}

@keyframes antFadeIn {
  0% {
      opacity: 0
  }

  100% {
      opacity: 1
  }
}

@keyframes antFadeOut {
  0% {
      opacity: 1
  }

  100% {
      opacity: 0
  }
}

.ant-back-top {
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  color: rgba(0,0,0,0.65);
  font-size: 14px;
  font-variant: tabular-nums;
  line-height: 1.5;
  list-style: none;
  -webkit-font-feature-settings: 'tnum';
  font-feature-settings: 'tnum';
  position: fixed;
  right: 100px;
  bottom: 50px;
  z-index: 10;
  width: 40px;
  height: 40px;
  cursor: pointer
}

.ant-back-top-content {
  width: 40px;
  height: 40px;
  overflow: hidden;
  color: #fff;
  text-align: center;
  background-color: rgba(0,0,0,0.45);
  border-radius: 20px;
  transition: all .3s cubic-bezier(.645, .045, .355, 1)
}

.ant-back-top-content:hover {
  background-color: rgba(0,0,0,0.65);
  transition: all .3s cubic-bezier(.645, .045, .355, 1)
}

.ant-back-top-icon {
  width: 14px;
  height: 16px;
  margin: 12px auto;
  background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAoCAYAAACWwljjAAAABGdBTUEAALGPC/xhBQAAAbtJREFUWAntmMtKw0AUhhMvS5cuxILgQlRUpIggIoKIIoigG1eC+AA+jo+i6FIXBfeuXIgoeKVeitVWJX5HWhhDksnUpp3FDPyZk3Nm5nycmZKkXhAEOXSA3lG7muTeRzmfy6HneUvIhnYkQK+Q9NhAA0Opg0vBEhjBKHiyb8iGMyQMOYuK41BcBSypAL+MYXSKjtFAW7EAGEO3qN4uMQbbAkXiSfRQJ1H6a+yhlkKRcAoVFYiweYNjtCVQJJpBz2GCiPt7fBOZQpFgDpUikse5HgnkM4Fi4QX0Fpc5wf9EbLqpUCy4jMoJSXWhFwbMNgWKhVbRhy5jirhs9fy/oFhgHVVTJEs7RLZ8sSEoJm6iz7SZDMbJ+/OKERQTttCXQRLToRUmrKWCYuA2+jbN0MB4OQobYShfdTCgn/sL1K36M7TLrN3n+758aPy2rrpR6+/od5E8tf/A1uLS9aId5T7J3CNYihkQ4D9PiMdMC7mp4rjB9kjFjZp8BlnVHJBuO1yFXIV0FdDF3RlyFdJVQBdv5AxVdIsq8apiZ2PyYO1EVykesGfZEESsCkweyR8MUW+V8uJ1gkYipmpdP1pm2aJVPEGzAAAAAElFTkSuQmCC) 100%/100% no-repeat
}
`

export const StyledWrapper = styled.div`
display: flex;
flex-direction: row;
height: 100vh;
// font-family: ${props => props.theme.primaryFontFamily};
font-size: 13px;
-webkit-font-smoothing: antialiased;
overflow: hidden;
`
export const BreadTabWrapper = styled.section`
  margin-bottom: 24px;
  color: ${props => props.theme.breadTabText}
`
export const GraphViewWrapper = styled.section`
  padding: 24px 36px;
  background-color: ${props => props.theme.graphViewWrapperBackground}
  transition: all .3s ease
  &:hover {
    box-shadow: 4px 4px 40px rgba(0,0,0,.05);
    transition: all .3s ease
  }
`