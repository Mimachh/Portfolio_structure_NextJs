import Head from "./Head";
import EnDescription from "./locales/en/description.json";
import FrDescription from "./locales/fr/description.json";

const Home = (props: any) => {

    const locale = props.lng;
  
    let description = '';
    if(locale === 'fr') {
      description = FrDescription.Description;
    } else {
       description = EnDescription.Description;
    }


  return (
    <>
      <Head title="Accueil"/> 
      <main className="container">
          <div className="description_grid">
            <div>
            <h1>  NOM PRENOM
              <br /><br />
              </h1>
            <p className="description">
              {/* {description} */}
            
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque et est quas nesciunt nulla deleniti corrupti nostrum natus! Ad voluptatum repellat maxime! Vel ipsum asperiores, nulla debitis vero ea voluptate?
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto excepturi sapiente quam aperiam praesentium maxime deleniti ullam officia. Illum laboriosam, ipsum repellat et dignissimos minima aspernatur asperiores quisquam magnam amet?
              <br /><br />
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint commodi deleniti perferendis suscipit. Eum corrupti debitis id harum, impedit praesentium reprehenderit fuga consectetur porro iste molestiae asperiores eos nisi eligendi?
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias, asperiores excepturi debitis rerum voluptatem ex nesciunt, corporis maxime perferendis assumenda quod perspiciatis? Debitis unde modi amet excepturi a cumque minima.
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi cumque deleniti aperiam corrupti. Quis numquam architecto iure mollitia molestiae deserunt quibusdam porro. Quasi quae facere ratione asperiores ducimus nisi officiis.
              <br /><br />
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur illum magnam sunt laborum necessitatibus temporibus vel eos id provident ratione soluta tempora ullam, est numquam qui explicabo illo fugiat voluptates?
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi ut, voluptatem possimus odio culpa saepe enim accusantium, omnis neque, voluptatibus velit placeat cum suscipit porro illo eveniet quidem? At, sequi?
            </p>
            </div>

            <p>photo</p>
          </div>
      </main>
    </>
  )
}

export default Home;
