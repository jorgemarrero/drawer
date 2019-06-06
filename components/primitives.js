import _classCallCheck from "@babel/runtime/helpers/classCallCheck";
import _createClass from "@babel/runtime/helpers/createClass";
import _possibleConstructorReturn from "@babel/runtime/helpers/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/getPrototypeOf";
import _inherits from "@babel/runtime/helpers/inherits";
import _extends from "@babel/runtime/helpers/extends";
import _css from "@emotion/css";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
import { jsx as ___EmotionJSX } from "@emotion/core";
import React, { Component } from "react";
import { colors, layers, gridSize } from "@atlaskit/theme";
import ArrowLeft from "@atlaskit/icon/glyph/arrow-left";
import { Slide } from "./transitions";

// Misc.
var widths = {
  full: "100vw",
  extended: "95vw",
  narrow: 45 * gridSize(),
  medium: 60 * gridSize(),
  wide: 75 * gridSize(),
  custom: "304px"
}; // Wrapper
// ------------------------------

var Wrapper = function Wrapper(_ref) {
  var _ref$width = _ref.width,
    width = _ref$width === void 0 ? "narrow" : _ref$width,
    shouldUnmountOnExit = _ref.shouldUnmountOnExit,
    props = _objectWithoutProperties(_ref, ["width", "shouldUnmountOnExit"]);
  return ___EmotionJSX(
    "div",
    _extends(
      {
        css:
          /*#__PURE__*/
          _css(
            {
              backgroundColor: colors.N0,
              display: "flex",
              height: "100vh",
              left: 0,
              overflow: "hidden",
              position: "fixed",
              top: 0,
              width: widths[width],
              zIndex: layers.blanket() + 1
            },
            process.env.NODE_ENV === "production"
              ? ""
              : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9jb21wb25lbnRzL3ByaW1pdGl2ZXMuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBa0NNIiwiZmlsZSI6Ii4uL3NyYy9jb21wb25lbnRzL3ByaW1pdGl2ZXMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBAZmxvd1xuXG5pbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50LCB0eXBlIE5vZGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBjb2xvcnMsIGxheWVycywgZ3JpZFNpemUgfSBmcm9tICdAYXRsYXNraXQvdGhlbWUnO1xuaW1wb3J0IEFycm93TGVmdCBmcm9tICdAYXRsYXNraXQvaWNvbi9nbHlwaC9hcnJvdy1sZWZ0JztcblxuaW1wb3J0IHsgU2xpZGUgfSBmcm9tICcuL3RyYW5zaXRpb25zJztcbmltcG9ydCB0eXBlIHsgRHJhd2VyUHJpbWl0aXZlUHJvcHMsIERyYXdlcldpZHRoIH0gZnJvbSAnLi90eXBlcyc7XG5cbi8vIE1pc2MuXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuY29uc3Qgd2lkdGhzOiB7IFtEcmF3ZXJXaWR0aF06IHN0cmluZyB8IG51bWJlciB9ID0ge1xuICBmdWxsOiAnMTAwdncnLFxuICBleHRlbmRlZDogJzk1dncnLFxuICBuYXJyb3c6IDQ1ICogZ3JpZFNpemUoKSxcbiAgbWVkaXVtOiA2MCAqIGdyaWRTaXplKCksXG4gIHdpZGU6IDc1ICogZ3JpZFNpemUoKSxcbn07XG5cbi8vIFdyYXBwZXJcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG5jb25zdCBXcmFwcGVyID0gKHtcbiAgd2lkdGggPSAnbmFycm93JyxcbiAgc2hvdWxkVW5tb3VudE9uRXhpdCxcbiAgLi4ucHJvcHNcbn06IHtcbiAgY2hpbGRyZW4/OiBOb2RlLFxuICBzaG91bGRVbm1vdW50T25FeGl0PzogYm9vbGVhbixcbiAgd2lkdGg6ICRQcm9wZXJ0eVR5cGU8RHJhd2VyUHJpbWl0aXZlUHJvcHMsICd3aWR0aCc+LFxufSkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxkaXZcbiAgICAgIGNzcz17e1xuICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IGNvbG9ycy5OMCxcbiAgICAgICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgICAgICBoZWlnaHQ6ICcxMDB2aCcsXG4gICAgICAgIGxlZnQ6IDAsXG4gICAgICAgIG92ZXJmbG93OiAnaGlkZGVuJyxcbiAgICAgICAgcG9zaXRpb246ICdmaXhlZCcsXG4gICAgICAgIHRvcDogMCxcbiAgICAgICAgd2lkdGg6IHdpZHRoc1t3aWR0aF0sXG4gICAgICAgIHpJbmRleDogbGF5ZXJzLmJsYW5rZXQoKSArIDEsXG4gICAgICB9fVxuICAgICAgey4uLnByb3BzfVxuICAgIC8+XG4gICk7XG59O1xuXG4vLyBDb250ZW50XG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuY29uc3QgQ29udGVudCA9IHByb3BzID0+IChcbiAgPGRpdlxuICAgIGNzcz17eyBmbGV4OiAxLCBtYXJnaW5Ub3A6IDMgKiBncmlkU2l6ZSgpLCBvdmVyZmxvdzogJ2F1dG8nIH19XG4gICAgey4uLnByb3BzfVxuICAvPlxuKTtcblxuLy8gU2lkZWJhciAvIEljb25zIGV0Yy5cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG5jb25zdCBTaWRlYmFyID0gcHJvcHMgPT4ge1xuICByZXR1cm4gKFxuICAgIDxkaXZcbiAgICAgIGNzcz17e1xuICAgICAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcbiAgICAgICAgYm94U2l6aW5nOiAnYm9yZGVyLWJveCcsXG4gICAgICAgIGNvbG9yOiBjb2xvcnMuTjUwMCxcbiAgICAgICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgICAgICBmbGV4U2hyaW5rOiAwLFxuICAgICAgICBmbGV4RGlyZWN0aW9uOiAnY29sdW1uJyxcbiAgICAgICAgaGVpZ2h0OiAnMTAwdmgnLFxuICAgICAgICBwYWRkaW5nQm90dG9tOiAyICogZ3JpZFNpemUoKSxcbiAgICAgICAgcGFkZGluZ1RvcDogMyAqIGdyaWRTaXplKCksXG4gICAgICAgIHdpZHRoOiA4ICogZ3JpZFNpemUoKSxcbiAgICAgIH19XG4gICAgICB7Li4ucHJvcHN9XG4gICAgLz5cbiAgKTtcbn07XG5cbnR5cGUgSWNvbldyYXBwZXJQcm9wcyA9IHsgb25DbGljaz86IChTeW50aGV0aWNNb3VzZUV2ZW50PCo+KSA9PiB2b2lkIH07XG5jb25zdCBJY29uV3JhcHBlciA9IChwcm9wczogSWNvbldyYXBwZXJQcm9wcykgPT4gKFxuICA8YnV0dG9uXG4gICAgdHlwZT1cImJ1dHRvblwiXG4gICAgY3NzPXt7XG4gICAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcbiAgICAgIGJhY2tncm91bmQ6IDAsXG4gICAgICBib3JkZXI6IDAsXG4gICAgICBib3JkZXJSYWRpdXM6ICc1MCUnLFxuICAgICAgY29sb3I6ICdpbmhlcml0JyxcbiAgICAgIGN1cnNvcjogcHJvcHMub25DbGljayA/ICdwb2ludGVyJyA6IG51bGwsXG4gICAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgICBmb250U2l6ZTogJ2luaGVyaXQnLFxuICAgICAgaGVpZ2h0OiA1ICogZ3JpZFNpemUoKSxcbiAgICAgIGp1c3RpZnlDb250ZW50OiAnY2VudGVyJyxcbiAgICAgIGxpbmVIZWlnaHQ6IDEsXG4gICAgICBtYXJnaW5Cb3R0b206IDIgKiBncmlkU2l6ZSgpLFxuICAgICAgcGFkZGluZzogMCxcbiAgICAgIHdpZHRoOiA1ICogZ3JpZFNpemUoKSxcblxuICAgICAgJyY6aG92ZXInOiB7XG4gICAgICAgIGJhY2tncm91bmRDb2xvcjogcHJvcHMub25DbGljayA/IGNvbG9ycy5OMzBBIDogbnVsbCxcbiAgICAgIH0sXG4gICAgICAnJjphY3RpdmUnOiB7XG4gICAgICAgIGJhY2tncm91bmRDb2xvcjogcHJvcHMub25DbGljayA/IGNvbG9ycy5CNTAgOiBudWxsLFxuICAgICAgICBvdXRsaW5lOiAwLFxuICAgICAgfSxcbiAgICB9fVxuICAgIHsuLi5wcm9wc31cbiAgLz5cbik7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIERyYXdlclByaW1pdGl2ZSBleHRlbmRzIENvbXBvbmVudDxEcmF3ZXJQcmltaXRpdmVQcm9wcz4ge1xuICByZW5kZXIoKSB7XG4gICAgY29uc3Qge1xuICAgICAgY2hpbGRyZW4sXG4gICAgICBpY29uOiBJY29uLFxuICAgICAgb25DbG9zZSxcbiAgICAgIG9uQ2xvc2VDb21wbGV0ZSxcbiAgICAgIC4uLnByb3BzXG4gICAgfSA9IHRoaXMucHJvcHM7XG5cbiAgICByZXR1cm4gKFxuICAgICAgPFNsaWRlIGNvbXBvbmVudD17V3JhcHBlcn0gb25FeGl0ZWQ9e29uQ2xvc2VDb21wbGV0ZX0gey4uLnByb3BzfT5cbiAgICAgICAgPFNpZGViYXI+XG4gICAgICAgICAgPEljb25XcmFwcGVyXG4gICAgICAgICAgICBvbkNsaWNrPXtvbkNsb3NlfVxuICAgICAgICAgICAgZGF0YS10ZXN0LXNlbGVjdG9yPVwiRHJhd2VyUHJpbWl0aXZlU2lkZWJhckNsb3NlQnV0dG9uXCJcbiAgICAgICAgICA+XG4gICAgICAgICAgICB7SWNvbiA/IDxJY29uIHNpemU9XCJsYXJnZVwiIC8+IDogPEFycm93TGVmdCAvPn1cbiAgICAgICAgICA8L0ljb25XcmFwcGVyPlxuICAgICAgICA8L1NpZGViYXI+XG4gICAgICAgIDxDb250ZW50PntjaGlsZHJlbn08L0NvbnRlbnQ+XG4gICAgICA8L1NsaWRlPlxuICAgICk7XG4gIH1cbn1cbiJdfQ== */"
          )
      },
      props
    )
  );
}; // Content
// ------------------------------

