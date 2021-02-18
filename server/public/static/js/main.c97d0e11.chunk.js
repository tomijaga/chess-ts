(this["webpackJsonpchess-ts"]=this["webpackJsonpchess-ts"]||[]).push([[0],{225:function(e,t,c){},226:function(e,t,c){},227:function(e,t,c){},294:function(e,t){},296:function(e,t){},307:function(e,t){},309:function(e,t){},335:function(e,t){},337:function(e,t){},338:function(e,t){},343:function(e,t){},345:function(e,t){},364:function(e,t){},376:function(e,t){},379:function(e,t){},420:function(e,t,c){"use strict";c.r(t);var a,n,i=c(0),s=c(1),l=c.n(s),o=c(217),h=c.n(o),r=(c(225),c(5)),v=(c(226),c(53)),j=function(e){var t=e.turn_to_play,c=e.player_side,a=e.onTimeUp,n=e.children,l=Object(s.useState)(600),o=Object(r.a)(l,2),h=o[0],v=(o[1],Object(s.useState)(h)),j=Object(r.a)(v,2),u=j[0],b=j[1],d=Object(s.useState)(h),g=Object(r.a)(d,2),O=g[0],p=g[1];Object(s.useEffect)((function(){var e=setInterval((function(){if(""!==c){var n=function(t){return function(c){return c<=1&&(clearInterval(e),a(t)),c-1}};"white"===t?b(n("white")):"black"===t&&p(n("black"))}}),1e3);return function(){clearInterval(e)}}),[t,c]);var f=function(e){return Object(i.jsx)("div",{style:{width:"100px",background:"rgba(0,0,0, 0.2)",borderRadius:"5px",fontSize:"20px",padding:"5px"},children:e})},m=function(e){var t=e%60;return(e/60|0)%60+":"+(t<=0?"0"+t:t)};return Object(i.jsx)("div",{style:{display:"flex",flexDirection:"column",alignItems:"flex-end"},children:"white"===c?Object(i.jsxs)(i.Fragment,{children:[f(m(O)),n,f(m(u))]}):Object(i.jsxs)(i.Fragment,{children:[f(m(u)),n,f(m(O))]})})},u=c(3),b=c(218),d=(c(227),Object(s.createContext)({})),g=c(32),O=function(e){return Object(i.jsx)("svg",Object(u.a)(Object(u.a)({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 40 75",height:70,width:70},e),{},{children:Object(i.jsx)("path",{d:"M10 10.47a8.675 8.675 0 011.498-3.683 7.575 7.575 0 002.948 4.046 1 1 0 101.108-1.665 6.506 6.506 0 01-2.517-4.704 64.574 64.574 0 013.208-4.11.997.997 0 011.51.001C21.665 4.989 24 8.771 24 10.47A6.436 6.436 0 0120.688 16h-7.376A6.436 6.436 0 0110 10.47zM8 20v-1c0-.552.448-1 1-1h16c.552 0 1 .448 1 1v1c0 .552-.448 1-1 1H9c-.552 0-1-.448-1-1zm4 3h10v11H12V23zM8 37c0-.552.448-1 1-1h16c.552 0 1 .448 1 1v2c0 .552-.448 1-1 1H9c-.552 0-1-.448-1-1v-2zm-4.933 9.475a2 2 0 011.156-2.615L9.183 42h15.635l4.96 1.86a2 2 0 011.155 2.615L30.323 48H3.677l-.61-1.525zM34 55c0 .552-.448 1-1 1h-1v-2a1 1 0 00-2 0v2h-2v-2a1 1 0 00-2 0v2h-2v-2a1 1 0 00-2 0v2h-2v-2a1 1 0 00-2 0v2h-2v-2a1 1 0 00-2 0v2h-2v-2a1 1 0 00-2 0v2H8v-2a1 1 0 00-2 0v2H4v-2a1 1 0 00-2 0v2H1c-.552 0-1-.448-1-1v-4c0-.552.448-1 1-1h32c.552 0 1 .448 1 1v4z",fillRule:"nonzero",fill:"currentColor"})}))},p=function(e){return Object(i.jsx)("svg",Object(u.a)(Object(u.a)({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 40 75",height:70,width:70},e),{},{children:Object(i.jsxs)("g",{fillRule:"nonzero",fill:"currentColor",children:[Object(i.jsx)("path",{d:"M10.072 10.914a.837.837 0 01.018-.717c.155-.293.43-.505.753-.579L17 8.033l6.157 1.585c.324.074.598.286.753.58.113.223.12.487.018.716L22.163 15H11.837l-1.765-4.086zM8 18c0-.552.448-1 1-1h16a1 1 0 010 2H9c-.552 0-1-.448-1-1zm4 3h10v17H12V21zM9 40h16a1 1 0 010 2H9a1 1 0 010-2zm-5.933 8.475a2 2 0 011.156-2.615L9.183 44h15.635l4.96 1.86a2 2 0 011.155 2.615L30.323 50H3.677l-.61-1.525zM34 57c0 .552-.448 1-1 1h-1v-2a1 1 0 00-2 0v2h-2v-2a1 1 0 00-2 0v2h-2v-2a1 1 0 00-2 0v2h-2v-2a1 1 0 00-2 0v2h-2v-2a1 1 0 00-2 0v2h-2v-2a1 1 0 00-2 0v2H8v-2a1 1 0 00-2 0v2H4v-2a1 1 0 00-2 0v2H1c-.552 0-1-.448-1-1v-4c0-.552.448-1 1-1h32c.552 0 1 .448 1 1v4zM16 7.2V1a1 1 0 012 0v6.2L17 7l-1 .2z"}),Object(i.jsx)("path",{d:"M19 4h-4a1 1 0 010-2h4a1 1 0 010 2z"})]})}))},f=function(e){return Object(i.jsx)("svg",Object(u.a)(Object(u.a)({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 40 75",height:70,width:70},e),{},{children:Object(i.jsx)("path",{d:"M9 41.001c-.552 0-1-.447-1-1v-2c0-.552.448-.999 1-1h16c.552.001 1 .448 1 1v2c0 .553-.448 1-1 1H9zm20.055-7.097A2.004 2.004 0 0127.215 35h-6.654c.038-.042.08-.08.116-.123a5.987 5.987 0 001.339-4.863l-1.41-8.455 8.245 10.526c.423.512.503 1.226.204 1.82zM5.123 9.573a9.9 9.9 0 015.305-3.959 22.518 22.518 0 00-6 12.228c-.822-3.35-.607-6.128.695-8.27zm.897 12.894c.17-9.708 4.758-14.706 7.114-16.629-.012.257-.02.52-.02.793a1 1 0 002 0 10.22 10.22 0 011.155-5.142c.192-.312.535-.498.9-.489l2.972-.053v2.257a1.954 1.954 0 001.128 1.752l2.643 1.247a14.917 14.917 0 014.598 3.351l3.092 3.336a1.758 1.758 0 01-.083 2.467l-1.49 1.37-2.333-1.468c-1.388-.873-3.787-1.482-7.129-1.81a3.025 3.025 0 00-2.949 1.523 2.785 2.785 0 00.258 3.1l.155.199 2.012 12.072a3.991 3.991 0 01-.893 3.242A4.047 4.047 0 0116 35H8.09a1.935 1.935 0 01-2.012-1.842V22.737a.99.99 0 00-.057-.27zm-2.953 25.01a2 2 0 011.156-2.616l4.96-1.86h15.635l4.96 1.86a2 2 0 011.155 2.616L30.323 49H3.677l-.61-1.525zM34 56c0 .553-.448 1-1 1h-1v-2a1 1 0 00-2 0v2h-2v-2a1 1 0 00-2 0v2h-2v-2a1 1 0 00-2 0v2h-2v-2a1 1 0 00-2 0v2h-2v-2a1 1 0 00-2 0v2h-2v-2a1 1 0 00-2 0v2H8v-2a1 1 0 00-2 0v2H4v-2a1 1 0 00-2 0v2H1c-.552 0-1-.447-1-1v-4c0-.552.448-.999 1-1h1.997l.003.001h30c.552 0 1 .447 1 1v4z",fillRule:"nonzero",fill:"currentColor"})}))},m=function(e){return Object(i.jsx)("svg",Object(u.a)(Object(u.a)({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 40 75",height:70,width:70},e),{},{children:Object(i.jsxs)("g",{fillRule:"nonzero",fill:"currentColor",children:[Object(i.jsx)("path",{d:"M17 0a2.006 2.006 0 00-2 2c-.002.413.128.816.37 1.15 1.077-.2 2.183-.2 3.26 0 .242-.334.372-.737.37-1.15a2.006 2.006 0 00-2-2zm-5.2 6.94c-.02.02-.05.04-.07.06h.09l-.02-.06zm10.4 0l-.02.06h.09c-.02-.02-.05-.04-.07-.06zm0 0l-.02.06h.09c-.02-.02-.05-.04-.07-.06zM25 15H9a1 1 0 000 2h16a1 1 0 000-2zm-13 4v17h10V19H12zm13 19H9a1 1 0 000 2h16a1 1 0 000-2zm5.91 6.93a1.981 1.981 0 00-1.13-1.07L24.82 42H9.18l-4.96 1.86a1.981 1.981 0 00-1.13 1.07 2.03 2.03 0 00-.02 1.55L3.68 48h26.64l.61-1.52a2.03 2.03 0 00-.02-1.55zM33 50H1a1.003 1.003 0 00-1 1v4c.002.552.448.998 1 1h1v-2a1 1 0 012 0v2h2v-2a1 1 0 012 0v2h2v-2a1 1 0 012 0v2h2v-2a1 1 0 012 0v2h2v-2a1 1 0 012 0v2h2v-2a1 1 0 012 0v2h2v-2a1 1 0 012 0v2h2v-2a1 1 0 012 0v2h1a1.003 1.003 0 001-1v-4a1.003 1.003 0 00-1-1z"}),Object(i.jsx)("path",{d:"M24.85 5.32L23.62 9h-.01l-1.33 4H11.71L9.15 5.32a1.002 1.002 0 111.9-.64l.75 2.26c-.02.02-.05.04-.07.06h.09l-.02-.06a7.94 7.94 0 0110.4 0l-.02.06h.09c-.02-.02-.05-.04-.07-.06l.75-2.26a1.002 1.002 0 111.9.64z"}),Object(i.jsx)("path",{d:"M11.82 7h-.09c.02-.02.05-.04.07-.06l.02.06zM22.27 7h-.09l.02-.06c.02.02.05.04.07.06z"})]})}))},x=function(e){return Object(i.jsx)("svg",Object(u.a)(Object(u.a)({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 40 75",height:70,width:70},e),{},{children:Object(i.jsx)("path",{d:"M13.05 2.05a7 7 0 119.901 9.898 7 7 0 01-9.9-9.898zm1.498 15.797a33.035 33.035 0 00-.561-2.796 8.96 8.96 0 008.027 0c-.226.92-.417 1.86-.562 2.795L21.43 18h-6.86l-.022-.153zM9 23v-2c0-.552.448-1 1-1h16c.552 0 1 .448 1 1v2c0 .552-.448 1-1 1H10c-.552 0-1-.448-1-1zm5.76 3h6.482a25.675 25.675 0 002.154 8H12.605a25.454 25.454 0 002.155-8zM7 37c0-.552.448-1 1-1h20c.552 0 1 .448 1 1v2c0 .552-.448 1-1 1H8c-.552 0-1-.448-1-1v-2zm-5.906 7.925a1.985 1.985 0 011.128-1.065l5.13-1.923.011-.008c.21.046.423.07.637.071h20c.214 0 .428-.025.637-.071l.012.008 5.13 1.923a2 2 0 011.154 2.615L34.323 48H1.677l-.61-1.525a1.987 1.987 0 01.027-1.55zM36 55c0 .552-.448 1-1 1h-2v-2a1 1 0 00-2 0v2h-2v-2a1 1 0 00-2 0v2h-2v-2a1 1 0 00-2 0v2h-2v-2a1 1 0 00-2 0v2h-2v-2a1 1 0 00-2 0v2h-2v-2a1 1 0 00-2 0v2H9v-2a1 1 0 00-2 0v2H5v-2a1 1 0 00-2 0v2H1c-.552 0-1-.448-1-1v-4c0-.551.447-.998.999-1H35c.552.002.998.449.999 1v4z",fillRule:"nonzero",fill:"currentColor"})}))},w=function(e){return Object(i.jsx)("svg",Object(u.a)(Object(u.a)({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 40 75",height:70,width:70},e),{},{children:Object(i.jsx)("path",{d:"M5 0h2v2a2.002 2.002 0 002 2h2a2.002 2.002 0 002-2V0h2v2a2.003 2.003 0 001.999 2H19A2.003 2.003 0 0021 2V0h2v2a2.002 2.002 0 002 2h2a2.002 2.002 0 002-2V0h2v5.871a4.023 4.023 0 01-1.228 2.884L28.477 10H7.523L6.228 8.755A4.022 4.022 0 015 5.87V0zm2 15v-2c0-.552.448-1 1-1h20c.552 0 1 .448 1 1v2c0 .552-.448 1-1 1H8c-.552 0-1-.448-1-1zm3 3h16v16H10V18zM7 37c0-.552.448-1 1-1h20c.552 0 1 .448 1 1v2c0 .552-.448 1-1 1H8c-.552 0-1-.448-1-1v-2zm-5.906 7.925a1.985 1.985 0 011.128-1.065l5.13-1.923.011-.008c.21.046.423.07.637.071h20c.214 0 .428-.025.637-.071l.012.008 5.13 1.922a2 2 0 011.154 2.616L34.323 48H1.677l-.61-1.525a1.987 1.987 0 01.027-1.55zM36 55c0 .552-.448 1-1 1h-2v-2a1 1 0 00-2 0v2h-2v-2a1 1 0 00-2 0v2h-2v-2a1 1 0 00-2 0v2h-2v-2a1 1 0 00-2 0v2h-2v-2a1 1 0 00-2 0v2h-2v-2a1 1 0 00-2 0v2H9v-2a1 1 0 00-2 0v2H5v-2a1 1 0 00-2 0v2H1c-.552 0-1-.448-1-1v-4c0-.551.447-.998.999-1H35A1 1 0 0136 51v4z",fillRule:"nonzero",fill:"currentColor"})}))},k=(a={},Object(g.a)(a,"black",{bishop:Object(i.jsx)(O,{className:"pieces black_pieces",height:70}),king:Object(i.jsx)(p,{className:"pieces black_pieces",height:70}),queen:Object(i.jsx)(m,{className:"pieces black_pieces",height:70}),knight:Object(i.jsx)(f,{className:"pieces black_pieces",height:70}),pawn:Object(i.jsx)(x,{className:"pieces black_pieces",height:70}),rook:Object(i.jsx)(w,{className:"pieces black_pieces",height:70})}),Object(g.a)(a,"white",{bishop:Object(i.jsx)(O,{className:"pieces white_pieces",height:70}),king:Object(i.jsx)(p,{className:"pieces white_pieces",height:70}),queen:Object(i.jsx)(m,{className:"pieces white_pieces",height:70}),knight:Object(i.jsx)(f,{className:"pieces white_pieces",height:70}),pawn:Object(i.jsx)(x,{className:"pieces white_pieces",height:70}),rook:Object(i.jsx)(w,{className:"pieces white_pieces",height:70})}),a),z=function(e){return Object(i.jsx)("svg",Object(u.a)(Object(u.a)({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 40 75",height:70,width:70},e),{},{children:Object(i.jsx)("path",{d:"M3 60h32a3.003 3.003 0 003-3v-4a3.003 3.003 0 00-3-3h-.523l.313-.782a4.001 4.001 0 00-2.31-5.231l-3.112-1.167A2.97 2.97 0 0030 41v-2a3.003 3.003 0 00-3-3h-1V25h1a3.003 3.003 0 003-3v-1a3.003 3.003 0 00-3-3h-1.176A8.258 8.258 0 0028 12.47c0-2.847-3.652-7.774-6.716-11.404a2.976 2.976 0 00-4.568-.001C13.652 4.696 10 9.623 10 12.47c.014 2.05.79 4.02 2.176 5.53H11a3.003 3.003 0 00-3 3v1a3.003 3.003 0 003 3h1v11h-1a3.003 3.003 0 00-3 3v2c.003.66.225 1.3.632 1.82L5.52 43.987a4.001 4.001 0 00-2.31 5.231l.313.782H3a3.003 3.003 0 00-3 3v4a3.003 3.003 0 003 3zm9-47.53a8.675 8.675 0 011.498-3.683 7.575 7.575 0 002.948 4.046 1 1 0 101.108-1.665 6.506 6.506 0 01-2.517-4.704 64.574 64.574 0 013.208-4.11.997.997 0 011.51.001C23.665 6.989 26 10.771 26 12.47A6.436 6.436 0 0122.688 18h-7.376A6.436 6.436 0 0112 12.47zM10 22v-1c0-.552.448-1 1-1h16c.552 0 1 .448 1 1v1c0 .552-.448 1-1 1H11c-.552 0-1-.448-1-1zm4 3h10v11H14V25zm-4 14c0-.552.448-1 1-1h16c.552 0 1 .448 1 1v2c0 .552-.448 1-1 1H11c-.552 0-1-.448-1-1v-2zm-4.933 9.475a2 2 0 011.156-2.615l4.96-1.86h15.635l4.96 1.86a2 2 0 011.155 2.615L32.323 50H5.677l-.61-1.525zM2 53c0-.552.448-1 1-1h32c.552 0 1 .448 1 1v4c0 .552-.448 1-1 1h-1v-2a1 1 0 00-2 0v2h-2v-2a1 1 0 00-2 0v2h-2v-2a1 1 0 00-2 0v2h-2v-2a1 1 0 00-2 0v2h-2v-2a1 1 0 00-2 0v2h-2v-2a1 1 0 00-2 0v2h-2v-2a1 1 0 00-2 0v2H6v-2a1 1 0 00-2 0v2H3c-.552 0-1-.448-1-1v-4z",fillRule:"nonzero",fill:"currentColor"})}))},H=function(e){return Object(i.jsx)("svg",Object(u.a)(Object(u.a)({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 40 75",height:70,width:70},e),{},{children:Object(i.jsx)("path",{d:"M3 60h32a3.003 3.003 0 003-3v-4a3.003 3.003 0 00-3-3h-.523l.313-.782a4.001 4.001 0 00-2.31-5.231l-3.112-1.167A2.97 2.97 0 0030 41a3.003 3.003 0 00-3-3h-1V21h1a3 3 0 000-6h-.659l1.423-3.292c.331-.767.31-1.64-.058-2.39a3.13 3.13 0 00-2.05-1.636L20 6.225V4h1a1 1 0 000-2h-1V1a1 1 0 00-2 0v1h-1a1 1 0 000 2h1v2.225l-5.655 1.457a3.13 3.13 0 00-2.051 1.635 2.852 2.852 0 00-.058 2.39L11.66 15H11a3 3 0 000 6h1v17h-1a3.003 3.003 0 00-3 3c.003.66.225 1.3.632 1.82L5.52 43.987a4.001 4.001 0 00-2.31 5.231l.313.782H3a3.003 3.003 0 00-3 3v4a3.003 3.003 0 003 3zm9.072-49.086a.837.837 0 01.018-.717c.155-.293.43-.505.753-.579L19 8.033l6.157 1.585c.324.074.598.286.753.58.113.223.12.487.018.716L24.163 15H13.837l-1.765-4.086zM10 18c0-.552.448-1 1-1h16a1 1 0 010 2H11c-.552 0-1-.448-1-1zm4 3h10v17H14V21zm-3 19h16a1 1 0 010 2H11a1 1 0 010-2zm-5.933 8.475a2 2 0 011.156-2.615l4.96-1.86h15.635l4.96 1.86a2 2 0 011.155 2.615L32.323 50H5.677l-.61-1.525zM2 53c0-.552.448-1 1-1h32c.552 0 1 .448 1 1v4c0 .552-.448 1-1 1h-1v-2a1 1 0 00-2 0v2h-2v-2a1 1 0 00-2 0v2h-2v-2a1 1 0 00-2 0v2h-2v-2a1 1 0 00-2 0v2h-2v-2a1 1 0 00-2 0v2h-2v-2a1 1 0 00-2 0v2h-2v-2a1 1 0 00-2 0v2H6v-2a1 1 0 00-2 0v2H3c-.552 0-1-.448-1-1v-4z",fillRule:"nonzero",fill:"currentColor"})}))},S=function(e){return Object(i.jsx)("svg",Object(u.a)(Object(u.a)({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 40 75",height:70,width:70},e),{},{children:Object(i.jsx)("path",{d:"M35 50.001h-.523l.313-.782a4.001 4.001 0 00-2.31-5.23l-3.112-1.168a2.97 2.97 0 00.632-1.82v-2a2.969 2.969 0 00-.197-1.041 3.957 3.957 0 003.05-2.18 3.653 3.653 0 00-.428-3.928L21.45 17.84a.795.795 0 01-.079-.904 1.004 1.004 0 011.001-.497c2.987.294 5.152.817 6.26 1.514l2.334 1.469a2.033 2.033 0 002.477-.243l1.449-1.366a3.765 3.765 0 00.176-5.282l-3.091-3.335a16.896 16.896 0 00-5.211-3.8l-2.625-1.19V1.946A1.979 1.979 0 0022.137 0H19.17a3.031 3.031 0 00-2.635 1.493 9.92 9.92 0 00-.95 2.34c-1.689.186-7.389 1.142-10.163 5.688-2.17 3.557-1.967 8.353.587 14.253 0 .078-.009.148-.009.226 0 .133.027.265.078.387v9.77A3.828 3.828 0 008.36 37.61 2.961 2.961 0 008 39v2c.003.66.225 1.3.632 1.82L5.52 43.988a4 4 0 00-2.31 5.23l.313.783H3a3.003 3.003 0 00-3 3v4a3.004 3.004 0 003 3.001h32a3.004 3.004 0 003-3v-4a3.003 3.003 0 00-3-3zm-24-8c-.552 0-1-.447-1-1v-2c0-.552.448-.999 1-1h16c.552.001 1 .448 1 1v2c0 .553-.448 1-1 1H11zm20.055-7.097A2.004 2.004 0 0129.215 36h-6.654c.038-.042.08-.08.116-.123a5.987 5.987 0 001.339-4.863l-1.41-8.455 8.245 10.526c.423.512.503 1.226.204 1.82zM7.123 10.573a9.9 9.9 0 015.305-3.959 22.518 22.518 0 00-6 12.228c-.822-3.35-.607-6.128.695-8.27zm.897 12.894c.17-9.708 4.758-14.706 7.114-16.629-.012.257-.02.52-.02.793a1 1 0 002 0 10.22 10.22 0 011.155-5.142c.192-.312.535-.498.9-.489l2.972-.053v2.257a1.954 1.954 0 001.128 1.752l2.643 1.247a14.917 14.917 0 014.598 3.351l3.092 3.336a1.758 1.758 0 01-.083 2.467l-1.49 1.37-2.333-1.468c-1.388-.873-3.787-1.482-7.129-1.81a3.025 3.025 0 00-2.949 1.523 2.785 2.785 0 00.258 3.1l.155.199 2.012 12.072a3.991 3.991 0 01-.893 3.242A4.047 4.047 0 0118 36h-7.91a1.935 1.935 0 01-2.012-1.842V23.737a.99.99 0 00-.057-.27zm-2.953 25.01a2 2 0 011.156-2.616l4.96-1.86h15.635l4.96 1.86a2 2 0 011.155 2.616L32.323 50H5.677l-.61-1.525zM36 57c0 .553-.448 1-1 1h-1v-2a1 1 0 00-2 0v2h-2v-2a1 1 0 00-2 0v2h-2v-2a1 1 0 00-2 0v2h-2v-2a1 1 0 00-2 0v2h-2v-2a1 1 0 00-2 0v2h-2v-2a1 1 0 00-2 0v2h-2v-2a1 1 0 00-2 0v2H6v-2a1 1 0 00-2 0v2H3c-.552 0-1-.447-1-1v-4c0-.552.448-.999 1-1h1.997l.003.001h30c.552 0 1 .447 1 1v4z",fillRule:"nonzero",fill:"currentColor"})}))},M=function(e){return Object(i.jsx)("svg",Object(u.a)(Object(u.a)({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 40 75",height:70,width:70},e),{},{children:Object(i.jsx)("path",{d:"M3 60h32a3.003 3.003 0 003-3v-4a3.003 3.003 0 00-3-3h-.523l.313-.782a4.001 4.001 0 00-2.31-5.231l-3.112-1.167A2.97 2.97 0 0030 41a3.003 3.003 0 00-3-3h-1V21h1a3 3 0 000-6h-.613l1.389-4.166.01-.028 1.162-3.49a1 1 0 10-1.896-.632l-.571 1.713a9.984 9.984 0 00-3.86-2.703 4 4 0 10-7.241 0 9.984 9.984 0 00-3.86 2.703l-.572-1.713a1 1 0 10-1.896.632l1.163 3.49.01.028L11.612 15H11a3 3 0 000 6h1v17h-1a3.003 3.003 0 00-3 3c.003.66.225 1.3.632 1.82L5.52 43.987a4.001 4.001 0 00-2.31 5.231l.313.782H3a3.003 3.003 0 00-3 3v4a3.003 3.003 0 003 3zM19 7a7.993 7.993 0 015.266 2H13.734A7.993 7.993 0 0119 7zm-2-3a2 2 0 113.635 1.15c-1.08-.2-2.19-.2-3.27 0A1.977 1.977 0 0117 4zm-4.613 7h13.226l-1.333 4H13.72l-1.333-4zM10 18c0-.552.448-1 1-1h16a1 1 0 010 2H11c-.552 0-1-.448-1-1zm4 3h10v17H14V21zm-3 19h16a1 1 0 010 2H11a1 1 0 010-2zm-5.933 8.475a2 2 0 011.156-2.615l4.96-1.86h15.635l4.96 1.86a2 2 0 011.155 2.615L32.323 50H5.677l-.61-1.525zM2 53c0-.552.448-1 1-1h32c.552 0 1 .448 1 1v4c0 .552-.448 1-1 1h-1v-2a1 1 0 00-2 0v2h-2v-2a1 1 0 00-2 0v2h-2v-2a1 1 0 00-2 0v2h-2v-2a1 1 0 00-2 0v2h-2v-2a1 1 0 00-2 0v2h-2v-2a1 1 0 00-2 0v2h-2v-2a1 1 0 00-2 0v2H6v-2a1 1 0 00-2 0v2H3c-.552 0-1-.448-1-1v-4z",fillRule:"nonzero",fill:"currentColor"})}))},y=function(e){return Object(i.jsx)("svg",Object(u.a)(Object(u.a)({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 40 75",height:70,width:70},e),{},{children:Object(i.jsx)("path",{d:"M3 60h34a3.003 3.003 0 003-3v-4a2.993 2.993 0 00-1.656-2.667l.446-1.115a4 4 0 00-2.31-5.231l-3.909-1.466c.278-.459.426-.985.429-1.521v-2a3.003 3.003 0 00-3-3h-2.528a.98.98 0 00-.091-.434A23.55 23.55 0 0125.254 28H28a3.003 3.003 0 003-3v-2a3.003 3.003 0 00-3-3h-2.544a30.257 30.257 0 011.246-5.009 9 9 0 10-13.404 0A30.244 30.244 0 0114.544 20H12a3.003 3.003 0 00-3 3v2a3.003 3.003 0 003 3h2.749a23.384 23.384 0 01-2.13 7.566.98.98 0 00-.09.434H10a3.003 3.003 0 00-3 3v2c.003.536.15 1.062.429 1.521l-3.91 1.466a4 4 0 00-2.309 5.231l.446 1.115A2.993 2.993 0 000 53v4a3.003 3.003 0 003 3zm35-3c0 .552-.448 1-1 1h-2v-2a1 1 0 00-2 0v2h-2v-2a1 1 0 00-2 0v2h-2v-2a1 1 0 00-2 0v2h-2v-2a1 1 0 00-2 0v2h-2v-2a1 1 0 00-2 0v2h-2v-2a1 1 0 00-2 0v2h-2v-2a1 1 0 00-2 0v2H7v-2a1 1 0 00-2 0v2H3c-.552 0-1-.448-1-1v-4c0-.551.447-.998.999-1H37c.552.002.998.449.999 1v4zM15.05 4.05a7 7 0 119.901 9.898 7 7 0 01-9.9-9.898zm1.498 15.797a33.035 33.035 0 00-.561-2.796 8.96 8.96 0 008.027 0c-.226.92-.417 1.86-.562 2.795L23.43 20h-6.86l-.022-.153zM11 25v-2c0-.552.448-1 1-1h16c.552 0 1 .448 1 1v2c0 .552-.448 1-1 1H12c-.552 0-1-.448-1-1zm5.76 3h6.482a25.675 25.675 0 002.154 8H14.605a25.454 25.454 0 002.155-8zM9 39c0-.552.448-1 1-1h20c.552 0 1 .448 1 1v2c0 .552-.448 1-1 1H10c-.552 0-1-.448-1-1v-2zm-5.906 7.925a1.985 1.985 0 011.128-1.065l5.13-1.923.011-.008c.21.046.423.07.637.071h20c.214 0 .428-.025.637-.071l.012.008 5.13 1.923a2 2 0 011.154 2.615L36.323 50H3.677l-.61-1.525a1.987 1.987 0 01.027-1.55z",fillRule:"nonzero",fill:"currentColor"})}))},C=function(e){return Object(i.jsx)("svg",Object(u.a)(Object(u.a)({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 40 75",height:70,width:70},e),{},{children:Object(i.jsx)("path",{d:"M3 60h34a3.003 3.003 0 003-3v-4a2.993 2.993 0 00-1.656-2.667l.446-1.115a4.001 4.001 0 00-2.31-5.231l-3.909-1.466c.278-.459.426-.985.429-1.521v-2a3.003 3.003 0 00-3-3V20a3.003 3.003 0 003-3v-2a2.973 2.973 0 00-.735-1.945l.894-.859A6.031 6.031 0 0035 7.871V2a2.002 2.002 0 00-2-2h-2a2.002 2.002 0 00-2 2v2h-2V2a2.002 2.002 0 00-2-2h-2a2.002 2.002 0 00-2 2v2h-2V2a2.002 2.002 0 00-2-2h-2a2.002 2.002 0 00-2 2v2h-2V2a2.002 2.002 0 00-2-2H7a2.002 2.002 0 00-2 2v5.871a6.03 6.03 0 001.842 4.325l.893.859A2.973 2.973 0 007 15v2a3.003 3.003 0 003 3v16a3.003 3.003 0 00-3 3v2c.003.536.15 1.062.429 1.521l-3.91 1.466a4 4 0 00-2.309 5.231l.446 1.115A2.993 2.993 0 000 53v4a3.003 3.003 0 003 3zm35-3c0 .552-.448 1-1 1h-2v-2a1 1 0 00-2 0v2h-2v-2a1 1 0 00-2 0v2h-2v-2a1 1 0 00-2 0v2h-2v-2a1 1 0 00-2 0v2h-2v-2a1 1 0 00-2 0v2h-2v-2a1 1 0 00-2 0v2h-2v-2a1 1 0 00-2 0v2H7v-2a1 1 0 00-2 0v2H3c-.552 0-1-.448-1-1v-4c0-.551.447-.998.999-1H37A1 1 0 0138 53v4zM7 2h2v2a2.002 2.002 0 002 2h2a2.002 2.002 0 002-2V2h2v2a2.003 2.003 0 001.999 2H21A2.003 2.003 0 0023 4V2h2v2a2.002 2.002 0 002 2h2a2.002 2.002 0 002-2V2h2v5.871a4.023 4.023 0 01-1.228 2.884L30.477 12H9.523l-1.295-1.245A4.022 4.022 0 017 7.87V2zm2 15v-2c0-.552.448-1 1-1h20c.552 0 1 .448 1 1v2c0 .552-.448 1-1 1H10c-.552 0-1-.448-1-1zm3 3h16v16H12V20zM9 39c0-.552.448-1 1-1h20c.552 0 1 .448 1 1v2c0 .552-.448 1-1 1H10c-.552 0-1-.448-1-1v-2zm-5.906 7.925a1.985 1.985 0 011.128-1.065l5.13-1.923.011-.008c.21.046.423.07.637.071h20c.214 0 .428-.025.637-.071l.012.008 5.13 1.922a2 2 0 011.154 2.616L36.323 50H3.677l-.61-1.525a1.987 1.987 0 01.027-1.55z",fillRule:"nonzero",fill:"currentColor"})}))},_=(n={},Object(g.a)(n,"black",{bishop:Object(i.jsx)(z,{className:"pieces black_pieces",height:70}),king:Object(i.jsx)(H,{className:"pieces black_pieces",height:70}),queen:Object(i.jsx)(M,{className:"pieces black_pieces",height:70}),knight:Object(i.jsx)(S,{className:"pieces black_pieces",height:70}),pawn:Object(i.jsx)(y,{className:"pieces black_pieces",height:70}),rook:Object(i.jsx)(C,{className:"pieces black_pieces",height:70})}),Object(g.a)(n,"white",{bishop:Object(i.jsx)(z,{className:"pieces white_pieces",height:70}),king:Object(i.jsx)(H,{className:"pieces white_pieces",height:70}),queen:Object(i.jsx)(M,{className:"pieces white_pieces",height:70}),knight:Object(i.jsx)(S,{className:"pieces white_pieces",height:70}),pawn:Object(i.jsx)(y,{className:"pieces white_pieces",height:70}),rook:Object(i.jsx)(C,{className:"pieces white_pieces",height:70})}),function(e,t){return"pawn"===e.piece.type&&(e.rank+1===t.rank&&e.file!==t.file)}),A=function(e){var t=e.capture;return Object(i.jsx)("div",{style:{position:"absolute",left:"50%"},children:Object(i.jsx)("div",{style:{width:"30px",height:"30px",background:t?"rgba(200, 0, 0, 0.5)":"rgba(0, 0, 0, 0.2)",borderRadius:"50%",position:"relative",left:"-50%"}})})},L=function(e){var t=e.show_move,c=e.tile,a=e.onClick,n=e.on_check,l=e.moved_last,o=e.style,h=(e.children,Object(s.useContext)(d)),r=h.lastMove,v=h.kingOnCheck,j=h.selectedTile,g=h.playerSide;void 0!==r&&(l=r.prevFile===c.file&&r.prevRank===c.rank||r.postFile===c.file&&r.postRank===c.rank),void 0!==v&&(n=v.file===c.file&&v.rank===c.rank);var O=!(void 0===j||!j.piece)&&_(j,c);return Object(i.jsx)(i.Fragment,{children:Object(i.jsxs)("div",{onClick:a,className:Object(b.a)("tile",n&&"--on-check",l&&"--moved-last",!n&&!l&&function(){var e=["a","c","e","g"];return c.rank%2==1?e.includes(c.file)?"--variant1":"--variant2":e.includes(c.file)?"--variant2":"--variant1"}()),style:Object(u.a)({fontSize:"small",display:"flex",justifyContent:"center",alignItems:"center"},o),children:[function(){var e,t;if("white"===(null===(e=c.piece)||void 0===e?void 0:e.side.name))switch(c.piece.type){case"pawn":return k.white.pawn;case"bishop":return k.white.bishop;case"king":return k.white.king;case"queen":return k.white.queen;case"rook":return k.white.rook;case"knight":return k.white.knight}else if("black"===(null===(t=c.piece)||void 0===t?void 0:t.side.name))switch(c.piece.type){case"pawn":return k.black.pawn;case"bishop":return k.black.bishop;case"king":return k.black.king;case"queen":return k.black.queen;case"rook":return k.black.rook;case"knight":return k.black.knight}}(),!0===t?Object(i.jsx)(A,{capture:null!==c.piece||O}):Object(i.jsx)(i.Fragment,{}),"a"===c.file?Object(i.jsx)("div",{style:{position:"absolute",top:"5px",left:"5px"},children:c.rank}):Object(i.jsx)(i.Fragment,{}),"white"===g?1===c.rank?Object(i.jsx)("div",{style:{position:"absolute",bottom:"5px",right:"5px"},children:c.file}):Object(i.jsx)(i.Fragment,{}):"black"===g&&8===c.rank?Object(i.jsx)("div",{style:{position:"absolute",bottom:"5px",right:"5px"},children:c.file}):Object(i.jsx)(i.Fragment,{})]})})},V=c(81),N=c.n(V),q=c(219),R=Object(q.io)(),T=function(e,t){return t},B=N.a.create({PGN:!0}),F=function(){var e=Object(s.useState)(""),t=Object(r.a)(e,2),c=t[0],a=t[1],n=Object(s.useState)(!0),l=Object(r.a)(n,2),o=l[0],h=l[1],u=Object(s.useState)(T(0,"")),b=Object(r.a)(u,2),g=b[0],O=b[1],p=Object(s.useState)(),f=Object(r.a)(p,2),m=f[0],x=f[1],w=Object(s.useState)(),k=Object(r.a)(w,2),z=k[0],H=k[1],S=Object(s.useState)(""),M=Object(r.a)(S,2),y=M[0],C=M[1],_=Object(s.useState)(),A=Object(r.a)(_,2),V=A[0],N=A[1],q=Object(s.useState)(),F=Object(r.a)(q,2),P=F[0],I=F[1],E=Object(s.useState)(B.game.moveHistory),G=Object(r.a)(E,2),W=G[0],Y=G[1],D=Object(s.useState)(),U=Object(r.a)(D,2),J=U[0],K=U[1],Q=Object(s.useState)("Q"),X=Object(r.a)(Q,2),Z=(X[0],X[1],Object(s.useState)(!1)),$=Object(r.a)(Z,2),ee=($[0],$[1]),te=Object(s.useState)(),ce=Object(r.a)(te,2),ae=(ce[0],ce[1]),ne=function(e,t){h(!0),ee(!0),ae({endedBy:e,winingSide:t})};Object(s.useEffect)((function(){}),[]),Object(s.useEffect)((function(){!function(){var e=B.game.board.squares.map((function(e,t){var a=[];B.validMoves.map((function(t){e.file===t.src.file&&e.rank===t.src.rank&&(a=void 0!==a?[].concat(Object(v.a)(t.squares),Object(v.a)(a)):t.squares)}));var n=!1;return null===P||void 0===P||P.map((function(t){t.file===e.file&&t.rank===e.rank&&(n=!0)})),Object(i.jsx)(L,{style:{transform:"white"===g?"rotate(180deg) rotateY(180deg)":"rotate(0deg)"},tile:e,moved_last:!1,on_check:!1,show_move:n,onClick:function(t){if(!o)if(n){var i=B.getStatus().notatedMoves,s=Object.keys(i).find((function(t){var c=i[t],a=c.dest,n=c.src;return a.file===e.file&&a.rank===e.rank&&n.file===z.file&&n.rank===z.rank})),l=B.move(s).move;console.log(l),R.emit("send-move",c,l,ie()),I([]),C(ie()),H(void 0),se()}else a.length>0&&void 0!==e.piece&&T(0,e.piece.side.name)===T(0,g)&&(H(e),I(a))}},t)}));x(e)}()}),[z,g,y,V,P,J,W,o]),Object(s.useEffect)((function(){B.on("check",(function(e){var t=e.attackingSquare,c=e.kingSquare;console.log("The King is under attack!"),K(c),console.log(t,c)})),B.on("castle",(function(e){console.log("A castle has occured!"),console.log(e)})),B.on("enPassant",(function(e){console.log("An en Passant has occured!"),console.log(e)})),B.on("promote",(function(e){console.log("A Pawn has been promoted!"),console.log(e)})),B.on("capture",(function(e){console.log("A piece has been captured!"),console.log(e)})),B.on("checkmate",(function(e){e.attackingSquare;var t=e.kingSquare;console.log("The game has ended due to checkmate!"),K((function(){return t})),ne("Check Mate",y),console.log(t)}))}),[c]);var ie=function(){return"white"===y?"black":"white"},se=function(){Y((function(){return B.game.moveHistory})),N((function(){return W[W.length-1]}))},le={display:"grid",gridTemplateColumns:"repeat(8, 1fr)",gridTemplateRows:"repeat(8, 1fr)",transform:"white"===g?"rotate(180deg) rotateY(180deg)":""};return Object(i.jsxs)("div",{children:[!0===o&&""===c&&""===y?Object(i.jsx)("div",{style:{position:"absolute",top:"50%",left:"50%",zIndex:"2"},children:Object(i.jsx)("div",{style:{background:"rgba(45, 150, 79, 1)",boxShadow:"0px 0px 200px 80px rgba(0,0,0, 0.6)",fontSize:"larger",fontWeight:"bold",color:"white",borderRadius:"5px",position:"relative",width:"200px",height:"auto",padding:"10px",top:"-50%",left:"-50%",cursor:"pointer"},onClick:function(){h(!1),R.emit("connect-to-game"),R.on("game-id",(function(e){a(e),console.log({game_id:e})})),R.on("sides",(function(e){e.white===R.id?O("white"):O("black"),se(),console.log(R.id,e)})),R.on("move",(function(e,t){console.log({socketIOSentMove:e}),B.move(e.algebraic),C(t),se()})),C("white")},children:"Play"})}):Object(i.jsx)(i.Fragment,{}),!0!==o||""===c&&""===y?Object(i.jsx)(i.Fragment,{}):Object(i.jsx)("div",{style:{position:"absolute",top:"50%",left:"50%",zIndex:"3"},children:Object(i.jsx)("div",{style:{background:"rgba(180, 34, 34, 1)",boxShadow:"0px 0px 20px 10px rgba(0,0,0, 0.6)",fontSize:"larger",fontWeight:"bold",color:"white",borderRadius:"5px",position:"relative",width:"200px",height:"auto",padding:"10px",top:"-50%",left:"-50%",cursor:"pointer"},children:"Game Over"})}),Object(i.jsxs)("div",{style:{display:"flex",justifyContent:"space-between",margin:"10px 50px",width:"100%",flexWrap:"wrap"},children:[Object(i.jsxs)("h6",{children:["game_id: ",c]}),Object(i.jsxs)("h6",{children:["My side:",g]}),Object(i.jsxs)("h6",{children:["turn:",y]})]}),Object(i.jsx)("div",{style:{display:"flex",flexDirection:"column",justifyContent:"right"},children:Object(i.jsx)(d.Provider,{value:{lastMove:V,kingOnCheck:B.isCheck?J:void 0,selectedTile:z,playerSide:g},children:Object(i.jsx)(j,{onTimeUp:function(e){ne("Time Up",e)},player_side:g,turn_to_play:y,children:Object(i.jsx)("div",{style:le,children:m})})})})]})},P=c(123),I=function(e,t){return t},E=N.a.create({PGN:!0}),G=function(){var e=Object(s.useState)(""),t=Object(r.a)(e,2),c=t[0],a=(t[1],Object(s.useState)(!1)),n=Object(r.a)(a,2),l=(n[0],n[1],Object(s.useState)(I(0,""))),o=Object(r.a)(l,2),h=o[0],j=(o[1],Object(s.useState)()),u=Object(r.a)(j,2),b=u[0],g=u[1],O=Object(s.useState)(),p=Object(r.a)(O,2),f=p[0],m=(p[1],Object(s.useState)(I(0,""))),x=Object(r.a)(m,2),w=x[0],k=(x[1],Object(s.useState)()),z=Object(r.a)(k,2),H=z[0],S=z[1],M=Object(s.useState)(E.game.moveHistory),y=Object(r.a)(M,2),C=y[0],_=y[1],A=Object(s.useState)(),V=Object(r.a)(A,2),N=V[0],q=V[1],R=Object(s.useState)("Q"),T=Object(r.a)(R,2),B=(T[0],T[1],Object(s.useState)(!1)),F=Object(r.a)(B,2),G=(F[0],F[1]),W=Object(s.useState)(!1),Y=Object(r.a)(W,2),D=(Y[0],Y[1]),U=Object(s.useState)(!1),J=Object(r.a)(U,2),K=(J[0],J[1]),Q=Object(s.useState)(!0),X=Object(r.a)(Q,2);X[0],X[1];function Z(){var e=E.game.board.squares.map((function(e,t){var c=[];return E.validMoves.map((function(t){e.file===t.src.file&&e.rank===t.src.rank&&(c=void 0!==c?[].concat(Object(v.a)(t.squares),Object(v.a)(c)):t.squares)})),Object(i.jsx)(L,{style:{transform:"white"===h?"rotate(180deg) rotateY(180deg)":"rotate(0deg)"},tile:e,moved_last:!1,on_check:!1,show_move:!1},t)}));g(e)}Object(s.useEffect)((function(){Z()}),[f,h,w,H,N,C]),Object(s.useEffect)((function(){E.on("check",(function(e){var t=e.attackingSquare,c=e.kingSquare;console.log("The King is under attack!"),q(c),console.log(t,c)})),E.on("castle",(function(e){console.log("A castle has occured!"),console.log(e)})),E.on("enPassant",(function(e){console.log("An en Passant has occured!"),console.log(e)})),E.on("promote",(function(e){console.log("A Pawn has been promoted!"),console.log(e)})),E.on("move",(function(e){console.log("A piece was moved!"),E.getStatus().isStalemate?(D(!0),console.log("The game has ended in a Stale mate!")):E.getStatus().isRepetition&&(K(!0),console.log("The game has ended in a 3 fold repetition!")),Z(),_((function(){var e=E.game.moveHistory;return S(e[e.length-1]),e}))})),E.on("capture",(function(e){console.log("A piece has been captured!"),console.log(e)})),E.on("checkmate",(function(e){e.attackingSquare;var t=e.kingSquare;console.log("The game has ended due to checkmate!"),q((function(){return t})),G(!0),console.log(t)}))}),[c,C]);var $={display:"grid",gridTemplateColumns:"repeat(8, 1fr)",gridTemplateRows:"repeat(8, 1fr)",transform:"white"===h?"rotate(180deg) rotateY(180deg)":""},ee=function(){return Object(P.setInterval)((function(){var e=E.getStatus().notatedMoves,t=Object.keys(e),c=t[Math.floor(Math.random()*t.length)];console.log(c),E.move(c)}),500)};return Object(i.jsxs)("div",{children:[Object(i.jsxs)("div",{style:{display:"flex",justifyContent:"space-between",margin:"10px 50px",width:"100%"},children:[Object(i.jsxs)("h6",{children:["game_id: ",c]}),Object(i.jsxs)("h6",{children:["My side:",h]}),Object(i.jsxs)("h6",{children:["turn:",w]})]}),Object(i.jsxs)(d.Provider,{value:{lastMove:H,kingOnCheck:E.isCheck?N:void 0,selectedTile:f,playerSide:h},children:[Object(i.jsx)("div",{children:Object(i.jsx)("button",{onClick:function(){return ee()},children:"start game!"})}),Object(i.jsx)("div",{style:$,children:b})]})]})};var W=function(){var e=Object(s.useState)(""),t=Object(r.a)(e,2),c=t[0],a=t[1];return Object(i.jsx)("div",{className:"App",children:Object(i.jsxs)("header",{className:"App-header",children:[Object(i.jsxs)("div",{style:{display:"flex"},children:[Object(i.jsx)("button",{onClick:function(){return a("solo")},children:"Play Solo"}),Object(i.jsx)("button",{onClick:function(){return a("online")},children:"Play Online"}),Object(i.jsx)("button",{onClick:function(){return a("tournament")},children:"Play Tournament"}),Object(i.jsx)("button",{onClick:function(){return a("botVbot")},children:"Bot Vs Bot"}),Object(i.jsx)("button",{onClick:function(){return a("watch")},children:"Watch Game"})]}),"solo"===c?Object(i.jsx)("div",{children:"Coming Soon!"}):"botVbot"===c?Object(i.jsx)(G,{}):"online"===c?Object(i.jsx)(F,{}):"tournament"===c||"watch"===c?Object(i.jsx)("div",{children:"Coming Soon!"}):Object(i.jsx)(i.Fragment,{})]})})},Y=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,421)).then((function(t){var c=t.getCLS,a=t.getFID,n=t.getFCP,i=t.getLCP,s=t.getTTFB;c(e),a(e),n(e),i(e),s(e)}))};h.a.render(Object(i.jsx)(l.a.StrictMode,{children:Object(i.jsx)(W,{})}),document.getElementById("root")),Y()}},[[420,1,2]]]);
//# sourceMappingURL=main.c97d0e11.chunk.js.map