/* eslint-disable prettier/prettier */
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { App, Podcasts, MovieCollection } from './App';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap-grid.min.css';

//put all style sheets here and they will be applied to this

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/MyPodcasts" element={<Podcasts />} />
      <Route path="/MovieCollection" element={<MovieCollection />} />
    </Routes>
  </BrowserRouter>,
);
