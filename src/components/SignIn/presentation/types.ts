import { type ISetStateProps } from "../container/types";

export interface SignInPresentationProps {
  errorMessage: string;
  handleSignIn: () => void;
  handleSetStateInput: (props: ISetStateProps) => void;
  isVisiblepassword: boolean;
  replaceVisibleInput: () => void;
}
