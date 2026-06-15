import{A as e,B as t,C as n,D as r,E as i,L as a,M as o,N as s,O as c,R as l,S as u,T as d,_ as f,b as p,c as m,d as h,f as g,g as _,h as v,j as y,k as b,l as x,m as S,p as C,u as w,v as T,w as E,x as D,y as O,z as k}from"./index-Gkkjf8Cr.js";function A(e){var t,n,r=``;if(typeof e==`string`||typeof e==`number`)r+=e;else if(typeof e==`object`)if(Array.isArray(e)){var i=e.length;for(t=0;t<i;t++)e[t]&&(n=A(e[t]))&&(r&&(r+=` `),r+=n)}else for(n in e)e[n]&&(r&&(r+=` `),r+=n);return r}function j(){for(var e,t,n=0,r=``,i=arguments.length;n<i;n++)(e=arguments[n])&&(t=A(e))&&(r&&(r+=` `),r+=t);return r}var M={data:``},N=e=>{if(typeof window==`object`){let t=(e?e.querySelector(`#_goober`):window._goober)||Object.assign(document.createElement(`style`),{innerHTML:` `,id:`_goober`});return t.nonce=window.__nonce__,t.parentNode||(e||document.head).appendChild(t),t.firstChild}return e||M},P=/(?:([\u0080-\uFFFF\w-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(}\s*)/g,F=/\/\*[^]*?\*\/|  +/g,I=/\n+/g,L=(e,t)=>{let n=``,r=``,i=``;for(let a in e){let o=e[a];a[0]==`@`?a[1]==`i`?n=a+` `+o+`;`:r+=a[1]==`f`?L(o,a):a+`{`+L(o,a[1]==`k`?``:t)+`}`:typeof o==`object`?r+=L(o,t?t.replace(/([^,])+/g,e=>a.replace(/([^,]*:\S+\([^)]*\))|([^,])+/g,t=>/&/.test(t)?t.replace(/&/g,e):e?e+` `+t:t)):a):o!=null&&(a=a[1]==`-`?a:a.replace(/[A-Z]/g,`-$&`).toLowerCase(),i+=L.p?L.p(a,o):a+`:`+o+`;`)}return n+(t&&i?t+`{`+i+`}`:i)+r},R={},z=e=>{if(typeof e==`object`){let t=``;for(let n in e)t+=n+z(e[n]);return t}return e},B=(e,t,n,r,i)=>{let a=z(e),o=R[a]||(R[a]=(e=>{let t=0,n=11;for(;t<e.length;)n=101*n+e.charCodeAt(t++)>>>0;return`go`+n})(a));if(!R[o]){let t=a===e?(e=>{let t,n,r=[{}];for(;t=P.exec(e.replace(F,``));)t[4]?r.shift():t[3]?(n=t[3].replace(I,` `).trim(),r.unshift(r[0][n]=r[0][n]||{})):r[0][t[1]]=t[2].replace(I,` `).trim();return r[0]})(e):e;R[o]=L(i?{[`@keyframes `+o]:t}:t,n?``:`.`+o)}let s=n&&R.g;return n&&(R.g=R[o]),((e,t,n,r)=>{r?t.data=t.data.replace(r,e):t.data.indexOf(e)===-1&&(t.data=n?e+t.data:t.data+e)})(R[o],t,r,s),o},V=(e,t,n)=>e.reduce((e,r,i)=>{let a=t[i];if(a&&a.call){let e=a(n),t=e&&e.props&&e.props.className||/^go/.test(e)&&e;a=t?`.`+t:e&&typeof e==`object`?e.props?``:L(e,``):!1===e?``:e}return e+r+(a??``)},``);function H(e){let t=this||{},n=e.call?e(t.p):e;return B(n.unshift?n.raw?V(n,[].slice.call(arguments,1),t.p):n.reduce((e,n)=>Object.assign(e,n&&n.call?n(t.p):n),{}):n,N(t.target),t.g,t.o,t.k)}H.bind({g:1}),H.bind({k:1});var U={colors:{inherit:`inherit`,current:`currentColor`,transparent:`transparent`,black:`#000000`,white:`#ffffff`,neutral:{50:`#f9fafb`,100:`#f2f4f7`,200:`#eaecf0`,300:`#d0d5dd`,400:`#98a2b3`,500:`#667085`,600:`#475467`,700:`#344054`,800:`#1d2939`,900:`#101828`},darkGray:{50:`#525c7a`,100:`#49536e`,200:`#414962`,300:`#394056`,400:`#313749`,500:`#292e3d`,600:`#212530`,700:`#191c24`,800:`#111318`,900:`#0b0d10`},gray:{50:`#f9fafb`,100:`#f2f4f7`,200:`#eaecf0`,300:`#d0d5dd`,400:`#98a2b3`,500:`#667085`,600:`#475467`,700:`#344054`,800:`#1d2939`,900:`#101828`},blue:{25:`#F5FAFF`,50:`#EFF8FF`,100:`#D1E9FF`,200:`#B2DDFF`,300:`#84CAFF`,400:`#53B1FD`,500:`#2E90FA`,600:`#1570EF`,700:`#175CD3`,800:`#1849A9`,900:`#194185`},green:{25:`#F6FEF9`,50:`#ECFDF3`,100:`#D1FADF`,200:`#A6F4C5`,300:`#6CE9A6`,400:`#32D583`,500:`#12B76A`,600:`#039855`,700:`#027A48`,800:`#05603A`,900:`#054F31`},red:{50:`#fef2f2`,100:`#fee2e2`,200:`#fecaca`,300:`#fca5a5`,400:`#f87171`,500:`#ef4444`,600:`#dc2626`,700:`#b91c1c`,800:`#991b1b`,900:`#7f1d1d`,950:`#450a0a`},yellow:{25:`#FFFCF5`,50:`#FFFAEB`,100:`#FEF0C7`,200:`#FEDF89`,300:`#FEC84B`,400:`#FDB022`,500:`#F79009`,600:`#DC6803`,700:`#B54708`,800:`#93370D`,900:`#7A2E0E`},purple:{25:`#FAFAFF`,50:`#F4F3FF`,100:`#EBE9FE`,200:`#D9D6FE`,300:`#BDB4FE`,400:`#9B8AFB`,500:`#7A5AF8`,600:`#6938EF`,700:`#5925DC`,800:`#4A1FB8`,900:`#3E1C96`},teal:{25:`#F6FEFC`,50:`#F0FDF9`,100:`#CCFBEF`,200:`#99F6E0`,300:`#5FE9D0`,400:`#2ED3B7`,500:`#15B79E`,600:`#0E9384`,700:`#107569`,800:`#125D56`,900:`#134E48`},pink:{25:`#fdf2f8`,50:`#fce7f3`,100:`#fbcfe8`,200:`#f9a8d4`,300:`#f472b6`,400:`#ec4899`,500:`#db2777`,600:`#be185d`,700:`#9d174d`,800:`#831843`,900:`#500724`},cyan:{25:`#ecfeff`,50:`#cffafe`,100:`#a5f3fc`,200:`#67e8f9`,300:`#22d3ee`,400:`#06b6d4`,500:`#0891b2`,600:`#0e7490`,700:`#155e75`,800:`#164e63`,900:`#083344`}},alpha:{100:`ff`,90:`e5`,80:`cc`,70:`b3`,60:`99`,50:`80`,40:`66`,30:`4d`,20:`33`,10:`1a`,0:`00`},font:{size:{"2xs":`calc(var(--tsrd-font-size) * 0.625)`,xs:`calc(var(--tsrd-font-size) * 0.75)`,sm:`calc(var(--tsrd-font-size) * 0.875)`,md:`var(--tsrd-font-size)`,lg:`calc(var(--tsrd-font-size) * 1.125)`,xl:`calc(var(--tsrd-font-size) * 1.25)`,"2xl":`calc(var(--tsrd-font-size) * 1.5)`,"3xl":`calc(var(--tsrd-font-size) * 1.875)`,"4xl":`calc(var(--tsrd-font-size) * 2.25)`,"5xl":`calc(var(--tsrd-font-size) * 3)`,"6xl":`calc(var(--tsrd-font-size) * 3.75)`,"7xl":`calc(var(--tsrd-font-size) * 4.5)`,"8xl":`calc(var(--tsrd-font-size) * 6)`,"9xl":`calc(var(--tsrd-font-size) * 8)`},lineHeight:{"3xs":`calc(var(--tsrd-font-size) * 0.75)`,"2xs":`calc(var(--tsrd-font-size) * 0.875)`,xs:`calc(var(--tsrd-font-size) * 1)`,sm:`calc(var(--tsrd-font-size) * 1.25)`,md:`calc(var(--tsrd-font-size) * 1.5)`,lg:`calc(var(--tsrd-font-size) * 1.75)`,xl:`calc(var(--tsrd-font-size) * 2)`,"2xl":`calc(var(--tsrd-font-size) * 2.25)`,"3xl":`calc(var(--tsrd-font-size) * 2.5)`,"4xl":`calc(var(--tsrd-font-size) * 2.75)`,"5xl":`calc(var(--tsrd-font-size) * 3)`,"6xl":`calc(var(--tsrd-font-size) * 3.25)`,"7xl":`calc(var(--tsrd-font-size) * 3.5)`,"8xl":`calc(var(--tsrd-font-size) * 3.75)`,"9xl":`calc(var(--tsrd-font-size) * 4)`},weight:{thin:`100`,extralight:`200`,light:`300`,normal:`400`,medium:`500`,semibold:`600`,bold:`700`,extrabold:`800`,black:`900`},fontFamily:{sans:`ui-sans-serif, Inter, system-ui, sans-serif, sans-serif`,mono:`ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, 'Liberation Mono', 'Courier New', monospace`}},breakpoints:{xs:`320px`,sm:`640px`,md:`768px`,lg:`1024px`,xl:`1280px`,"2xl":`1536px`},border:{radius:{none:`0px`,xs:`calc(var(--tsrd-font-size) * 0.125)`,sm:`calc(var(--tsrd-font-size) * 0.25)`,md:`calc(var(--tsrd-font-size) * 0.375)`,lg:`calc(var(--tsrd-font-size) * 0.5)`,xl:`calc(var(--tsrd-font-size) * 0.75)`,"2xl":`calc(var(--tsrd-font-size) * 1)`,"3xl":`calc(var(--tsrd-font-size) * 1.5)`,full:`9999px`}},size:{0:`0px`,.25:`calc(var(--tsrd-font-size) * 0.0625)`,.5:`calc(var(--tsrd-font-size) * 0.125)`,1:`calc(var(--tsrd-font-size) * 0.25)`,1.5:`calc(var(--tsrd-font-size) * 0.375)`,2:`calc(var(--tsrd-font-size) * 0.5)`,2.5:`calc(var(--tsrd-font-size) * 0.625)`,3:`calc(var(--tsrd-font-size) * 0.75)`,3.5:`calc(var(--tsrd-font-size) * 0.875)`,4:`calc(var(--tsrd-font-size) * 1)`,4.5:`calc(var(--tsrd-font-size) * 1.125)`,5:`calc(var(--tsrd-font-size) * 1.25)`,5.5:`calc(var(--tsrd-font-size) * 1.375)`,6:`calc(var(--tsrd-font-size) * 1.5)`,6.5:`calc(var(--tsrd-font-size) * 1.625)`,7:`calc(var(--tsrd-font-size) * 1.75)`,8:`calc(var(--tsrd-font-size) * 2)`,9:`calc(var(--tsrd-font-size) * 2.25)`,10:`calc(var(--tsrd-font-size) * 2.5)`,11:`calc(var(--tsrd-font-size) * 2.75)`,12:`calc(var(--tsrd-font-size) * 3)`,14:`calc(var(--tsrd-font-size) * 3.5)`,16:`calc(var(--tsrd-font-size) * 4)`,20:`calc(var(--tsrd-font-size) * 5)`,24:`calc(var(--tsrd-font-size) * 6)`,28:`calc(var(--tsrd-font-size) * 7)`,32:`calc(var(--tsrd-font-size) * 8)`,36:`calc(var(--tsrd-font-size) * 9)`,40:`calc(var(--tsrd-font-size) * 10)`,44:`calc(var(--tsrd-font-size) * 11)`,48:`calc(var(--tsrd-font-size) * 12)`,52:`calc(var(--tsrd-font-size) * 13)`,56:`calc(var(--tsrd-font-size) * 14)`,60:`calc(var(--tsrd-font-size) * 15)`,64:`calc(var(--tsrd-font-size) * 16)`,72:`calc(var(--tsrd-font-size) * 18)`,80:`calc(var(--tsrd-font-size) * 20)`,96:`calc(var(--tsrd-font-size) * 24)`},shadow:{xs:(e=`rgb(0 0 0 / 0.1)`)=>`0 1px 2px 0 rgb(0 0 0 / 0.05)`,sm:(e=`rgb(0 0 0 / 0.1)`)=>`0 1px 3px 0 ${e}, 0 1px 2px -1px ${e}`,md:(e=`rgb(0 0 0 / 0.1)`)=>`0 4px 6px -1px ${e}, 0 2px 4px -2px ${e}`,lg:(e=`rgb(0 0 0 / 0.1)`)=>`0 10px 15px -3px ${e}, 0 4px 6px -4px ${e}`,xl:(e=`rgb(0 0 0 / 0.1)`)=>`0 20px 25px -5px ${e}, 0 8px 10px -6px ${e}`,"2xl":(e=`rgb(0 0 0 / 0.25)`)=>`0 25px 50px -12px ${e}`,inner:(e=`rgb(0 0 0 / 0.05)`)=>`inset 0 2px 4px 0 ${e}`,none:()=>`none`},zIndices:{hide:-1,auto:`auto`,base:0,docked:10,dropdown:1e3,sticky:1100,banner:1200,overlay:1300,modal:1400,popover:1500,skipLink:1600,toast:1700,tooltip:1800}},W=e=>{let{colors:t,font:n,size:r,alpha:i,shadow:a,border:o}=U,{fontFamily:s,lineHeight:c,size:l}=n,u=e?H.bind({target:e}):H;return{devtoolsPanelContainer:u`
      direction: ltr;
      position: fixed;
      bottom: 0;
      right: 0;
      z-index: 99999;
      width: 100%;
      max-height: 90%;
      border-top: 1px solid ${t.gray[700]};
      transform-origin: top;
    `,devtoolsPanelContainerVisibility:e=>u`
        visibility: ${e?`visible`:`hidden`};
      `,devtoolsPanelContainerResizing:e=>e()?u`
          transition: none;
        `:u`
        transition: all 0.4s ease;
      `,devtoolsPanelContainerAnimation:(e,t)=>e?u`
          pointer-events: auto;
          transform: translateY(0);
        `:u`
        pointer-events: none;
        transform: translateY(${t}px);
      `,logo:u`
      cursor: pointer;
      display: flex;
      flex-direction: column;
      background-color: transparent;
      border: none;
      font-family: ${s.sans};
      gap: ${U.size[.5]};
      padding: 0px;
      &:hover {
        opacity: 0.7;
      }
      &:focus-visible {
        outline-offset: 4px;
        border-radius: ${o.radius.xs};
        outline: 2px solid ${t.blue[800]};
      }
    `,tanstackLogo:u`
      font-size: ${n.size.md};
      font-weight: ${n.weight.bold};
      line-height: ${n.lineHeight.xs};
      white-space: nowrap;
      color: ${t.gray[300]};
    `,routerLogo:u`
      font-weight: ${n.weight.semibold};
      font-size: ${n.size.xs};
      background: linear-gradient(to right, #84cc16, #10b981);
      background-clip: text;
      -webkit-background-clip: text;
      line-height: 1;
      -webkit-text-fill-color: transparent;
      white-space: nowrap;
    `,devtoolsPanel:u`
      display: flex;
      font-size: ${l.sm};
      font-family: ${s.sans};
      background-color: ${t.darkGray[700]};
      color: ${t.gray[300]};

      @media (max-width: 700px) {
        flex-direction: column;
      }
      @media (max-width: 600px) {
        font-size: ${l.xs};
      }
    `,dragHandle:u`
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: 4px;
      cursor: row-resize;
      z-index: 100000;
      &:hover {
        background-color: ${t.purple[400]}${i[90]};
      }
    `,firstContainer:u`
      flex: 1 1 500px;
      min-height: 40%;
      max-height: 100%;
      overflow: auto;
      border-right: 1px solid ${t.gray[700]};
      display: flex;
      flex-direction: column;
    `,routerExplorerContainer:u`
      overflow-y: auto;
      flex: 1;
    `,routerExplorer:u`
      padding: ${U.size[2]};
    `,row:u`
      display: flex;
      align-items: center;
      padding: ${U.size[2]} ${U.size[2.5]};
      gap: ${U.size[2.5]};
      border-bottom: ${t.darkGray[500]} 1px solid;
      align-items: center;
    `,detailsHeader:u`
      font-family: ui-sans-serif, Inter, system-ui, sans-serif, sans-serif;
      position: sticky;
      top: 0;
      z-index: 2;
      background-color: ${t.darkGray[600]};
      padding: 0px ${U.size[2]};
      font-weight: ${n.weight.medium};
      font-size: ${n.size.xs};
      min-height: ${U.size[8]};
      line-height: ${n.lineHeight.xs};
      text-align: left;
      display: flex;
      align-items: center;
    `,maskedBadge:u`
      background: ${t.yellow[900]}${i[70]};
      color: ${t.yellow[300]};
      display: inline-block;
      padding: ${U.size[0]} ${U.size[2.5]};
      border-radius: ${o.radius.full};
      font-size: ${n.size.xs};
      font-weight: ${n.weight.normal};
      border: 1px solid ${t.yellow[300]};
    `,maskedLocation:u`
      color: ${t.yellow[300]};
    `,detailsContent:u`
      padding: ${U.size[1.5]} ${U.size[2]};
      display: flex;
      align-items: center;
      justify-content: space-between;
      font-size: ${n.size.xs};
    `,routeMatchesToggle:u`
      display: flex;
      align-items: center;
      border: 1px solid ${t.gray[500]};
      border-radius: ${o.radius.sm};
      overflow: hidden;
    `,routeMatchesToggleBtn:(e,r)=>{let a=[u`
        appearance: none;
        border: none;
        font-size: 12px;
        padding: 4px 8px;
        background: transparent;
        cursor: pointer;
        font-family: ${s.sans};
        font-weight: ${n.weight.medium};
      `];if(e){let e=u`
          background: ${t.darkGray[400]};
          color: ${t.gray[300]};
        `;a.push(e)}else{let e=u`
          color: ${t.gray[500]};
          background: ${t.darkGray[800]}${i[20]};
        `;a.push(e)}return r&&a.push(u`
          border-right: 1px solid ${U.colors.gray[500]};
        `),a},detailsHeaderInfo:u`
      flex: 1;
      justify-content: flex-end;
      display: flex;
      align-items: center;
      font-weight: ${n.weight.normal};
      color: ${t.gray[400]};
    `,matchRow:e=>{let n=[u`
        display: flex;
        border-bottom: 1px solid ${t.darkGray[400]};
        cursor: pointer;
        align-items: center;
        padding: ${r[1]} ${r[2]};
        gap: ${r[2]};
        font-size: ${l.xs};
        color: ${t.gray[300]};
      `];if(e){let e=u`
          background: ${t.darkGray[500]};
        `;n.push(e)}return n},matchIndicator:e=>{let n=[u`
        flex: 0 0 auto;
        width: ${r[3]};
        height: ${r[3]};
        background: ${t[e][900]};
        border: 1px solid ${t[e][500]};
        border-radius: ${o.radius.full};
        transition: all 0.25s ease-out;
        box-sizing: border-box;
      `];if(e===`gray`){let e=u`
          background: ${t.gray[700]};
          border-color: ${t.gray[400]};
        `;n.push(e)}return n},matchID:u`
      flex: 1;
      line-height: ${c.xs};
    `,ageTicker:e=>{let n=[u`
        display: flex;
        gap: ${r[1]};
        font-size: ${l.xs};
        color: ${t.gray[400]};
        font-variant-numeric: tabular-nums;
        line-height: ${c.xs};
      `];if(e){let e=u`
          color: ${t.yellow[400]};
        `;n.push(e)}return n},secondContainer:u`
      flex: 1 1 500px;
      min-height: 40%;
      max-height: 100%;
      overflow: auto;
      border-right: 1px solid ${t.gray[700]};
      display: flex;
      flex-direction: column;
    `,thirdContainer:u`
      flex: 1 1 500px;
      overflow: auto;
      display: flex;
      flex-direction: column;
      height: 100%;
      border-right: 1px solid ${t.gray[700]};

      @media (max-width: 700px) {
        border-top: 2px solid ${t.gray[700]};
      }
    `,fourthContainer:u`
      flex: 1 1 500px;
      min-height: 40%;
      max-height: 100%;
      overflow: auto;
      display: flex;
      flex-direction: column;
    `,routesContainer:u`
      overflow-x: auto;
      overflow-y: visible;
    `,routesRowContainer:(e,n)=>{let i=[u`
        display: flex;
        border-bottom: 1px solid ${t.darkGray[400]};
        align-items: center;
        padding: ${r[1]} ${r[2]};
        gap: ${r[2]};
        font-size: ${l.xs};
        color: ${t.gray[300]};
        cursor: ${n?`pointer`:`default`};
        line-height: ${c.xs};
      `];if(e){let e=u`
          background: ${t.darkGray[500]};
        `;i.push(e)}return i},routesRow:e=>{let n=[u`
        flex: 1 0 auto;
        display: flex;
        justify-content: space-between;
        align-items: center;
        font-size: ${l.xs};
        line-height: ${c.xs};
      `];if(!e){let e=u`
          color: ${t.gray[400]};
        `;n.push(e)}return n},routesRowInner:u`
      display: 'flex';
      align-items: 'center';
      flex-grow: 1;
      min-width: 0;
    `,routeParamInfo:u`
      color: ${t.gray[400]};
      font-size: ${l.xs};
      line-height: ${c.xs};
    `,nestedRouteRow:e=>u`
        margin-left: ${e?0:r[3.5]};
        border-left: ${e?``:`solid 1px ${t.gray[700]}`};
      `,code:u`
      font-size: ${l.xs};
      line-height: ${c.xs};
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    `,matchesContainer:u`
      flex: 1 1 auto;
      overflow-y: auto;
    `,cachedMatchesContainer:u`
      flex: 1 1 auto;
      overflow-y: auto;
      max-height: 50%;
    `,historyContainer:u`
      display: flex;
      flex: 1 1 auto;
      overflow-y: auto;
      max-height: 50%;
    `,historyOverflowContainer:u`
      padding: ${r[1]} ${r[2]};
      font-size: ${U.font.size.xs};
    `,maskedBadgeContainer:u`
      flex: 1;
      justify-content: flex-end;
      display: flex;
    `,matchDetails:u`
      display: flex;
      flex-direction: column;
      padding: ${U.size[2]};
      font-size: ${U.font.size.xs};
      color: ${U.colors.gray[300]};
      line-height: ${U.font.lineHeight.sm};
    `,matchStatus:(e,t)=>{let n=t&&e===`success`?t===`beforeLoad`?`purple`:`blue`:{pending:`yellow`,success:`green`,error:`red`,notFound:`purple`,redirected:`gray`}[e];return u`
        display: flex;
        justify-content: center;
        align-items: center;
        height: 40px;
        border-radius: ${U.border.radius.sm};
        font-weight: ${U.font.weight.normal};
        background-color: ${U.colors[n][900]}${U.alpha[90]};
        color: ${U.colors[n][300]};
        border: 1px solid ${U.colors[n][600]};
        margin-bottom: ${U.size[2]};
        transition: all 0.25s ease-out;
      `},matchDetailsInfo:u`
      display: flex;
      justify-content: flex-end;
      flex: 1;
    `,matchDetailsInfoLabel:u`
      display: flex;
    `,mainCloseBtn:u`
      background: ${t.darkGray[700]};
      padding: ${r[1]} ${r[2]} ${r[1]} ${r[1.5]};
      border-radius: ${o.radius.md};
      position: fixed;
      z-index: 99999;
      display: inline-flex;
      width: fit-content;
      cursor: pointer;
      appearance: none;
      border: 0;
      gap: 8px;
      align-items: center;
      border: 1px solid ${t.gray[500]};
      font-size: ${n.size.xs};
      cursor: pointer;
      transition: all 0.25s ease-out;

      &:hover {
        background: ${t.darkGray[500]};
      }
    `,mainCloseBtnPosition:e=>u`
        ${e===`top-left`?`top: ${r[2]}; left: ${r[2]};`:``}
        ${e===`top-right`?`top: ${r[2]}; right: ${r[2]};`:``}
        ${e===`bottom-left`?`bottom: ${r[2]}; left: ${r[2]};`:``}
        ${e===`bottom-right`?`bottom: ${r[2]}; right: ${r[2]};`:``}
      `,mainCloseBtnAnimation:e=>e?u`
        opacity: 0;
        pointer-events: none;
        visibility: hidden;
      `:u`
          opacity: 1;
          pointer-events: auto;
          visibility: visible;
        `,routerLogoCloseButton:u`
      font-weight: ${n.weight.semibold};
      font-size: ${n.size.xs};
      background: linear-gradient(to right, #98f30c, #00f4a3);
      background-clip: text;
      -webkit-background-clip: text;
      line-height: 1;
      -webkit-text-fill-color: transparent;
      white-space: nowrap;
    `,mainCloseBtnDivider:u`
      width: 1px;
      background: ${U.colors.gray[600]};
      height: 100%;
      border-radius: 999999px;
      color: transparent;
    `,mainCloseBtnIconContainer:u`
      position: relative;
      width: ${r[5]};
      height: ${r[5]};
      background: pink;
      border-radius: 999999px;
      overflow: hidden;
    `,mainCloseBtnIconOuter:u`
      width: ${r[5]};
      height: ${r[5]};
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      filter: blur(3px) saturate(1.8) contrast(2);
    `,mainCloseBtnIconInner:u`
      width: ${r[4]};
      height: ${r[4]};
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    `,panelCloseBtn:u`
      position: absolute;
      cursor: pointer;
      z-index: 100001;
      display: flex;
      align-items: center;
      justify-content: center;
      outline: none;
      background-color: ${t.darkGray[700]};
      &:hover {
        background-color: ${t.darkGray[500]};
      }

      top: 0;
      right: ${r[2]};
      transform: translate(0, -100%);
      border-right: ${t.darkGray[300]} 1px solid;
      border-left: ${t.darkGray[300]} 1px solid;
      border-top: ${t.darkGray[300]} 1px solid;
      border-bottom: none;
      border-radius: ${o.radius.sm} ${o.radius.sm} 0px 0px;
      padding: ${r[1]} ${r[1.5]} ${r[.5]} ${r[1.5]};

      &::after {
        content: ' ';
        position: absolute;
        top: 100%;
        left: -${r[2.5]};
        height: ${r[1.5]};
        width: calc(100% + ${r[5]});
      }
    `,panelCloseBtnIcon:u`
      color: ${t.gray[400]};
      width: ${r[2]};
      height: ${r[2]};
    `,navigateButton:u`
      background: none;
      border: none;
      padding: 0 0 0 4px;
      margin: 0;
      color: ${t.gray[400]};
      font-size: ${l.md};
      cursor: pointer;
      line-height: 1;
      vertical-align: middle;
      margin-right: 0.5ch;
      flex-shrink: 0;
      &:hover {
        color: ${t.blue[300]};
      }
    `}};function G(){let[e]=D(W(o(g)));return e}var K=e=>{try{let t=localStorage.getItem(e);return typeof t==`string`?JSON.parse(t):void 0}catch{return}};function q(e,t){let[n,r]=D();return T(()=>{r(K(e)??(typeof t==`function`?t():t))}),[n,t=>{r(n=>{let r=t;typeof t==`function`&&(r=t(n));try{localStorage.setItem(e,JSON.stringify(r))}catch{}return r})}]}var J=typeof window>`u`;function ee(e){return e.isFetching&&e.status===`success`?e.isFetching===`beforeLoad`?`purple`:`blue`:{pending:`yellow`,success:`green`,error:`red`,notFound:`purple`,redirected:`gray`}[e.status]}function te(e,t){let n=e.find(e=>e.routeId===t.id);return n?ee(n):`gray`}function ne(){let[e,t]=D(!1);return(J?T:p)(()=>{t(!0)}),e}var re=Symbol.for(`tanstack.rsc.stream`),ie=Symbol.for(`tanstack.rsc.renderable`),Y=Symbol.for(`tanstack.rsc.slotUsages`);function ae(e){let t=e.length;for(;t>0&&e[t-1]===void 0;)t--;return t===0||t===e.length?e:e.slice(0,t)}var X=e=>(typeof e==`object`||typeof e==`function`)&&e!==null&&re in e,oe=e=>{if(!X(e))return null;let t=e;return ie in t&&t[ie]===!0?`renderableValue`:`compositeSource`},se=e=>{if(!X(e))return[];let t=e,n=[];if(Y in t){let e=t[Y];if(Array.isArray(e))for(let t of e){let e=t?.slot;typeof e==`string`&&!n.includes(e)&&n.push(e)}}return n},ce=e=>{if(!X(e))return[];let t=e;if(!(Y in t))return[];let n=t[Y];return Array.isArray(n)?n.filter(e=>e&&typeof e==`object`&&typeof e.slot==`string`&&(e.args===void 0||Array.isArray(e.args))):[]},le=e=>{let t=ce(e),n={};for(let e of t){let t=ae(e.args??[]),r=n[e.slot]??(n[e.slot]={count:0,invocations:[]});r.count++,r.invocations.push(t)}return n},ue=e=>{if(e===`React element`)return`React element`;let t=oe(e);if(t===`compositeSource`){let t=se(e);return t.length>0?`RSC composite source (${t.length} ${t.length===1?`slot`:`slots`})`:`RSC composite source`}if(t===`renderableValue`)return`RSC renderable value`;let n=Object.getOwnPropertyNames(Object(e)),r=typeof e==`bigint`?`${e.toString()}n`:e;try{return JSON.stringify(r,n)}catch{return`unable to stringify`}};function de(e,t=[e=>e]){return e.map((e,t)=>[e,t]).sort(([e,n],[r,i])=>{for(let n of t){let t=n(e),i=n(r);if(t===void 0){if(i===void 0)continue;return 1}if(t!==i)return t>i?1:-1}return n-i}).map(([e])=>e)}var fe=e(`<span><svg xmlns=http://www.w3.org/2000/svg width=12 height=12 fill=none viewBox="0 0 24 24"><path stroke=currentColor stroke-linecap=round stroke-linejoin=round stroke-width=2 d="M9 18l6-6-6-6">`),pe=e(`<div>`),me=e(`<button><span>:</span><span>`),he=e(`<div><span>slots</span><div>`),ge=e(`<span>:`),_e=e(`<span>`),ve=e(`<button><span> `),ye=e(`<div><div><button> [<!> ... <!>]`),be=e(`<button><span></span> 🔄 `),xe=({expanded:e,style:t={}})=>{let n=Ee();return(()=>{var t=fe(),r=t.firstChild;return p(i=>{var a=n().expander,o=j(n().expanderIcon(e));return a!==i.e&&_(t,i.e=a),o!==i.t&&c(r,`class`,i.t=o),i},{e:void 0,t:void 0}),t})()};function Se(e,t){if(t<1)return[];let n=0,r=[];for(;n<e.length;)r.push(e.slice(n,n+t)),n+=t;return r}function Ce(e){return Symbol.iterator in e}function we(e){if(!e||typeof e!=`object`)return!1;let t=Object.getPrototypeOf(e);return t===Object.prototype||t===null}function Z({value:e,defaultExpanded:t,pageSize:n=100,filterSubEntries:r,...a}){let[o,s]=D(!!t),c=()=>s(e=>!e),l=O(()=>typeof e()),u=O(()=>{let n=[],i=e=>{let n=t===!0?{[e.label]:!0}:t?.[e.label];return{...e,value:()=>e.value,defaultExpanded:n}};if(Array.isArray(e())&&e().length===2&&e()[0]===`React element`&&we(e()[1])){let t=e();n=[i({label:`0`,value:t[0]}),...Object.entries(t[1]).map(([e,t])=>i({label:e,value:t}))]}else Array.isArray(e())?n=e().map((e,t)=>i({label:t.toString(),value:e})):e()!==null&&typeof e()==`object`&&Ce(e())&&typeof e()[Symbol.iterator]==`function`?n=Array.from(e(),(e,t)=>i({label:t.toString(),value:e})):typeof e()==`object`&&e()!==null&&(n=Object.entries(e()).map(([e,t])=>i({label:e,value:t})));return r?r(n):n}),m=O(()=>Se(u(),n)),[h,g]=D([]),[v,y]=D(void 0),b=Ee(),x=()=>{y(e()())},S=t=>f(Z,i({value:e,filterSubEntries:r},a,t)),C=O(()=>oe(e())),w=O(()=>se(e())),T=O(()=>le(e())),k=O(()=>C()===`compositeSource`&&w().length>0);return(()=>{var t=pe();return E(t,(()=>{var t=d(()=>C()!==null);return()=>t()?d(()=>!!k())()?[(()=>{var t=me(),n=t.firstChild,r=n.firstChild,i=n.nextSibling;return t.$$click=()=>c(),E(t,f(xe,{get expanded(){return o()??!1}}),n),E(n,()=>a.label,r),E(i,()=>ue(e())),p(e=>{var n=b().expandButton,r=b().compositeComponent;return n!==e.e&&_(t,e.e=n),r!==e.t&&_(i,e.t=r),e},{e:void 0,t:void 0}),t})(),d(()=>d(()=>!!(o()??!1))()?(()=>{var e=he(),t=e.firstChild,n=t.nextSibling;return E(n,()=>w().map(e=>{let t=T()[e];return t?f(Z,{label:`${e}:`,value:()=>t.invocations.map(e=>e.length===1?e[0]:e)}):null})),p(r=>{var i=b().rscMetaRow,a=b().rscMetaLabel,o=b().subEntries;return i!==r.e&&_(e,r.e=i),a!==r.t&&_(t,r.t=a),o!==r.a&&_(n,r.a=o),r},{e:void 0,t:void 0,a:void 0}),e})():null)]:[(()=>{var e=ge(),t=e.firstChild;return E(e,()=>a.label,t),e})(),` `,(()=>{var t=_e();return E(t,()=>ue(e())),p(()=>_(t,C()===`compositeSource`?b().compositeComponent:b().renderableComponent)),t})()]:d(()=>!!m().length)()?[(()=>{var e=ve(),t=e.firstChild,n=t.firstChild;return e.$$click=()=>c(),E(e,f(xe,{get expanded(){return o()??!1}}),t),E(e,()=>a.label,t),E(t,()=>String(l).toLowerCase()===`iterable`?`(Iterable) `:``,n),E(t,()=>u().length,n),E(t,()=>u().length>1?`items`:`item`,null),p(n=>{var r=b().expandButton,i=b().info;return r!==n.e&&_(e,n.e=r),i!==n.t&&_(t,n.t=i),n},{e:void 0,t:void 0}),e})(),d(()=>d(()=>!!(o()??!1))()?d(()=>m().length===1)()?(()=>{var e=pe();return E(e,()=>u().map((e,t)=>S(e))),p(()=>_(e,b().subEntries)),e})():(()=>{var e=pe();return E(e,()=>m().map((e,t)=>(()=>{var r=ye(),i=r.firstChild,a=i.firstChild,o=a.firstChild,s=o.nextSibling,c=s.nextSibling.nextSibling;return c.nextSibling,a.$$click=()=>g(e=>e.includes(t)?e.filter(e=>e!==t):[...e,t]),E(a,f(xe,{get expanded(){return h().includes(t)}}),o),E(a,t*n,s),E(a,t*n+n-1,c),E(i,(()=>{var n=d(()=>!!h().includes(t));return()=>n()?(()=>{var t=pe();return E(t,()=>e.map(e=>S(e))),p(()=>_(t,b().subEntries)),t})():null})(),null),p(e=>{var t=b().entry,n=j(b().labelButton,`labelButton`);return t!==e.e&&_(i,e.e=t),n!==e.t&&_(a,e.t=n),e},{e:void 0,t:void 0}),r})())),p(()=>_(e,b().subEntries)),e})():null)]:d(()=>l()===`function`)()?f(Z,{get label(){return(()=>{var e=be(),t=e.firstChild;return e.$$click=x,E(t,()=>a.label),p(()=>_(e,b().refreshValueBtn)),e})()},value:v,defaultExpanded:{}}):[(()=>{var e=ge(),t=e.firstChild;return E(e,()=>a.label,t),e})(),` `,(()=>{var t=_e();return E(t,()=>ue(e())),p(()=>_(t,b().value)),t})()]})()),p(()=>_(t,b().entry)),t})()}var Te=e=>{let{colors:t,font:n,size:r,border:i}=U,{fontFamily:a,lineHeight:o,size:s}=n,c=e?H.bind({target:e}):H;return{entry:c`
      font-family: ${a.mono};
      font-size: ${s.xs};
      line-height: ${o.sm};
      outline: none;
      word-break: break-word;
    `,labelButton:c`
      cursor: pointer;
      color: inherit;
      font: inherit;
      outline: inherit;
      background: transparent;
      border: none;
      padding: 0;
    `,expander:c`
      display: inline-flex;
      align-items: center;
      justify-content: center;
      width: ${r[3]};
      height: ${r[3]};
      padding-left: 3px;
      box-sizing: content-box;
    `,expanderIcon:e=>e?c`
          transform: rotate(90deg);
          transition: transform 0.1s ease;
        `:c`
        transform: rotate(0deg);
        transition: transform 0.1s ease;
      `,expandButton:c`
      display: flex;
      gap: ${r[1]};
      align-items: center;
      cursor: pointer;
      color: inherit;
      font: inherit;
      outline: inherit;
      background: transparent;
      border: none;
      padding: 0;
    `,value:c`
      color: ${t.purple[400]};
    `,compositeComponent:c`
      display: inline-flex;
      align-items: center;
      padding: 1px ${r[1]};
      border-radius: ${i.radius.full};
      border: 1px solid ${t.darkGray[500]};
      background: ${t.darkGray[700]};
      color: ${t.cyan[300]};
      font-style: normal;
      font-weight: ${n.weight.medium};
    `,renderableComponent:c`
      display: inline-flex;
      align-items: center;
      padding: 1px ${r[1]};
      border-radius: ${i.radius.full};
      border: 1px solid ${t.darkGray[500]};
      background: ${t.darkGray[700]};
      color: ${t.teal[300]};
      font-style: normal;
      font-weight: ${n.weight.medium};
    `,rscMetaRow:c`
      display: flex;
      gap: ${r[1]};
      align-items: flex-start;
      margin-left: calc(${r[3]} + ${r[1]});
      margin-top: ${r[.5]};
      flex-wrap: wrap;
    `,rscMetaLabel:c`
      color: ${t.gray[500]};
      font-size: ${s[`2xs`]};
      text-transform: uppercase;
      letter-spacing: 0.06em;
      padding-top: 2px;
    `,rscChipRow:c`
      display: flex;
      gap: ${r[1]};
      flex-wrap: wrap;
    `,rscChip:c`
      display: inline-flex;
      align-items: center;
      gap: ${r[.5]};
      padding: 1px ${r[1]};
      border-radius: ${i.radius.full};
      border: 1px solid ${t.darkGray[500]};
      background: ${t.darkGray[800]};
      color: ${t.gray[200]};
      font-size: ${s[`2xs`]};
      line-height: ${o.xs};
    `,rscChipName:c`
      color: ${t.gray[100]};
    `,rscChipMeta:c`
      color: ${t.gray[400]};
      font-size: ${s[`2xs`]};
    `,subEntries:c`
      margin-left: ${r[2]};
      padding-left: ${r[2]};
      border-left: 2px solid ${t.darkGray[400]};
    `,info:c`
      color: ${t.gray[500]};
      font-size: ${s[`2xs`]};
      padding-left: ${r[1]};
    `,refreshValueBtn:c`
      appearance: none;
      border: 0;
      cursor: pointer;
      background: transparent;
      color: inherit;
      padding: 0;
      font-family: ${a.mono};
      font-size: ${s.xs};
    `}};function Ee(){let[e]=D(Te(o(g)));return e}n([`click`]);var De=e(`<div><div></div><div>/</div><div></div><div>/</div><div>`);function Oe(e){let t=[`s`,`min`,`h`,`d`],n=[e/1e3,e/6e4,e/36e5,e/864e5],r=0;for(let e=1;e<n.length&&!(n[e]<1);e++)r=e;return new Intl.NumberFormat(navigator.language,{compactDisplay:`short`,notation:`compact`,maximumFractionDigits:0}).format(n[r])+t[r]}function Q({match:e,router:t}){let n=G();if(!e)return null;let r=t().looseRoutesById[e.routeId];if(!r.options.loader)return null;let i=Date.now()-e.updatedAt,a=r.options.staleTime??t().options.defaultStaleTime??0,o=r.options.gcTime??t().options.defaultGcTime??1800*1e3;return(()=>{var e=De(),t=e.firstChild,r=t.nextSibling.nextSibling,s=r.nextSibling.nextSibling;return E(t,()=>Oe(i)),E(r,()=>Oe(a)),E(s,()=>Oe(o)),p(()=>_(e,j(n().ageTicker(i>a)))),e})()}var ke=e(`<button type=button>➔`);function Ae({to:e,params:t,search:n,router:r}){let i=G();return(()=>{var a=ke();return a.$$click=i=>{i.stopPropagation(),r().navigate({to:e,params:t,search:n})},c(a,`title`,`Navigate to ${e}`),p(()=>_(a,i().navigateButton)),a})()}n([`click`]);var je=e(`<button><div>TANSTACK</div><div>TanStack Router v1`),Me=e(`<div style=display:flex;align-items:center;width:100%><div style=flex-grow:1;min-width:0>`),Ne=e(`<code> `),$=e(`<code>`),Pe=e(`<div><div role=button><div>`),Fe=e(`<div>`),Ie=e(`<div><ul>`),Le=e(`<div><button><svg xmlns=http://www.w3.org/2000/svg width=10 height=6 fill=none viewBox="0 0 10 6"><path stroke=currentColor stroke-linecap=round stroke-linejoin=round stroke-width=1.667 d="M1 1l4 4 4-4"></path></svg></button><div><div></div><div><div></div></div></div><div><div><div><span>Pathname</span></div><div><code></code></div><div><div><button type=button>Routes</button><button type=button>Matches</button><button type=button>History</button></div><div><div>age / staleTime / gcTime</div></div></div><div>`),Re=e(`<div><span>masked`),ze=e(`<div role=button><div>`),Be=e(`<li><div>`),Ve=e(`<li>This panel displays the most recent 15 navigations.`),He=e(`<div><div><div>Cached Matches</div><div>age / staleTime / gcTime</div></div><div>`),Ue=e(`<div><div>Match Details</div><div><div><div><div></div></div><div><div>ID:</div><div><code></code></div></div><div><div>State:</div><div></div></div><div><div>Last Updated:</div><div></div></div></div></div><div>Explorer</div><div>`),We=e(`<div>Loader Data`),Ge=e(`<div><div><span>Search Params</span></div><div>`),Ke=e(`<span style=margin-left:0.5rem>`),qe=e(`<button type=button aria-label="Copy value to clipboard"style=cursor:pointer>`),Je=15;function Ye(e){let{className:t,...n}=e,r=G();return(()=>{var e=je(),a=e.firstChild,o=a.nextSibling;return b(e,i(n,{get class(){return j(r().logo,t?t():``)}}),!1,!0),p(e=>{var t=r().tanstackLogo,n=r().routerLogo;return t!==e.e&&_(a,e.e=t),n!==e.t&&_(o,e.t=n),e},{e:void 0,t:void 0}),e})()}function Xe(e){return(()=>{var t=Me(),n=t.firstChild;return E(t,()=>e.left,n),E(n,()=>e.children),E(t,()=>e.right,null),p(()=>_(t,e.class)),t})()}function Ze({routerState:e,pendingMatches:t,router:n,route:r,isRoot:i,activeId:o,setActiveId:s}){let u=G(),m=O(()=>t().length?t():e().matches),h=O(()=>e().matches.find(e=>e.routeId===r.id)),g=O(()=>{try{if(h()?.params){let e=h()?.params,t=r.path||k(r.id);if(t.startsWith(`$`)){let n=t.slice(1);if(e[n])return`(${e[n]})`}}return``}catch{return``}}),v=O(()=>{if(i||!r.path)return;let e=Object.assign({},...m().map(e=>e.params)),t=l({path:r.fullPath,params:e,decoder:n().pathParamsDecoder});return t.isMissingParams?void 0:t.interpolatedPath});return(()=>{var l=Pe(),y=l.firstChild,b=y.firstChild;return y.$$click=()=>{h()&&s(o()===r.id?``:r.id)},E(y,f(Xe,{get class(){return j(u().routesRow(!!h()))},get left(){return f(C,{get when(){return v()},children:e=>f(Ae,{get to(){return e()},router:n})})},get right(){return f(Q,{get match(){return h()},router:n})},get children(){return[(()=>{var e=Ne(),t=e.firstChild;return E(e,()=>i?a:r.path||k(r.id),t),p(()=>_(e,u().code)),e})(),(()=>{var e=$();return E(e,g),p(()=>_(e,u().routeParamInfo)),e})()]}}),null),E(l,(()=>{var a=d(()=>!!r.children?.length);return()=>a()?(()=>{var a=Fe();return E(a,()=>[...r.children].sort((e,t)=>e.rank-t.rank).map(r=>f(Ze,{routerState:e,pendingMatches:t,router:n,route:r,activeId:o,setActiveId:s}))),p(()=>_(a,u().nestedRouteRow(!!i))),a})():null})(),null),p(e=>{var t=`Open match details for ${r.id}`,n=j(u().routesRowContainer(r.id===o(),!!h())),i=j(u().matchIndicator(te(m(),r)));return t!==e.e&&c(y,`aria-label`,e.e=t),n!==e.t&&_(y,e.t=n),i!==e.a&&_(b,e.a=i),e},{e:void 0,t:void 0,a:void 0}),l})()}var Qe=function({...e}){let{isOpen:n=!0,setIsOpen:o,handleDragStart:l,router:u,routerState:m,shadowDOMTarget:g,...x}=e,{onCloseClick:C}=s(),k=G(),{className:A,style:M,...N}=x,[P,F]=q(`tanstackRouterDevtoolsActiveTab`,`routes`),[I,L]=q(`tanstackRouterDevtoolsActiveRouteId`,``),[R,z]=D([]),[B,V]=D(!1),H,U;if(`subscribe`in u().stores.pendingMatches){let[e,t]=D([]);H=e;let[n,i]=D([]);U=n,T(()=>{let e=u().stores.pendingMatches;t(e.get());let n=e.subscribe(()=>{t(e.get())});r(()=>n.unsubscribe())}),T(()=>{let e=u().stores.cachedMatches;i(e.get());let t=e.subscribe(()=>{i(e.get())});r(()=>t.unsubscribe())})}else H=()=>u().stores.pendingMatches.get(),U=()=>u().stores.cachedMatches.get();T(()=>{let e=m().matches,t=e[e.length-1];if(!t)return;let n=y(()=>R()),r=n[0],i=r&&r.pathname===t.pathname&&JSON.stringify(r.search??{})===JSON.stringify(t.search??{});(!r||!i)&&(n.length>=Je&&V(!0),z(e=>{let n=[t,...e];return n.splice(Je),n}))});let W=O(()=>[...H(),...m().matches,...U()].find(e=>e.routeId===I()||e.id===I())),K=O(()=>t(m().location.search)),J=O(()=>({...u(),state:m()})),te=O(()=>Object.fromEntries(de(Object.keys(J()),[`state`,`routesById`,`routesByPath`,`options`,`manifest`].map(e=>t=>t!==e)).map(e=>[e,J()[e]]).filter(e=>typeof e[1]!=`function`&&![`stores`,`basepath`,`injectedHtml`,`subscribers`,`latestLoadPromise`,`navigateTimeout`,`resetNextScroll`,`tempLocationKey`,`latestLocation`,`routeTree`,`history`].includes(e[0])))),ne=O(()=>W()?.loaderData),re=O(()=>W()),ie=O(()=>m().location.search);return(()=>{var e=Le(),t=e.firstChild,n=t.firstChild,r=t.nextSibling,s=r.firstChild,g=s.nextSibling,y=g.firstChild,x=r.nextSibling,T=x.firstChild,D=T.firstChild;D.firstChild;var O=D.nextSibling,z=O.firstChild,V=O.nextSibling,G=V.firstChild,q=G.firstChild,J=q.nextSibling,Y=J.nextSibling,ae=G.nextSibling,X=V.nextSibling;return b(e,i({get class(){return j(k().devtoolsPanel,`TanStackRouterDevtoolsPanel`,A?A():``)},get style(){return M?M():``}},N),!1,!0),E(e,l?(()=>{var e=Fe();return v(e,`mousedown`,l,!0),p(()=>_(e,k().dragHandle)),e})():null,t),t.$$click=e=>{o&&o(!1),C(e)},E(s,f(Ye,{"aria-hidden":!0,onClick:e=>{o&&o(!1),C(e)}})),E(y,f(Z,{label:`Router`,value:te,defaultExpanded:{state:{},context:{},options:{}},filterSubEntries:e=>e.filter(e=>typeof e.value()!=`function`)})),E(D,(()=>{var e=d(()=>!!m().location.maskedLocation);return()=>e()?(()=>{var e=Re(),t=e.firstChild;return p(n=>{var r=k().maskedBadgeContainer,i=k().maskedBadge;return r!==n.e&&_(e,n.e=r),i!==n.t&&_(t,n.t=i),n},{e:void 0,t:void 0}),e})():null})(),null),E(z,()=>m().location.pathname),E(O,(()=>{var e=d(()=>!!m().location.maskedLocation);return()=>e()?(()=>{var e=$();return E(e,()=>m().location.maskedLocation?.pathname),p(()=>_(e,k().maskedLocation)),e})():null})(),null),q.$$click=()=>{F(`routes`)},J.$$click=()=>{F(`matches`)},Y.$$click=()=>{F(`history`)},E(X,f(S,{get children(){return[f(h,{get when(){return P()===`routes`},get children(){return f(Ze,{routerState:m,pendingMatches:H,router:u,get route(){return u().routeTree},isRoot:!0,activeId:I,setActiveId:L})}}),f(h,{get when(){return P()===`matches`},get children(){var e=Fe();return E(e,()=>(H().length?H():m().matches).map((e,t)=>(()=>{var t=ze(),n=t.firstChild;return t.$$click=()=>L(I()===e.id?``:e.id),E(t,f(Xe,{get left(){return f(Ae,{get to(){return e.pathname},get params(){return e.params},get search(){return e.search},router:u})},get right(){return f(Q,{match:e,router:u})},get children(){var t=$();return E(t,()=>`${e.routeId===`__root__`?a:e.pathname}`),p(()=>_(t,k().matchID)),t}}),null),p(r=>{var i=`Open match details for ${e.id}`,a=j(k().matchRow(e===W())),o=j(k().matchIndicator(ee(e)));return i!==r.e&&c(t,`aria-label`,r.e=i),a!==r.t&&_(t,r.t=a),o!==r.a&&_(n,r.a=o),r},{e:void 0,t:void 0,a:void 0}),t})())),e}}),f(h,{get when(){return P()===`history`},get children(){var e=Ie(),t=e.firstChild;return E(t,f(w,{get each(){return R()},children:(e,t)=>(()=>{var n=Be(),r=n.firstChild;return E(n,f(Xe,{get left(){return f(Ae,{get to(){return e.pathname},get params(){return e.params},get search(){return e.search},router:u})},get right(){return f(Q,{match:e,router:u})},get children(){var t=$();return E(t,()=>`${e.routeId===`__root__`?a:e.pathname}`),p(()=>_(t,k().matchID)),t}}),null),p(i=>{var a=j(k().matchRow(e===W())),o=j(k().matchIndicator(t()===0?`green`:`gray`));return a!==i.e&&_(n,i.e=a),o!==i.t&&_(r,i.t=o),i},{e:void 0,t:void 0}),n})()}),null),E(t,(()=>{var e=d(()=>!!B());return()=>e()?(()=>{var e=Ve();return p(()=>_(e,k().historyOverflowContainer)),e})():null})(),null),e}})]}})),E(x,(()=>{var e=d(()=>!!U().length);return()=>e()?(()=>{var e=He(),t=e.firstChild,n=t.firstChild.nextSibling,r=t.nextSibling;return E(r,()=>U().map(e=>(()=>{var t=ze(),n=t.firstChild;return t.$$click=()=>L(I()===e.id?``:e.id),E(t,f(Xe,{get left(){return f(Ae,{get to(){return e.pathname},get params(){return e.params},get search(){return e.search},router:u})},get right(){return f(Q,{match:e,router:u})},get children(){var t=$();return E(t,()=>`${e.id}`),p(()=>_(t,k().matchID)),t}}),null),p(r=>{var i=`Open match details for ${e.id}`,a=j(k().matchRow(e===W())),o=j(k().matchIndicator(ee(e)));return i!==r.e&&c(t,`aria-label`,r.e=i),a!==r.t&&_(t,r.t=a),o!==r.a&&_(n,r.a=o),r},{e:void 0,t:void 0,a:void 0}),t})())),p(r=>{var i=k().cachedMatchesContainer,a=k().detailsHeader,o=k().detailsHeaderInfo;return i!==r.e&&_(e,r.e=i),a!==r.t&&_(t,r.t=a),o!==r.a&&_(n,r.a=o),r},{e:void 0,t:void 0,a:void 0}),e})():null})(),null),E(e,(()=>{var e=d(()=>!!(W()&&W()?.status));return()=>e()?(()=>{var e=Ue(),t=e.firstChild,n=t.nextSibling,r=n.firstChild,i=r.firstChild,a=i.firstChild,o=i.nextSibling,s=o.firstChild.nextSibling,c=s.firstChild,l=o.nextSibling,u=l.firstChild.nextSibling,h=l.nextSibling,g=h.firstChild.nextSibling,v=n.nextSibling,y=v.nextSibling;return E(a,(()=>{var e=d(()=>!!(W()?.status===`success`&&W()?.isFetching));return()=>e()?`fetching`:W()?.status})()),E(c,()=>W()?.id),E(u,(()=>{var e=d(()=>!!H().find(e=>e.id===W()?.id));return()=>e()?`Pending`:m().matches.find(e=>e.id===W()?.id)?`Active`:`Cached`})()),E(g,(()=>{var e=d(()=>!!W()?.updatedAt);return()=>e()?new Date(W()?.updatedAt).toLocaleTimeString():`N/A`})()),E(e,(()=>{var e=d(()=>!!ne());return()=>e()?[(()=>{var e=We();return p(()=>_(e,k().detailsHeader)),e})(),(()=>{var e=Fe();return E(e,f(Z,{label:`loaderData`,value:ne,defaultExpanded:{}})),p(()=>_(e,k().detailsContent)),e})()]:null})(),v),E(y,f(Z,{label:`Match`,value:re,defaultExpanded:{}})),p(n=>{var a=k().thirdContainer,c=k().detailsHeader,d=k().matchDetails,f=k().matchStatus(W()?.status,W()?.isFetching),p=k().matchDetailsInfoLabel,m=k().matchDetailsInfo,b=k().matchDetailsInfoLabel,x=k().matchDetailsInfo,S=k().matchDetailsInfoLabel,C=k().matchDetailsInfo,w=k().detailsHeader,T=k().detailsContent;return a!==n.e&&_(e,n.e=a),c!==n.t&&_(t,n.t=c),d!==n.a&&_(r,n.a=d),f!==n.o&&_(i,n.o=f),p!==n.i&&_(o,n.i=p),m!==n.n&&_(s,n.n=m),b!==n.s&&_(l,n.s=b),x!==n.h&&_(u,n.h=x),S!==n.r&&_(h,n.r=S),C!==n.d&&_(g,n.d=C),w!==n.l&&_(v,n.l=w),T!==n.u&&_(y,n.u=T),n},{e:void 0,t:void 0,a:void 0,o:void 0,i:void 0,n:void 0,s:void 0,h:void 0,r:void 0,d:void 0,l:void 0,u:void 0}),e})():null})(),null),E(e,(()=>{var e=d(()=>!!K());return()=>e()?(()=>{var e=Ge(),t=e.firstChild;t.firstChild;var n=t.nextSibling;return E(t,typeof navigator<`u`?(()=>{var e=Ke();return E(e,f($e,{getValue:()=>{let e=m().location.search;return JSON.stringify(e)}})),e})():null,null),E(n,f(Z,{value:ie,get defaultExpanded(){return Object.keys(m().location.search).reduce((e,t)=>(e[t]={},e),{})}})),p(r=>{var i=k().fourthContainer,a=k().detailsHeader,o=k().detailsContent;return i!==r.e&&_(e,r.e=i),a!==r.t&&_(t,r.t=a),o!==r.a&&_(n,r.a=o),r},{e:void 0,t:void 0,a:void 0}),e})():null})(),null),p(e=>{var i=k().panelCloseBtn,a=k().panelCloseBtnIcon,o=k().firstContainer,l=k().row,u=k().routerExplorerContainer,d=k().routerExplorer,f=k().secondContainer,p=k().matchesContainer,m=k().detailsHeader,h=k().detailsContent,v=k().detailsHeader,b=k().routeMatchesToggle,S=P()===`routes`,C=j(k().routeMatchesToggleBtn(P()===`routes`,!0)),w=P()===`matches`,E=j(k().routeMatchesToggleBtn(P()===`matches`,!0)),A=P()===`history`,M=j(k().routeMatchesToggleBtn(P()===`history`,!1)),N=k().detailsHeaderInfo,F=j(k().routesContainer);return i!==e.e&&_(t,e.e=i),a!==e.t&&c(n,`class`,e.t=a),o!==e.a&&_(r,e.a=o),l!==e.o&&_(s,e.o=l),u!==e.i&&_(g,e.i=u),d!==e.n&&_(y,e.n=d),f!==e.s&&_(x,e.s=f),p!==e.h&&_(T,e.h=p),m!==e.r&&_(D,e.r=m),h!==e.d&&_(O,e.d=h),v!==e.l&&_(V,e.l=v),b!==e.u&&_(G,e.u=b),S!==e.c&&(q.disabled=e.c=S),C!==e.w&&_(q,e.w=C),w!==e.m&&(J.disabled=e.m=w),E!==e.f&&_(J,e.f=E),A!==e.y&&(Y.disabled=e.y=A),M!==e.g&&_(Y,e.g=M),N!==e.p&&_(ae,e.p=N),F!==e.b&&_(X,e.b=F),e},{e:void 0,t:void 0,a:void 0,o:void 0,i:void 0,n:void 0,s:void 0,h:void 0,r:void 0,d:void 0,l:void 0,u:void 0,c:void 0,w:void 0,m:void 0,f:void 0,y:void 0,g:void 0,p:void 0,b:void 0}),e})()};function $e({getValue:e}){let[t,n]=D(!1),i=null,a=async()=>{if(typeof navigator>`u`||!navigator.clipboard?.writeText){console.warn(`TanStack Router Devtools: Clipboard API unavailable`);return}try{let t=e();await navigator.clipboard.writeText(t),n(!0),i&&clearTimeout(i),i=setTimeout(()=>n(!1),2500)}catch(e){console.error(`TanStack Router Devtools: Failed to copy`,e)}};return r(()=>{i&&clearTimeout(i)}),(()=>{var e=qe();return e.$$click=a,E(e,()=>t()?`✅`:`📋`),p(()=>c(e,`title`,t()?`Copied!`:`Copy`)),e})()}n([`click`,`mousedown`]);var et=e(`<svg xmlns=http://www.w3.org/2000/svg enable-background="new 0 0 634 633"viewBox="0 0 634 633"><g transform=translate(1)><linearGradient x1=-641.486 x2=-641.486 y1=856.648 y2=855.931 gradientTransform="matrix(633 0 0 -633 406377 542258)"gradientUnits=userSpaceOnUse><stop offset=0 stop-color=#6bdaff></stop><stop offset=0.319 stop-color=#f9ffb5></stop><stop offset=0.706 stop-color=#ffa770></stop><stop offset=1 stop-color=#ff7373></stop></linearGradient><circle cx=316.5 cy=316.5 r=316.5 fill-rule=evenodd clip-rule=evenodd></circle><defs><filter width=454 height=396.9 x=-137.5 y=412 filterUnits=userSpaceOnUse><feColorMatrix values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 1 0"></feColorMatrix></filter></defs><mask width=454 height=396.9 x=-137.5 y=412 maskUnits=userSpaceOnUse><g><circle cx=316.5 cy=316.5 r=316.5 fill=#FFF fill-rule=evenodd clip-rule=evenodd></circle></g></mask><ellipse cx=89.5 cy=610.5 fill=#015064 fill-rule=evenodd stroke=#00CFE2 stroke-width=25 clip-rule=evenodd rx=214.5 ry=186></ellipse><defs><filter width=454 height=396.9 x=316.5 y=412 filterUnits=userSpaceOnUse><feColorMatrix values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 1 0"></feColorMatrix></filter></defs><mask width=454 height=396.9 x=316.5 y=412 maskUnits=userSpaceOnUse><g><circle cx=316.5 cy=316.5 r=316.5 fill=#FFF fill-rule=evenodd clip-rule=evenodd></circle></g></mask><ellipse cx=543.5 cy=610.5 fill=#015064 fill-rule=evenodd stroke=#00CFE2 stroke-width=25 clip-rule=evenodd rx=214.5 ry=186></ellipse><defs><filter width=454 height=396.9 x=-137.5 y=450 filterUnits=userSpaceOnUse><feColorMatrix values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 1 0"></feColorMatrix></filter></defs><mask width=454 height=396.9 x=-137.5 y=450 maskUnits=userSpaceOnUse><g><circle cx=316.5 cy=316.5 r=316.5 fill=#FFF fill-rule=evenodd clip-rule=evenodd></circle></g></mask><ellipse cx=89.5 cy=648.5 fill=#015064 fill-rule=evenodd stroke=#00A8B8 stroke-width=25 clip-rule=evenodd rx=214.5 ry=186></ellipse><defs><filter width=454 height=396.9 x=316.5 y=450 filterUnits=userSpaceOnUse><feColorMatrix values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 1 0"></feColorMatrix></filter></defs><mask width=454 height=396.9 x=316.5 y=450 maskUnits=userSpaceOnUse><g><circle cx=316.5 cy=316.5 r=316.5 fill=#FFF fill-rule=evenodd clip-rule=evenodd></circle></g></mask><ellipse cx=543.5 cy=648.5 fill=#015064 fill-rule=evenodd stroke=#00A8B8 stroke-width=25 clip-rule=evenodd rx=214.5 ry=186></ellipse><defs><filter width=454 height=396.9 x=-137.5 y=486 filterUnits=userSpaceOnUse><feColorMatrix values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 1 0"></feColorMatrix></filter></defs><mask width=454 height=396.9 x=-137.5 y=486 maskUnits=userSpaceOnUse><g><circle cx=316.5 cy=316.5 r=316.5 fill=#FFF fill-rule=evenodd clip-rule=evenodd></circle></g></mask><ellipse cx=89.5 cy=684.5 fill=#015064 fill-rule=evenodd stroke=#007782 stroke-width=25 clip-rule=evenodd rx=214.5 ry=186></ellipse><defs><filter width=454 height=396.9 x=316.5 y=486 filterUnits=userSpaceOnUse><feColorMatrix values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 1 0"></feColorMatrix></filter></defs><mask width=454 height=396.9 x=316.5 y=486 maskUnits=userSpaceOnUse><g><circle cx=316.5 cy=316.5 r=316.5 fill=#FFF fill-rule=evenodd clip-rule=evenodd></circle></g></mask><ellipse cx=543.5 cy=684.5 fill=#015064 fill-rule=evenodd stroke=#007782 stroke-width=25 clip-rule=evenodd rx=214.5 ry=186></ellipse><defs><filter width=176.9 height=129.3 x=272.2 y=308 filterUnits=userSpaceOnUse><feColorMatrix values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 1 0"></feColorMatrix></filter></defs><mask width=176.9 height=129.3 x=272.2 y=308 maskUnits=userSpaceOnUse><g><circle cx=316.5 cy=316.5 r=316.5 fill=#FFF fill-rule=evenodd clip-rule=evenodd></circle></g></mask><g><path fill=none stroke=#000 stroke-linecap=round stroke-linejoin=bevel stroke-width=11 d="M436 403.2l-5 28.6m-140-90.3l-10.9 62m52.8-19.4l-4.3 27.1"></path><linearGradient x1=-645.656 x2=-646.499 y1=854.878 y2=854.788 gradientTransform="matrix(-184.159 -32.4722 11.4608 -64.9973 -128419.844 34938.836)"gradientUnits=userSpaceOnUse><stop offset=0 stop-color=#ee2700></stop><stop offset=1 stop-color=#ff008e></stop></linearGradient><path fill-rule=evenodd d="M344.1 363l97.7 17.2c5.8 2.1 8.2 6.2 7.1 12.1-1 5.9-4.7 9.2-11 9.9l-106-18.7-57.5-59.2c-3.2-4.8-2.9-9.1.8-12.8 3.7-3.7 8.3-4.4 13.7-2.1l55.2 53.6z"clip-rule=evenodd></path><path fill=#D8D8D8 fill-rule=evenodd stroke=#FFF stroke-linecap=round stroke-linejoin=bevel stroke-width=7 d="M428.3 384.5l.9-6.5m-33.9 1.5l.9-6.5m-34 .5l.9-6.1m-38.9-16.1l4.2-3.9m-25.2-16.1l4.2-3.9"clip-rule=evenodd></path></g><defs><filter width=280.6 height=317.4 x=73.2 y=113.9 filterUnits=userSpaceOnUse><feColorMatrix values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 1 0"></feColorMatrix></filter></defs><mask width=280.6 height=317.4 x=73.2 y=113.9 maskUnits=userSpaceOnUse><g><circle cx=316.5 cy=316.5 r=316.5 fill=#FFF fill-rule=evenodd clip-rule=evenodd></circle></g></mask><g><linearGradient x1=-646.8 x2=-646.8 y1=854.844 y2=853.844 gradientTransform="matrix(-100.1751 48.8587 -97.9753 -200.879 19124.773 203538.61)"gradientUnits=userSpaceOnUse><stop offset=0 stop-color=#a17500></stop><stop offset=1 stop-color=#5d2100></stop></linearGradient><path fill-rule=evenodd d="M192.3 203c8.1 37.3 14 73.6 17.8 109.1 3.8 35.4 2.8 75.2-2.9 119.2l61.2-16.7c-15.6-59-25.2-97.9-28.6-116.6-3.4-18.7-10.8-51.8-22.2-99.6l-25.3 4.6"clip-rule=evenodd></path><linearGradient x1=-635.467 x2=-635.467 y1=852.115 y2=851.115 gradientTransform="matrix(92.6873 4.8575 2.0257 -38.6535 57323.695 36176.047)"gradientUnits=userSpaceOnUse><stop offset=0 stop-color=#2f8a00></stop><stop offset=1 stop-color=#90ff57></stop></linearGradient><path fill-rule=evenodd stroke=#2F8A00 stroke-width=13 d="M195 183.9s-12.6-22.1-36.5-29.9c-15.9-5.2-34.4-1.5-55.5 11.1 15.9 14.3 29.5 22.6 40.7 24.9 16.8 3.6 51.3-6.1 51.3-6.1z"clip-rule=evenodd></path><linearGradient x1=-636.573 x2=-636.573 y1=855.444 y2=854.444 gradientTransform="matrix(109.9945 5.7646 6.3597 -121.3507 64719.133 107659.336)"gradientUnits=userSpaceOnUse><stop offset=0 stop-color=#2f8a00></stop><stop offset=1 stop-color=#90ff57></stop></linearGradient><path fill-rule=evenodd stroke=#2F8A00 stroke-width=13 d="M194.9 184.5s-47.5-8.5-83.2 15.7c-23.8 16.2-34.3 49.3-31.6 99.3 30.3-27.8 52.1-48.5 65.2-61.9 19.8-20 49.6-53.1 49.6-53.1z"clip-rule=evenodd></path><linearGradient x1=-632.145 x2=-632.145 y1=854.174 y2=853.174 gradientTransform="matrix(62.9558 3.2994 3.5021 -66.8246 37035.367 59284.227)"gradientUnits=userSpaceOnUse><stop offset=0 stop-color=#2f8a00></stop><stop offset=1 stop-color=#90ff57></stop></linearGradient><path fill-rule=evenodd stroke=#2F8A00 stroke-width=13 d="M195 183.9c-.8-21.9 6-38 20.6-48.2 14.6-10.2 29.8-15.3 45.5-15.3-6.1 21.4-14.5 35.8-25.2 43.4-10.7 7.5-24.4 14.2-40.9 20.1z"clip-rule=evenodd></path><linearGradient x1=-638.224 x2=-638.224 y1=853.801 y2=852.801 gradientTransform="matrix(152.4666 7.9904 3.0934 -59.0251 94939.86 55646.855)"gradientUnits=userSpaceOnUse><stop offset=0 stop-color=#2f8a00></stop><stop offset=1 stop-color=#90ff57></stop></linearGradient><path fill-rule=evenodd stroke=#2F8A00 stroke-width=13 d="M194.9 184.5c31.9-30 64.1-39.7 96.7-29 32.6 10.7 50.8 30.4 54.6 59.1-35.2-5.5-60.4-9.6-75.8-12.1-15.3-2.6-40.5-8.6-75.5-18z"clip-rule=evenodd></path><linearGradient x1=-637.723 x2=-637.723 y1=855.103 y2=854.103 gradientTransform="matrix(136.467 7.1519 5.2165 -99.5377 82830.875 89859.578)"gradientUnits=userSpaceOnUse><stop offset=0 stop-color=#2f8a00></stop><stop offset=1 stop-color=#90ff57></stop></linearGradient><path fill-rule=evenodd stroke=#2F8A00 stroke-width=13 d="M194.9 184.5c35.8-7.6 65.6-.2 89.2 22 23.6 22.2 37.7 49 42.3 80.3-39.8-9.7-68.3-23.8-85.5-42.4-17.2-18.5-32.5-38.5-46-59.9z"clip-rule=evenodd></path><linearGradient x1=-631.79 x2=-631.79 y1=855.872 y2=854.872 gradientTransform="matrix(60.8683 3.19 8.7771 -167.4773 31110.818 145537.61)"gradientUnits=userSpaceOnUse><stop offset=0 stop-color=#2f8a00></stop><stop offset=1 stop-color=#90ff57></stop></linearGradient><path fill-rule=evenodd stroke=#2F8A00 stroke-width=13 d="M194.9 184.5c-33.6 13.8-53.6 35.7-60.1 65.6-6.5 29.9-3.6 63.1 8.7 99.6 27.4-40.3 43.2-69.6 47.4-88 4.2-18.3 5.5-44.1 4-77.2z"clip-rule=evenodd></path><path fill=none stroke=#2F8A00 stroke-linecap=round stroke-width=8 d="M196.5 182.3c-14.8 21.6-25.1 41.4-30.8 59.4-5.7 18-9.4 33-11.1 45.1"></path><path fill=none stroke=#2F8A00 stroke-linecap=round stroke-width=8 d="M194.8 185.7c-24.4 1.7-43.8 9-58.1 21.8-14.3 12.8-24.7 25.4-31.3 37.8m99.1-68.9c29.7-6.7 52-8.4 67-5 15 3.4 26.9 8.7 35.8 15.9m-110.8-5.9c20.3 9.9 38.2 20.5 53.9 31.9 15.7 11.4 27.4 22.1 35.1 32"></path></g><defs><filter width=532 height=633 x=50.5 y=399 filterUnits=userSpaceOnUse><feColorMatrix values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 1 0"></feColorMatrix></filter></defs><mask width=532 height=633 x=50.5 y=399 maskUnits=userSpaceOnUse><g><circle cx=316.5 cy=316.5 r=316.5 fill=#FFF fill-rule=evenodd clip-rule=evenodd></circle></g></mask><linearGradient x1=-641.104 x2=-641.278 y1=856.577 y2=856.183 gradientTransform="matrix(532 0 0 -633 341484.5 542657)"gradientUnits=userSpaceOnUse><stop offset=0 stop-color=#fff400></stop><stop offset=1 stop-color=#3c8700></stop></linearGradient><ellipse cx=316.5 cy=715.5 fill-rule=evenodd clip-rule=evenodd rx=266 ry=316.5></ellipse><defs><filter width=288 height=283 x=391 y=-24 filterUnits=userSpaceOnUse><feColorMatrix values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 1 0"></feColorMatrix></filter></defs><mask width=288 height=283 x=391 y=-24 maskUnits=userSpaceOnUse><g><circle cx=316.5 cy=316.5 r=316.5 fill=#FFF fill-rule=evenodd clip-rule=evenodd></circle></g></mask><g><g transform="translate(397 -24)"><linearGradient x1=-1036.672 x2=-1036.672 y1=880.018 y2=879.018 gradientTransform="matrix(227 0 0 -227 235493 199764)"gradientUnits=userSpaceOnUse><stop offset=0 stop-color=#ffdf00></stop><stop offset=1 stop-color=#ff9d00></stop></linearGradient><circle cx=168.5 cy=113.5 r=113.5 fill-rule=evenodd clip-rule=evenodd></circle><linearGradient x1=-1017.329 x2=-1018.602 y1=658.003 y2=657.998 gradientTransform="matrix(30 0 0 -1 30558 771)"gradientUnits=userSpaceOnUse><stop offset=0 stop-color=#ffa400></stop><stop offset=1 stop-color=#ff5e00></stop></linearGradient><path fill=none stroke-linecap=round stroke-linejoin=bevel stroke-width=12 d="M30 113H0"></path><linearGradient x1=-1014.501 x2=-1015.774 y1=839.985 y2=839.935 gradientTransform="matrix(26.5 0 0 -5.5 26925 4696.5)"gradientUnits=userSpaceOnUse><stop offset=0 stop-color=#ffa400></stop><stop offset=1 stop-color=#ff5e00></stop></linearGradient><path fill=none stroke-linecap=round stroke-linejoin=bevel stroke-width=12 d="M33.5 79.5L7 74"></path><linearGradient x1=-1016.59 x2=-1017.862 y1=852.671 y2=852.595 gradientTransform="matrix(29 0 0 -8 29523 6971)"gradientUnits=userSpaceOnUse><stop offset=0 stop-color=#ffa400></stop><stop offset=1 stop-color=#ff5e00></stop></linearGradient><path fill=none stroke-linecap=round stroke-linejoin=bevel stroke-width=12 d="M34 146l-29 8"></path><linearGradient x1=-1011.984 x2=-1013.257 y1=863.523 y2=863.229 gradientTransform="matrix(24 0 0 -13 24339 11407)"gradientUnits=userSpaceOnUse><stop offset=0 stop-color=#ffa400></stop><stop offset=1 stop-color=#ff5e00></stop></linearGradient><path fill=none stroke-linecap=round stroke-linejoin=bevel stroke-width=12 d="M45 177l-24 13"></path><linearGradient x1=-1006.673 x2=-1007.946 y1=869.279 y2=868.376 gradientTransform="matrix(20 0 0 -19 20205 16720)"gradientUnits=userSpaceOnUse><stop offset=0 stop-color=#ffa400></stop><stop offset=1 stop-color=#ff5e00></stop></linearGradient><path fill=none stroke-linecap=round stroke-linejoin=bevel stroke-width=12 d="M67 204l-20 19"></path><linearGradient x1=-992.85 x2=-993.317 y1=871.258 y2=870.258 gradientTransform="matrix(13.8339 0 0 -22.8467 13825.796 20131.938)"gradientUnits=userSpaceOnUse><stop offset=0 stop-color=#ffa400></stop><stop offset=1 stop-color=#ff5e00></stop></linearGradient><path fill=none stroke-linecap=round stroke-linejoin=bevel stroke-width=12 d="M94.4 227l-13.8 22.8"></path><linearGradient x1=-953.835 x2=-953.965 y1=871.9 y2=870.9 gradientTransform="matrix(7.5 0 0 -24.5 7278 21605)"gradientUnits=userSpaceOnUse><stop offset=0 stop-color=#ffa400></stop><stop offset=1 stop-color=#ff5e00></stop></linearGradient><path fill=none stroke-linecap=round stroke-linejoin=bevel stroke-width=12 d="M127.5 243.5L120 268"></path><linearGradient x1=244.504 x2=244.496 y1=871.898 y2=870.898 gradientTransform="matrix(.5 0 0 -24.5 45.5 21614)"gradientUnits=userSpaceOnUse><stop offset=0 stop-color=#ffa400></stop><stop offset=1 stop-color=#ff5e00></stop></linearGradient><path fill=none stroke-linecap=round stroke-linejoin=bevel stroke-width=12 d="M167.5 252.5l.5 24.5">`);function tt(){let e=u();return(()=>{var t=et(),n=t.firstChild.firstChild,r=n.nextSibling,i=r.nextSibling,a=i.firstChild,o=i.nextSibling,s=o.firstChild,l=o.nextSibling,u=l.nextSibling,d=u.firstChild,f=u.nextSibling,p=f.firstChild,m=f.nextSibling,h=m.nextSibling,g=h.firstChild,_=h.nextSibling,v=_.firstChild,y=_.nextSibling,b=y.nextSibling,x=b.firstChild,S=b.nextSibling,C=S.firstChild,w=S.nextSibling,T=w.nextSibling,E=T.firstChild,D=T.nextSibling,O=D.firstChild,k=D.nextSibling,A=k.nextSibling,j=A.firstChild,M=A.nextSibling,N=M.firstChild,P=M.nextSibling,F=P.nextSibling,I=F.firstChild,L=F.nextSibling,R=L.firstChild,z=L.nextSibling,B=z.firstChild.nextSibling,V=B.nextSibling,H=z.nextSibling,U=H.firstChild,W=H.nextSibling,G=W.firstChild,K=W.nextSibling,q=K.firstChild,J=q.nextSibling,ee=J.nextSibling,te=ee.nextSibling,ne=te.nextSibling,re=ne.nextSibling,ie=re.nextSibling,Y=ie.nextSibling,ae=Y.nextSibling,X=ae.nextSibling,oe=X.nextSibling,se=oe.nextSibling,ce=se.nextSibling,le=ce.nextSibling,ue=K.nextSibling,de=ue.firstChild,fe=ue.nextSibling,pe=fe.firstChild,me=fe.nextSibling,he=me.nextSibling,ge=he.nextSibling,_e=ge.firstChild,ve=ge.nextSibling,ye=ve.firstChild,be=ve.nextSibling,xe=be.firstChild.firstChild,Se=xe.nextSibling,Ce=Se.nextSibling,we=Ce.nextSibling,Z=we.nextSibling,Te=Z.nextSibling,Ee=Te.nextSibling,De=Ee.nextSibling,Oe=De.nextSibling,Q=Oe.nextSibling,ke=Q.nextSibling,Ae=ke.nextSibling,je=Ae.nextSibling,Me=je.nextSibling,Ne=Me.nextSibling,$=Ne.nextSibling,Pe=$.nextSibling,Fe=Pe.nextSibling;return c(n,`id`,`a-${e}`),c(r,`fill`,`url(#a-${e})`),c(a,`id`,`b-${e}`),c(o,`id`,`c-${e}`),c(s,`filter`,`url(#b-${e})`),c(l,`mask`,`url(#c-${e})`),c(d,`id`,`d-${e}`),c(f,`id`,`e-${e}`),c(p,`filter`,`url(#d-${e})`),c(m,`mask`,`url(#e-${e})`),c(g,`id`,`f-${e}`),c(_,`id`,`g-${e}`),c(v,`filter`,`url(#f-${e})`),c(y,`mask`,`url(#g-${e})`),c(x,`id`,`h-${e}`),c(S,`id`,`i-${e}`),c(C,`filter`,`url(#h-${e})`),c(w,`mask`,`url(#i-${e})`),c(E,`id`,`j-${e}`),c(D,`id`,`k-${e}`),c(O,`filter`,`url(#j-${e})`),c(k,`mask`,`url(#k-${e})`),c(j,`id`,`l-${e}`),c(M,`id`,`m-${e}`),c(N,`filter`,`url(#l-${e})`),c(P,`mask`,`url(#m-${e})`),c(I,`id`,`n-${e}`),c(L,`id`,`o-${e}`),c(R,`filter`,`url(#n-${e})`),c(z,`mask`,`url(#o-${e})`),c(B,`id`,`p-${e}`),c(V,`fill`,`url(#p-${e})`),c(U,`id`,`q-${e}`),c(W,`id`,`r-${e}`),c(G,`filter`,`url(#q-${e})`),c(K,`mask`,`url(#r-${e})`),c(q,`id`,`s-${e}`),c(J,`fill`,`url(#s-${e})`),c(ee,`id`,`t-${e}`),c(te,`fill`,`url(#t-${e})`),c(ne,`id`,`u-${e}`),c(re,`fill`,`url(#u-${e})`),c(ie,`id`,`v-${e}`),c(Y,`fill`,`url(#v-${e})`),c(ae,`id`,`w-${e}`),c(X,`fill`,`url(#w-${e})`),c(oe,`id`,`x-${e}`),c(se,`fill`,`url(#x-${e})`),c(ce,`id`,`y-${e}`),c(le,`fill`,`url(#y-${e})`),c(de,`id`,`z-${e}`),c(fe,`id`,`A-${e}`),c(pe,`filter`,`url(#z-${e})`),c(me,`id`,`B-${e}`),c(he,`fill`,`url(#B-${e})`),c(he,`mask`,`url(#A-${e})`),c(_e,`id`,`C-${e}`),c(ve,`id`,`D-${e}`),c(ye,`filter`,`url(#C-${e})`),c(be,`mask`,`url(#D-${e})`),c(xe,`id`,`E-${e}`),c(Se,`fill`,`url(#E-${e})`),c(Ce,`id`,`F-${e}`),c(we,`stroke`,`url(#F-${e})`),c(Z,`id`,`G-${e}`),c(Te,`stroke`,`url(#G-${e})`),c(Ee,`id`,`H-${e}`),c(De,`stroke`,`url(#H-${e})`),c(Oe,`id`,`I-${e}`),c(Q,`stroke`,`url(#I-${e})`),c(ke,`id`,`J-${e}`),c(Ae,`stroke`,`url(#J-${e})`),c(je,`id`,`K-${e}`),c(Me,`stroke`,`url(#K-${e})`),c(Ne,`id`,`L-${e}`),c($,`stroke`,`url(#L-${e})`),c(Pe,`id`,`M-${e}`),c(Fe,`stroke`,`url(#M-${e})`),t})()}var nt=e(`<button type=button><div><div></div><div></div></div><div>-</div><div>TanStack Router`);function rt({initialIsOpen:e,panelProps:t={},closeButtonProps:n={},toggleButtonProps:r={},position:a=`bottom-left`,containerElement:o=`footer`,router:s,routerState:c,shadowDOMTarget:l}){let[u,d]=D(),h,[g,v]=q(`tanstackRouterDevtoolsOpen`,e),[y,S]=q(`tanstackRouterDevtoolsHeight`,null),[C,w]=D(!1),[k,A]=D(!1),M=ne(),N=G(),P=(e,t)=>{if(t.button!==0)return;A(!0);let n={originalHeight:e?.getBoundingClientRect().height??0,pageY:t.pageY},r=e=>{let t=n.pageY-e.pageY,r=n.originalHeight+t;S(r),v(!(r<70))},i=()=>{A(!1),document.removeEventListener(`mousemove`,r),document.removeEventListener(`mouseUp`,i)};document.addEventListener(`mousemove`,r),document.addEventListener(`mouseup`,i)};g(),T(()=>{w(g()??!1)}),T(()=>{if(C()){let e=u()?.parentElement?.style.paddingBottom,t=()=>{let e=h.getBoundingClientRect().height;u()?.parentElement&&d(t=>(t?.parentElement&&(t.parentElement.style.paddingBottom=`${e}px`),t))};if(t(),typeof window<`u`)return window.addEventListener(`resize`,t),()=>{window.removeEventListener(`resize`,t),u()?.parentElement&&typeof e==`string`&&d(t=>(t.parentElement.style.paddingBottom=e,t))}}else u()?.parentElement&&d(e=>(e?.parentElement&&e.parentElement.removeAttribute(`style`),e))}),T(()=>{if(u()){let e=u(),t=getComputedStyle(e).fontSize;e?.style.setProperty(`--tsrd-font-size`,t)}});let{style:F={},...I}=t,{style:L={},onClick:R,...z}=n,{onClick:B,class:V,...H}=r;if(!M())return null;let U=O(()=>y()??500),W=O(()=>j(N().devtoolsPanelContainer,N().devtoolsPanelContainerVisibility(!!g()),N().devtoolsPanelContainerResizing(k),N().devtoolsPanelContainerAnimation(C(),U()+16))),K=O(()=>({height:`${U()}px`,...F||{}})),J=O(()=>j(N().mainCloseBtn,N().mainCloseBtnPosition(a),N().mainCloseBtnAnimation(!!g()),V));return f(x,{component:o,ref:d,class:`TanStackRouterDevtools`,get children(){return[f(m.Provider,{value:{onCloseClick:R??(()=>{})},get children(){return f(Qe,i({ref(e){var t=h;typeof t==`function`?t(e):h=e}},I,{router:s,routerState:c,className:W,style:K,get isOpen(){return C()},setIsOpen:v,handleDragStart:e=>P(h,e),shadowDOMTarget:l}))}}),(()=>{var e=nt(),t=e.firstChild,n=t.firstChild,r=n.nextSibling,a=t.nextSibling,o=a.nextSibling;return b(e,i(H,{"aria-label":`Open TanStack Router Devtools`,onClick:e=>{v(!0),B&&B(e)},get class(){return J()}}),!1,!0),E(n,f(tt,{})),E(r,f(tt,{})),p(e=>{var i=N().mainCloseBtnIconContainer,s=N().mainCloseBtnIconOuter,c=N().mainCloseBtnIconInner,l=N().mainCloseBtnDivider,u=N().routerLogoCloseButton;return i!==e.e&&_(t,e.e=i),s!==e.t&&_(n,e.t=s),c!==e.a&&_(r,e.a=c),l!==e.o&&_(a,e.o=l),u!==e.i&&_(o,e.i=u),e},{e:void 0,t:void 0,a:void 0,o:void 0,i:void 0}),e})()]}})}export{rt as FloatingTanStackRouterDevtools,rt as default};