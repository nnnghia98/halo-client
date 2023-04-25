// import { BrowserRouter as Router, Switch } from "react-router-dom";

import { HeaderNavbar, Footer } from "components";
// import { HomeRouter } from "router";

import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <HeaderNavbar />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}

export default MyApp;

// function App() {
//   return (
//     <div className="App">
//       <Router>
//         <Switch>
//           <HomeRouter />
//         </Switch>
//       </Router>
//     </div>
//   );
// }
