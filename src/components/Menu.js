import React from "react";
import { NavLink } from "react-router-dom";

export default function Menu() {
    return ( <
        div className = "menu" >
        <
        ul >
        <
        li >
        <
        NavLink to = "/"
        className = {
            ({ isActive }) => (isActive ? "activelink" : undefined) } >
        HOME <
        /NavLink> <
        /li> <
        li >
        <
        NavLink to = "/add"
        className = {
            ({ isActive }) => (isActive ? "activelink" : undefined) } >
        ADD TECHNO <
        /NavLink> <
        /li> <
        li >
        <
        NavLink to = "/list"
        className = {
            ({ isActive }) => (isActive ? "activelink" : undefined) } >
        ALL TECHNOS <
        /NavLink> <
        /li> <
        /ul> <
        /div>
    );
}