var Content = function Content(props) {
  return ___EmotionJSX(
    "div",
    _extends(
      {
        css:
          /*#__PURE__*/
          _css(
            {
              flex: 1,
              marginTop: 3 * gridSize(),
              overflow: "auto"
            },
            process.env.NODE_ENV === "production"
              ? ""
              : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9jb21wb25lbnRzL3ByaW1pdGl2ZXMuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBdURJIiwiZmlsZSI6Ii4uL3NyYy9jb21wb25lbnRzL3ByaW1pdGl2ZXMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBAZmxvd1xuXG5pbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50LCB0eXBlIE5vZGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBjb2xvcnMsIGxheWVycywgZ3JpZFNpemUgfSBmcm9tICdAYXRsYXNraXQvdGhlbWUnO1xuaW1wb3J0IEFycm93TGVmdCBmcm9tICdAYXRsYXNraXQvaWNvbi9nbHlwaC9hcnJvdy1sZWZ0JztcblxuaW1wb3J0IHsgU2xpZGUgfSBmcm9tICcuL3RyYW5zaXRpb25zJztcbmltcG9ydCB0eXBlIHsgRHJhd2VyUHJpbWl0aXZlUHJvcHMsIERyYXdlcldpZHRoIH0gZnJvbSAnLi90eXBlcyc7XG5cbi8vIE1pc2MuXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuY29uc3Qgd2lkdGhzOiB7IFtEcmF3ZXJXaWR0aF06IHN0cmluZyB8IG51bWJlciB9ID0ge1xuICBmdWxsOiAnMTAwdncnLFxuICBleHRlbmRlZDogJzk1dncnLFxuICBuYXJyb3c6IDQ1ICogZ3JpZFNpemUoKSxcbiAgbWVkaXVtOiA2MCAqIGdyaWRTaXplKCksXG4gIHdpZGU6IDc1ICogZ3JpZFNpemUoKSxcbn07XG5cbi8vIFdyYXBwZXJcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG5jb25zdCBXcmFwcGVyID0gKHtcbiAgd2lkdGggPSAnbmFycm93JyxcbiAgc2hvdWxkVW5tb3VudE9uRXhpdCxcbiAgLi4ucHJvcHNcbn06IHtcbiAgY2hpbGRyZW4/OiBOb2RlLFxuICBzaG91bGRVbm1vdW50T25FeGl0PzogYm9vbGVhbixcbiAgd2lkdGg6ICRQcm9wZXJ0eVR5cGU8RHJhd2VyUHJpbWl0aXZlUHJvcHMsICd3aWR0aCc+LFxufSkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxkaXZcbiAgICAgIGNzcz17e1xuICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IGNvbG9ycy5OMCxcbiAgICAgICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgICAgICBoZWlnaHQ6ICcxMDB2aCcsXG4gICAgICAgIGxlZnQ6IDAsXG4gICAgICAgIG92ZXJmbG93OiAnaGlkZGVuJyxcbiAgICAgICAgcG9zaXRpb246ICdmaXhlZCcsXG4gICAgICAgIHRvcDogMCxcbiAgICAgICAgd2lkdGg6IHdpZHRoc1t3aWR0aF0sXG4gICAgICAgIHpJbmRleDogbGF5ZXJzLmJsYW5rZXQoKSArIDEsXG4gICAgICB9fVxuICAgICAgey4uLnByb3BzfVxuICAgIC8+XG4gICk7XG59O1xuXG4vLyBDb250ZW50XG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuY29uc3QgQ29udGVudCA9IHByb3BzID0+IChcbiAgPGRpdlxuICAgIGNzcz17eyBmbGV4OiAxLCBtYXJnaW5Ub3A6IDMgKiBncmlkU2l6ZSgpLCBvdmVyZmxvdzogJ2F1dG8nIH19XG4gICAgey4uLnByb3BzfVxuICAvPlxuKTtcblxuLy8gU2lkZWJhciAvIEljb25zIGV0Yy5cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG5jb25zdCBTaWRlYmFyID0gcHJvcHMgPT4ge1xuICByZXR1cm4gKFxuICAgIDxkaXZcbiAgICAgIGNzcz17e1xuICAgICAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcbiAgICAgICAgYm94U2l6aW5nOiAnYm9yZGVyLWJveCcsXG4gICAgICAgIGNvbG9yOiBjb2xvcnMuTjUwMCxcbiAgICAgICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgICAgICBmbGV4U2hyaW5rOiAwLFxuICAgICAgICBmbGV4RGlyZWN0aW9uOiAnY29sdW1uJyxcbiAgICAgICAgaGVpZ2h0OiAnMTAwdmgnLFxuICAgICAgICBwYWRkaW5nQm90dG9tOiAyICogZ3JpZFNpemUoKSxcbiAgICAgICAgcGFkZGluZ1RvcDogMyAqIGdyaWRTaXplKCksXG4gICAgICAgIHdpZHRoOiA4ICogZ3JpZFNpemUoKSxcbiAgICAgIH19XG4gICAgICB7Li4ucHJvcHN9XG4gICAgLz5cbiAgKTtcbn07XG5cbnR5cGUgSWNvbldyYXBwZXJQcm9wcyA9IHsgb25DbGljaz86IChTeW50aGV0aWNNb3VzZUV2ZW50PCo+KSA9PiB2b2lkIH07XG5jb25zdCBJY29uV3JhcHBlciA9IChwcm9wczogSWNvbldyYXBwZXJQcm9wcykgPT4gKFxuICA8YnV0dG9uXG4gICAgdHlwZT1cImJ1dHRvblwiXG4gICAgY3NzPXt7XG4gICAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcbiAgICAgIGJhY2tncm91bmQ6IDAsXG4gICAgICBib3JkZXI6IDAsXG4gICAgICBib3JkZXJSYWRpdXM6ICc1MCUnLFxuICAgICAgY29sb3I6ICdpbmhlcml0JyxcbiAgICAgIGN1cnNvcjogcHJvcHMub25DbGljayA/ICdwb2ludGVyJyA6IG51bGwsXG4gICAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgICBmb250U2l6ZTogJ2luaGVyaXQnLFxuICAgICAgaGVpZ2h0OiA1ICogZ3JpZFNpemUoKSxcbiAgICAgIGp1c3RpZnlDb250ZW50OiAnY2VudGVyJyxcbiAgICAgIGxpbmVIZWlnaHQ6IDEsXG4gICAgICBtYXJnaW5Cb3R0b206IDIgKiBncmlkU2l6ZSgpLFxuICAgICAgcGFkZGluZzogMCxcbiAgICAgIHdpZHRoOiA1ICogZ3JpZFNpemUoKSxcblxuICAgICAgJyY6aG92ZXInOiB7XG4gICAgICAgIGJhY2tncm91bmRDb2xvcjogcHJvcHMub25DbGljayA/IGNvbG9ycy5OMzBBIDogbnVsbCxcbiAgICAgIH0sXG4gICAgICAnJjphY3RpdmUnOiB7XG4gICAgICAgIGJhY2tncm91bmRDb2xvcjogcHJvcHMub25DbGljayA/IGNvbG9ycy5CNTAgOiBudWxsLFxuICAgICAgICBvdXRsaW5lOiAwLFxuICAgICAgfSxcbiAgICB9fVxuICAgIHsuLi5wcm9wc31cbiAgLz5cbik7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIERyYXdlclByaW1pdGl2ZSBleHRlbmRzIENvbXBvbmVudDxEcmF3ZXJQcmltaXRpdmVQcm9wcz4ge1xuICByZW5kZXIoKSB7XG4gICAgY29uc3Qge1xuICAgICAgY2hpbGRyZW4sXG4gICAgICBpY29uOiBJY29uLFxuICAgICAgb25DbG9zZSxcbiAgICAgIG9uQ2xvc2VDb21wbGV0ZSxcbiAgICAgIC4uLnByb3BzXG4gICAgfSA9IHRoaXMucHJvcHM7XG5cbiAgICByZXR1cm4gKFxuICAgICAgPFNsaWRlIGNvbXBvbmVudD17V3JhcHBlcn0gb25FeGl0ZWQ9e29uQ2xvc2VDb21wbGV0ZX0gey4uLnByb3BzfT5cbiAgICAgICAgPFNpZGViYXI+XG4gICAgICAgICAgPEljb25XcmFwcGVyXG4gICAgICAgICAgICBvbkNsaWNrPXtvbkNsb3NlfVxuICAgICAgICAgICAgZGF0YS10ZXN0LXNlbGVjdG9yPVwiRHJhd2VyUHJpbWl0aXZlU2lkZWJhckNsb3NlQnV0dG9uXCJcbiAgICAgICAgICA+XG4gICAgICAgICAgICB7SWNvbiA/IDxJY29uIHNpemU9XCJsYXJnZVwiIC8+IDogPEFycm93TGVmdCAvPn1cbiAgICAgICAgICA8L0ljb25XcmFwcGVyPlxuICAgICAgICA8L1NpZGViYXI+XG4gICAgICAgIDxDb250ZW50PntjaGlsZHJlbn08L0NvbnRlbnQ+XG4gICAgICA8L1NsaWRlPlxuICAgICk7XG4gIH1cbn1cbiJdfQ== */"
          )
      },
      props
    )
  );
}; // Sidebar / Icons etc.
// ------------------------------

