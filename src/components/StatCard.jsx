import "./StatCard.css";

const StatCard = (props) => {
  return (
    <div className="StatCard">
      <p>{props.message}</p>
    </div>
  );
};

export default StatCard;
