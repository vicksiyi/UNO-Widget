(() => {
  // widget-src/components/Desk.tsx
  var { widget } = figma;
  var { Frame } = widget;
  var DeskFills = [
    {
      type: "gradient-radial",
      gradientHandlePositions: [
        {
          x: 0.5,
          y: 0.5
        },
        {
          x: 0.5,
          y: 1
        },
        {
          x: 0,
          y: 0.5
        }
      ],
      gradientStops: [
        {
          position: 0,
          color: {
            r: 0.6100000143051147,
            g: 0.18299999833106995,
            b: 0.19723331928253174,
            a: 1
          }
        },
        {
          position: 1,
          color: {
            r: 0.4699999988079071,
            g: 0.1128000020980835,
            b: 0.11875324696302414,
            a: 1
          }
        }
      ]
    },
    {
      type: "gradient-radial",
      gradientHandlePositions: [
        {
          x: 0.5,
          y: 0.5
        },
        {
          x: 0.5,
          y: 1
        },
        {
          x: 0,
          y: 0.5
        }
      ],
      gradientStops: [
        {
          position: 0,
          color: {
            r: 0.6700000166893005,
            g: 0.22110000252723694,
            b: 0.23606331646442413,
            a: 1
          }
        },
        {
          position: 1,
          color: {
            r: 0.8500000238418579,
            g: 0.76500004529953,
            b: 0.76500004529953,
            a: 1
          }
        }
      ],
      opacity: 0.2
    }
  ];
  var DeskStroke = {
    type: "gradient-angular",
    gradientHandlePositions: [
      {
        x: 0.5,
        y: 0.5
      },
      { x: 0.5, y: 1 },
      { x: 0, y: 0.5 }
    ],
    gradientStops: [
      {
        position: 0.5,
        color: {
          r: 1,
          g: 0.9230000376701355,
          b: 0.23000001907348633,
          a: 0.5799999833106995
        }
      },
      {
        position: 1,
        color: {
          r: 1,
          g: 0.9230000376701355,
          b: 0.23000001907348633,
          a: 1
        }
      }
    ]
  };
  var Desk = ({ children }) => {
    return /* @__PURE__ */ figma.widget.h(Frame, {
      name: "\u53F0\u684C",
      width: 1024,
      height: 768,
      cornerRadius: { topLeft: 150, topRight: 150 },
      fill: DeskFills,
      stroke: DeskStroke,
      strokeWidth: 10
    }, children);
  };
  var Desk_default = Desk;

  // widget-src/components/Button.tsx
  var {
    widget: { AutoLayout, Text }
  } = figma;
  var BUTTON_EFFECT = {
    type: "inner-shadow",
    color: {
      r: 204 / 255,
      g: 204 / 255,
      b: 204 / 255,
      a: 1
    },
    offset: { x: 0, y: -7 },
    blur: 0
  };
  var Button = (button) => /* @__PURE__ */ figma.widget.h(AutoLayout, {
    height: "hug-contents",
    padding: { top: 23, bottom: 27, left: 62, right: 62 },
    verticalAlignItems: "center",
    horizontalAlignItems: "center",
    effect: BUTTON_EFFECT,
    fill: "#FFFFFFFF",
    onClick: button.handler,
    cornerRadius: 12
  }, /* @__PURE__ */ figma.widget.h(Text, {
    fontSize: 20,
    fontWeight: 900,
    fill: "#252928FF"
  }, button.name));
  var Button_default = Button;

  // widget-src/components/CardOrder.tsx
  var { widget: widget2 } = figma;
  var { AutoLayout: AutoLayout2 } = widget2;
  var fillImg = {
    type: "image",
    src: "https://img.js.design/assets/img/632eb602a6d6d1e44a31491b.png#4928595bd03813d1a4d5a07f01251e7a"
  };
  var CardOrder = ({ children }) => {
    return /* @__PURE__ */ figma.widget.h(AutoLayout2, {
      name: "\u8F6C\u76D8",
      width: 512,
      height: 512,
      verticalAlignItems: "center",
      horizontalAlignItems: "center",
      fill: fillImg
    }, children);
  };
  var CardOrder_default = CardOrder;

  // widget-src/components/Player.tsx
  var {
    widget: { Frame: Frame2, Text: Text2, Rectangle }
  } = figma;
  var Player = ({ num, name, avatar }) => /* @__PURE__ */ figma.widget.h(Frame2, {
    name: "\u73A9\u5BB6",
    width: 235,
    height: 57
  }, /* @__PURE__ */ figma.widget.h(Frame2, {
    x: 49,
    width: 186,
    height: 57,
    stroke: "#FFEB3B",
    strokeWidth: 5
  }, /* @__PURE__ */ figma.widget.h(Rectangle, {
    x: 6,
    y: 6,
    name: "\u5934\u50CF",
    width: 45,
    height: 45,
    cornerRadius: 12,
    fill: { type: "image", src: avatar }
  }), /* @__PURE__ */ figma.widget.h(Text2, {
    name: "\u6635\u79F0",
    x: 58,
    y: 14,
    width: 130,
    height: "hug-contents",
    fontWeight: 400,
    fontSize: 24,
    fill: "#FFEB3BFF"
  }, name)), /* @__PURE__ */ figma.widget.h(Text2, {
    width: 62,
    height: 57,
    verticalAlignText: "center",
    fontWeight: 400,
    fontSize: 24,
    fill: "#FFFFFF"
  }, num, "\u53F7:"));
  var Player_default = Player;

  // widget-src/code.tsx
  var { widget: widget3, currentUser } = figma;
  var { AutoLayout: AutoLayout3, Text: Text3, Fragment } = widget3;
  var readyPlayerPos = [
    { x: 379, y: 682, rotation: 0 },
    { x: 120, y: 268, rotation: -90 },
    { x: 394, y: 22, rotation: 0 },
    { x: 938, y: 368, rotation: 90 }
  ];
  var join = () => {
  };
  var leave = () => {
  };
  var joinGameComponent = () => {
    return /* @__PURE__ */ figma.widget.h(AutoLayout3, {
      direction: "vertical",
      spacing: 12,
      verticalAlignItems: "center",
      horizontalAlignItems: "center"
    }, /* @__PURE__ */ figma.widget.h(Button_default, {
      name: "\u52A0\u5165\u6E38\u620F",
      handler: join
    }), /* @__PURE__ */ figma.widget.h(Text3, {
      fontSize: 20,
      fontWeight: 900,
      onClick: leave
    }, "\u9000\u51FA\u961F\u4F0D"));
  };
  var teamPlayerComponent = () => {
    return /* @__PURE__ */ figma.widget.h(Fragment, null, readyPlayerPos.map((val, index) => /* @__PURE__ */ figma.widget.h(AutoLayout3, {
      name: `\u73A9\u5BB6${index}\u53F7`,
      x: val.x,
      y: val.y,
      rotation: val.rotation
    }, /* @__PURE__ */ figma.widget.h(Player_default, {
      num: index + 1,
      name: (currentUser == null ? void 0 : currentUser.name) ? currentUser == null ? void 0 : currentUser.name : "",
      avatar: (currentUser == null ? void 0 : currentUser.photoUrl) ? currentUser == null ? void 0 : currentUser.photoUrl : ""
    }))));
  };
  function Widget() {
    return /* @__PURE__ */ figma.widget.h(Desk_default, null, teamPlayerComponent(), /* @__PURE__ */ figma.widget.h(AutoLayout3, {
      x: 256,
      y: 128
    }, /* @__PURE__ */ figma.widget.h(CardOrder_default, null, joinGameComponent())));
  }
  widget3.register(Widget);
})();