var Sidebar = function Sidebar(props) {
  return ___EmotionJSX(
    "div",
    _extends(
      {
        css:
          /*#__PURE__*/
          _css(
            {
              alignItems: "center",
              boxSizing: "border-box",
              color: colors.N500,
              display: "flex",
              flexShrink: 0,
              flexDirection: "column",
              height: "100vh",
              paddingBottom: 2 * gridSize(),
              paddingTop: 3 * gridSize(),
              width: 8 * gridSize()
            },
            process.env.NODE_ENV === "production"
              ? ""
              : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9jb21wb25lbnRzL3ByaW1pdGl2ZXMuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBa0VNIiwiZmlsZSI6Ii4uL3NyYy9jb21wb25lbnRzL3ByaW1pdGl2ZXMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBAZmxvd1xuXG5pbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50LCB0eXBlIE5vZGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBjb2xvcnMsIGxheWVycywgZ3JpZFNpemUgfSBmcm9tICdAYXRsYXNraXQvdGhlbWUnO1xuaW1wb3J0IEFycm93TGVmdCBmcm9tICdAYXRsYXNraXQvaWNvbi9nbHlwaC9hcnJvdy1sZWZ0JztcblxuaW1wb3J0IHsgU2xpZGUgfSBmcm9tICcuL3RyYW5zaXRpb25zJztcbmltcG9ydCB0eXBlIHsgRHJhd2VyUHJpbWl0aXZlUHJvcHMsIERyYXdlcldpZHRoIH0gZnJvbSAnLi90eXBlcyc7XG5cbi8vIE1pc2MuXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuY29uc3Qgd2lkdGhzOiB7IFtEcmF3ZXJXaWR0aF06IHN0cmluZyB8IG51bWJlciB9ID0ge1xuICBmdWxsOiAnMTAwdncnLFxuICBleHRlbmRlZDogJzk1dncnLFxuICBuYXJyb3c6IDQ1ICogZ3JpZFNpemUoKSxcbiAgbWVkaXVtOiA2MCAqIGdyaWRTaXplKCksXG4gIHdpZGU6IDc1ICogZ3JpZFNpemUoKSxcbn07XG5cbi8vIFdyYXBwZXJcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG5jb25zdCBXcmFwcGVyID0gKHtcbiAgd2lkdGggPSAnbmFycm93JyxcbiAgc2hvdWxkVW5tb3VudE9uRXhpdCxcbiAgLi4ucHJvcHNcbn06IHtcbiAgY2hpbGRyZW4/OiBOb2RlLFxuICBzaG91bGRVbm1vdW50T25FeGl0PzogYm9vbGVhbixcbiAgd2lkdGg6ICRQcm9wZXJ0eVR5cGU8RHJhd2VyUHJpbWl0aXZlUHJvcHMsICd3aWR0aCc+LFxufSkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxkaXZcbiAgICAgIGNzcz17e1xuICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IGNvbG9ycy5OMCxcbiAgICAgICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgICAgICBoZWlnaHQ6ICcxMDB2aCcsXG4gICAgICAgIGxlZnQ6IDAsXG4gICAgICAgIG92ZXJmbG93OiAnaGlkZGVuJyxcbiAgICAgICAgcG9zaXRpb246ICdmaXhlZCcsXG4gICAgICAgIHRvcDogMCxcbiAgICAgICAgd2lkdGg6IHdpZHRoc1t3aWR0aF0sXG4gICAgICAgIHpJbmRleDogbGF5ZXJzLmJsYW5rZXQoKSArIDEsXG4gICAgICB9fVxuICAgICAgey4uLnByb3BzfVxuICAgIC8+XG4gICk7XG59O1xuXG4vLyBDb250ZW50XG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuY29uc3QgQ29udGVudCA9IHByb3BzID0+IChcbiAgPGRpdlxuICAgIGNzcz17eyBmbGV4OiAxLCBtYXJnaW5Ub3A6IDMgKiBncmlkU2l6ZSgpLCBvdmVyZmxvdzogJ2F1dG8nIH19XG4gICAgey4uLnByb3BzfVxuICAvPlxuKTtcblxuLy8gU2lkZWJhciAvIEljb25zIGV0Yy5cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG5jb25zdCBTaWRlYmFyID0gcHJvcHMgPT4ge1xuICByZXR1cm4gKFxuICAgIDxkaXZcbiAgICAgIGNzcz17e1xuICAgICAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcbiAgICAgICAgYm94U2l6aW5nOiAnYm9yZGVyLWJveCcsXG4gICAgICAgIGNvbG9yOiBjb2xvcnMuTjUwMCxcbiAgICAgICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgICAgICBmbGV4U2hyaW5rOiAwLFxuICAgICAgICBmbGV4RGlyZWN0aW9uOiAnY29sdW1uJyxcbiAgICAgICAgaGVpZ2h0OiAnMTAwdmgnLFxuICAgICAgICBwYWRkaW5nQm90dG9tOiAyICogZ3JpZFNpemUoKSxcbiAgICAgICAgcGFkZGluZ1RvcDogMyAqIGdyaWRTaXplKCksXG4gICAgICAgIHdpZHRoOiA4ICogZ3JpZFNpemUoKSxcbiAgICAgIH19XG4gICAgICB7Li4ucHJvcHN9XG4gICAgLz5cbiAgKTtcbn07XG5cbnR5cGUgSWNvbldyYXBwZXJQcm9wcyA9IHsgb25DbGljaz86IChTeW50aGV0aWNNb3VzZUV2ZW50PCo+KSA9PiB2b2lkIH07XG5jb25zdCBJY29uV3JhcHBlciA9IChwcm9wczogSWNvbldyYXBwZXJQcm9wcykgPT4gKFxuICA8YnV0dG9uXG4gICAgdHlwZT1cImJ1dHRvblwiXG4gICAgY3NzPXt7XG4gICAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcbiAgICAgIGJhY2tncm91bmQ6IDAsXG4gICAgICBib3JkZXI6IDAsXG4gICAgICBib3JkZXJSYWRpdXM6ICc1MCUnLFxuICAgICAgY29sb3I6ICdpbmhlcml0JyxcbiAgICAgIGN1cnNvcjogcHJvcHMub25DbGljayA/ICdwb2ludGVyJyA6IG51bGwsXG4gICAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgICBmb250U2l6ZTogJ2luaGVyaXQnLFxuICAgICAgaGVpZ2h0OiA1ICogZ3JpZFNpemUoKSxcbiAgICAgIGp1c3RpZnlDb250ZW50OiAnY2VudGVyJyxcbiAgICAgIGxpbmVIZWlnaHQ6IDEsXG4gICAgICBtYXJnaW5Cb3R0b206IDIgKiBncmlkU2l6ZSgpLFxuICAgICAgcGFkZGluZzogMCxcbiAgICAgIHdpZHRoOiA1ICogZ3JpZFNpemUoKSxcblxuICAgICAgJyY6aG92ZXInOiB7XG4gICAgICAgIGJhY2tncm91bmRDb2xvcjogcHJvcHMub25DbGljayA/IGNvbG9ycy5OMzBBIDogbnVsbCxcbiAgICAgIH0sXG4gICAgICAnJjphY3RpdmUnOiB7XG4gICAgICAgIGJhY2tncm91bmRDb2xvcjogcHJvcHMub25DbGljayA/IGNvbG9ycy5CNTAgOiBudWxsLFxuICAgICAgICBvdXRsaW5lOiAwLFxuICAgICAgfSxcbiAgICB9fVxuICAgIHsuLi5wcm9wc31cbiAgLz5cbik7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIERyYXdlclByaW1pdGl2ZSBleHRlbmRzIENvbXBvbmVudDxEcmF3ZXJQcmltaXRpdmVQcm9wcz4ge1xuICByZW5kZXIoKSB7XG4gICAgY29uc3Qge1xuICAgICAgY2hpbGRyZW4sXG4gICAgICBpY29uOiBJY29uLFxuICAgICAgb25DbG9zZSxcbiAgICAgIG9uQ2xvc2VDb21wbGV0ZSxcbiAgICAgIC4uLnByb3BzXG4gICAgfSA9IHRoaXMucHJvcHM7XG5cbiAgICByZXR1cm4gKFxuICAgICAgPFNsaWRlIGNvbXBvbmVudD17V3JhcHBlcn0gb25FeGl0ZWQ9e29uQ2xvc2VDb21wbGV0ZX0gey4uLnByb3BzfT5cbiAgICAgICAgPFNpZGViYXI+XG4gICAgICAgICAgPEljb25XcmFwcGVyXG4gICAgICAgICAgICBvbkNsaWNrPXtvbkNsb3NlfVxuICAgICAgICAgICAgZGF0YS10ZXN0LXNlbGVjdG9yPVwiRHJhd2VyUHJpbWl0aXZlU2lkZWJhckNsb3NlQnV0dG9uXCJcbiAgICAgICAgICA+XG4gICAgICAgICAgICB7SWNvbiA/IDxJY29uIHNpemU9XCJsYXJnZVwiIC8+IDogPEFycm93TGVmdCAvPn1cbiAgICAgICAgICA8L0ljb25XcmFwcGVyPlxuICAgICAgICA8L1NpZGViYXI+XG4gICAgICAgIDxDb250ZW50PntjaGlsZHJlbn08L0NvbnRlbnQ+XG4gICAgICA8L1NsaWRlPlxuICAgICk7XG4gIH1cbn1cbiJdfQ== */"
          )
      },
      props
    )
  );
};

