import Desk from './components/Desk'

const { widget } = figma
function Widget() {

  return (
    <Desk />
  )
}

widget.register(Widget)
