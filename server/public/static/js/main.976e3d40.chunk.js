(this["webpackJsonpchess-ts"]=this["webpackJsonpchess-ts"]||[]).push([[0],{332:function(e,t,a){},333:function(e,t,a){},425:function(e,t){},427:function(e,t){},438:function(e,t){},440:function(e,t){},467:function(e,t){},469:function(e,t){},470:function(e,t){},475:function(e,t){},477:function(e,t){},496:function(e,t){},508:function(e,t){},511:function(e,t){},527:function(e,t,a){},609:function(e,t,a){"use strict";a.r(t);var c,n,i=a(3),l=a(0),s=a.n(l),r=a(37),h=a.n(r),o=(a(332),a(20)),v=(a(333),a(11)),j=a(612),u=a(613),b=a(614),d=a(617),O=a(616),m=a(615),p=a(322),g=a(309),x=a.n(g),f=Object(l.createContext)({}),w=Object(l.createContext)({}),k=Object(l.createContext)({}),z=a(137),H=a.n(z),y=a(152),C=function(e){var t=e.turn_to_play,a=e.player_side,c=e.onTimeUp,n=e.children,s=Object(l.useState)(600),r=Object(o.a)(s,2),h=r[0],v=(r[1],Object(l.useState)(h)),j=Object(o.a)(v,2),u=j[0],b=j[1],d=Object(l.useState)(h),O=Object(o.a)(d,2),m=O[0],p=O[1];Object(l.useEffect)((function(){var e=setInterval((function(){if(""!==a){var n=function(t){return function(a){return a<=1&&(clearInterval(e),c(t)),a-1}};"white"===t?b(n("white")):"black"===t&&p(n("black"))}}),1e3);return function(){clearInterval(e)}}),[t,a]);var g=function(e){return Object(i.jsx)("div",{style:{width:"100px",background:"rgba(0,0,0, 0.2)",borderRadius:"5px",fontSize:"20px",padding:"5px"},children:e})},x=function(e){var t=e%60;return(e/60|0)%60+":"+(t<=0?"0"+t:t)};return Object(i.jsx)("div",{style:{display:"flex",flexDirection:"column",alignItems:"flex-end"},children:"white"===a?Object(i.jsxs)(i.Fragment,{children:[g(x(m)),n,g(x(u))]}):Object(i.jsxs)(i.Fragment,{children:[g(x(u)),n,g(x(m))]})})},M=a(310),S=(a(527),a(69)),_=function(e){return Object(i.jsx)("svg",Object(v.a)(Object(v.a)({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 40 75",height:70,width:70},e),{},{children:Object(i.jsx)("path",{d:"M10 10.47a8.675 8.675 0 011.498-3.683 7.575 7.575 0 002.948 4.046 1 1 0 101.108-1.665 6.506 6.506 0 01-2.517-4.704 64.574 64.574 0 013.208-4.11.997.997 0 011.51.001C21.665 4.989 24 8.771 24 10.47A6.436 6.436 0 0120.688 16h-7.376A6.436 6.436 0 0110 10.47zM8 20v-1c0-.552.448-1 1-1h16c.552 0 1 .448 1 1v1c0 .552-.448 1-1 1H9c-.552 0-1-.448-1-1zm4 3h10v11H12V23zM8 37c0-.552.448-1 1-1h16c.552 0 1 .448 1 1v2c0 .552-.448 1-1 1H9c-.552 0-1-.448-1-1v-2zm-4.933 9.475a2 2 0 011.156-2.615L9.183 42h15.635l4.96 1.86a2 2 0 011.155 2.615L30.323 48H3.677l-.61-1.525zM34 55c0 .552-.448 1-1 1h-1v-2a1 1 0 00-2 0v2h-2v-2a1 1 0 00-2 0v2h-2v-2a1 1 0 00-2 0v2h-2v-2a1 1 0 00-2 0v2h-2v-2a1 1 0 00-2 0v2h-2v-2a1 1 0 00-2 0v2H8v-2a1 1 0 00-2 0v2H4v-2a1 1 0 00-2 0v2H1c-.552 0-1-.448-1-1v-4c0-.552.448-1 1-1h32c.552 0 1 .448 1 1v4z",fillRule:"nonzero",fill:"currentColor"})}))},L=function(e){return Object(i.jsx)("svg",Object(v.a)(Object(v.a)({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 40 75",height:70,width:70},e),{},{children:Object(i.jsxs)("g",{fillRule:"nonzero",fill:"currentColor",children:[Object(i.jsx)("path",{d:"M10.072 10.914a.837.837 0 01.018-.717c.155-.293.43-.505.753-.579L17 8.033l6.157 1.585c.324.074.598.286.753.58.113.223.12.487.018.716L22.163 15H11.837l-1.765-4.086zM8 18c0-.552.448-1 1-1h16a1 1 0 010 2H9c-.552 0-1-.448-1-1zm4 3h10v17H12V21zM9 40h16a1 1 0 010 2H9a1 1 0 010-2zm-5.933 8.475a2 2 0 011.156-2.615L9.183 44h15.635l4.96 1.86a2 2 0 011.155 2.615L30.323 50H3.677l-.61-1.525zM34 57c0 .552-.448 1-1 1h-1v-2a1 1 0 00-2 0v2h-2v-2a1 1 0 00-2 0v2h-2v-2a1 1 0 00-2 0v2h-2v-2a1 1 0 00-2 0v2h-2v-2a1 1 0 00-2 0v2h-2v-2a1 1 0 00-2 0v2H8v-2a1 1 0 00-2 0v2H4v-2a1 1 0 00-2 0v2H1c-.552 0-1-.448-1-1v-4c0-.552.448-1 1-1h32c.552 0 1 .448 1 1v4zM16 7.2V1a1 1 0 012 0v6.2L17 7l-1 .2z"}),Object(i.jsx)("path",{d:"M19 4h-4a1 1 0 010-2h4a1 1 0 010 2z"})]})}))},A=function(e){return Object(i.jsx)("svg",Object(v.a)(Object(v.a)({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 40 75",height:70,width:70},e),{},{children:Object(i.jsx)("path",{d:"M9 41.001c-.552 0-1-.447-1-1v-2c0-.552.448-.999 1-1h16c.552.001 1 .448 1 1v2c0 .553-.448 1-1 1H9zm20.055-7.097A2.004 2.004 0 0127.215 35h-6.654c.038-.042.08-.08.116-.123a5.987 5.987 0 001.339-4.863l-1.41-8.455 8.245 10.526c.423.512.503 1.226.204 1.82zM5.123 9.573a9.9 9.9 0 015.305-3.959 22.518 22.518 0 00-6 12.228c-.822-3.35-.607-6.128.695-8.27zm.897 12.894c.17-9.708 4.758-14.706 7.114-16.629-.012.257-.02.52-.02.793a1 1 0 002 0 10.22 10.22 0 011.155-5.142c.192-.312.535-.498.9-.489l2.972-.053v2.257a1.954 1.954 0 001.128 1.752l2.643 1.247a14.917 14.917 0 014.598 3.351l3.092 3.336a1.758 1.758 0 01-.083 2.467l-1.49 1.37-2.333-1.468c-1.388-.873-3.787-1.482-7.129-1.81a3.025 3.025 0 00-2.949 1.523 2.785 2.785 0 00.258 3.1l.155.199 2.012 12.072a3.991 3.991 0 01-.893 3.242A4.047 4.047 0 0116 35H8.09a1.935 1.935 0 01-2.012-1.842V22.737a.99.99 0 00-.057-.27zm-2.953 25.01a2 2 0 011.156-2.616l4.96-1.86h15.635l4.96 1.86a2 2 0 011.155 2.616L30.323 49H3.677l-.61-1.525zM34 56c0 .553-.448 1-1 1h-1v-2a1 1 0 00-2 0v2h-2v-2a1 1 0 00-2 0v2h-2v-2a1 1 0 00-2 0v2h-2v-2a1 1 0 00-2 0v2h-2v-2a1 1 0 00-2 0v2h-2v-2a1 1 0 00-2 0v2H8v-2a1 1 0 00-2 0v2H4v-2a1 1 0 00-2 0v2H1c-.552 0-1-.447-1-1v-4c0-.552.448-.999 1-1h1.997l.003.001h30c.552 0 1 .447 1 1v4z",fillRule:"nonzero",fill:"currentColor"})}))},V=function(e){return Object(i.jsx)("svg",Object(v.a)(Object(v.a)({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 40 75",height:70,width:70},e),{},{children:Object(i.jsxs)("g",{fillRule:"nonzero",fill:"currentColor",children:[Object(i.jsx)("path",{d:"M17 0a2.006 2.006 0 00-2 2c-.002.413.128.816.37 1.15 1.077-.2 2.183-.2 3.26 0 .242-.334.372-.737.37-1.15a2.006 2.006 0 00-2-2zm-5.2 6.94c-.02.02-.05.04-.07.06h.09l-.02-.06zm10.4 0l-.02.06h.09c-.02-.02-.05-.04-.07-.06zm0 0l-.02.06h.09c-.02-.02-.05-.04-.07-.06zM25 15H9a1 1 0 000 2h16a1 1 0 000-2zm-13 4v17h10V19H12zm13 19H9a1 1 0 000 2h16a1 1 0 000-2zm5.91 6.93a1.981 1.981 0 00-1.13-1.07L24.82 42H9.18l-4.96 1.86a1.981 1.981 0 00-1.13 1.07 2.03 2.03 0 00-.02 1.55L3.68 48h26.64l.61-1.52a2.03 2.03 0 00-.02-1.55zM33 50H1a1.003 1.003 0 00-1 1v4c.002.552.448.998 1 1h1v-2a1 1 0 012 0v2h2v-2a1 1 0 012 0v2h2v-2a1 1 0 012 0v2h2v-2a1 1 0 012 0v2h2v-2a1 1 0 012 0v2h2v-2a1 1 0 012 0v2h2v-2a1 1 0 012 0v2h2v-2a1 1 0 012 0v2h1a1.003 1.003 0 001-1v-4a1.003 1.003 0 00-1-1z"}),Object(i.jsx)("path",{d:"M24.85 5.32L23.62 9h-.01l-1.33 4H11.71L9.15 5.32a1.002 1.002 0 111.9-.64l.75 2.26c-.02.02-.05.04-.07.06h.09l-.02-.06a7.94 7.94 0 0110.4 0l-.02.06h.09c-.02-.02-.05-.04-.07-.06l.75-2.26a1.002 1.002 0 111.9.64z"}),Object(i.jsx)("path",{d:"M11.82 7h-.09c.02-.02.05-.04.07-.06l.02.06zM22.27 7h-.09l.02-.06c.02.02.05.04.07.06z"})]})}))},N=function(e){return Object(i.jsx)("svg",Object(v.a)(Object(v.a)({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 40 75",height:70,width:70},e),{},{children:Object(i.jsx)("path",{d:"M13.05 2.05a7 7 0 119.901 9.898 7 7 0 01-9.9-9.898zm1.498 15.797a33.035 33.035 0 00-.561-2.796 8.96 8.96 0 008.027 0c-.226.92-.417 1.86-.562 2.795L21.43 18h-6.86l-.022-.153zM9 23v-2c0-.552.448-1 1-1h16c.552 0 1 .448 1 1v2c0 .552-.448 1-1 1H10c-.552 0-1-.448-1-1zm5.76 3h6.482a25.675 25.675 0 002.154 8H12.605a25.454 25.454 0 002.155-8zM7 37c0-.552.448-1 1-1h20c.552 0 1 .448 1 1v2c0 .552-.448 1-1 1H8c-.552 0-1-.448-1-1v-2zm-5.906 7.925a1.985 1.985 0 011.128-1.065l5.13-1.923.011-.008c.21.046.423.07.637.071h20c.214 0 .428-.025.637-.071l.012.008 5.13 1.923a2 2 0 011.154 2.615L34.323 48H1.677l-.61-1.525a1.987 1.987 0 01.027-1.55zM36 55c0 .552-.448 1-1 1h-2v-2a1 1 0 00-2 0v2h-2v-2a1 1 0 00-2 0v2h-2v-2a1 1 0 00-2 0v2h-2v-2a1 1 0 00-2 0v2h-2v-2a1 1 0 00-2 0v2h-2v-2a1 1 0 00-2 0v2H9v-2a1 1 0 00-2 0v2H5v-2a1 1 0 00-2 0v2H1c-.552 0-1-.448-1-1v-4c0-.551.447-.998.999-1H35c.552.002.998.449.999 1v4z",fillRule:"nonzero",fill:"currentColor"})}))},B=function(e){return Object(i.jsx)("svg",Object(v.a)(Object(v.a)({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 40 75",height:70,width:70},e),{},{children:Object(i.jsx)("path",{d:"M5 0h2v2a2.002 2.002 0 002 2h2a2.002 2.002 0 002-2V0h2v2a2.003 2.003 0 001.999 2H19A2.003 2.003 0 0021 2V0h2v2a2.002 2.002 0 002 2h2a2.002 2.002 0 002-2V0h2v5.871a4.023 4.023 0 01-1.228 2.884L28.477 10H7.523L6.228 8.755A4.022 4.022 0 015 5.87V0zm2 15v-2c0-.552.448-1 1-1h20c.552 0 1 .448 1 1v2c0 .552-.448 1-1 1H8c-.552 0-1-.448-1-1zm3 3h16v16H10V18zM7 37c0-.552.448-1 1-1h20c.552 0 1 .448 1 1v2c0 .552-.448 1-1 1H8c-.552 0-1-.448-1-1v-2zm-5.906 7.925a1.985 1.985 0 011.128-1.065l5.13-1.923.011-.008c.21.046.423.07.637.071h20c.214 0 .428-.025.637-.071l.012.008 5.13 1.922a2 2 0 011.154 2.616L34.323 48H1.677l-.61-1.525a1.987 1.987 0 01.027-1.55zM36 55c0 .552-.448 1-1 1h-2v-2a1 1 0 00-2 0v2h-2v-2a1 1 0 00-2 0v2h-2v-2a1 1 0 00-2 0v2h-2v-2a1 1 0 00-2 0v2h-2v-2a1 1 0 00-2 0v2h-2v-2a1 1 0 00-2 0v2H9v-2a1 1 0 00-2 0v2H5v-2a1 1 0 00-2 0v2H1c-.552 0-1-.448-1-1v-4c0-.551.447-.998.999-1H35A1 1 0 0136 51v4z",fillRule:"nonzero",fill:"currentColor"})}))},G=(c={},Object(S.a)(c,"black",{bishop:Object(i.jsx)(_,{className:"pieces black_pieces",height:70}),king:Object(i.jsx)(L,{className:"pieces black_pieces",height:70}),queen:Object(i.jsx)(V,{className:"pieces black_pieces",height:70}),knight:Object(i.jsx)(A,{className:"pieces black_pieces",height:70}),pawn:Object(i.jsx)(N,{className:"pieces black_pieces",height:70}),rook:Object(i.jsx)(B,{className:"pieces black_pieces",height:70})}),Object(S.a)(c,"white",{bishop:Object(i.jsx)(_,{className:"pieces white_pieces",height:70}),king:Object(i.jsx)(L,{className:"pieces white_pieces",height:70}),queen:Object(i.jsx)(V,{className:"pieces white_pieces",height:70}),knight:Object(i.jsx)(A,{className:"pieces white_pieces",height:70}),pawn:Object(i.jsx)(N,{className:"pieces white_pieces",height:70}),rook:Object(i.jsx)(B,{className:"pieces white_pieces",height:70})}),c),F=function(e){return Object(i.jsx)("svg",Object(v.a)(Object(v.a)({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 40 75",height:70,width:70},e),{},{children:Object(i.jsx)("path",{d:"M3 60h32a3.003 3.003 0 003-3v-4a3.003 3.003 0 00-3-3h-.523l.313-.782a4.001 4.001 0 00-2.31-5.231l-3.112-1.167A2.97 2.97 0 0030 41v-2a3.003 3.003 0 00-3-3h-1V25h1a3.003 3.003 0 003-3v-1a3.003 3.003 0 00-3-3h-1.176A8.258 8.258 0 0028 12.47c0-2.847-3.652-7.774-6.716-11.404a2.976 2.976 0 00-4.568-.001C13.652 4.696 10 9.623 10 12.47c.014 2.05.79 4.02 2.176 5.53H11a3.003 3.003 0 00-3 3v1a3.003 3.003 0 003 3h1v11h-1a3.003 3.003 0 00-3 3v2c.003.66.225 1.3.632 1.82L5.52 43.987a4.001 4.001 0 00-2.31 5.231l.313.782H3a3.003 3.003 0 00-3 3v4a3.003 3.003 0 003 3zm9-47.53a8.675 8.675 0 011.498-3.683 7.575 7.575 0 002.948 4.046 1 1 0 101.108-1.665 6.506 6.506 0 01-2.517-4.704 64.574 64.574 0 013.208-4.11.997.997 0 011.51.001C23.665 6.989 26 10.771 26 12.47A6.436 6.436 0 0122.688 18h-7.376A6.436 6.436 0 0112 12.47zM10 22v-1c0-.552.448-1 1-1h16c.552 0 1 .448 1 1v1c0 .552-.448 1-1 1H11c-.552 0-1-.448-1-1zm4 3h10v11H14V25zm-4 14c0-.552.448-1 1-1h16c.552 0 1 .448 1 1v2c0 .552-.448 1-1 1H11c-.552 0-1-.448-1-1v-2zm-4.933 9.475a2 2 0 011.156-2.615l4.96-1.86h15.635l4.96 1.86a2 2 0 011.155 2.615L32.323 50H5.677l-.61-1.525zM2 53c0-.552.448-1 1-1h32c.552 0 1 .448 1 1v4c0 .552-.448 1-1 1h-1v-2a1 1 0 00-2 0v2h-2v-2a1 1 0 00-2 0v2h-2v-2a1 1 0 00-2 0v2h-2v-2a1 1 0 00-2 0v2h-2v-2a1 1 0 00-2 0v2h-2v-2a1 1 0 00-2 0v2h-2v-2a1 1 0 00-2 0v2H6v-2a1 1 0 00-2 0v2H3c-.552 0-1-.448-1-1v-4z",fillRule:"nonzero",fill:"currentColor"})}))},I=function(e){return Object(i.jsx)("svg",Object(v.a)(Object(v.a)({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 40 75",height:70,width:70},e),{},{children:Object(i.jsx)("path",{d:"M3 60h32a3.003 3.003 0 003-3v-4a3.003 3.003 0 00-3-3h-.523l.313-.782a4.001 4.001 0 00-2.31-5.231l-3.112-1.167A2.97 2.97 0 0030 41a3.003 3.003 0 00-3-3h-1V21h1a3 3 0 000-6h-.659l1.423-3.292c.331-.767.31-1.64-.058-2.39a3.13 3.13 0 00-2.05-1.636L20 6.225V4h1a1 1 0 000-2h-1V1a1 1 0 00-2 0v1h-1a1 1 0 000 2h1v2.225l-5.655 1.457a3.13 3.13 0 00-2.051 1.635 2.852 2.852 0 00-.058 2.39L11.66 15H11a3 3 0 000 6h1v17h-1a3.003 3.003 0 00-3 3c.003.66.225 1.3.632 1.82L5.52 43.987a4.001 4.001 0 00-2.31 5.231l.313.782H3a3.003 3.003 0 00-3 3v4a3.003 3.003 0 003 3zm9.072-49.086a.837.837 0 01.018-.717c.155-.293.43-.505.753-.579L19 8.033l6.157 1.585c.324.074.598.286.753.58.113.223.12.487.018.716L24.163 15H13.837l-1.765-4.086zM10 18c0-.552.448-1 1-1h16a1 1 0 010 2H11c-.552 0-1-.448-1-1zm4 3h10v17H14V21zm-3 19h16a1 1 0 010 2H11a1 1 0 010-2zm-5.933 8.475a2 2 0 011.156-2.615l4.96-1.86h15.635l4.96 1.86a2 2 0 011.155 2.615L32.323 50H5.677l-.61-1.525zM2 53c0-.552.448-1 1-1h32c.552 0 1 .448 1 1v4c0 .552-.448 1-1 1h-1v-2a1 1 0 00-2 0v2h-2v-2a1 1 0 00-2 0v2h-2v-2a1 1 0 00-2 0v2h-2v-2a1 1 0 00-2 0v2h-2v-2a1 1 0 00-2 0v2h-2v-2a1 1 0 00-2 0v2h-2v-2a1 1 0 00-2 0v2H6v-2a1 1 0 00-2 0v2H3c-.552 0-1-.448-1-1v-4z",fillRule:"nonzero",fill:"currentColor"})}))},q=function(e){return Object(i.jsx)("svg",Object(v.a)(Object(v.a)({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 40 75",height:70,width:70},e),{},{children:Object(i.jsx)("path",{d:"M35 50.001h-.523l.313-.782a4.001 4.001 0 00-2.31-5.23l-3.112-1.168a2.97 2.97 0 00.632-1.82v-2a2.969 2.969 0 00-.197-1.041 3.957 3.957 0 003.05-2.18 3.653 3.653 0 00-.428-3.928L21.45 17.84a.795.795 0 01-.079-.904 1.004 1.004 0 011.001-.497c2.987.294 5.152.817 6.26 1.514l2.334 1.469a2.033 2.033 0 002.477-.243l1.449-1.366a3.765 3.765 0 00.176-5.282l-3.091-3.335a16.896 16.896 0 00-5.211-3.8l-2.625-1.19V1.946A1.979 1.979 0 0022.137 0H19.17a3.031 3.031 0 00-2.635 1.493 9.92 9.92 0 00-.95 2.34c-1.689.186-7.389 1.142-10.163 5.688-2.17 3.557-1.967 8.353.587 14.253 0 .078-.009.148-.009.226 0 .133.027.265.078.387v9.77A3.828 3.828 0 008.36 37.61 2.961 2.961 0 008 39v2c.003.66.225 1.3.632 1.82L5.52 43.988a4 4 0 00-2.31 5.23l.313.783H3a3.003 3.003 0 00-3 3v4a3.004 3.004 0 003 3.001h32a3.004 3.004 0 003-3v-4a3.003 3.003 0 00-3-3zm-24-8c-.552 0-1-.447-1-1v-2c0-.552.448-.999 1-1h16c.552.001 1 .448 1 1v2c0 .553-.448 1-1 1H11zm20.055-7.097A2.004 2.004 0 0129.215 36h-6.654c.038-.042.08-.08.116-.123a5.987 5.987 0 001.339-4.863l-1.41-8.455 8.245 10.526c.423.512.503 1.226.204 1.82zM7.123 10.573a9.9 9.9 0 015.305-3.959 22.518 22.518 0 00-6 12.228c-.822-3.35-.607-6.128.695-8.27zm.897 12.894c.17-9.708 4.758-14.706 7.114-16.629-.012.257-.02.52-.02.793a1 1 0 002 0 10.22 10.22 0 011.155-5.142c.192-.312.535-.498.9-.489l2.972-.053v2.257a1.954 1.954 0 001.128 1.752l2.643 1.247a14.917 14.917 0 014.598 3.351l3.092 3.336a1.758 1.758 0 01-.083 2.467l-1.49 1.37-2.333-1.468c-1.388-.873-3.787-1.482-7.129-1.81a3.025 3.025 0 00-2.949 1.523 2.785 2.785 0 00.258 3.1l.155.199 2.012 12.072a3.991 3.991 0 01-.893 3.242A4.047 4.047 0 0118 36h-7.91a1.935 1.935 0 01-2.012-1.842V23.737a.99.99 0 00-.057-.27zm-2.953 25.01a2 2 0 011.156-2.616l4.96-1.86h15.635l4.96 1.86a2 2 0 011.155 2.616L32.323 50H5.677l-.61-1.525zM36 57c0 .553-.448 1-1 1h-1v-2a1 1 0 00-2 0v2h-2v-2a1 1 0 00-2 0v2h-2v-2a1 1 0 00-2 0v2h-2v-2a1 1 0 00-2 0v2h-2v-2a1 1 0 00-2 0v2h-2v-2a1 1 0 00-2 0v2h-2v-2a1 1 0 00-2 0v2H6v-2a1 1 0 00-2 0v2H3c-.552 0-1-.447-1-1v-4c0-.552.448-.999 1-1h1.997l.003.001h30c.552 0 1 .447 1 1v4z",fillRule:"nonzero",fill:"currentColor"})}))},T=function(e){return Object(i.jsx)("svg",Object(v.a)(Object(v.a)({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 40 75",height:70,width:70},e),{},{children:Object(i.jsx)("path",{d:"M3 60h32a3.003 3.003 0 003-3v-4a3.003 3.003 0 00-3-3h-.523l.313-.782a4.001 4.001 0 00-2.31-5.231l-3.112-1.167A2.97 2.97 0 0030 41a3.003 3.003 0 00-3-3h-1V21h1a3 3 0 000-6h-.613l1.389-4.166.01-.028 1.162-3.49a1 1 0 10-1.896-.632l-.571 1.713a9.984 9.984 0 00-3.86-2.703 4 4 0 10-7.241 0 9.984 9.984 0 00-3.86 2.703l-.572-1.713a1 1 0 10-1.896.632l1.163 3.49.01.028L11.612 15H11a3 3 0 000 6h1v17h-1a3.003 3.003 0 00-3 3c.003.66.225 1.3.632 1.82L5.52 43.987a4.001 4.001 0 00-2.31 5.231l.313.782H3a3.003 3.003 0 00-3 3v4a3.003 3.003 0 003 3zM19 7a7.993 7.993 0 015.266 2H13.734A7.993 7.993 0 0119 7zm-2-3a2 2 0 113.635 1.15c-1.08-.2-2.19-.2-3.27 0A1.977 1.977 0 0117 4zm-4.613 7h13.226l-1.333 4H13.72l-1.333-4zM10 18c0-.552.448-1 1-1h16a1 1 0 010 2H11c-.552 0-1-.448-1-1zm4 3h10v17H14V21zm-3 19h16a1 1 0 010 2H11a1 1 0 010-2zm-5.933 8.475a2 2 0 011.156-2.615l4.96-1.86h15.635l4.96 1.86a2 2 0 011.155 2.615L32.323 50H5.677l-.61-1.525zM2 53c0-.552.448-1 1-1h32c.552 0 1 .448 1 1v4c0 .552-.448 1-1 1h-1v-2a1 1 0 00-2 0v2h-2v-2a1 1 0 00-2 0v2h-2v-2a1 1 0 00-2 0v2h-2v-2a1 1 0 00-2 0v2h-2v-2a1 1 0 00-2 0v2h-2v-2a1 1 0 00-2 0v2h-2v-2a1 1 0 00-2 0v2H6v-2a1 1 0 00-2 0v2H3c-.552 0-1-.448-1-1v-4z",fillRule:"nonzero",fill:"currentColor"})}))},R=function(e){return Object(i.jsx)("svg",Object(v.a)(Object(v.a)({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 40 75",height:70,width:70},e),{},{children:Object(i.jsx)("path",{d:"M3 60h34a3.003 3.003 0 003-3v-4a2.993 2.993 0 00-1.656-2.667l.446-1.115a4 4 0 00-2.31-5.231l-3.909-1.466c.278-.459.426-.985.429-1.521v-2a3.003 3.003 0 00-3-3h-2.528a.98.98 0 00-.091-.434A23.55 23.55 0 0125.254 28H28a3.003 3.003 0 003-3v-2a3.003 3.003 0 00-3-3h-2.544a30.257 30.257 0 011.246-5.009 9 9 0 10-13.404 0A30.244 30.244 0 0114.544 20H12a3.003 3.003 0 00-3 3v2a3.003 3.003 0 003 3h2.749a23.384 23.384 0 01-2.13 7.566.98.98 0 00-.09.434H10a3.003 3.003 0 00-3 3v2c.003.536.15 1.062.429 1.521l-3.91 1.466a4 4 0 00-2.309 5.231l.446 1.115A2.993 2.993 0 000 53v4a3.003 3.003 0 003 3zm35-3c0 .552-.448 1-1 1h-2v-2a1 1 0 00-2 0v2h-2v-2a1 1 0 00-2 0v2h-2v-2a1 1 0 00-2 0v2h-2v-2a1 1 0 00-2 0v2h-2v-2a1 1 0 00-2 0v2h-2v-2a1 1 0 00-2 0v2h-2v-2a1 1 0 00-2 0v2H7v-2a1 1 0 00-2 0v2H3c-.552 0-1-.448-1-1v-4c0-.551.447-.998.999-1H37c.552.002.998.449.999 1v4zM15.05 4.05a7 7 0 119.901 9.898 7 7 0 01-9.9-9.898zm1.498 15.797a33.035 33.035 0 00-.561-2.796 8.96 8.96 0 008.027 0c-.226.92-.417 1.86-.562 2.795L23.43 20h-6.86l-.022-.153zM11 25v-2c0-.552.448-1 1-1h16c.552 0 1 .448 1 1v2c0 .552-.448 1-1 1H12c-.552 0-1-.448-1-1zm5.76 3h6.482a25.675 25.675 0 002.154 8H14.605a25.454 25.454 0 002.155-8zM9 39c0-.552.448-1 1-1h20c.552 0 1 .448 1 1v2c0 .552-.448 1-1 1H10c-.552 0-1-.448-1-1v-2zm-5.906 7.925a1.985 1.985 0 011.128-1.065l5.13-1.923.011-.008c.21.046.423.07.637.071h20c.214 0 .428-.025.637-.071l.012.008 5.13 1.923a2 2 0 011.154 2.615L36.323 50H3.677l-.61-1.525a1.987 1.987 0 01.027-1.55z",fillRule:"nonzero",fill:"currentColor"})}))},P=function(e){return Object(i.jsx)("svg",Object(v.a)(Object(v.a)({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 40 75",height:70,width:70},e),{},{children:Object(i.jsx)("path",{d:"M3 60h34a3.003 3.003 0 003-3v-4a2.993 2.993 0 00-1.656-2.667l.446-1.115a4.001 4.001 0 00-2.31-5.231l-3.909-1.466c.278-.459.426-.985.429-1.521v-2a3.003 3.003 0 00-3-3V20a3.003 3.003 0 003-3v-2a2.973 2.973 0 00-.735-1.945l.894-.859A6.031 6.031 0 0035 7.871V2a2.002 2.002 0 00-2-2h-2a2.002 2.002 0 00-2 2v2h-2V2a2.002 2.002 0 00-2-2h-2a2.002 2.002 0 00-2 2v2h-2V2a2.002 2.002 0 00-2-2h-2a2.002 2.002 0 00-2 2v2h-2V2a2.002 2.002 0 00-2-2H7a2.002 2.002 0 00-2 2v5.871a6.03 6.03 0 001.842 4.325l.893.859A2.973 2.973 0 007 15v2a3.003 3.003 0 003 3v16a3.003 3.003 0 00-3 3v2c.003.536.15 1.062.429 1.521l-3.91 1.466a4 4 0 00-2.309 5.231l.446 1.115A2.993 2.993 0 000 53v4a3.003 3.003 0 003 3zm35-3c0 .552-.448 1-1 1h-2v-2a1 1 0 00-2 0v2h-2v-2a1 1 0 00-2 0v2h-2v-2a1 1 0 00-2 0v2h-2v-2a1 1 0 00-2 0v2h-2v-2a1 1 0 00-2 0v2h-2v-2a1 1 0 00-2 0v2h-2v-2a1 1 0 00-2 0v2H7v-2a1 1 0 00-2 0v2H3c-.552 0-1-.448-1-1v-4c0-.551.447-.998.999-1H37A1 1 0 0138 53v4zM7 2h2v2a2.002 2.002 0 002 2h2a2.002 2.002 0 002-2V2h2v2a2.003 2.003 0 001.999 2H21A2.003 2.003 0 0023 4V2h2v2a2.002 2.002 0 002 2h2a2.002 2.002 0 002-2V2h2v5.871a4.023 4.023 0 01-1.228 2.884L30.477 12H9.523l-1.295-1.245A4.022 4.022 0 017 7.87V2zm2 15v-2c0-.552.448-1 1-1h20c.552 0 1 .448 1 1v2c0 .552-.448 1-1 1H10c-.552 0-1-.448-1-1zm3 3h16v16H12V20zM9 39c0-.552.448-1 1-1h20c.552 0 1 .448 1 1v2c0 .552-.448 1-1 1H10c-.552 0-1-.448-1-1v-2zm-5.906 7.925a1.985 1.985 0 011.128-1.065l5.13-1.923.011-.008c.21.046.423.07.637.071h20c.214 0 .428-.025.637-.071l.012.008 5.13 1.922a2 2 0 011.154 2.616L36.323 50H3.677l-.61-1.525a1.987 1.987 0 01.027-1.55z",fillRule:"nonzero",fill:"currentColor"})}))},E=(n={},Object(S.a)(n,"black",{bishop:Object(i.jsx)(F,{className:"pieces black_pieces",height:70}),king:Object(i.jsx)(I,{className:"pieces black_pieces",height:70}),queen:Object(i.jsx)(T,{className:"pieces black_pieces",height:70}),knight:Object(i.jsx)(q,{className:"pieces black_pieces",height:70}),pawn:Object(i.jsx)(R,{className:"pieces black_pieces",height:70}),rook:Object(i.jsx)(P,{className:"pieces black_pieces",height:70})}),Object(S.a)(n,"white",{bishop:Object(i.jsx)(F,{className:"pieces white_pieces",height:70}),king:Object(i.jsx)(I,{className:"pieces white_pieces",height:70}),queen:Object(i.jsx)(T,{className:"pieces white_pieces",height:70}),knight:Object(i.jsx)(q,{className:"pieces white_pieces",height:70}),pawn:Object(i.jsx)(R,{className:"pieces white_pieces",height:70}),rook:Object(i.jsx)(P,{className:"pieces white_pieces",height:70})}),function(e,t){return"pawn"===e.piece.type&&(e.rank+1===t.rank&&e.file!==t.file)}),D=function(e){var t=e.capture;return Object(i.jsx)("div",{style:{position:"absolute",left:"50%"},children:Object(i.jsx)("div",{style:{width:"30px",height:"30px",background:t?"rgba(200, 0, 0, 0.5)":"rgba(0, 0, 0, 0.2)",borderRadius:"50%",position:"relative",left:"-50%"}})})},U=function(e){var t=e.show_move,a=e.tile,c=e.onClick,n=e.on_check,s=e.moved_last,r=e.style,h=(e.children,Object(l.useContext)(w)),o=h.lastMove,j=h.kingOnCheck,u=h.selectedTile,b=h.playerSide;void 0!==o&&(s=o.prevSquare.file===a.file&&o.prevSquare.rank===a.rank||o.postSquare.file===a.file&&o.postSquare.rank===a.rank),void 0!==j&&(n=j.file===a.file&&j.rank===a.rank);var d=!(void 0===u||!u.piece)&&E(u,a);return Object(i.jsx)(i.Fragment,{children:Object(i.jsxs)("div",{onClick:c,className:Object(M.a)("tile",n&&"--on-check",s&&"--moved-last",!n&&!s&&function(){var e=["a","c","e","g"];return a.rank%2==1?e.includes(a.file)?"--variant1":"--variant2":e.includes(a.file)?"--variant2":"--variant1"}()),style:Object(v.a)({fontSize:"small",display:"flex",justifyContent:"center",alignItems:"center"},r),children:[function(){var e,t;if("white"===(null===(e=a.piece)||void 0===e?void 0:e.side.name))switch(a.piece.type){case"pawn":return G.white.pawn;case"bishop":return G.white.bishop;case"king":return G.white.king;case"queen":return G.white.queen;case"rook":return G.white.rook;case"knight":return G.white.knight}else if("black"===(null===(t=a.piece)||void 0===t?void 0:t.side.name))switch(a.piece.type){case"pawn":return G.black.pawn;case"bishop":return G.black.bishop;case"king":return G.black.king;case"queen":return G.black.queen;case"rook":return G.black.rook;case"knight":return G.black.knight}}(),!0===t?Object(i.jsx)(D,{capture:null!==a.piece||d}):Object(i.jsx)(i.Fragment,{}),"a"===a.file?Object(i.jsx)("div",{style:{position:"absolute",top:"5px",left:"5px"},children:a.rank}):Object(i.jsx)(i.Fragment,{}),"white"===b?1===a.rank?Object(i.jsx)("div",{style:{position:"absolute",bottom:"5px",right:"5px"},children:a.file}):Object(i.jsx)(i.Fragment,{}):8===a.rank?Object(i.jsx)("div",{style:{position:"absolute",bottom:"5px",right:"5px"},children:a.file}):Object(i.jsx)(i.Fragment,{})]})})},J=function(e,t){return t},W=function(e){var t=e.gameId,a=e.playerSide,c=e.onGameEnd,n=(e.clockTimer,e.disableBoard),s=void 0!==n&&n,r=Object(l.useState)(t),h=Object(o.a)(r,2),v=h[0],j=(h[1],Object(l.useState)(s)),u=Object(o.a)(j,2),b=u[0],d=u[1],O=Object(l.useState)(J(0,a)),m=Object(o.a)(O,2),p=m[0],g=(m[1],Object(l.useState)()),x=Object(o.a)(g,2),k=x[0],z=x[1],H=Object(l.useState)(),M=Object(o.a)(H,2),S=M[0],_=M[1],L=Object(l.useState)("white"),A=Object(o.a)(L,2),V=A[0],N=A[1],B=Object(l.useState)(),G=Object(o.a)(B,2),F=G[0],I=G[1],q=Object(l.useState)(),T=Object(o.a)(q,2),R=T[0],P=T[1],E=Object(l.useState)([]),D=Object(o.a)(E,2),W=D[0],Y=D[1],K=Object(l.useState)(),Q=Object(o.a)(K,2),X=Q[0],Z=Q[1],$=Object(l.useState)("Q"),ee=Object(o.a)($,2),te=(ee[0],ee[1],Object(l.useState)(!1)),ae=Object(o.a)(te,2),ce=(ae[0],ae[1]),ne=Object(l.useState)(),ie=Object(o.a)(ne,2),le=(ie[0],ie[1]),se=Object(l.useContext)(f),re=function(e,t){d((function(){return!0})),ce((function(){return!0}));var a={endedBy:e,winingSide:t};le(a),console.log(a),c&&c(a)};Object(l.useEffect)((function(){!function(){var e=se.game.board.squares.map((function(e,t){var a=[];se.validMoves.map((function(t){e.file===t.src.file&&e.rank===t.src.rank&&(a=void 0!==a?[].concat(Object(y.a)(t.squares),Object(y.a)(a)):t.squares)}));var c=!1;return null===R||void 0===R||R.map((function(t){t.file===e.file&&t.rank===e.rank&&(c=!0)})),Object(i.jsx)(U,{style:{transform:"white"===p?"rotate(180deg) rotateY(180deg)":"rotate(0deg)"},tile:e,moved_last:!1,on_check:!1,show_move:c,onClick:function(t){if(!b)if(c){var n=se.getStatus().notatedMoves,i=Object.keys(n).find((function(t){var a=n[t],c=a.dest,i=a.src;return c.file===e.file&&c.rank===e.rank&&i.file===S.file&&i.rank===S.rank})),l=se.move(i);Y((function(e){return[].concat(Object(y.a)(e),[l])})),console.log(l),P([]),N(he()),_(void 0),oe()}else a.length>0&&void 0!==e.piece&&J(0,e.piece.side.name)===J(0,p)&&(_(e),P(a))}},t)}));z(e)}()}),[S,p,V,F,R,X,W,b]),Object(l.useEffect)((function(){se&&(se.on("check",(function(e){var t=e.attackingSquare,a=e.kingSquare;console.log("The King is under attack!"),Z(a),console.log(t,a)})),se.on("castle",(function(e){console.log("A castle has occured!"),console.log(e)})),se.on("enPassant",(function(e){console.log("An en Passant has occured!"),console.log(e)})),se.on("promote",(function(e){console.log("A Pawn has been promoted!"),console.log(e)})),se.on("capture",(function(e){console.log("A piece has been captured!"),console.log(e)})),se.on("checkmate",(function(e){e.attackingSquare;var t=e.kingSquare;console.log("The game has ended due to checkmate!"),Z((function(){return t})),re("Check Mate",V),console.log(t)})))}),[]);var he=function(){return"white"===p?"black":"white"},oe=function(){if(W.length>0){var e=W[W.length-1].move;I(e)}},ve={display:"grid",gridTemplateColumns:"repeat(8, 1fr)",gridTemplateRows:"repeat(8, 1fr)",transform:"white"===p?"rotate(180deg) rotateY(180deg)":""};return Object(i.jsxs)("div",{children:[Object(i.jsxs)("div",{style:{display:"flex",justifyContent:"space-between",margin:"10px 50px",width:"100%",flexWrap:"wrap"},children:[Object(i.jsxs)("h6",{children:["game_id: ",v]}),Object(i.jsxs)("h6",{children:["My side:",p]}),Object(i.jsxs)("h6",{children:["turn:",V]}),Object(i.jsx)("button",{onClick:function(){return function(){if(console.log(se.game.moveHistory),W.length>0){var e=W;console.log(e),e[e.length-1].undo(),e.pop(),Y(e),console.log({history:se.game.moveHistory}),console.log({notatedMoves:se.getStatus().notatedMoves})}}()},children:"Undo"})]}),Object(i.jsx)("div",{style:{display:"flex",flexDirection:"column",justifyContent:"right"},children:Object(i.jsx)(w.Provider,{value:{lastMove:F,kingOnCheck:se.isCheck?X:void 0,selectedTile:S,playerSide:p},children:Object(i.jsx)(C,{onTimeUp:function(e){re("Time Up",e)},player_side:p,turn_to_play:V,children:Object(i.jsx)("div",{style:ve,children:k})})})})]})},Y=function(){return Object(i.jsx)(f.Provider,{value:H.a.createSimple(),children:Object(i.jsx)(W,{gameId:"",playerSide:"",disableBoard:!0})})},K=H.a.create({PGN:!0}),Q=function(e){Object(l.useEffect)((function(){console.log("initialising Game..."),a()}),[]);var t=Object(l.useContext)(k),a=function(){t.on("move",(function(e,t){console.log({socketIOSentMove:e}),K.move(e.algebraic)}))};return Object(i.jsx)(f.Provider,{value:K,children:Object(i.jsx)(W,Object(v.a)({},e))})},X=x()(),Z=function(){var e=Object(l.useState)("createGame"),t=Object(o.a)(e,2),a=t[0],c=t[1],n=Object(l.useState)(!1),s=Object(o.a)(n,2),r=s[0],h=s[1],g=Object(l.useState)(""),x=Object(o.a)(g,2),f=x[0],w=x[1],z=Object(l.useState)(""),H=Object(o.a)(z,2),y=H[0],C=H[1],M=Object(l.useState)(""),S=Object(o.a)(M,2),_=S[0],L=S[1],A=Object(l.useState)(""),V=Object(o.a)(A,2),N=V[0],B=V[1],G=Object(l.useState)(!1),F=Object(o.a)(G,2),I=F[0],q=F[1],T=j.a.useForm(),R=Object(o.a)(T,1)[0];return Object(i.jsxs)(i.Fragment,{children:[I?Object(i.jsx)(k.Provider,{values:X,children:Object(i.jsx)(Q,{gameId:f,playerSide:y,opponent:_,username:N})}):Object(i.jsx)(Y,{}),r?"createGame"===a?Object(i.jsxs)(u.a,{style:{position:"absolute",background:"rgb(200, 200, 200)",width:"500px"},children:["Waiting for friend to join Game ...",Object(i.jsx)(b.a,{title:"Game ID",value:f})]}):Object(i.jsx)(i.Fragment,{}):Object(i.jsxs)(j.a,Object(v.a)(Object(v.a)({style:{position:"absolute",background:"rgb(200, 200, 200)",width:"500px"}},{labelCol:{span:8},wrapperCol:{span:12}}),{},{form:R,layout:"horizontal",name:"friendGameForm",initialValues:{activity:"createGame",time:"3"},onValuesChange:function(e){var t=e.activity;console.log({activity:a,choice:t}),t&&t!==a&&c(t)},onFinish:function(e){var t=e;if(B((function(){return e.username})),console.log({finishValues:e}),X.on("start-game",(function(t){t.white===e.username?(C((function(){return"white"})),L((function(){return t.black}))):(C((function(){return"black"})),L((function(){return t.white}))),q(!0)})),"createGame"===e.activity)X.on("game-id",(function(e){w((function(){return e})),h(!0)})),X.emit("create-game",e.username,t);else{if("joinGame"!==e.activity)throw X.disconnect(),new Error("Error Filling Form");X.emit("join-game",e.gameId,e.username),w(e.gameId)}},children:[Object(i.jsx)(j.a.Item,{label:"",name:"activity",children:Object(i.jsxs)(d.a.Group,{value:"createGame",children:[Object(i.jsx)(d.a.Button,{value:"createGame",children:"Create Game"}),Object(i.jsx)(d.a.Button,{value:"joinGame",children:"Join Game"})]})}),Object(i.jsx)(j.a.Item,{label:"Username",name:"username",rules:[{required:!0,message:"Please input your username!"}],children:Object(i.jsx)(O.a,{})}),"createGame"===a?Object(i.jsxs)(i.Fragment,{children:[Object(i.jsx)(j.a.Item,{name:"stakeAmount",label:"Stake Amount",rules:[{required:!0}],children:Object(i.jsxs)(m.a,{placeholder:"Select amount of coins to leverage ",allowClear:!0,children:[Object(i.jsx)(m.a.Option,{value:"0",children:"0 TNBC"}),Object(i.jsx)(m.a.Option,{value:"50",children:"50 TNBC"}),Object(i.jsx)(m.a.Option,{value:"100",children:"100 TNBC"}),Object(i.jsx)(m.a.Option,{value:"250",children:"200 TNBC"}),Object(i.jsx)(m.a.Option,{value:"500",children:"500 TNBC"}),Object(i.jsx)(m.a.Option,{value:"1000",children:"1000 TNBC"})]})}),Object(i.jsx)(j.a.Item,{label:"Time",name:"time",children:Object(i.jsxs)(d.a.Group,{value:"3",children:[Object(i.jsx)(d.a.Button,{value:"1",children:"1 min"}),Object(i.jsx)(d.a.Button,{value:"2",children:"2 min"}),Object(i.jsx)(d.a.Button,{value:"3",children:"3 min"}),Object(i.jsx)(d.a.Button,{value:"5",children:"5 min"}),Object(i.jsx)(d.a.Button,{value:"10",children:"10 min"})]})})]}):Object(i.jsx)(j.a.Item,{name:"gameId",label:"Game ID",rules:[{required:!0}],children:Object(i.jsx)(O.a,{})}),Object(i.jsx)(j.a.Item,{children:Object(i.jsx)(p.a,{type:"primary",htmlType:"submit",children:"createGame"===a?"Create Game":"Join Game"})})]}))]})};var $=function(){var e=Object(l.useState)(""),t=Object(o.a)(e,2),a=t[0],c=t[1],n=Object(l.useState)(),s=Object(o.a)(n,2),r=s[0],h=(s[1],Object(l.useState)()),v=Object(o.a)(h,2),j=v[0],u=v[1];return Object(i.jsx)("div",{className:"App",children:Object(i.jsxs)("header",{className:"App-header",children:[Object(i.jsxs)("div",{style:{display:"flex",flexWrap:"wrap"},children:[Object(i.jsx)("button",{onClick:function(){return c("friend")},children:"Play Friend"}),Object(i.jsx)("button",{onClick:function(){return c("online")},children:"Play Online"}),Object(i.jsx)("button",{onClick:function(){return c("tournament")},children:"Play Tournament"}),Object(i.jsx)("button",{onClick:function(){return c("botVbot")},children:"Bot Vs Bot"}),Object(i.jsx)("button",{onClick:function(){return c("watch")},children:"Watch Game"})]}),"friend"===a?Object(i.jsx)(i.Fragment,{}):"botVbot"===a?{}:"online"===a?Object(i.jsx)(Z,{}):"tournament"===a?Object(i.jsx)("div",{children:"Coming Soon!"}):"watch"===a?Object(i.jsxs)("div",{children:[" ",null===r||void 0===r?void 0:r.map((function(e){return Object(i.jsxs)(i.Fragment,{children:[void 0!==j?{}:Object(i.jsx)(i.Fragment,{}),Object(i.jsx)("div",{style:{display:"flex",flexDirection:"column",margin:"10px"},children:Object(i.jsxs)("div",{style:{margin:"5px",borderRadius:"3px",backgroundColor:"lightblue",padding:"5px 10px",cursor:"pointer",fontSize:"small",color:"black"},onClick:function(){console.log({game:e}),u(e)},children:["Game ID: ",e._id]})})]})}))]}):Object(i.jsx)(i.Fragment,{})]})})},ee=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,618)).then((function(t){var a=t.getCLS,c=t.getFID,n=t.getFCP,i=t.getLCP,l=t.getTTFB;a(e),c(e),n(e),i(e),l(e)}))};h.a.render(Object(i.jsx)(s.a.StrictMode,{children:Object(i.jsx)($,{})}),document.getElementById("root")),ee()}},[[609,1,2]]]);
//# sourceMappingURL=main.976e3d40.chunk.js.map