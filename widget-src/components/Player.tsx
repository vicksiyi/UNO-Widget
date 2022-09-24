const {
    widget: { Frame, Text, Rectangle },
} = figma;

interface PlayerProps {
    num: number
    name: string
    avatar: string
}

const Player = ({ num, name, avatar }: PlayerProps) => (
    <Frame name="玩家" width={235} height={57}>
        <Frame x={49} width={186} height={57}
            stroke="#FFEB3B" strokeWidth={5}
        >
            <Rectangle x={6} y={6} name="头像" width={45} height={45}
                cornerRadius={12}
                fill={{ type: "image", src: avatar } as WidgetJSX.ImagePaint}
            ></Rectangle>
            <Text name="昵称" x={58} y={14} width={130}
                height="hug-contents" fontWeight={400}
                fontSize={24} fill="#FFEB3BFF"
            >{name}</Text>
        </Frame>
        <Text width={62} height={57}
            verticalAlignText="center"
            fontWeight={400} fontSize={24}
            fill="#FFFFFF"
        >{num}号:</Text>
    </Frame>
);
export default Player;
