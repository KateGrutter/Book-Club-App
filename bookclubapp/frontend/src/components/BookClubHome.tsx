import { CurrentBook } from "./CurrentBook";
import { DiscussionBoard } from "./DiscussionBoard/DiscussionBoard";

export function BookClubHome() {

    return(
        <div>
            <CurrentBook />
            <DiscussionBoard></DiscussionBoard>
        </div>
    )
}