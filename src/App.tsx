import { InteractiveRating } from "./components/InteractiveRating";
import { GlobalContentContainer, GlobalStyles } from "./styles/global";

export function App () {
  return (
    <>
      <GlobalContentContainer>
        <InteractiveRating />
      </GlobalContentContainer>
      <GlobalStyles />
    </>
  )
}
