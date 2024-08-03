export default function Product() {
  const price = 99;
  const imgUrl = "https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?dpr=2&h=480&w=640";
  const imgAlt = "Tacos With Lime";
  return (
    <div>
      <h2>Tacos</h2>
      <img src={imgUrl}
        alt={imgAlt}
        width="640" />
	    <p>Price: {price} credits</p>
    </div>
  );
}

