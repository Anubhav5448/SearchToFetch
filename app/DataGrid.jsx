'use client'

import { useState, useEffect } from "react";
import datas from "./datas.json"

const DataGrid = () => {
    const [data, setData] = useState([]);
    const [filteredData, setFilteredData] = useState([]);
    const [selectedItem, setSelectedItem] = useState(null);
    const [searchTerm, setSearchTerm] = useState("");


    useEffect(() => {
      setData(datas);
      setFilteredData(datas);
    }, []);

    const handleClick = (item) => {
      setSelectedItem(item);
    };

    const handleSearch = (event) => {
      const term = event.target.value;
      setSearchTerm(term);
      const filtered = data.filter(item => 
        item.title.toLowerCase().includes(term)
      );
      setFilteredData(filtered);
    };

    return (
      <div className="mx-auto p-4">
        <input
          type="text"
          placeholder="Search by title..."
          value={searchTerm}
          onChange={handleSearch}
          className="w-full text-black p-2 mb-4 rounded"
        />

        <div className="grid grid-cols-3 gap-4 ">
          {filteredData.map((item) => (
            <div
              key={item.id}
              className="border p-4 cursor-pointer rounded-xl"
              onClick={() => handleClick(item)}
            >
              <img src={item.image} alt={item.title} className="w-full h-48 object-cover mb-2" />
              <h2 className="text-xl font-bold">{item.title}</h2>
            </div>
          ))}
        </div>

        {selectedItem && (
          <div className="mt-6 p-4 border rounded-xl">
            <img src={selectedItem.image} alt={selectedItem.title} className="w-full h-64 object-cover mb-4" />
            <h2 className="text-2xl font-bold mb-2">{selectedItem.title}</h2>
            <p>{selectedItem.description}</p>
          </div>
        )}
      </div>
    );
}

export default DataGrid
