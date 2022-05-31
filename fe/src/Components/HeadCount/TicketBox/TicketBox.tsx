import {
  Button,
  ContentArea,
  ContentDescription,
  ContentTitle,
  Count,
  CountArea,
  TicketContainer,
} from "./TicketBox.styled";

interface ClickEventType {
  type: string | undefined;
  target: string | undefined;
}

interface ContentType {
  title: string;
  description: string;
  classification: "adult" | "child" | "baby";
}

interface StateType {
  isHeadCountOpen: boolean;
  adult: number;
  child: number;
  baby: number;
}

interface TicketBoxType {
  contents: ContentType;
  headCountState?: StateType;
  handleClick?: (T: ClickEventType) => void;
}

export default function TicketBox({ contents, handleClick, headCountState }: TicketBoxType) {
  const { title, description, classification } = contents;
  const currentState = headCountState && headCountState[classification];

  return (
    <TicketContainer className="test" flex={true} justify="space-between">
      <ContentArea flex={true} direction="column">
        <ContentTitle>{title}</ContentTitle>
        <ContentDescription>{description}</ContentDescription>
      </ContentArea>
      <CountArea flex={true} align="center">
        <Button
          data-buttontarget={classification}
          data-buttontype="MINUS"
          flex={true}
          justify="center"
          align="center"
          onClick={({ currentTarget }: React.SyntheticEvent<HTMLButtonElement>) => {
            const { buttontype: type, buttontarget: target } = currentTarget.dataset;
            handleClick && handleClick({ type, target });
          }}
        >
          -
        </Button>
        <Count>{currentState}</Count>
        <Button
          data-buttontarget={classification}
          data-buttontype="PLUS"
          flex={true}
          justify="center"
          align="center"
          onClick={({ currentTarget }: React.SyntheticEvent<HTMLButtonElement>) => {
            const { buttontype: type, buttontarget: target } = currentTarget.dataset;
            handleClick && handleClick({ type, target });
          }}
        >
          +
        </Button>
      </CountArea>
    </TicketContainer>
  );
}
