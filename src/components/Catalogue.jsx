import React from "react";
import CatalogueCard from "./CatalogueCard";
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

  const items = [{
    image:"hello",
    video:"whatsup",
    title:"Am coming",
    description:"Take care",
  }
  ]

  // const [data, setData]  = useState([]);

  //   const getAllCard = () => {

  //     fetch('http://localhost:8000/api/')
  //     .then( response => response.json())
  //     .then(json => {

  //         setData(json);
  //     })

  //   }
  //   useEffect(() => {
  //     getAllCard();

  //   }, [   ])

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
            {
              items.map((data)=>(
                <CatalogueCard {...data}/>
              ))
            }

        </main>
      </div>
    </div>
  );
};
export default Catalogue;
