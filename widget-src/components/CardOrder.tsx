const { widget } = figma;
const { AutoLayout } = widget;


const fillImg: WidgetJSX.ImagePaint = {
    type: "image",
    src: "https://img.js.design/assets/img/632eb602a6d6d1e44a31491b.png#4928595bd03813d1a4d5a07f01251e7a"
}

const CardOrder = ({ children }: HasChildrenProps) => {
    return (
        <AutoLayout
            name="转盘"
            width={512}
            height={512}
            verticalAlignItems="center"
            horizontalAlignItems="center"
            fill={fillImg}
        >
            {children}
        </AutoLayout>
    )
}

export default CardOrder;