import React from 'react';

import * as styles from "../../styles/navbar.module.scss";

export default function Navbar() {
    return (
        <nav className={`${styles.navbar} container fixed w-full m-4 lg:m-8`}>
            <h1 className={`${styles.navbar__logo} text-2xl font-bold`}>
                <img src="logo.jpg" />
                Ninjas
            </h1>
        </nav>
    )
}