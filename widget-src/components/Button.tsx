const {
    widget: { AutoLayout, Text },
} = figma;

const BUTTON_EFFECT: WidgetJSX.Effect = {
    type: 'inner-shadow',
    color: {
        r: 204 / 255,
        g: 204 / 255,
        b: 204 / 255,
        a: 1,
    },
    offset: { x: 0, y: -7 },
    blur: 0,
};


const Button = (button: Button) => (
    <AutoLayout
        height="hug-contents"
        padding={{ top: 23, bottom: 27, left: 62, right: 62 }}
        verticalAlignItems="center"
        horizontalAlignItems="center"
        effect={BUTTON_EFFECT}
        fill="#FFFFFFFF"
        onClick={button.handler}
        cornerRadius={12}
    >
        <Text fontSize={20} fontWeight={900} fill="#252928FF">
            {button.name}
        </Text>
    </AutoLayout>
);

export default Button;
