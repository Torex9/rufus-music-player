import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Feed from '../feed/feed';
import Trending from '../trending/trending';
import Player from '../player/player';
import Favourites from '../favourites/favourites';
import Libraries from '../libraries/index.js';
import "./home.css";
import Sidebar from "../../components/sidebar";

export default function Home() {
  return (
    <Router>
      <div className="main-body">
        <Sidebar />
        <Routes>
            <Route path='/' element = {<Libraries />} />
            <Route path="/feed" element={<Feed />} />
            <Route path="/trending" element={<Trending />} />
            <Route path="/player" element={<Player />} />
            <Route path="/favourites" element={<Favourites />} />    
        </Routes>
      </div>
        
    </Router>
  )
}
