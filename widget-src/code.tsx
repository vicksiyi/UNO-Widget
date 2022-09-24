import Desk from './components/Desk';
import Button from './components/Button';
import CardOrder from './components/CardOrder';
import Player from "./components/Player";

const { widget, currentUser } = figma
const { AutoLayout, Text, Fragment } = widget

// 准备中的队伍排序
const readyPlayerPos = [
  { x: 379, y: 682, rotation: 0 },
  { x: 120, y: 268, rotation: -90 },
  { x: 394, y: 22, rotation: 0 },
  { x: 938, y: 368, rotation: 90 }
]

// 开始游戏
const startGame = () => {
  console.log("开始游戏");
}

// 加入队伍
const join = () => {

}

// 离开队伍
const leave = () => {

}

// 加入游戏
const joinGameComponent = () => {
  return (
    <AutoLayout
      direction='vertical'
      spacing={12}
      verticalAlignItems="center"
      horizontalAlignItems="center"
    >
      <Button name="加入游戏" handler={join} />
      <Text
        fontSize={20}
        fontWeight={900}
        onClick={leave}
      >退出队伍</Text>
    </AutoLayout>
  )
}

// 玩家队伍【未开始游戏】
const teamPlayerComponent = () => {
  return (
    <Fragment>
      {readyPlayerPos.map((val, index) => (
        <AutoLayout name={`玩家${index}号`} x={val.x} y={val.y} rotation={val.rotation}>
          <Player num={index + 1} name={currentUser?.name ? currentUser?.name : ""} avatar={currentUser?.photoUrl ? currentUser?.photoUrl : ""}></Player>
        </AutoLayout>
      ))}
    </Fragment>
  )
}

function Widget() {
  return (
    <Desk>
      {/* 未开始游戏玩家队伍 */}
      {teamPlayerComponent()}
      <AutoLayout
        x={256}
        y={128}
      >
        <CardOrder>
          {/* 游戏未开始 */}
          {/* <Button name="开始游戏" handler={startGame} /> */}
          {/* 准备ing */}
          {joinGameComponent()}
        </CardOrder>
      </AutoLayout>
    </Desk>
  )
}

widget.register(Widget)
