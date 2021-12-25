import "./App.css";
import React, { useState } from "react";
import Item from "./components/Item/Item";
import UpdateModal from "./components/UpdateModal/UpdateModal";
import Header from "./components/Header/Header";

const App = () => {
  const [localData, setLocalData] = useState([
    {
      id: 0,
      brand: "Nike",
      url: "https://static.wixstatic.com/media/ea0c98_3318b95930b64dda86f4380032f3dbdb~mv2.jpg/v1/fill/w_1125,h_745,al_c,q_85/ea0c98_3318b95930b64dda86f4380032f3dbdb~mv2.jpg",
      price: "229$",
    },
    {
      id: 1,
      brand: "Adidas",
      url: "https://shelta.eu/pub_images/large/EG4958_1.jpg?timestamp=1627308293",
      price: "179$",
    },
    {
      id: 2,
      brand: "Nike",
      url: "https://image.goat.com/1000/attachments/product_template_pictures/images/018/783/111/original/488879_00.png.png",
      price: "860$",
    },
    {
      id: 3,
      brand: "NewBalance",
      url: "https://www.efootwear.eu/media/catalog/product/cache/image/650x650/0/0/0000207745407_01_rz.jpg",
      price: "180$",
    },
  ]);
  const [isUpdateModalOpen, setIsUpdateModalOpen] = useState(false);
  const [count, setCart] = useState(0);
  // delete shoe
  const deleteShoe = (id) => {
    const newArray = localData.filter((item) => {
      return item.id !== id;
    });
    setLocalData(newArray);
  };

  // toggle modal
  const toggleUpdateModal = (id) => {
    setIsUpdateModalOpen(!isUpdateModalOpen);
    console.log(isUpdateModalOpen);
  };

  // update shoe
  const updateShoe = (id) => {
    console.log(id);
  };
  // add to cart
  const addToCart = () => {
    setCart((count) => count + 1);
  };
  return (
    <div className="main-container">
      <Header 
      count={count}
      />
      <div className="shoes-list">
        {localData.map((shoe) => {
          return (
            <Item
              id={shoe.id}
              deleteItem={deleteShoe}
              toggleUpdateModal={toggleUpdateModal}
              addToCart={addToCart}
              key={shoe.id}
              type={shoe.brand}
              img={shoe.url}
              price={shoe.price}
            />
          );
        })}
      </div>
      <div className="update-modal">
        {isUpdateModalOpen && <UpdateModal updateShoe={updateShoe} />}
      </div>
    </div>
  );
};
export default App;
