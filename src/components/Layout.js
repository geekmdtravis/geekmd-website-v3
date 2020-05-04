import React, { useEffect } from "react"

import Footer from "../components/Footer"
import Navbar from "../components/Navbar"

import "./all.scss"

const nonHttpProtocols = ["mailto:", "tel:"]
const connectionProtocols = ["http", "https"]
const nonExternalAddressList = [
  "0.",
  "10.",
  "100.",
  "127.",
  "169.254.",
  "172.16.",
  "172.17.",
  "172.18.",
  "172.19.",
  "172.20.",
  "172.21.",
  "172.22.",
  "172.23.",
  "172.24.",
  "172.25.",
  "172.26.",
  "172.27.",
  "172.28.",
  "172.29.",
  "172.30.",
  "172.31.",
  "192.0.0.",
  "192.0.1.",
  "192.0.2.",
  "192.168.",
  "geekmd.io",
  "development.geekmd.io",
  "www.geekmd.io",
]

const Layout = ({ children }) => {
  useEffect(() => {
    let anchors = document.getElementsByTagName("a")

    Array.from(anchors).forEach(a => {
      connectionProtocols.forEach(connectionProtocol => {
        nonExternalAddressList.forEach(address => {
          if (
            !a.href
              .toLowerCase()
              .startsWith(`${connectionProtocol}://${address}`.toLowerCase())
          ) {
            a.setAttribute("target", "_blank")
          }
        })
      })

      nonHttpProtocols.forEach(protocol => {
        if (!a.href.toLowerCase().startsWith(protocol.toLowerCase())) {
          a.setAttribute("target", "_blank")
        }
      })
    })
  })
  return (
    <div>
      <Navbar />
      <div>{children}</div>
      <Footer />
    </div>
  )
}

export default Layout
