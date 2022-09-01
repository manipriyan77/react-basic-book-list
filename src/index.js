import ReactDom from "react-dom";
import "./index.css";

function BookList() {
  const books = [
    {
      img: "https://images-eu.ssl-images-amazon.com/images/I/51MVWaLLR7L._AC_SX184_.jpg",
      author: "Sheela Tomy",
      title: "Valli A NovelValli ",
      id: 1,
    },

    {
      img: "https://images-na.ssl-images-amazon.com/images/I/41LD2VhDn8L._SX311_BO1,204,203,200_.jpg",
      author: "Singh Yadav",
      title: "When I Am With You",
      id: 2,
    },

    {
      img: "https://images-eu.ssl-images-amazon.com/images/I/51r3iTdrzGL._AC_SX184_.jpg",
      author: "Durjoy Datta",
      title: "When I Am With You ",
      id: 3,
    },

    {
      img: "https://images-eu.ssl-images-amazon.com/images/I/512mtXF0-YL._AC_SX184_.jpg",
      author: "Anand Neelkantan",
      title: "Asura: Tale of the Vanquished",
      id: 4,
    },
  ];
  return (
    <section className="booklist">
      {books.map((book) => {
        // const { img, title, author } = book;
        // return <Book key={book.id} book={book}></Book>;

        // console.log(...book);

        return <Book key={book.id} {...book}></Book>;
      })}
      {/* <Book img={books[0].img} title={books[0].title} author={books[0].author}>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, minima!</p>
      </Book>
      <Book img={books[1].img} title={books[1].title} author={books[1].author} />
      <Book img={books[2].img} title={books[2].title} author={books[2].author} />
      <Book img={books[3].img} title={books[3].title} author={books[3].author} /> */}
    </section>
  );
}

const Book = (props) => {
  console.log(props);

  const { img, author, title, children } = props;
  const clickHandler = () => {
    alert("Hello");
  };
  return (
    <article>
      <img src={img} alt="" width="250" />
      <h1>{title}</h1>
      <h3>{author}</h3>
      {/* {props.children} */}
      {children}
      <button type="button" onClick={clickHandler}>
        Hello
      </button>
    </article>
  );
};
ReactDom.render(<BookList />, document.getElementById("root"));