var IconWrapper = function IconWrapper(props) {
  return ___EmotionJSX(
    "button",
    _extends(
      {
        type: "button",
        css:
          /*#__PURE__*/
          _css(
            {
              alignItems: "center",
              background: 0,
              border: 0,
              borderRadius: "50%",
              color: "inherit",
              cursor: props.onClick ? "pointer" : null,
              display: "flex",
              fontSize: "inherit",
              height: 5 * gridSize(),
              justifyContent: "center",
              lineHeight: 1,
              marginBottom: 2 * gridSize(),
              padding: 0,
              width: 5 * gridSize(),
              "&:hover": {
                backgroundColor: props.onClick ? colors.N30A : null
              },
              "&:active": {
                backgroundColor: props.onClick ? colors.B50 : null,
                outline: 0
              }
            },
            process.env.NODE_ENV === "production"
              ? ""
              : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9jb21wb25lbnRzL3ByaW1pdGl2ZXMuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBdUZJIiwiZmlsZSI6Ii4uL3NyYy9jb21wb25lbnRzL3ByaW1pdGl2ZXMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBAZmxvd1xuXG5pbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50LCB0eXBlIE5vZGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBjb2xvcnMsIGxheWVycywgZ3JpZFNpemUgfSBmcm9tICdAYXRsYXNraXQvdGhlbWUnO1xuaW1wb3J0IEFycm93TGVmdCBmcm9tICdAYXRsYXNraXQvaWNvbi9nbHlwaC9hcnJvdy1sZWZ0JztcblxuaW1wb3J0IHsgU2xpZGUgfSBmcm9tICcuL3RyYW5zaXRpb25zJztcbmltcG9ydCB0eXBlIHsgRHJhd2VyUHJpbWl0aXZlUHJvcHMsIERyYXdlcldpZHRoIH0gZnJvbSAnLi90eXBlcyc7XG5cbi8vIE1pc2MuXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuY29uc3Qgd2lkdGhzOiB7IFtEcmF3ZXJXaWR0aF06IHN0cmluZyB8IG51bWJlciB9ID0ge1xuICBmdWxsOiAnMTAwdncnLFxuICBleHRlbmRlZDogJzk1dncnLFxuICBuYXJyb3c6IDQ1ICogZ3JpZFNpemUoKSxcbiAgbWVkaXVtOiA2MCAqIGdyaWRTaXplKCksXG4gIHdpZGU6IDc1ICogZ3JpZFNpemUoKSxcbn07XG5cbi8vIFdyYXBwZXJcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG5jb25zdCBXcmFwcGVyID0gKHtcbiAgd2lkdGggPSAnbmFycm93JyxcbiAgc2hvdWxkVW5tb3VudE9uRXhpdCxcbiAgLi4ucHJvcHNcbn06IHtcbiAgY2hpbGRyZW4/OiBOb2RlLFxuICBzaG91bGRVbm1vdW50T25FeGl0PzogYm9vbGVhbixcbiAgd2lkdGg6ICRQcm9wZXJ0eVR5cGU8RHJhd2VyUHJpbWl0aXZlUHJvcHMsICd3aWR0aCc+LFxufSkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxkaXZcbiAgICAgIGNzcz17e1xuICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IGNvbG9ycy5OMCxcbiAgICAgICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgICAgICBoZWlnaHQ6ICcxMDB2aCcsXG4gICAgICAgIGxlZnQ6IDAsXG4gICAgICAgIG92ZXJmbG93OiAnaGlkZGVuJyxcbiAgICAgICAgcG9zaXRpb246ICdmaXhlZCcsXG4gICAgICAgIHRvcDogMCxcbiAgICAgICAgd2lkdGg6IHdpZHRoc1t3aWR0aF0sXG4gICAgICAgIHpJbmRleDogbGF5ZXJzLmJsYW5rZXQoKSArIDEsXG4gICAgICB9fVxuICAgICAgey4uLnByb3BzfVxuICAgIC8+XG4gICk7XG59O1xuXG4vLyBDb250ZW50XG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuY29uc3QgQ29udGVudCA9IHByb3BzID0+IChcbiAgPGRpdlxuICAgIGNzcz17eyBmbGV4OiAxLCBtYXJnaW5Ub3A6IDMgKiBncmlkU2l6ZSgpLCBvdmVyZmxvdzogJ2F1dG8nIH19XG4gICAgey4uLnByb3BzfVxuICAvPlxuKTtcblxuLy8gU2lkZWJhciAvIEljb25zIGV0Yy5cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG5jb25zdCBTaWRlYmFyID0gcHJvcHMgPT4ge1xuICByZXR1cm4gKFxuICAgIDxkaXZcbiAgICAgIGNzcz17e1xuICAgICAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcbiAgICAgICAgYm94U2l6aW5nOiAnYm9yZGVyLWJveCcsXG4gICAgICAgIGNvbG9yOiBjb2xvcnMuTjUwMCxcbiAgICAgICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgICAgICBmbGV4U2hyaW5rOiAwLFxuICAgICAgICBmbGV4RGlyZWN0aW9uOiAnY29sdW1uJyxcbiAgICAgICAgaGVpZ2h0OiAnMTAwdmgnLFxuICAgICAgICBwYWRkaW5nQm90dG9tOiAyICogZ3JpZFNpemUoKSxcbiAgICAgICAgcGFkZGluZ1RvcDogMyAqIGdyaWRTaXplKCksXG4gICAgICAgIHdpZHRoOiA4ICogZ3JpZFNpemUoKSxcbiAgICAgIH19XG4gICAgICB7Li4ucHJvcHN9XG4gICAgLz5cbiAgKTtcbn07XG5cbnR5cGUgSWNvbldyYXBwZXJQcm9wcyA9IHsgb25DbGljaz86IChTeW50aGV0aWNNb3VzZUV2ZW50PCo+KSA9PiB2b2lkIH07XG5jb25zdCBJY29uV3JhcHBlciA9IChwcm9wczogSWNvbldyYXBwZXJQcm9wcykgPT4gKFxuICA8YnV0dG9uXG4gICAgdHlwZT1cImJ1dHRvblwiXG4gICAgY3NzPXt7XG4gICAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcbiAgICAgIGJhY2tncm91bmQ6IDAsXG4gICAgICBib3JkZXI6IDAsXG4gICAgICBib3JkZXJSYWRpdXM6ICc1MCUnLFxuICAgICAgY29sb3I6ICdpbmhlcml0JyxcbiAgICAgIGN1cnNvcjogcHJvcHMub25DbGljayA/ICdwb2ludGVyJyA6IG51bGwsXG4gICAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgICBmb250U2l6ZTogJ2luaGVyaXQnLFxuICAgICAgaGVpZ2h0OiA1ICogZ3JpZFNpemUoKSxcbiAgICAgIGp1c3RpZnlDb250ZW50OiAnY2VudGVyJyxcbiAgICAgIGxpbmVIZWlnaHQ6IDEsXG4gICAgICBtYXJnaW5Cb3R0b206IDIgKiBncmlkU2l6ZSgpLFxuICAgICAgcGFkZGluZzogMCxcbiAgICAgIHdpZHRoOiA1ICogZ3JpZFNpemUoKSxcblxuICAgICAgJyY6aG92ZXInOiB7XG4gICAgICAgIGJhY2tncm91bmRDb2xvcjogcHJvcHMub25DbGljayA/IGNvbG9ycy5OMzBBIDogbnVsbCxcbiAgICAgIH0sXG4gICAgICAnJjphY3RpdmUnOiB7XG4gICAgICAgIGJhY2tncm91bmRDb2xvcjogcHJvcHMub25DbGljayA/IGNvbG9ycy5CNTAgOiBudWxsLFxuICAgICAgICBvdXRsaW5lOiAwLFxuICAgICAgfSxcbiAgICB9fVxuICAgIHsuLi5wcm9wc31cbiAgLz5cbik7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIERyYXdlclByaW1pdGl2ZSBleHRlbmRzIENvbXBvbmVudDxEcmF3ZXJQcmltaXRpdmVQcm9wcz4ge1xuICByZW5kZXIoKSB7XG4gICAgY29uc3Qge1xuICAgICAgY2hpbGRyZW4sXG4gICAgICBpY29uOiBJY29uLFxuICAgICAgb25DbG9zZSxcbiAgICAgIG9uQ2xvc2VDb21wbGV0ZSxcbiAgICAgIC4uLnByb3BzXG4gICAgfSA9IHRoaXMucHJvcHM7XG5cbiAgICByZXR1cm4gKFxuICAgICAgPFNsaWRlIGNvbXBvbmVudD17V3JhcHBlcn0gb25FeGl0ZWQ9e29uQ2xvc2VDb21wbGV0ZX0gey4uLnByb3BzfT5cbiAgICAgICAgPFNpZGViYXI+XG4gICAgICAgICAgPEljb25XcmFwcGVyXG4gICAgICAgICAgICBvbkNsaWNrPXtvbkNsb3NlfVxuICAgICAgICAgICAgZGF0YS10ZXN0LXNlbGVjdG9yPVwiRHJhd2VyUHJpbWl0aXZlU2lkZWJhckNsb3NlQnV0dG9uXCJcbiAgICAgICAgICA+XG4gICAgICAgICAgICB7SWNvbiA/IDxJY29uIHNpemU9XCJsYXJnZVwiIC8+IDogPEFycm93TGVmdCAvPn1cbiAgICAgICAgICA8L0ljb25XcmFwcGVyPlxuICAgICAgICA8L1NpZGViYXI+XG4gICAgICAgIDxDb250ZW50PntjaGlsZHJlbn08L0NvbnRlbnQ+XG4gICAgICA8L1NsaWRlPlxuICAgICk7XG4gIH1cbn1cbiJdfQ== */"
          )
      },
      props
    )
  );
};

