(self.webpackChunkds_digidreams=self.webpackChunkds_digidreams||[]).push([[323],{"./src/stories/Card/Card.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{CardBlog:()=>CardBlog,CardGeneral:()=>CardGeneral,__namedExportsOrder:()=>__namedExportsOrder,default:()=>Card_stories});var _templateObject,_templateObject2,_templateObject3,_templateObject4,react=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),dist=__webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs"),objectWithoutProperties=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),taggedTemplateLiteral=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js"),styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),scaleAnimation=(0,styled_components_browser_esm.F4)(_templateObject||(_templateObject=(0,taggedTemplateLiteral.Z)(["\n  0% {\n    transform: scale(1);\n  }\n  100% {\n    transform: scale(1.1);\n  }\n"]))),ArticleCard=styled_components_browser_esm.ZP.div(_templateObject2||(_templateObject2=(0,taggedTemplateLiteral.Z)(["\n  border-radius: 24px;\n  overflow: hidden;\n  position: relative;\n  font-family: 'Satoshi', sans-serif;\n  box-shadow:\n    0 1px 3px rgba(0, 0, 0, 0.12),\n    0 1px 2px rgba(0, 0, 0, 0.24);\n  transition: all 300ms;\n\n  &:hover img {\n    transform: scale(1.1);\n    z-index: -2;\n  }\n"]))),ArticleImage=styled_components_browser_esm.ZP.img(_templateObject3||(_templateObject3=(0,taggedTemplateLiteral.Z)(["\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n  transition: ease-in-out 0.2s; /* Animation */\n  animation: "," ease-in-out 0.2s;\n"])),scaleAnimation),ContentCard=styled_components_browser_esm.ZP.div(_templateObject4||(_templateObject4=(0,taggedTemplateLiteral.Z)(["\n  box-sizing: border-box;\n  width: 100%;\n  position: absolute;\n  padding: ",";\n  height: auto;\n  bottom: 0;\n  z-index: 1;\n  background: ",";\n"])),(function(props){return props.padding}),(function(props){return"general"===props.type?"linear-gradient(180deg, rgba(0, 0, 0, 0.06) 49.48%, rgba(0, 0, 0, 0.8) 100%)":"blog"===props.type?"linear-gradient(180deg, rgba(33, 31, 32, 0.9) -2.3%, rgba(33, 31, 32, 0.75605) -2.3%, rgba(17, 6, 15, 0.117) -2.3%, rgba(0, 0, 0, 0.9) 100%)":"initial"})),_excluded=["Content","img","style","type","padding"],__jsx=react.createElement;function Card(_ref){var Content=_ref.Content,img=_ref.img,style=_ref.style,_ref$type=_ref.type,type=void 0===_ref$type?"general":_ref$type,padding=_ref.padding;(0,objectWithoutProperties.Z)(_ref,_excluded);return __jsx(react.Fragment,null,__jsx(ArticleCard,{style},__jsx(ContentCard,{type,padding},Content),__jsx(ArticleImage,{src:img,alt:"img"})))}try{Card.displayName="Card",Card.__docgenInfo={description:"",displayName:"Card",props:{Content:{defaultValue:null,description:"Content in card",name:"Content",required:!1,type:{name:"Element"}},padding:{defaultValue:null,description:'Insert padding according to the existing design\n`"top right bottom left"`',name:"padding",required:!1,type:{name:"string"}},img:{defaultValue:null,description:"Image in card",name:"img",required:!1,type:{name:"string"}},type:{defaultValue:{value:"general"},description:'Enter the card type, "general" or "blog"',name:"type",required:!1,type:{name:"enum",value:[{value:'"general"'},{value:'"blog"'}]}},style:{defaultValue:null,description:"Enter additional styles",name:"style",required:!1,type:{name:"CSSProperties"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/stories/Card/Card.tsx#Card"]={docgenInfo:Card.__docgenInfo,name:"Card",path:"src/stories/Card/Card.tsx#Card"})}catch(__react_docgen_typescript_loader_error){}var Button=__webpack_require__("./src/stories/Button/Button.tsx"),Card_stories_jsx=react.createElement;const Card_stories={title:"Components/Card/Card",component:Card,parameters:{layout:"centered",componentSubtitle:"'Component Card",docs:{page:function page(){return Card_stories_jsx(react.Fragment,null,Card_stories_jsx(dist.Dx,null),Card_stories_jsx(dist.dk,null),Card_stories_jsx(dist.QE,null),Card_stories_jsx(dist.sq,null),Card_stories_jsx(dist.ZX,null),Card_stories_jsx(dist.fQ,null))}}},tags:["autodocs"]};var CardGeneral={args:{img:"https://images.unsplash.com/photo-1482877346909-048fb6477632?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=958&q=80",type:"general",padding:"30px 20px 20px 20px",Content:Card_stories_jsx(react.Fragment,null,Card_stories_jsx("p",{style:{color:"white"}},"Earum rerum vero, nostrum, cupiditate repellat quod distinctio facilis repellendus iste ratione reprehenderit architecto est itaque, sequi molestias."),Card_stories_jsx(Button.Z,{Text:"Button",Type:"secondary",onClick:function noRefCheck(){}})),style:{height:"378px",width:"558px"}}},CardBlog={args:{img:"https://images.unsplash.com/photo-1482877346909-048fb6477632?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=958&q=80",type:"blog",padding:"30px 20px 20px 20px",Content:Card_stories_jsx(react.Fragment,null,Card_stories_jsx("p",{style:{color:"white"}},"Earum rerum vero, nostrum, cupiditate repellat quod distinctio facilis repellendus iste ratione reprehenderit architecto est itaque, sequi molestias."),Card_stories_jsx(Button.Z,{Text:"Button",Type:"secondary",onClick:function noRefCheck(){}})),style:{maxWidth:"366px",height:"529px"}}};CardGeneral.parameters={...CardGeneral.parameters,docs:{...CardGeneral.parameters?.docs,source:{originalSource:'{\n  args: {\n    img: "https://images.unsplash.com/photo-1482877346909-048fb6477632?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=958&q=80",\n    type: \'general\',\n    padding: "30px 20px 20px 20px",\n    Content: <>\r\n      <p style={{\n        color: "white"\n      }}>\r\n        Earum rerum vero, nostrum, cupiditate repellat quod distinctio facilis repellendus iste ratione reprehenderit architecto est itaque, sequi molestias.\r\n      </p>\r\n      <Button Text="Button" Type="secondary" onClick={function noRefCheck() {}} />\r\n      </>,\n    style: {\n      height: "378px",\n      width: "558px"\n    }\n  }\n}',...CardGeneral.parameters?.docs?.source}}},CardBlog.parameters={...CardBlog.parameters,docs:{...CardBlog.parameters?.docs,source:{originalSource:'{\n  args: {\n    img: "https://images.unsplash.com/photo-1482877346909-048fb6477632?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=958&q=80",\n    type: \'blog\',\n    padding: "30px 20px 20px 20px",\n    Content: <>\r\n        <p style={{\n        color: "white"\n      }}>\r\n          Earum rerum vero, nostrum, cupiditate repellat quod distinctio facilis repellendus iste ratione reprehenderit architecto est itaque, sequi molestias.\r\n        </p>\r\n        <Button Text="Button" Type="secondary" onClick={function noRefCheck() {}} />\r\n      </>,\n    style: {\n      maxWidth: "366px",\n      height: "529px"\n    }\n  }\n}',...CardBlog.parameters?.docs?.source}}};const __namedExportsOrder=["CardGeneral","CardBlog"]},"./src/stories/Button/Button.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Z:()=>Button});var _templateObject,esm_extends=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/extends.js"),objectWithoutProperties=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),react=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),next_link=__webpack_require__("./node_modules/next/link.js"),link_default=__webpack_require__.n(next_link),taggedTemplateLiteral=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js"),StyledButton=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js").ZP.button(_templateObject||(_templateObject=(0,taggedTemplateLiteral.Z)(["\n\n  &.button{\n    font-family: 'Inter', sans-serif;\n    backface-visibility: hidden;\n    border: 0;\n    border-radius: 30px;\n    box-sizing: border-box;\n    color: #fff;\n    cursor: ",";\n    display: inline-block;\n    font-size: 16px;\n    letter-spacing: -0.01em;\n    padding: 16px 32px 16px 32px;\n    position: relative;\n    text-align: center;\n    justify-content: center;\n    text-decoration: none;\n    transform: translateZ(0) scale(1);\n    transition: transform 0.2s;\n    user-select: none;\n    -webkit-user-select: none;\n    touch-action: manipulation;\n\n    &:hover {\n      ","\n    }\n\n    &:hover:active {\n      ","\n    }\n\n    &:focus {\n      outline: 0 solid transparent;\n    }\n\n    &:focus:before {\n      border-width: 0.125rem;\n      content: '';\n      left: calc(-1 * 0.375rem);\n      pointer-events: none;\n      position: absolute;\n      top: calc(-1 * 0.375rem);\n      transition: border-radius;\n      user-select: none;\n    }\n\n    &:focus:not(:focus-visible) {\n      outline: 0 solid transparent;\n    }\n\n    &:active {\n      ","\n    }\n  }\n\n  &.button--primary {\n    color: #FFFFFF;\n    background: #0041e8;\n  }\n\n  &.button--secondary {\n    background: #ff000000;\n    color: #FFFFFF;\n    background-color: transparent;\n    box-shadow: #FFFFFF 0px 0px 0px 1px inset;\n  }\n"])),(function(_ref){return _ref.disabled?"auto":"pointer"}),(function(_ref2){return!_ref2.disabled&&"transform: scale(1.05);"}),(function(_ref3){return!_ref3.disabled&&"transform: scale(1.05) translateY(.125rem);"}),(function(_ref4){return!_ref4.disabled&&"transform: translateY(.125rem);"})),Font=__webpack_require__("./src/stories/assets/Font/Font.tsx"),_excluded=["Type","Text","href","style"],__jsx=react.createElement;function Button(_ref){var _ref$Type=_ref.Type,Type=void 0===_ref$Type?"primary":_ref$Type,Text=_ref.Text,href=_ref.href,style=_ref.style,props=(0,objectWithoutProperties.Z)(_ref,_excluded),_useState=(0,react.useState)(!1),isDisabled=_useState[0],mode=(_useState[1],"button--".concat(Type));return __jsx(react.Fragment,null,__jsx(Font.Z,null),__jsx(link_default(),{href:href||"/"},__jsx(StyledButton,(0,esm_extends.Z)({className:["button",mode].join(" "),disabled:isDisabled,style},props),Text)))}try{Button.displayName="Button",Button.__docgenInfo={description:"",displayName:"Button",props:{Type:{defaultValue:{value:"primary"},description:'Enter the button type "primary" or "secondary"',name:"Type",required:!1,type:{name:"enum",value:[{value:'"primary"'},{value:'"secondary"'}]}},Text:{defaultValue:null,description:"Enter text button",name:"Text",required:!1,type:{name:"string"}},href:{defaultValue:null,description:"Leading to where",name:"href",required:!1,type:{name:"string"}},style:{defaultValue:null,description:"Enter additional styles",name:"style",required:!1,type:{name:"CSSProperties"}},onClick:{defaultValue:null,description:"Action",name:"onClick",required:!1,type:{name:"(() => void)"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/stories/Button/Button.tsx#Button"]={docgenInfo:Button.__docgenInfo,name:"Button",path:"src/stories/Button/Button.tsx#Button"})}catch(__react_docgen_typescript_loader_error){}},"./src/stories/assets/Font/Font.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Z:()=>Font});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),__jsx=react__WEBPACK_IMPORTED_MODULE_0__.createElement;function Font(){return __jsx(react__WEBPACK_IMPORTED_MODULE_0__.Fragment,null,__jsx("link",{href:"https://api.fontshare.com/v2/css?f[]=satoshi@900,700,500,300,400&display=swap",rel:"stylesheet"}),__jsx("style",null,"@import url('https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800&display=swap');"))}},"./node_modules/memoizerific sync recursive":module=>{function webpackEmptyContext(req){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}webpackEmptyContext.keys=()=>[],webpackEmptyContext.resolve=webpackEmptyContext,webpackEmptyContext.id="./node_modules/memoizerific sync recursive",module.exports=webpackEmptyContext}}]);