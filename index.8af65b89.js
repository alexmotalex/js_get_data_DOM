var e=document.getElementsByClassName("population"),n=null,r=!0,t=!1,l=void 0;try{for(var o,a=e[Symbol.iterator]();!(r=(o=a.next()).done);r=!0){var u=o.value,i=Number(u.innerHTML.replace(/,/g,""));n+=i}}catch(e){t=!0,l=e}finally{try{r||null==a.return||a.return()}finally{if(t)throw l}}var c=n/e.length,y=n.toLocaleString("en-US"),m=c.toLocaleString("en-US");document.querySelector(".total-population").innerHTML=y,document.querySelector(".average-population").innerHTML=m;
//# sourceMappingURL=index.8af65b89.js.map
