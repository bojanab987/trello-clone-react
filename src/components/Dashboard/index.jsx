import DropArea from "../DropArea";
import List from "../List";
import { cards } from "../../data";
import Card from "../Card"

export default function Dashboard(card) {

    return(
        <div className="dashboard">
            <header>
                <h1 className="main-title">Trello</h1>
            </header>
            <DropArea>
                <List >
                {
                    cards.map(card => {
                       return( <Card 
                            key={card.id}
                            card={card}
                            status={card.status}
                        />)
                    })
                    
                }
                </List>
            </DropArea>
        </div>
    );
}