import { Monster } from "../../App";
import Card from "../card/card.component";
import "./card-list.styles.css";

import { FC } from "react";

type CardListProps = {
  monsters: Monster[];
};

const CardList: FC<CardListProps> = ({ monsters }) => (
  <div className="card-list">
    {monsters.map(monster => {
      return <Card key={monster.id} monster={monster} />;
    })}
  </div>
);

export default CardList;
