import { Router } from "@reach/router"
import React, { useMemo } from "react"
import { TinaCMS, TinaProvider } from "tinacms"
import { Link } from "gatsby"

import { One } from "../components/one";
import { Two } from "../components/two";

export default function Index () {
  const cms = useMemo(
    () =>
      new TinaCMS({
        sidebar: true,
        enabled: true,
      }),
    [],
  )
  return (
    <TinaProvider cms={cms}>
      <Link to="/one">One</Link>&nbsp;<Link to="/two">Two</Link>
      <Router>
        <One path="/one" />
        <Two path="/two" />
      </Router>
    </TinaProvider>
  )
}
