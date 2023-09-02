import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Navbar from "./components/Layout/Navbar.jsx";
import Dashboard from "./components/pages/Dashboard.jsx";
import Listings from "./components/pages/Listings.jsx";
import Orders from "./components/pages/Orders.jsx";
import Transactions from "./components/pages/Transactions.jsx";
import Support from "./components/pages/Support.jsx";
import Blogs from "./components/pages/Blogs.jsx";
import AddListing from "./components/pages/AddListing.jsx";
import ManageListings from "./components/pages/ManageListings.jsx";
function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/listings" element={<Listings />} />
          <Route path="/listings/addlisting" element={<AddListing />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/transactions" element={<Transactions />} />
          <Route path="/support" element={<Support />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/manageall" element={<ManageListings />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
