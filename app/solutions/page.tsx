import SolutionsNav from "./SolutionsNav";
import Whatittakes from "../components/Whatittakes";
import styles from "./page.module.css";

const clients = [
  {
    id: "1",
    title:
      "In just three months of collaboration, we successfully boosted HMV Homes sales from 20% to 50%. Additionally, our digital marketing efforts led to a remarkable 30% increase in the number of clients they attract.",
    image:
      "https://media.istockphoto.com/id/1314814500/photo/houses-in-england-with-typical-red-bricks-at-sunset-main-street-in-a-new-estate-with-typical.jpg?s=1024x1024&w=is&k=20&c=5TbNmyQNNQHM_va0zt_yXIfrQLoM2EjZ01R1cL9ZtwU=",
  },
  {
    id: "2",
    title:
      "In just three months of collaboration, we successfully boosted HMV Homes sales from 20% to 50%. Additionally, our digital marketing efforts led to a remarkable 30% increase in the number of clients they attract.",
    image:
      "https://media.istockphoto.com/id/539949638/photo/friends-outside-greenhouse-having-coffee-break.jpg?s=2048x2048&w=is&k=20&c=9WvpUTW2Mz0v18_at15gvO9OgZ705UKUU-BKxMganHI=",
  },
  {
    id: "3",
    title:
      "In just three months of collaboration, we successfully boosted HMV Homes sales from 20% to 50%. Additionally, our digital marketing efforts led to a remarkable 30% increase in the number of clients they attract.",
    image:
      "https://media.istockphoto.com/id/1054657186/photo/retro-old-microphones-for-press-conference-or-interview-on-table-front-gradient-aquamarine.jpg?s=1024x1024&w=is&k=20&c=1CD79Wg8Q5KZ-UYNey19e5aO8mXBNJfNrzgcDHA5Xis=",
  },
  {
    id: "4",
    title:
      "In just three months of collaboration, we successfully boosted HMV Homes sales from 20% to 50%. Additionally, our digital marketing efforts led to a remarkable 30% increase in the number of clients they attract.",
    image:
      "https://media.istockphoto.com/id/1373088736/photo/designer-sketching-drawing-design-development-product-plan-draft-chair-armchair-wingback.jpg?s=2048x2048&w=is&k=20&c=V1ZQart2udTReUhuP_MQXu8BZchUEyzRAUQPL7jW0xw=",
  },
];
const Solutions = () => {
  return (
    <section className={styles.solutions}>
      <SolutionsNav />
      <div className={styles.customers}>
        <ul className={styles.solution}>
          {clients.map((client) => {
            return (
              <li key={client.id} className={styles.clients}>
                <img src={client.image} />
                <p>{client.title}</p>
              </li>
            );
          })}
        </ul>
        <Whatittakes />
      </div>
    </section>
  );
};

export default Solutions;