var DrawerPrimitive =
  /*#__PURE__*/
  (function(_Component) {
    _inherits(DrawerPrimitive, _Component);

    function DrawerPrimitive() {
      _classCallCheck(this, DrawerPrimitive);

      return _possibleConstructorReturn(
        this,
        _getPrototypeOf(DrawerPrimitive).apply(this, arguments)
      );
    }

    _createClass(DrawerPrimitive, [
      {
        key: "render",
        value: function render() {
          var _this$props = this.props,
            children = _this$props.children,
            Icon = _this$props.icon,
            onClose = _this$props.onClose,
            onCloseComplete = _this$props.onCloseComplete,
            props = _objectWithoutProperties(_this$props, [
              "children",
              "icon",
              "onClose",
              "onCloseComplete"
            ]);

          return ___EmotionJSX(
            Slide,
            _extends(
              {
                component: Wrapper,
                onExited: onCloseComplete
              },
              props
            ),
            ___EmotionJSX(
              Sidebar,
              null,
              ___EmotionJSX(
                IconWrapper,
                {
                  onClick: onClose,
                  "data-test-selector": "DrawerPrimitiveSidebarCloseButton"
                },
                Icon
                  ? ___EmotionJSX(Icon, {
                      size: "large"
                    })
                  : ___EmotionJSX(ArrowLeft, null)
              )
            ),
            ___EmotionJSX(Content, null, children)
          );
        }
      }
    ]);

    return DrawerPrimitive;
  })(Component);

export { DrawerPrimitive as default };
