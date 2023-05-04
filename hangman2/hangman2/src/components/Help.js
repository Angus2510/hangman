import ButtonGroup from "react-bootstrap/ButtonGroup";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";

function VariantsExample() {
  return (
    <>
      {["Danger"].map(
        (
          variant // this dropdown button explains the rules of hangman
        ) => (
          <DropdownButton
            as={ButtonGroup}
            key={variant}
            id={`dropdown-variants-${variant}`}
            variant={variant.toLowerCase()}
            title={"Help"}
          >
            <Dropdown.Item eventKey="1">
              1) in this game you are meant to guess the word that is provided.
            </Dropdown.Item>
            <Dropdown.Item eventKey="2">
              {" "}
              2) The user must click on the alphabet buttons, if the letter is
              in the word then it will be placed in the spot where the letter is
              in the word
            </Dropdown.Item>
            <Dropdown.Item eventKey="2">
              {" "}
              3) every letter that you get wrong, the image will go closer to
              the end of the game and you have one less chance to get to guessed
              word
            </Dropdown.Item>
            <Dropdown.Item eventKey="2">
              4) if all the turns have gone and you havn't guessed the word then
              you will lose the gameOver
            </Dropdown.Item>
            <Dropdown.Item eventKey="2">
              {" "}
              5) if you have guessed the word before all your lives are done
              that means you have won the game.
            </Dropdown.Item>
          </DropdownButton>
        )
      )}
    </>
  );
}

export default VariantsExample;
