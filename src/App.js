import React, { lazy, Suspense } from "react";

//import of components
const Homepage = lazy(() => import("./Homepage"));
const Header = lazy(() => import("./Header"));
const Footer = lazy(() => import("./Footer"));
function App() {
  return (
    <div className="App">
      <Suspense fallback={<p>Loading...</p>}>
        <Header></Header>
        <Homepage></Homepage>
        <Footer></Footer>
      </Suspense>
    </div>
  );
}

export default App;
