import * as React from "react";

export interface IRevisionsProps {}

export interface IRevisionsState {}

export default class Revisions extends React.Component<
  IRevisionsProps,
  IRevisionsState
> {
  constructor(props: IRevisionsProps) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div>
        <strong> Title </strong>
        text{" "}
      </div>
    );
  }
}
