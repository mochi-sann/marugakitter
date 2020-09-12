import React from "react";
import Head from "next/head";

import Link from "next/link";
import { Container, Navbar } from "react-bootstrap";
import styles from "./Header.module.scss";

export default function TopHeader() {
  return (
    <div className={styles.topbar}>
      <Head>

      </Head>
      {/* <Container>
        <Link href="/" className={styles.backtohome}>
          
        </Link>
      </Container> */}
      <Navbar bg="dark" variant="dark">
        <Link href="/">
          <Navbar.Brand >
            <p className={styles.home}>Home</p>
          {/* React Bootstrap */}
        </Navbar.Brand>
        </Link>

      </Navbar>

      {/* <main>{children}</main> */}
    </div>
  );
}
