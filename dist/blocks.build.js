!function(e){function t(l){if(n[l])return n[l].exports;var r=n[l]={i:l,l:!1,exports:{}};return e[l].call(r.exports,r,r.exports,t),r.l=!0,r.exports}var n={};t.m=e,t.c=n,t.d=function(e,n,l){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:l})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=1)}([function(e,t){e.exports=wp.components},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});n(2),n(5),n(8),n(11),n(14)},function(e,t,n){"use strict";var l=n(3),r=(n.n(l),n(4)),__=(n.n(r),wp.i18n.__),a=wp.blocks.registerBlockType,o=wp.blockEditor.MediaUpload;a("cgb/block-my-block",{title:__("Grondbank"),icon:"shield",category:"common",keywords:[__("grondbank"),__("grondbalans")],attributes:{mediaId:{type:"number"},mediaUrl:{type:"string"},grondbankName:{type:"string"},grondbankAdres:{type:"string"},grondbankStraat:{type:"string"},grondbankContact:{type:"string"},grondbankTel:{type:"string"},grondbankMail:{type:"string"},logoUrl:{type:"string"},logoId:{type:"number"}},edit:function(e){function t(t){e.setAttributes({grondbankName:t.target.value})}function n(t){e.setAttributes({grondbankName:t.target.value})}console.log(e);var l=function(){e.setAttributes({mediaId:0,mediaUrl:""})},r=function(t){e.setAttributes({grondbankContact:t.target.value})},a=function(t){e.setAttributes({mediaId:t.id,mediaUrl:t.url})},i=function(){e.setAttributes({logoId:0,logoUrl:""})},u=function(t){e.setAttributes({logoId:t.id,logoUrl:t.url})},c=function(t){e.setAttributes({grondbankStraat:t.target.value})},s=function(t){e.setAttributes({grondbankAdres:t.target.value})},m=function(t){e.setAttributes({grondbankTel:t.target.value})},d=function(t){e.setAttributes({grondbankMail:t.target.value})};return wp.element.createElement("div",{className:e.className},wp.element.createElement("h1",null,"Grondbank ",""!=e.attributes.grondbankName?e.attributes.grondbankName:null),""!=e.attributes.mediaUrl?wp.element.createElement("div",null,wp.element.createElement("img",{src:e.attributes.mediaUrl,width:"250px"})):null,wp.element.createElement(o,{title:__("Replace image","awp"),value:e.attributes.mediaId,onSelect:a,allowedTypes:["image"],render:function(e){var t=e.open;return wp.element.createElement("a",{onClick:t,isDefault:!0,isLarge:!0},__("Selecteer of verander afbeelding","awp"))}}),wp.element.createElement("br",null),wp.element.createElement("a",{onClick:l},"Verwijder afbeelding"),wp.element.createElement("br",null)," ",wp.element.createElement("br",null),wp.element.createElement("input",{type:"text",onBlur:n,onChange:t,value:e.attributes.grondbankName,placeholder:"Grondbank locatie"}),wp.element.createElement("br",null),wp.element.createElement("input",{type:"text",onBlur:c,onChange:c,value:e.attributes.grondbankStraat,placeholder:"Grondbank straat"}),wp.element.createElement("br",null),wp.element.createElement("input",{type:"text",onBlur:s,onChange:s,value:e.attributes.grondbankAdres,placeholder:"Grondbank adres"}),wp.element.createElement("br",null),wp.element.createElement("input",{type:"text",onBlur:r,onChange:r,value:e.attributes.grondbankContact,placeholder:"Contactpersoon"}),wp.element.createElement("br",null),wp.element.createElement("input",{type:"text",onBlur:m,onChange:m,value:e.attributes.grondbankTel,placeholder:"Telefoonnummer"}),wp.element.createElement("br",null),wp.element.createElement("input",{type:"text",onBlur:d,onChange:d,value:e.attributes.grondbankMail,placeholder:"E-mailadres"}),wp.element.createElement("br",null)," ",wp.element.createElement("br",null),""!=e.attributes.logoUrl?wp.element.createElement("div",null,wp.element.createElement("img",{src:e.attributes.logoUrl,width:"250px"})):null,wp.element.createElement(o,{title:__("Replace image","awp"),value:e.attributes.logoUrl,onSelect:u,allowedTypes:["image"],render:function(e){var t=e.open;return wp.element.createElement("a",{onClick:t,isDefault:!0,isLarge:!0},__("Selecteer of verander logo","awp"))}}),wp.element.createElement("br",null),wp.element.createElement("a",{onClick:i},"Verwijder logo"))},save:function(e){return null}})},function(e,t){},function(e,t){},function(e,t,n){"use strict";var l=n(6),r=(n.n(l),n(7)),a=(n.n(r),n(0)),__=(n.n(a),wp.i18n.__);(0,wp.blocks.registerBlockType)("cgb/grondbalans-content",{title:__("Grondbalans - Content"),icon:"shield",category:"common",keywords:[__("grondbalans content"),__("grondbalans")],attributes:{heading:{type:"string"},subheading:{type:"string"},content:{type:"string"}},edit:function(e){console.log(e);var t=function(t){e.setAttributes({heading:t})},n=function(t){e.setAttributes({subheading:t})},l=function(t){e.setAttributes({content:t})};return wp.element.createElement("div",null,wp.element.createElement("h2",null,"Intro"),wp.element.createElement("div",{className:"grondbalans__content"},wp.element.createElement(a.TextControl,{label:"Heading",value:e.attributes.heading,onChange:function(e){return t(e)}}),wp.element.createElement(a.TextControl,{label:"Subheading",value:e.attributes.subheading,onChange:function(e){return n(e)}}),wp.element.createElement(a.TextareaControl,{label:"Content",value:e.attributes.content,onChange:function(e){return l(e)}})))},save:function(e){return null}})},function(e,t){},function(e,t){},function(e,t,n){"use strict";var l=n(9),r=(n.n(l),n(10)),a=(n.n(r),n(0)),__=(n.n(a),wp.i18n.__),o=wp.blocks.registerBlockType,i=wp.blockEditor.MediaUpload;o("cgb/grondbalans-banner",{title:__("Grondbalans - Banner"),icon:"shield",category:"common",keywords:[__("grondbalans"),__("grondbalans banner")],attributes:{mediaUrl:{type:"string"},mediaId:{type:"number"},heading:{type:"string"},content:{type:"string"},link:{type:"string"},button:{type:"string"}},edit:function(e){var t=function(){e.setAttributes({mediaId:0,mediaUrl:""})},n=function(t){e.setAttributes({mediaId:t.id,mediaUrl:t.url})},l=function(t){e.setAttributes({heading:t})},r=function(t){e.setAttributes({content:t})},o=function(t){e.setAttributes({button:t})},u=function(t){e.setAttributes({link:t})};return console.log(e),wp.element.createElement("div",{className:e.className},wp.element.createElement("h2",null,"Banner"),wp.element.createElement("h3",null,"Banner afbeelding"),""!=e.attributes.mediaUrl?wp.element.createElement("div",null,wp.element.createElement("img",{src:e.attributes.mediaUrl,width:"250px"})):null,wp.element.createElement(i,{title:__("Replace image","awp"),value:e.attributes.mediaId,onSelect:n,allowedTypes:["image"],render:function(e){var t=e.open;return wp.element.createElement("a",{onClick:t,isDefault:!0,isLarge:!0},__("Selecteer of verander afbeelding","awp"))}}),wp.element.createElement("br",null),wp.element.createElement("a",{onClick:t},"Verwijder afbeelding"),wp.element.createElement("h3",null,"Banner content"),wp.element.createElement(a.TextControl,{label:"Banner kop",value:e.attributes.heading,onChange:function(e){return l(e)}}),wp.element.createElement(a.TextareaControl,{label:"Banner content",value:e.attributes.content,onChange:function(e){return r(e)}}),wp.element.createElement("h3",null,"Banner button"),wp.element.createElement(a.TextControl,{label:"Button tekst",value:e.attributes.button,onChange:function(e){return o(e)}}),wp.element.createElement(a.TextControl,{label:"Button link",value:e.attributes.link,onChange:function(e){return u(e)}}))},save:function(e){return null}})},function(e,t){},function(e,t){},function(e,t,n){"use strict";var l=n(12),r=(n.n(l),n(13)),a=(n.n(r),n(0)),__=(n.n(a),wp.i18n.__),o=wp.blocks.registerBlockType,i=wp.blockEditor.MediaUpload;o("cgb/grondbalans-blockrechts",{title:__("Grondbalans - Blok rechts"),icon:"shield",category:"common",keywords:[__("grondbalans content"),__("grondbalans")],attributes:{mediaUrl:{type:"string"},mediaId:{type:"number"},heading:{type:"string"},subheading:{type:"string"},content:{type:"string"},button:{type:"string"},class:{type:"boolean"}},edit:function(e){console.log(e);var t=function(t){e.setAttributes({heading:t})},n=function(t){e.setAttributes({subheading:t})},l=function(t){e.setAttributes({content:t})},r=function(t){e.setAttributes({button:t})},o=function(t){e.setAttributes({mediaId:t.id,mediaUrl:t.url})},u=function(t){e.setAttributes({class:t})};return wp.element.createElement("div",null,wp.element.createElement("h2",null,"Content blok"),wp.element.createElement("div",{className:"grondbalans__content"},""!=e.attributes.mediaUrl?wp.element.createElement("div",null,wp.element.createElement("img",{src:e.attributes.mediaUrl,width:"250px"})):null,wp.element.createElement(i,{title:__("Replace image","awp"),value:e.attributes.mediaId,onSelect:o,allowedTypes:["image"],render:function(e){var t=e.open;return wp.element.createElement("a",{onClick:t,isDefault:!0,isLarge:!0},__("Selecteer of verander afbeelding","awp"))}}),wp.element.createElement(a.TextControl,{label:"Heading",value:e.attributes.heading,onChange:function(e){return t(e)}}),wp.element.createElement(a.TextControl,{label:"Subheading",value:e.attributes.subheading,onChange:function(e){return n(e)}}),wp.element.createElement(a.TextareaControl,{label:"Content",value:e.attributes.content,onChange:function(e){return l(e)}}),wp.element.createElement(a.TextControl,{label:"Button tekst",value:e.attributes.button,onChange:function(e){return r(e)}}),wp.element.createElement(a.FormToggle,{label:"Schaduw uit",checked:e.attributes.class,onChange:function(e){return u(e)}})))},save:function(e){return null}})},function(e,t){},function(e,t){},function(e,t,n){"use strict";var l=n(15),r=(n.n(l),n(16)),a=(n.n(r),n(17)),__=(n.n(a),wp.i18n.__);(0,wp.blocks.registerBlockType)("cgb/grondbalans-container",{title:__("Grondbalans: Container"),icon:"dashicons-admin-site-alt3",category:"common",keywords:[__("Grondbalans"),__("Container"),__("Content")],attributes:{},edit:function(e,t){return console.log(e),wp.element.createElement("div",{className:"block__container"},wp.element.createElement(a.InnerBlocks,null))},save:function(e){return wp.element.createElement(a.InnerBlocks.Content,null)}})},function(e,t){},function(e,t){},function(e,t){e.exports=wp.blockEditor}]);