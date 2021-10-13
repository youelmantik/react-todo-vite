import{j as u,r as f,R as m,a as p}from"./vendor.1169e33a.js";const h=function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))c(s);new MutationObserver(s=>{for(const e of s)if(e.type==="childList")for(const i of e.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&c(i)}).observe(document,{childList:!0,subtree:!0});function n(s){const e={};return s.integrity&&(e.integrity=s.integrity),s.referrerpolicy&&(e.referrerPolicy=s.referrerpolicy),s.crossorigin==="use-credentials"?e.credentials="include":s.crossorigin==="anonymous"?e.credentials="omit":e.credentials="same-origin",e}function c(s){if(s.ep)return;s.ep=!0;const e=n(s);fetch(s.href,e)}};h();const t=u.exports.jsx,l=u.exports.jsxs,N=()=>t("div",{className:"header",children:t("span",{children:"Todo List"})});const v=({addList:o,length:a})=>{const[n,c]=f.exports.useState("");return t("div",{className:"add",children:l("form",{onSubmit:s=>{s.preventDefault(),n===""||n===null?alert("Todo List cannot be empty"):o({id:a+1,todo:n,status:"list"}),c("")},children:[t("input",{type:"text",placeholder:"Type Your Todo List Here...",value:n,onChange:s=>c(s.target.value)}),t("button",{type:"submit",children:t("i",{className:"fa fa-arrow-right"})})]})})};const y=({lists:o,deleteList:a,changeStatus:n})=>{let c=[],s=[];return o.map(e=>{e.status.includes("done")?c.push(e):s.push(e)}),c?l("div",{className:"list-container",children:[s.map((e,i)=>l("div",{className:e.status,children:[t("p",{className:"todo",id:i,children:e.todo},e.id),l("div",{className:"button",children:[t("i",{className:"fa fa-minus",onClick:()=>a(e.id)},e.id),t("i",{className:"fa fa-check",onClick:()=>n(e.id)})]})]},e.id)),c.map((e,i)=>l("div",{className:e.status,children:[t("p",{className:"todo",children:e.todo},e.id),l("div",{className:"button",children:[t("i",{className:"fa fa-minus",onClick:()=>a(e.id)},e.id),t("i",{className:"fa fa-check",onClick:()=>n(e.id)})]})]},e.id))]}):t("div",{className:"list-container",children:s.map(e=>l("div",{className:e.status,children:[t("p",{className:"todo",children:e.todo},e.id),l("div",{className:"button",children:[t("i",{className:"fa fa-minus",onClick:()=>a(e.id)},e.id),t("i",{className:"fa fa-check",onClick:()=>n(e.id)})]})]},e.id))})};function g(){let[o,a]=f.exports.useState([]);const n=i=>{c(i.todo)?alert("Todo List is already made"):a([...o,i])};function c(i){let d=!1;return o.forEach(r=>{r.todo===i&&(d=!0)}),d}const s=i=>{let d=[];o.forEach(r=>{r.id!==i&&d.push({id:r.id,todo:r.todo,status:r.status})}),a(d)},e=i=>{let d=[];o.forEach(r=>{r.id===i?d.push({id:r.id,todo:r.todo,status:"list done"}):d.push({id:r.id,todo:r.todo,status:r.status})}),a(d)};return l("div",{className:"container",children:[t(N,{}),t(v,{addList:n,length:Object.keys(o).length}),t(y,{lists:o,deleteList:s,changeStatus:e})]})}m.render(t(p.StrictMode,{children:t(g,{})}),document.getElementById("root"));
