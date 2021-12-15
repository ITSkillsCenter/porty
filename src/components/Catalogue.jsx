
import CatalogueCard from "./CatalogueCard";
import React, {  useEffect, useState } from "react";
import Categories from "./Categories";

const Catalogue = () => {
  const data = [
    {
      name: "All",
    },

    {
      name: "Drone Shoots",
    },
    {
      name: "Nature",
    },
    {
      name: "Actions",
    },
    {
      name: "Featured",
    },
  ];

  const [card, setCard]  = useState([]);

    const getAllCard = () => {

      fetch('https://3b7a-129-18-182-91.ngrok.io/api/catalogue')
      .then( response => response.json(
        console.log('hello',response)
      ))
      .then(json => {

          setCard(json);
      })

    }
    useEffect(() => {
      getAllCard();

    }, [   ])

  return (
    <div class="container-fluid">
      <div id="content" class="mx-auto tm-content-container">
        <main>
          <div class="row">
            <div class="col-12">
              <h2 class="tm-page-title mb-4">Our Video Catalog</h2>
              <div class="tm-categories-container mb-5">
                <h3 class="tm-text-primary tm-categories-text">Categories:</h3>
                <ul class="nav tm-category-list">
                  {data.map((items) => (
                    <Categories name={items.name} />
                  ))}
                </ul>
              </div>
            </div> 
          </div>
           
        </main>
       
     {card.map((catalogue, index) => {
          return (
            <CatalogueCard key={index}  {...catalogue} />
            
          )
        })}
      </div>
    </div>
  );
};
export default Catalogue;
