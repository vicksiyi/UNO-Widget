(() => {
  // widget-src/components/Desk.tsx
  var { widget } = figma;
  var { Frame, Image } = widget;
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
  var CardOrder = () => {
    return /* @__PURE__ */ figma.widget.h(Image, {
      name: "\u8F6C\u76D8",
      x: 256,
      y: 128,
      width: 512,
      height: 512,
      src: "https://img.js.design/assets/img/632eb602a6d6d1e44a31491b.png#4928595bd03813d1a4d5a07f01251e7a"
    });
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
    }, children, CardOrder());
  };
  var Desk_default = Desk;

  // widget-src/code.tsx
  var { widget: widget2 } = figma;
  function Widget() {
    return /* @__PURE__ */ figma.widget.h(Desk_default, null);
  }
  widget2.register(Widget);
})();
