import * as React from "react";
import InfoWithLabel from "./InfoWithLabel";
import Revisions from "./Revisions";

export interface IHeadlineRevisionProps {
  title: string;
  author: string;
  published: string;
}

export interface IHeadlineRevisionState {}

export default class HeadlineRevision extends React.Component<
  IHeadlineRevisionProps,
  IHeadlineRevisionState
> {
  constructor(props: IHeadlineRevisionProps) {
    super(props);

    this.state = {};
  }
  render() {
    return (
      <div>
        <InfoWithLabel label="Title" value={this.props.title} />
        <InfoWithLabel label="Author" value={this.props.author} />
        <InfoWithLabel label="Published" value={this.props.published} />
        <Revisions />
      </div>
    );
  }
}
