import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import RangeSlider from "react-bootstrap-range-slider";
import SizeCheckboxGroup from "../Components/SizePicker";
import Checkbox from "../Components/CheckBox";
import ProductCollection from "../Components/ProductCollection";

const ProductPage = () => {
  const { data } = useLocation().state;
  const [value, setValue] = useState(169);
  const [selectedColors, setSelectedColors] = useState([]);
  const [selectedSizes, setSelectedSizes] = useState([]);
  const [searchQuery, setSearchQuery] = useState(""); // State for search query
  const [filteredData, setFilteredData] = useState(data);

  useEffect(() => {
    setFilteredData(data);
  }, [data]);

  useEffect(() => {
    if (selectedColors.length === 0 && selectedSizes.length === 0) {
      setFilteredData(data);
    } else {
      const newData = data.filter(
        (item) =>
          selectedColors.includes(item.color) || selectedSizes.includes(item.size)
      );
      setFilteredData(newData);
    }
  }, [selectedColors, selectedSizes]);

  useEffect(() => {
    // Filter data based on search query
    if (searchQuery.trim() === "") {
      // If the search query is empty, show all data
      setFilteredData(data);
    } else {
      const newData = data.filter((item) =>
        item.name && item.name.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setFilteredData(newData);
    }
  }, [searchQuery, data]);

  const handleColorChange = (color) => {
    if (selectedColors.includes(color)) {
      setSelectedColors(selectedColors.filter((c) => c !== color));
    } else {
      setSelectedColors([...selectedColors, color]);
    }
  };

  const handleSizeChange = (size) => {
    if (selectedSizes.includes(size)) {
      setSelectedSizes(selectedSizes.filter((s) => s !== size));
    } else {
      setSelectedSizes([...selectedSizes, size]);
    }
  };

  const colorOptions = [
    { value: "white", label: "White" },
    { value: "black", label: "Black" },
    { value: "grey", label: "Grey" },
    { value: "blue", label: "Blue" },
    { value: "brown", label: "Brown" },
    { value: "green", label: "Green" },
    { value: "pink", label: "Pink" },
    { value: "red", label: "Red" },
  ];

  return (
    <>
      <hr style={{ margin: "0px" }} />
      <div className="container">
        <Link className="nav-link active my-3" to="/">
          Home /
        </Link>
        <div
          className="row border text-light"
          style={{
            height: "10.5rem",
            padding: "60px",
            backgroundColor: "#685f58",
          }}
        >
          <h1></h1>
        </div>
        <div className="row">
          <div className="col-lg-3">
            <div className="my-4">
              <b>SHOP BY</b>
            </div>
            <div>
              <div className="">Price</div>
              <RangeSlider
                value={value}
                min={169}
                max={802}
                onChange={(changeEvent) =>
                  setValue(changeEvent.target.value)
                }
              />
            </div>
            <div className="my-4">
              <div>COLOR</div>
              <hr />
            </div>
            <div className="flex-column d-flex">
              {colorOptions.map((option) => (
                <Checkbox
                  key={option.value}
                  label={option.label}
                  checked={selectedColors.includes(option.value)}
                  onChange={() => handleColorChange(option.value)}
                />
              ))}
            </div>
            <div className="my-4">
              <div>SIZE</div>
              <hr />
            </div>
            <div>
              <SizeCheckboxGroup
                selectedSizes={selectedSizes}
                onSizeChange={handleSizeChange}
              />
            </div>
            <div className="my-4">
              <div>BRAND</div>
              <hr />
              <div>
                <input className="brand-checkbox" type="checkbox" name="" id="" />
                Converse
              </div>
              <div>
                <input className="brand-checkbox" type="checkbox" name="" id="" />
                Nike
              </div>
            </div>
          </div>
          <div className=" row col-lg-9 col-xl-9 col-xs-9 col-sm-9 ">
            <div className="container">
              <div className="col-lg-13 col-xl-3col-xs-3 col-sm-3 mx-3  my-3">
                <input type="search"
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="Search"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
              <ProductCollection data={filteredData} />
            </div>
            {/* <div className="col-lg-3 col-xl-3 col-xs-3 col-sm-3  my-2">
              <select className="form-select" aria-label="Default select example">
                <option selected>Please Select</option>
                <option value="1">Price</option>
                <option value="2">Name</option>
                <option value="3">Three</option>
              </select>
            </div> */}
            {/* <ProductCollection data={filteredData}/> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductPage;
