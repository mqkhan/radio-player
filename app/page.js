"use client";

import { useEffect } from "react";
import { useState } from "react";
import Search from "./components/Search";
import List from "./components/List";
import ActualList from "./components/ActualList";

export default function Home() {
  const [channels, setChannels] = useState([]);
  const [search, setSearch] = useState("");

  async function getChannels() {
    const result = await fetch(
      "https://api.sr.se/api/v2/channels?format=json&size=100"
    );
    const data = await result.json();
    setChannels(data.channels);
  }

  useEffect(() => {
    getChannels();
  }, []);

  const filterdList = channels.filter((channel) => {
    return channel.name.toLowerCase().includes(search) && search !== "";
  });

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="container flex flex-wrap text-2xl items-center justify-center bg-slate-300 rounded-md md:w-2/4 h-1/4">
        <div className="list flex flex-col flex-wrap">
          <h1>List of Sverige Radio Channels</h1>
          <Search search={search} setSearch={setSearch} />
          <List filterdList={filterdList} />
          <hr />
          <ActualList channels={channels} />
        </div>
      </div>
    </div>
  );
}
