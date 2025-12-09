export function Cards({ name, age, work }) {
  return (
      <div className="card m-3" style={{ "width": "18rem" }}>
        <img src="https://media.istockphoto.com/id/136916670/es/foto/en-el-fuego.jpg?s=2048x2048&w=is&k=20&c=SAqVr51nKeZJd0sC7586-AfzhprDNV9yyGKDx89w0Vw=" className="card-img-top" alt="" />
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <p className="card-text">{age}</p>
          <p className="card-text">{work}</p>
          <a href="#" className="btn btn-primary">Go somewhere</a>
        </div>
      </div>
  )
};
