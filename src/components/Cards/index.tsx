import "./styles.css";

interface Cards {
  image?: string;
  tools: string;
  NameProj: string;
  description: string;
}

export function Cards(props: {
  image: string;
  tools: string;
  nameProj: string;
  description: string;
}) {
  return (
    <div className="main-card">
      <div className="image-card">
        <img className="image" src={props.image} />
      </div>
      <div className="tools-card">
        <label>{props.tools}</label>
      </div>
      <div className="content-card">
        <h3>{props.nameProj}</h3>
        <label>{props.description}</label>
        <div className="button-card">
          <button>Live&lt;~&gt;</button>
        </div>
      </div>
    </div>
  );
}
