import image from "../assets/news1.jpg";
const NewsItem = ({ title, description, src, url }) => {
  return (
    <div
      className="card bg-dark text-light mb-3 d-inline-block my-3 mx-3"
      style={{ maxWidth: "345px" }}
    >
      <img
        src={src ? src : image}
        style={{ height: "200px", width: "343px" }}
        className="card-img-top"
        alt="..."
      />
      <div className="card-body">
        <h5 className="card-title">{title.slice(0, 50)}</h5>
        <p className="card-text">
          {description
            ? description.slice(0, 90)
            : "It is the latest news.for details information click at know more"}
        </p>
        <a href={url} className="btn btn-primary">
          Know More
        </a>
      </div>
    </div>
  );
};

export default NewsItem;
