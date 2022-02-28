import "./App.css";

const bookData = [
  {
    id: 1,
    name: "How to Help Yourself With Self-Help",
    author: "Martin Meadows",
    price: "12.99",
    image: "https://m.media-amazon.com/images/I/51Yy8CC4FDL.jpg",
  },
  {
    id: 2,
    name: "How to be Fine",
    author: "Kristen meinzer",
    price: "9.99",
    image: "https://m.media-amazon.com/images/I/41hWU-zMglL.jpg",
  },
  {
    id: 3,
    name: "Happiness Project",
    author: "Gretchen Rubin",
    price: "7.99",
    image:
      "https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1548966068-self-help-books-for-women-the-happiness-project-1548966048.jpg?crop=1xw:0.99625xh;center,top&resize=480:*",
  },
  {
    id: 4,
    name: "The power of now",
    author: "Eckhart Tolle",
    price: "16.99",
    image:
      "https://prodimage.images-bn.com/pimages/9781577314806_p0_v5_s600x595.jpg",
  },
  {
    id: 5,
    name: "A New Truth",
    author: "Eckhart Tolle",
    price: "20.99",
    image:
      "https://www.verywellmind.com/thmb/y-Pe88fXMfUEBjrpHviKsd_Qqqc=/900x0/filters:no_upscale():max_bytes(150000):strip_icc()/ANewEarth-354d9a3016564f7296b01c0378d7d657.jpeg",
  },
  {
    id: 6,
    name: "Presence",
    author: "Amy Cuddy",
    price: "2.99",
    image:
      "https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1551464992-41EGJvQV09L.jpg",
  },
  {
    id: 7,
    name: "Tools of titans",
    author: "Tim Ferriss",
    price: "5.99",
    image:
      "https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1551463508-517pTQTkCrL.jpg?crop=0.850xw:1xh;center,top&resize=480:*",
  },
  {
    id: 8,
    name: "The Hope Circuit",
    author: "Martin E P Seligman",
    price: "22.99",
    image:
      "https://media-cldnry.s-nbcnews.com/image/upload/newscms/2020_13/1551637/screen_shot_2020-03-24_at_12-47-59_pm.png",
  },
  {
    id: 9,
    name: "The Healing Self",
    author: "Deepak Chopra",
    price: "5.99",
    image:
      "https://media-cldnry.s-nbcnews.com/image/upload/newscms/2020_13/1551630/screen_shot_2020-03-24_at_12-33-38_pm.png",
  },
  {
    id: 10,
    name: "Big Magic",
    author: "Elizabeth Gilbert",
    price: "11.99",
    image:
      "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/selfhelp3-1608801149.jpg",
  },
];

function App() {
  return (
    <div className='container'>
      <div className='book-container'>
        {bookData.map((book) => {
          return <Book key={book.id} {...book} />;
        })}
      </div>
    </div>
  );
}

const Book = ({ id, name, author, price, image }) => {
  return (
    <div className='book'>
      <img src={image} alt={name} />
      <h4>{name}</h4>
      <p>By: {author}</p>
      <div className='price-btn'>
        <strong>${price}</strong>
        <button>Add To Cart</button>
      </div>
    </div>
  );
};

export default App;
